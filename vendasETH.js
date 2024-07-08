// src/vendasETH.js
import Web3 from 'web3';
const web3 = new Web3('http://localhost:8545'); // ou o endereço do seu provedor

const address = '0xd9145CCE52D386f254917e481eB44e9943F39138';
const abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "idProduto",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "quantidade",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "preco",
                type: "uint256"
            }
        ],
        name: "armazenaVenda",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "autorizados",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "conta",
                type: "address"
            }
        ],
        name: "autorizarConta",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "conta",
                type: "address"
            }
        ],
        name: "desautorizarConta",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getProdutos",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256"
                    },
                    {
                        internalType: "string",
                        name: "nome",
                        type: "string"
                    },
                    {
                        internalType: "uint256",
                        name: "preco",
                        type: "uint256"
                    }
                ],
                internalType: "struct VendasETH.Produto[]",
                name: "",
                type: "tuple[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "recuperaTotalVendas",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "idProduto",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "quantidade",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "preco",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "comprador",
                        type: "address"
                    }
                ],
                internalType: "struct VendasETH.Venda[]",
                name: "",
                type: "tuple[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];


const contract = new web3.eth.Contract(abi, address);

export default contract;
