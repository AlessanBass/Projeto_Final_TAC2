// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VendasETH {
    struct Venda {
        uint idProduto;
        uint quantidade;
        uint preco;
        address comprador;
    }

    struct Produto {
        uint id;
        string nome;
        uint preco;
    }

    Produto[] private produtos;
    Venda[] private vendas;
    address public owner;
    mapping(address => bool) public autorizados;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only the owner can execute this function"
        );
        _;
    }

    modifier onlyAuthorized() {
        require(
            autorizados[msg.sender],
            "Only authorized accounts can execute this function"
        );
        _;
    }

    function autorizarConta(address conta) public onlyOwner {
        autorizados[conta] = true;
    }

    function desautorizarConta(address conta) public onlyOwner {
        autorizados[conta] = false;
    }

    function armazenaVenda(
        uint idProduto,
        uint quantidade,
        uint preco
    ) public onlyAuthorized {
        vendas.push(Venda(idProduto, quantidade, preco, msg.sender));
    }

    function recuperaTotalVendas() public view returns (Venda[] memory) {
        return vendas;
    }

    function getProdutos() public view returns (Produto[] memory) {
        return produtos;
    }
}
