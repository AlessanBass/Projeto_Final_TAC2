// src/vendasETH.js
import web3 from './web3';
const address = '0x3643b7a9F6338115159a4D3a2cc678C99aD657aa';
const abi =
    [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "idProduto",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "quantidade",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "preco",
                    "type": "uint256"
                }
            ],
            "name": "armazenaVenda",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "conta",
                    "type": "address"
                }
            ],
            "name": "autorizarConta",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "conta",
                    "type": "address"
                }
            ],
            "name": "desautorizarConta",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "autorizados",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "recuperaTotalVendas",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "idProduto",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "quantidade",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "preco",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "comprador",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct Vendas.Venda[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

const contract = new web3.eth.Contract(abi, address);

export default contract;
