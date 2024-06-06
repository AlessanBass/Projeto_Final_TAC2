// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VendasETH {
    struct Venda {
        uint idProduto;
        uint quantidade;
        uint preco;
        address comprador;
    }

    Venda[] private vendas;
    address public owner;
    mapping(address => bool) public autorizados;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Apenas o owner pode executar essa função");
        _;
    }

    modifier onlyAuthorized() {
        require(autorizados[msg.sender], "Apenas contas autorizadas podem executar essa função");
        _;
    }

    function autorizarConta(address conta) public onlyOwner {
        autorizados[conta] = true;
    }

    function desautorizarConta(address conta) public onlyOwner {
        autorizados[conta] = false;
    }

    function armazenaVenda(uint idProduto, uint quantidade, uint preco) public onlyAuthorized {
        vendas.push(Venda(idProduto, quantidade, preco, msg.sender));
    }

    function recuperaTotalVendas() public view returns (Venda[] memory) {
        return vendas;
    }
}
