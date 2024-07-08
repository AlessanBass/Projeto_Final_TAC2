import React, { useEffect, useState } from 'react';
import contract from '../../vendasETH';

interface Produto {
    id: string;
    nome: string;
    preco: string;
}

export default function ProdutoList() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const produtosData = await contract.methods.getProdutos().call();
                // Supondo que produtosData já está no formato correto ou precisa ser mapeado
                const produtos: Produto[] = produtosData.map((produto: any) => ({
                    id: produto.id,
                    nome: produto.nome,
                    preco: produto.preco
                }));
                setProdutos(produtos);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div>
            <h2>Lista de Produtos</h2>
            <ul>
                {produtos.map((produto) => (
                    <li key={produto.id}>{produto.nome} - {produto.preco} ETH</li>
                ))}
            </ul>
        </div>
    );
}
