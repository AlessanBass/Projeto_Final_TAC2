import React, { useState, useEffect } from 'react';
import contract from '../../vendasETH';

type Produto = { id: string; nome: string; preco: string; };

export default function CadastroProduto() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [novoProduto, setNovoProduto] = useState({ id: '', nome: '', preco: '' });

    useEffect(() => {
        const fetchProdutos = async () => {
            const produtos = await contract.methods.getProdutos().call();
            setProdutos(produtos);
        };
        fetchProdutos();
    }, [contract]);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setNovoProduto({ ...novoProduto, [name]: value });
    };

    const adicionarProduto = async () => {
        await contract.methods.adicionarProduto(novoProduto.id, novoProduto.nome, novoProduto.preco).send({ from: 'YOUR_ACCOUNT_ADDRESS' });
        setProdutos([...produtos, novoProduto]);
        setNovoProduto({ id: '', nome: '', preco: '' });
    };

    const excluirProduto = async (id: string) => {
        await contract.methods.excluirProduto(id).send({ from: 'YOUR_ACCOUNT_ADDRESS' });
        setProdutos(produtos.filter((produto) => produto.id !== id));
    };

    return(
        <div>
            <h2>Cadastro de Produtos</h2>
            <div>
                <input
                    type="text"
                    name="id"
                    value={novoProduto.id}
                    onChange={handleInputChange}
                    placeholder="ID"
                />
                <input
                    type="text"
                    name="nome"
                    value={novoProduto.nome}
                    onChange={handleInputChange}
                    placeholder="Nome"
                />
                <input
                    type="text"
                    name="preco"
                    value={novoProduto.preco}
                    onChange={handleInputChange}
                    placeholder="Preço"
                />
                <button onClick={adicionarProduto}>Adicionar Produto</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto, index) => (
                        <tr key={index}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>
                                <button onClick={() => excluirProduto(produto.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}