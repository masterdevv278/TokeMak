/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SnapshotToke, SnapshotTokeInterface } from "../SnapshotToke";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_sushiLPPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_delegation",
        type: "address",
      },
      {
        internalType: "address",
        name: "_toke",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "DelegationRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "DelegationSetup",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "addDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "from",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
    ],
    name: "addDelegations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "bal",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "removeDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "from",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
    ],
    name: "removeDelegations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162001d4538038062001d45833981016040819052620000359162000207565b60006200004a6001600160e01b036200020316565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160a01b038416620000c65760405162461bcd60e51b8152600401620000bd9062000294565b60405180910390fd5b6001600160a01b038316620000ef5760405162461bcd60e51b8152600401620000bd906200032d565b6001600160a01b038216620001185760405162461bcd60e51b8152600401620000bd90620002cb565b6001600160a01b038116620001415760405162461bcd60e51b8152600401620000bd9062000302565b6001600160601b0319606085811b821660805284811b821660a05283811b821660c05282901b1660e05260408051633bac79fd60e11b815290516001600160a01b03861691637758f3fa916004808301926020929190829003018186803b158015620001ac57600080fd5b505afa158015620001c1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001e791906200026e565b60601b6001600160601b03191661010052506200037d92505050565b3390565b600080600080608085870312156200021d578384fd5b84516200022a8162000364565b60208601519094506200023d8162000364565b6040860151909350620002508162000364565b6060860151909250620002638162000364565b939692955090935050565b60006020828403121562000280578081fd5b81516200028d8162000364565b9392505050565b60208082526014908201527f5a45524f5f414444524553535f53555348494c50000000000000000000000000604082015260600190565b60208082526017908201527f5a45524f5f414444524553535f44454c45474154494f4e000000000000000000604082015260600190565b6020808252601190820152705a45524f5f414444524553535f544f4b4560781b604082015260600190565b60208082526014908201527f5a45524f5f414444524553535f5354414b494e47000000000000000000000000604082015260600190565b6001600160a01b03811681146200037a57600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c611965620003e060003980610be95280610cad525080610a0a5280610c7e525080610323528061044a5280610dd5525080610a96525080610b4352506119656000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638da5cb5b11610097578063dd62ed3e11610066578063dd62ed3e146101db578063e2601cb7146101ee578063ef8b1d3714610201578063f2fde38b1461021457610100565b80638da5cb5b146101ab57806395d89b41146101c0578063a9059cbb14610123578063bacce3ab146101c857610100565b8063313ce567116100d3578063313ce567146101665780633dff07d21461017b57806370a0823114610190578063715018a6146101a357610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014357806323b872dd14610158575b600080fd5b61010d610227565b60405161011a919061146f565b60405180910390f35b610136610131366004611336565b61025e565b60405161011a9190611464565b61014b610281565b60405161011a91906118d9565b6101366101313660046112f6565b61016e610290565b60405161011a91906118e2565b61018e6101893660046112be565b610295565b005b61014b61019e3660046112a2565b6102e2565b61018e610538565b6101b36105ce565b60405161011a9190611437565b61010d6105dd565b61018e6101d6366004611361565b610614565b61014b6101e93660046112be565b6106db565b61018e6101fc3660046112be565b6106e4565b61018e61020f366004611361565b61072d565b61018e6102223660046112a2565b6107ee565b60408051808201909152601581527f546f6b656d616b20536e617073686f7420566f74650000000000000000000000602082015290565b600060405162461bcd60e51b81526004016102789061158d565b60405180910390fd5b6a52b7d2dcc80cd2e400000090565b601290565b61029d6108bb565b6001600160a01b03166102ae6105ce565b6001600160a01b0316146102d45760405162461bcd60e51b8152600401610278906117c8565b6102de82826108bf565b5050565b6001600160a01b03811660009081526002602052604081205460ff1680156103d85761030c6111e2565b6040516324619f7960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906324619f799061036390879065766f74696e6760d01b9060040161144b565b60806040518083038186803b15801561037b57600080fd5b505afa15801561038f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b391906113c2565b60208101519091506001600160a01b0316158015906103d457508060600151155b9150505b80610532576103e6836109d7565b6001600160a01b038416600090815260016020526040812091935061040a82610d73565b905060005b8181101561052e576000610429848363ffffffff610d7e16565b90506104336111e2565b6040516324619f7960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906324619f799061048a90859065766f74696e6760d01b9060040161144b565b60806040518083038186803b1580156104a257600080fd5b505afa1580156104b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104da91906113c2565b9050876001600160a01b031681602001516001600160a01b031614801561050357508060600151155b1561052457610521610514836109d7565b889063ffffffff610d9116565b96505b505060010161040f565b5050505b50919050565b6105406108bb565b6001600160a01b03166105516105ce565b6001600160a01b0316146105775760405162461bcd60e51b8152600401610278906117c8565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031690565b60408051808201909152600581527f76544f4b45000000000000000000000000000000000000000000000000000000602082015290565b61061c6108bb565b6001600160a01b031661062d6105ce565b6001600160a01b0316146106535760405162461bcd60e51b8152600401610278906117c8565b8151806106725760405162461bcd60e51b815260040161027890611621565b815181146106925760405162461bcd60e51b815260040161027890611556565b60005b818110156106d5576106cd8482815181106106ac57fe5b60200260200101518483815181106106c057fe5b6020026020010151610db6565b600101610695565b50505050565b60005b92915050565b6106ec6108bb565b6001600160a01b03166106fd6105ce565b6001600160a01b0316146107235760405162461bcd60e51b8152600401610278906117c8565b6102de8282610db6565b6107356108bb565b6001600160a01b03166107466105ce565b6001600160a01b03161461076c5760405162461bcd60e51b8152600401610278906117c8565b81518061078b5760405162461bcd60e51b815260040161027890611621565b815181146107ab5760405162461bcd60e51b815260040161027890611556565b60005b818110156106d5576107e68482815181106107c557fe5b60200260200101518483815181106107d957fe5b60200260200101516108bf565b6001016107ae565b6107f66108bb565b6001600160a01b03166108076105ce565b6001600160a01b03161461082d5760405162461bcd60e51b8152600401610278906117c8565b6001600160a01b0381166108535760405162461bcd60e51b8152600401610278906115c4565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b3390565b6001600160a01b0382166108e55760405162461bcd60e51b81526004016102789061151f565b6001600160a01b03811661090b5760405162461bcd60e51b8152600401610278906116c6565b6001600160a01b0381166000908152600160205260409020610933908363ffffffff610fdb16565b61094f5760405162461bcd60e51b8152600401610278906117fd565b6001600160a01b03821660009081526002602052604090205460ff166109875760405162461bcd60e51b8152600401610278906118a2565b6001600160a01b03808316600081815260026020526040808220805460ff19169055513393851692917f01b48b280baaec91913d8049356043ba2bef28911cfbc9e07a5c7717d898329591a45050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610a3f908590600401611437565b60206040518083038186803b158015610a5757600080fd5b505afa158015610a6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8f919061141f565b9050610b3d7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231846040518263ffffffff1660e01b8152600401610ae09190611437565b60206040518083038186803b158015610af857600080fd5b505afa158015610b0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b30919061141f565b829063ffffffff610d9116565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231846040518263ffffffff1660e01b8152600401610b8d9190611437565b60206040518083038186803b158015610ba557600080fd5b505afa158015610bb9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bdd919061141f565b905080156105325760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c4057600080fd5b505afa158015610c54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c78919061141f565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a082317f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b8152600401610ce89190611437565b60206040518083038186803b158015610d0057600080fd5b505afa158015610d14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d38919061141f565b9050610d6a610d5d83610d51868563ffffffff610ff016565b9063ffffffff61102a16565b859063ffffffff610d9116565b95945050505050565b60006106de8261105c565b6000610d8a8383611060565b9392505050565b600082820183811015610d8a5760405162461bcd60e51b815260040161027890611658565b610dbe6111e2565b6040516324619f7960e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906324619f7990610e1590869065766f74696e6760d01b9060040161144b565b60806040518083038186803b158015610e2d57600080fd5b505afa158015610e41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6591906113c2565b90506001600160a01b038316610e8d5760405162461bcd60e51b81526004016102789061151f565b6001600160a01b038216610eb35760405162461bcd60e51b8152600401610278906116c6565b816001600160a01b031681602001516001600160a01b031614610ee85760405162461bcd60e51b8152600401610278906116fd565b606081015115610f0a5760405162461bcd60e51b81526004016102789061186b565b6001600160a01b0382166000908152600160205260409020610f32908463ffffffff6110a516565b610f4e5760405162461bcd60e51b815260040161027890611834565b6001600160a01b03831660009081526002602052604090205460ff1615610f875760405162461bcd60e51b815260040161027890611734565b6001600160a01b03808416600081815260026020526040808220805460ff19166001179055513393861692917fb05724ddab383cb1ef886116c2a7d14013405f0db0a35128a990ddd421dff80291a4505050565b6000610d8a836001600160a01b0384166110ba565b600082610fff575060006106de565b8282028284828161100c57fe5b0414610d8a5760405162461bcd60e51b81526004016102789061176b565b600080821161104b5760405162461bcd60e51b81526004016102789061168f565b81838161105457fe5b049392505050565b5490565b815460009082106110835760405162461bcd60e51b8152600401610278906114c2565b82600001828154811061109257fe5b9060005260206000200154905092915050565b6000610d8a836001600160a01b038416611180565b6000818152600183016020526040812054801561117657835460001980830191908101906000908790839081106110ed57fe5b906000526020600020015490508087600001848154811061110a57fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061113a57fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506106de565b60009150506106de565b600061118c83836111ca565b6111c2575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556106de565b5060006106de565b60009081526001919091016020526040902054151590565b60408051608081018252600080825260208201819052918101829052606081019190915290565b600082601f830112611219578081fd5b813567ffffffffffffffff81111561122f578182fd5b602080820261123f8282016118f0565b8381529350818401858301828701840188101561125b57600080fd5b600092505b8483101561128757803561127381611917565b825260019290920191908301908301611260565b505050505092915050565b805180151581146106de57600080fd5b6000602082840312156112b3578081fd5b8135610d8a81611917565b600080604083850312156112d0578081fd5b82356112db81611917565b915060208301356112eb81611917565b809150509250929050565b60008060006060848603121561130a578081fd5b833561131581611917565b9250602084013561132581611917565b929592945050506040919091013590565b60008060408385031215611348578182fd5b823561135381611917565b946020939093013593505050565b60008060408385031215611373578182fd5b823567ffffffffffffffff8082111561138a578384fd5b61139686838701611209565b935060208501359150808211156113ab578283fd5b506113b885828601611209565b9150509250929050565b6000608082840312156113d3578081fd5b6113dd60806118f0565b8251815260208301516113ef81611917565b60208201526114018460408501611292565b60408201526114138460608501611292565b60608201529392505050565b600060208284031215611430578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6000602080835283518082850152825b8181101561149b5785810183015185820160400152820161147f565b818111156114ac5783604083870101525b50601f01601f1916929092016040019392505050565b60208082526022908201527f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e60408201527f6473000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252600c908201527f494e56414c49445f46524f4d0000000000000000000000000000000000000000604082015260600190565b6020808252600f908201527f4d49534d415443485f4c454e4754480000000000000000000000000000000000604082015260600190565b60208082526014908201527f4e4f5f5452414e53464552535f414c4c4f574544000000000000000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252600b908201527f5a45524f5f4c454e475448000000000000000000000000000000000000000000604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252601a908201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604082015260600190565b6020808252600a908201527f494e56414c49445f544f00000000000000000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f44454c45474154494f4e0000000000000000000000000000604082015260600190565b60208082526011908201527f414c52454144595f44454c454741544544000000000000000000000000000000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60408201527f7700000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252600e908201527f444f45535f4e4f545f4558495354000000000000000000000000000000000000604082015260600190565b6020808252600d908201527f414c52454144595f414444454400000000000000000000000000000000000000604082015260600190565b60208082526012908201527f44454c45474154494f4e5f50454e44494e470000000000000000000000000000604082015260600190565b60208082526012908201527f4e4f545f44454c4547415445445f46524f4d0000000000000000000000000000604082015260600190565b90815260200190565b60ff91909116815260200190565b60405181810167ffffffffffffffff8111828210171561190f57600080fd5b604052919050565b6001600160a01b038116811461192c57600080fd5b5056fea2646970667358221220fa884728115a8da8004e0fd18d375ea5fdbd6224676c8ce4a7448a1a3742fe3a64736f6c634300060b0033";

export class SnapshotToke__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _sushiLPPool: string,
    _staking: string,
    _delegation: string,
    _toke: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SnapshotToke> {
    return super.deploy(
      _sushiLPPool,
      _staking,
      _delegation,
      _toke,
      overrides || {}
    ) as Promise<SnapshotToke>;
  }
  getDeployTransaction(
    _sushiLPPool: string,
    _staking: string,
    _delegation: string,
    _toke: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _sushiLPPool,
      _staking,
      _delegation,
      _toke,
      overrides || {}
    );
  }
  attach(address: string): SnapshotToke {
    return super.attach(address) as SnapshotToke;
  }
  connect(signer: Signer): SnapshotToke__factory {
    return super.connect(signer) as SnapshotToke__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SnapshotTokeInterface {
    return new utils.Interface(_abi) as SnapshotTokeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SnapshotToke {
    return new Contract(address, _abi, signerOrProvider) as SnapshotToke;
  }
}
