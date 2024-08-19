// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT_ON_LISK is ERC721 {
    uint public currentTokenId;

    constructor() ERC721("NFT_ON_LISK", "NFT") {}

    function mint(address receipient) public returns (uint) {
        uint newItemId = ++currentTokenId;
        _safeMint(receipient, newItemId);
        return newItemId;
    }
}
