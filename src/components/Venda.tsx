declare global {
    interface Window {
        ethereum: any;
    }
}

import React, { useState } from 'react';
import contract from '../../vendasETH';
import Web3 from 'web3';

// Cria uma instância do Web3
const web3 = new Web3(window.ethereum);

export default function Venda() {
    const [idProduto, setIdProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [preco, setPreco] = useState('');

    const handleVenda = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        await contract.methods.armazenaVenda(idProduto, quantidade, preco).send({ from: '0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2'});
    };

    return(
        <form onSubmit={handleVenda}>
            <input type="text" value={idProduto} onChange={(e) => setIdProduto(e.target.value)} placeholder="ID do Produto" />
            <input type="text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} placeholder="Quantidade" />
            <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} placeholder="Preço" />
            <button type="submit">Vender</button>
        </form>
    );  
}