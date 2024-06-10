import React, { useState, useEffect } from 'react';
import contract from '../../vendasETH';

type Usuario = { nome: string; endereco: string; };

export default function CadastroUsuario() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [novoUsuario, setNovoUsuario] = useState({ nome: '', endereco: '' });

    useEffect(() => {
        const fetchUsuarios = async () => {
            const usuarios = await contract.methods.getUsuarios().call();
            setUsuarios(usuarios);
        };
        fetchUsuarios();
    }, [contract]);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setNovoUsuario({ ...novoUsuario, [name]: value });
    };

    const adicionarUsuario = async () => {
        await contract.methods.adicionarUsuario(novoUsuario.nome, novoUsuario.endereco).send({ from: 'YOUR_ACCOUNT_ADDRESS' });
        setUsuarios([...usuarios, novoUsuario]);
        setNovoUsuario({ nome: '', endereco: '' });
    };

    const excluirUsuario = async (endereco: string) => {
        await contract.methods.excluirUsuario(endereco).send({ from: 'YOUR_ACCOUNT_ADDRESS' });
        setUsuarios(usuarios.filter((usuario) => usuario.endereco !== endereco));
    };

    return(
        <div>
            <h2>Cadastro de Usuários</h2>
            <div>
                <input
                    type="text"
                    name="nome"
                    value={novoUsuario.nome}
                    onChange={handleInputChange}
                    placeholder="Nome"
                />
                <input
                    type="text"
                    name="endereco"
                    value={novoUsuario.endereco}
                    onChange={handleInputChange}
                    placeholder="Endereço"
                />
                <button onClick={adicionarUsuario}>Adicionar Usuário</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, index) => (
                        <tr key={index}>
                            <td>{usuario.nome}</td>
                            <td>{usuario.endereco}</td>
                            <td>
                                <button onClick={() => excluirUsuario(usuario.endereco)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}