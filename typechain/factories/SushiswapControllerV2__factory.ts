/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SushiswapControllerV2,
  SushiswapControllerV2Interface,
} from "../SushiswapControllerV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "router",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Factory",
        name: "factory",
        type: "address",
      },
      {
        internalType: "contract IMasterChefV2",
        name: "masterchef",
        type: "address",
      },
      {
        internalType: "address",
        name: "manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "accessControl",
        type: "address",
      },
      {
        internalType: "address",
        name: "addressRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasury",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ADD_LIQUIDITY_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MASTERCHEF",
    outputs: [
      {
        internalType: "contract IMasterChefV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MISC_OPERATION_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "REMOVE_LIQUIDITY_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SUSHISWAP_FACTORY",
    outputs: [
      {
        internalType: "contract IUniswapV2Factory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SUSHISWAP_ROUTER",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TREASURY",
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
    inputs: [],
    name: "accessControl",
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
    inputs: [],
    name: "addressRegistry",
    outputs: [
      {
        internalType: "contract IAddressRegistry",
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
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
    ],
    name: "claimSushi",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountADesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "toDeposit",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "toDepositAll",
        type: "bool",
      },
    ],
    name: "deploy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
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
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountBMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "toWithdraw",
        type: "bool",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101c06040527fad02fbc13153ebd0c0ef004ff61ba31d9ce93d7998e6fc3a4a4a667ac0ae2a1660e0527f99a732c1592dacad61c17aa1d8c4a304ed8aa6966133090e2df7f7c3ec3c66f7610100527fb31eaee23a579dabb2a4effb45a79031addeff3990e6fc9284cc2ad257c588a1610120523480156200008057600080fd5b506040516200335b3803806200335b833981016040819052620000a39162000227565b8383836001600160a01b038316620000d85760405162461bcd60e51b8152600401620000cf90620002d1565b60405180910390fd5b6001600160a01b038216620001015760405162461bcd60e51b8152600401620000cf90620002d1565b6001600160a01b0381166200012a5760405162461bcd60e51b8152600401620000cf90620002d1565b6001600160601b0319606093841b811660805291831b821660a05290911b1660c0526001600160a01b038716620001755760405162461bcd60e51b8152600401620000cf9062000379565b6001600160a01b0386166200019e5760405162461bcd60e51b8152600401620000cf9062000326565b6001600160a01b038516620001c75760405162461bcd60e51b8152600401620000cf90620002fa565b6001600160a01b038116620001f05760405162461bcd60e51b8152600401620000cf906200034f565b6001600160601b0319606097881b81166101405295871b86166101605293861b85166101805250505090911b166101a052620003ba565b600080600080600080600060e0888a03121562000242578283fd5b87516200024f81620003a1565b60208901519097506200026281620003a1565b60408901519096506200027581620003a1565b60608901519095506200028881620003a1565b60808901519094506200029b81620003a1565b60a0890151909350620002ae81620003a1565b60c0890151909250620002c181620003a1565b8091505092959891949750929550565b6020808252600f908201526e494e56414c49445f4144445245535360881b604082015260600190565b60208082526012908201527124a72b20a624a22fa6a0a9aa22a921a422a360711b604082015260600190565b6020808252600f908201526e494e56414c49445f464143544f525960881b604082015260600190565b60208082526010908201526f494e56414c49445f545245415355525960801b604082015260600190565b6020808252600e908201526d24a72b20a624a22fa927aaaa22a960911b604082015260600190565b6001600160a01b0381168114620003b757600080fd5b50565b60805160601c60a05160601c60c05160601c60e05161010051610120516101405160601c6101605160601c6101805160601c6101a05160601c612e7f620004dc6000398061020052806118fb5280611d8052508061155f52806117be52806118cc528061196652806119b35280611bd35280611cd55280611f165250806106735280610cdb52806111975250806101dc52806108eb5280610a475280611106528061113152806113185250806115af52806116ce52508061030452806115d35250806101945280610dd652508061047652806105715280610f485280611043528061198a5250806101b852806102d75280610da952806116a152508061023a52806103b65280610cb75280610d155280610e88528061160d5250612e7f6000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063495c0f9b1161008c5780637e841d54116100665780637e841d541461016757806389bed0691461016f578063e3692c3614610182578063f3ad65f41461018a576100df565b8063495c0f9b14610144578063575d7e2b1461014c57806361bea27f1461015f576100df565b80632d2c5565116100bd5780632d2c55651461011f5780633be7ccf214610127578063481c6a751461013c576100df565b80630f967dd6146100e457806313007d5514610102578063277754ed14610117575b600080fd5b6100ec610192565b6040516100f991906128e8565b60405180910390f35b61010a6101b6565b6040516100f991906127d7565b61010a6101da565b61010a6101fe565b61013a610135366004612521565b610222565b005b61010a610cb5565b61010a610cd9565b61013a61015a3660046125af565b610cfd565b6100ec6115ad565b6100ec6115d1565b61013a61017d36600461273b565b6115f5565b61010a611964565b61010a611988565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b3073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461029a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612b44565b60405180910390fd5b6040517f91d1485400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906391d148549061032e907f00000000000000000000000000000000000000000000000000000000000000009033906004016128f1565b60206040518083038186803b15801561034657600080fd5b505afa15801561035a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037e919061271f565b6103b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612b0d565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614610439576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612ad6565b6040517feb6b264000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063eb6b2640906104ae908c906000906004016128c2565b60206040518083038186803b1580156104c657600080fd5b505afa1580156104da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fe919061271f565b610534576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610291906129d4565b6040517feb6b264000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063eb6b2640906105a9908b906000906004016128c2565b60206040518083038186803b1580156105c157600080fd5b505afa1580156105d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f9919061271f565b61062f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610291906129d4565b6040517fe6a439050000000000000000000000000000000000000000000000000000000081528990899060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e6a43905906106aa90869086906004016127f8565b60206040518083038186803b1580156106c257600080fd5b505afa1580156106d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fa9190612505565b905073ffffffffffffffffffffffffffffffffffffffff8116610749576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612b7b565b831561080a5760608061075b876119ac565b9150915060006107f4888573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161079e91906127d7565b60206040518083038186803b1580156107b657600080fd5b505afa1580156107ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ee9190612753565b8f611b6f565b90508015610806576108068383611d4d565b5050505b6040517f70a082310000000000000000000000000000000000000000000000000000000081528a9073ffffffffffffffffffffffffffffffffffffffff8316906370a082319061085e9030906004016127d7565b60206040518083038186803b15801561087657600080fd5b505afa15801561088a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ae9190612753565b10156108e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612cb4565b6109117f0000000000000000000000000000000000000000000000000000000000000000828c611de8565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8516906370a08231906109669030906004016127d7565b60206040518083038186803b15801561097e57600080fd5b505afa158015610992573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b69190612753565b905060008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016109f391906127d7565b60206040518083038186803b158015610a0b57600080fd5b505afa158015610a1f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a439190612753565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663baa2abde8f8f8f8f8f8f8f6040518863ffffffff1660e01b8152600401610aaa979695949392919061281f565b6040805180830381600087803b158015610ac357600080fd5b505af1158015610ad7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afb919061276b565b50506040517f70a0823100000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8716906370a0823190610b529030906004016127d7565b60206040518083038186803b158015610b6a57600080fd5b505afa158015610b7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba29190612753565b905060008573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610bdf91906127d7565b60206040518083038186803b158015610bf757600080fd5b505afa158015610c0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2f9190612753565b9050838211610c6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612c20565b828111610ca3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612c20565b50505050505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610d6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612b44565b6040517f91d1485400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906391d1485490610e00907f00000000000000000000000000000000000000000000000000000000000000009033906004016128f1565b60206040518083038186803b158015610e1857600080fd5b505afa158015610e2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e50919061271f565b610e86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612a9f565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614610f0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612ad6565b6040517feb6b264000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063eb6b264090610f80908e906000906004016128c2565b60206040518083038186803b158015610f9857600080fd5b505afa158015610fac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd0919061271f565b611006576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610291906129d4565b6040517feb6b264000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063eb6b26409061107b908d906000906004016128c2565b60206040518083038186803b15801561109357600080fd5b505afa1580156110a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110cb919061271f565b611101576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610291906129d4565b61112c7f00000000000000000000000000000000000000000000000000000000000000008c8b611de8565b6111577f00000000000000000000000000000000000000000000000000000000000000008b8a611de8565b6040517fe6a4390500000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e6a43905906111ce908f908f906004016127f8565b60206040518083038186803b1580156111e657600080fd5b505afa1580156111fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121e9190612505565b905073ffffffffffffffffffffffffffffffffffffffff811661126d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612b7b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff8316906370a08231906112c29030906004016127d7565b60206040518083038186803b1580156112da57600080fd5b505afa1580156112ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113129190612753565b905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e8e337008f8f8f8f8f8f8f8f6040518963ffffffff1660e01b815260040161137d98979695949392919061286c565b606060405180830381600087803b15801561139757600080fd5b505af11580156113ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113cf919061278e565b9250505060008373ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161140e91906127d7565b60206040518083038186803b15801561142657600080fd5b505afa15801561143a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145e9190612753565b9050828111611499576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612c20565b851561159c576060806114ab896119ac565b91509150861561155a576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8716906370a08231906115079030906004016127d7565b60206040518083038186803b15801561151f57600080fd5b505afa158015611533573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115579190612753565b93505b6115857f00000000000000000000000000000000000000000000000000000000000000008786611de8565b61158f8985611ed9565b6115998282611d4d565b50505b505050505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612b44565b6040517f91d1485400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906391d14854906116f8907f00000000000000000000000000000000000000000000000000000000000000009033906004016128f1565b60206040518083038186803b15801561171057600080fd5b505afa158015611724573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611748919061271f565b61177e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102919061299d565b6040517f195426ec00000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063195426ec906117f590859030906004016128f1565b602060405180830381600087803b15801561180f57600080fd5b505af1158015611823573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118479190612753565b1161187e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612be9565b60608061188a836119ac565b6040517f18fccc76000000000000000000000000000000000000000000000000000000008152919350915073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906318fccc76906119239086907f0000000000000000000000000000000000000000000000000000000000000000906004016128f1565b600060405180830381600087803b15801561193d57600080fd5b505af1158015611951573d6000803e3d6000fd5b5050505061195f8282611d4d565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60608060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c346253d856040518263ffffffff1660e01b8152600401611a0a91906128e8565b602060405180830381600087803b158015611a2457600080fd5b505af1158015611a38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a5c9190612505565b905073ffffffffffffffffffffffffffffffffffffffff811615611b4f576040517fd63b3c4900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82169063d63b3c4990611ad19087903090600090600401612d22565b600060405180830381600087803b158015611aeb57600080fd5b505af1158015611aff573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611b45919081019061265c565b9250925050611b6a565b50506040805160008082526020820190815281830190925291505b915091565b60008215611b9357818310611b8657506000611d46565b611b908284611f85565b91505b6040517f93f1a40b00000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906393f1a40b90611c0a90889030906004016128f1565b6040805180830381600087803b158015611c2357600080fd5b505af1158015611c37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c5b919061276b565b50905082811015611c98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612ceb565b6040517f0ad58d2f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690630ad58d2f90611d0e90889087903090600401612d4e565b600060405180830381600087803b158015611d2857600080fd5b505af1158015611d3c573d6000803e3d6000fd5b5050505060019150505b9392505050565b805160005b81811015611de2576000838281518110611d6857fe5b602002602001015190506000811115611dd957611dd97f000000000000000000000000000000000000000000000000000000000000000082878581518110611dac57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16611fc79092919063ffffffff16565b50600101611d52565b50505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff84169063dd62ed3e90611e3f90309088906004016127f8565b60206040518083038186803b158015611e5757600080fd5b505afa158015611e6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e8f9190612753565b90508015611eb857611eb873ffffffffffffffffffffffffffffffffffffffff84168583612068565b611de273ffffffffffffffffffffffffffffffffffffffff84168584612153565b6040517f8dbdbe6d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690638dbdbe6d90611f4f90859085903090600401612d4e565b600060405180830381600087803b158015611f6957600080fd5b505af1158015611f7d573d6000803e3d6000fd5b505050505050565b600082821115611fc1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612a0b565b50900390565b61195f8363a9059cbb60e01b8484604051602401611fe69291906128c2565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526121ea565b600061213282604051806060016040528060298152602001612e21602991396040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88169063dd62ed3e906120db9030908a906004016127f8565b60206040518083038186803b1580156120f357600080fd5b505afa158015612107573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061212b9190612753565b91906122a0565b9050611de28463095ea7b360e01b8584604051602401611fe69291906128c2565b6000612132828573ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30876040518363ffffffff1660e01b81526004016121949291906127f8565b60206040518083038186803b1580156121ac57600080fd5b505afa1580156121c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121e49190612753565b906122e6565b606061224c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166123259092919063ffffffff16565b80519091501561195f578080602001905181019061226a919061271f565b61195f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612c57565b600081848411156122de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102919190612915565b505050900390565b600082820183811015611d46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612966565b6060612334848460008561233c565b949350505050565b606082471015612378576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612a42565b6123818561243e565b6123b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029190612bb2565b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040516123e191906127bb565b60006040518083038185875af1925050503d806000811461241e576040519150601f19603f3d011682016040523d82523d6000602084013e612423565b606091505b5091509150612433828286612444565b979650505050505050565b3b151590565b60608315612453575081611d46565b8251156124635782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102919190612915565b600082601f8301126124a7578081fd5b81516124ba6124b582612da1565b612d7a565b8181529150602080830190848101818402860182018710156124db57600080fd5b60005b848110156124fa578151845292820192908201906001016124de565b505050505092915050565b600060208284031215612516578081fd5b8151611d4681612ded565b60008060008060008060008060006101208a8c03121561253f578485fd5b893561254a81612ded565b985060208a013561255a81612ded565b975060408a0135965060608a0135955060808a0135945060a08a013561257f81612ded565b935060c08a0135925060e08a013591506101008a013561259e81612e12565b809150509295985092959850929598565b60008060008060008060008060008060006101608c8e0312156125d0578182fd5b8b356125db81612ded565b9a5060208c01356125eb81612ded565b995060408c0135985060608c0135975060808c0135965060a08c0135955060c08c013561261781612ded565b945060e08c013593506101008c013592506101208c013561263781612e12565b91506101408c013561264881612e12565b809150509295989b509295989b9093969950565b6000806040838503121561266e578182fd5b825167ffffffffffffffff80821115612685578384fd5b818501915085601f830112612698578384fd5b81516126a66124b582612da1565b80828252602080830192508086018a8283870289010111156126c6578889fd5b8896505b848710156126f15780516126dd81612ded565b8452600196909601959281019281016126ca565b508801519096509350505080821115612708578283fd5b5061271585828601612497565b9150509250929050565b600060208284031215612730578081fd5b8151611d4681612e12565b60006020828403121561274c578081fd5b5035919050565b600060208284031215612764578081fd5b5051919050565b6000806040838503121561277d578182fd5b505080516020909101519092909150565b6000806000606084860312156127a2578283fd5b8351925060208401519150604084015190509250925092565b600082516127cd818460208701612dc1565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b73ffffffffffffffffffffffffffffffffffffffff9788168152958716602087015260408601949094526060850192909252608084015290921660a082015260c081019190915260e00190565b73ffffffffffffffffffffffffffffffffffffffff9889168152968816602088015260408701959095526060860193909352608085019190915260a084015290921660c082015260e08101919091526101000190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b90815260200190565b91825273ffffffffffffffffffffffffffffffffffffffff16602082015260400190565b6000602082528251806020840152612934816040850160208701612dc1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526017908201527f4e4f545f4d4953435f4f5045524154494f4e5f524f4c45000000000000000000604082015260600190565b6020808252600d908201527f494e56414c49445f544f4b454e00000000000000000000000000000000000000604082015260600190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b60208082526016908201527f4e4f545f4144445f4c49515549444954595f524f4c4500000000000000000000604082015260600190565b6020808252600f908201527f4d5553545f42455f4d414e414745520000000000000000000000000000000000604082015260600190565b60208082526019908201527f4e4f545f52454d4f56455f4c49515549444954595f524f4c4500000000000000604082015260600190565b60208082526013908201527f4e4f545f4d414e414745525f4144445245535300000000000000000000000000604082015260600190565b60208082526010908201527f4e4f4e4558495354454e545f5041495200000000000000000000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252600c908201527f4e4f5f434c41494d41424c450000000000000000000000000000000000000000604082015260600190565b6020808252600d908201527f4d5553545f494e43524541534500000000000000000000000000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b60208082526016908201527f494e53554646494349454e545f4c495155494449545900000000000000000000604082015260600190565b6020808252600e908201527f494e56414c49445f414d4f554e54000000000000000000000000000000000000604082015260600190565b92835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b928352602083019190915273ffffffffffffffffffffffffffffffffffffffff16604082015260600190565b60405181810167ffffffffffffffff81118282101715612d9957600080fd5b604052919050565b600067ffffffffffffffff821115612db7578081fd5b5060209081020190565b60005b83811015612ddc578181015183820152602001612dc4565b83811115611de25750506000910152565b73ffffffffffffffffffffffffffffffffffffffff81168114612e0f57600080fd5b50565b8015158114612e0f57600080fdfe5361666545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212208ebe4b2d5f94e2018ab3834b22f613a118e92ef3d83806b1c39fe0719783193f64736f6c634300060c0033";

export class SushiswapControllerV2__factory extends ContractFactory {
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
    router: string,
    factory: string,
    masterchef: string,
    manager: string,
    accessControl: string,
    addressRegistry: string,
    treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SushiswapControllerV2> {
    return super.deploy(
      router,
      factory,
      masterchef,
      manager,
      accessControl,
      addressRegistry,
      treasury,
      overrides || {}
    ) as Promise<SushiswapControllerV2>;
  }
  getDeployTransaction(
    router: string,
    factory: string,
    masterchef: string,
    manager: string,
    accessControl: string,
    addressRegistry: string,
    treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      router,
      factory,
      masterchef,
      manager,
      accessControl,
      addressRegistry,
      treasury,
      overrides || {}
    );
  }
  attach(address: string): SushiswapControllerV2 {
    return super.attach(address) as SushiswapControllerV2;
  }
  connect(signer: Signer): SushiswapControllerV2__factory {
    return super.connect(signer) as SushiswapControllerV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SushiswapControllerV2Interface {
    return new utils.Interface(_abi) as SushiswapControllerV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiswapControllerV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SushiswapControllerV2;
  }
}
