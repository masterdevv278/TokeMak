/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CurveControllerV2Pool3,
  CurveControllerV2Pool3Interface,
} from "../CurveControllerV2Pool3";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_accessControl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_addressRegistry",
        type: "address",
      },
      {
        internalType: "contract IAddressProvider",
        name: "_curveAddressProvider",
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
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[3]",
        name: "token_amounts",
        type: "uint256[3]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lp_token_amount",
        type: "uint256",
      },
    ],
    name: "AddLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[3]",
        name: "token_amounts",
        type: "uint256[3]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_supply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[3]",
        name: "amounts",
        type: "uint256[3]",
      },
    ],
    name: "RemoveLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "coin_index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "coin_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "coin_address",
        type: "address",
      },
    ],
    name: "RemoveLiquidityOne",
    type: "event",
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
    name: "N_COINS",
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
    name: "addressProvider",
    outputs: [
      {
        internalType: "contract IAddressProvider",
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
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "uint256[3]",
        name: "amounts",
        type: "uint256[3]",
      },
      {
        internalType: "uint256",
        name: "minMintAmount",
        type: "uint256",
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
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256[3]",
        name: "minAmounts",
        type: "uint256[3]",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "poolAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
    ],
    name: "withdrawOneCoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x61016060408190527fad02fbc13153ebd0c0ef004ff61ba31d9ce93d7998e6fc3a4a4a667ac0ae2a1660e0527f99a732c1592dacad61c17aa1d8c4a304ed8aa6966133090e2df7f7c3ec3c66f7610100527f4d4953435f4f5045524154494f4e5f524f4c450000000000000000000000000090527fb31eaee23a579dabb2a4effb45a79031addeff3990e6fc9284cc2ad257c588a1610120523480156100a457600080fd5b506040516200236e3803806200236e833981810160405260808110156100c957600080fd5b50805160208201516040830151606090930151919290918383836001600160a01b038316610130576040805162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b604482015290519081900360640190fd5b6001600160a01b03821661017d576040805162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b604482015290519081900360640190fd5b6001600160a01b0381166101ca576040805162461bcd60e51b815260206004820152600f60248201526e494e56414c49445f4144445245535360881b604482015290519081900360640190fd5b6001600160601b0319606093841b811660805291831b821660a05290911b1660c0526001600160a01b038116610247576040805162461bcd60e51b815260206004820152601e60248201527f494e56414c49445f43555256455f414444524553535f50524f56494445520000604482015290519081900360640190fd5b6001600160601b031960609190911b166101405250505060805160601c60a05160601c60c05160601c60e05161010051610120516101405160601c612074620002fa600039806107125280611784525080610e4d5250806102d55280610e715280610f1652508061020c52806107b752508061099c528061149252806118b2525080610230528061030b52806107ed5280610f4c52508061025d528061073f5280610e295280610e9e52506120746000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c8063376ed3b0116100815780637e841d541161005b5780637e841d54146101c2578063a579019c146101ca578063f3ad65f414610202576100c9565b8063376ed3b014610181578063481c6a75146101b257806361bea27f146101ba576100c9565b806316ebf008116100b257806316ebf0081461010c57806329357750146101715780632954018c14610179576100c9565b80630f967dd6146100ce57806313007d55146100e8575b600080fd5b6100d661020a565b60408051918252519081900360200190f35b6100f061022e565b604080516001600160a01b039092168252519081900360200190f35b61016f600480360360a081101561012257600080fd5b60408051606081810183526001600160a01b0385351694602081013594810193909260a0840192909184019060039083908390808284376000920191909152509194506102529350505050565b005b6100d661070b565b6100f0610710565b61016f600480360360a081101561019757600080fd5b506001600160a01b0381351690602081019060800135610734565b6100f0610e27565b6100d6610e4b565b6100d6610e6f565b61016f600480360360808110156101e057600080fd5b506001600160a01b038135169060208101359060408101359060600135610e93565b6100f0611490565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102c5576040805162461bcd60e51b81526020600482015260136024820152724e4f545f4d414e414745525f4144445245535360681b604482015290519081900360640190fd5b60408051632474521560e21b81527f0000000000000000000000000000000000000000000000000000000000000000600482015233602482015290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916391d14854916044808301926020929190829003018186803b15801561035157600080fd5b505afa158015610365573d6000803e3d6000fd5b505050506040513d602081101561037b57600080fd5b50516103ce576040805162461bcd60e51b815260206004820152601960248201527f4e4f545f52454d4f56455f4c49515549444954595f524f4c4500000000000000604482015290519081900360640190fd5b60006103da84846114b4565b604080516370a0823160e01b815230600482015290519192506000916001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561042657600080fd5b505afa15801561043a573d6000803e3d6000fd5b505050506040513d602081101561045057600080fd5b5051905061045c611fa7565b610465866114ed565b6040517fecb586a5000000000000000000000000000000000000000000000000000000008152600481018781529192506001600160a01b0388169163ecb586a5918891889160240182606080838360005b838110156104ce5781810151838201526020016104b6565b5050505090500192505050600060405180830381600087803b1580156104f357600080fd5b505af1158015610507573d6000803e3d6000fd5b5050604080516370a0823160e01b81523060048201529051600093506001600160a01b03871692506370a0823191602480820192602092909190829003018186803b15801561055557600080fd5b505afa158015610569573d6000803e3d6000fd5b505050506040513d602081101561057f57600080fd5b5051905061058b611fa7565b610594886114ed565b90506105a1838288611611565b816105b2858963ffffffff6116c616565b14610604576040805162461bcd60e51b815260206004820152601560248201527f4c505f544f4b454e5f414d545f4d49534d415443480000000000000000000000604482015290519081900360640190fd5b336001600160a01b03167fcb226f0f85f1aeb1acbdb8520e84f3f01b5c37c02552456a994da07cd1c2e3ca82876001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561066957600080fd5b505afa15801561067d573d6000803e3d6000fd5b505050506040513d602081101561069357600080fd5b50516040518a908084606080838360005b838110156106bc5781810151838201526020016106a4565b5050505090500183815260200182600360200280838360005b838110156106ed5781810151838201526020016106d5565b50505050905001935050505060405180910390a25050505050505050565b600381565b7f000000000000000000000000000000000000000000000000000000000000000081565b306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107a7576040805162461bcd60e51b81526020600482015260136024820152724e4f545f4d414e414745525f4144445245535360681b604482015290519081900360640190fd5b60408051632474521560e21b81527f0000000000000000000000000000000000000000000000000000000000000000600482015233602482015290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916391d14854916044808301926020929190829003018186803b15801561083357600080fd5b505afa158015610847573d6000803e3d6000fd5b505050506040513d602081101561085d57600080fd5b50516108b0576040805162461bcd60e51b815260206004820152601660248201527f4e4f545f4144445f4c49515549444954595f524f4c4500000000000000000000604482015290519081900360640190fd5b60006108bb84611723565b9050600360005b81811015610b655760008582600381106108d857fe5b60200201351115610b5d576000866001600160a01b031663c6610657836040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b15801561092b57600080fd5b505af115801561093f573d6000803e3d6000fd5b505050506040513d602081101561095557600080fd5b5051604080517feb6b26400000000000000000000000000000000000000000000000000000000081526001600160a01b0380841660048301526000602483015291519293507f00000000000000000000000000000000000000000000000000000000000000009091169163eb6b264091604480820192602092909190829003018186803b1580156109e557600080fd5b505afa1580156109f9573d6000803e3d6000fd5b505050506040513d6020811015610a0f57600080fd5b5051610a62576040805162461bcd60e51b815260206004820152600c60248201527f494e56414c49445f434f494e0000000000000000000000000000000000000000604482015290519081900360640190fd5b604080516370a0823160e01b815230600482015290516000916001600160a01b038416916370a0823191602480820192602092909190829003018186803b158015610aac57600080fd5b505afa158015610ac0573d6000803e3d6000fd5b505050506040513d6020811015610ad657600080fd5b50519050868360038110610ae657fe5b6020020135811015610b3f576040805162461bcd60e51b815260206004820152601460248201527f494e53554646494349454e545f42414c414e4345000000000000000000000000604482015290519081900360640190fd5b610b5a8289898660038110610b5057fe5b60200201356119ac565b50505b6001016108c2565b50604080516370a0823160e01b815230600482015290516000916001600160a01b038516916370a0823191602480820192602092909190829003018186803b158015610bb057600080fd5b505afa158015610bc4573d6000803e3d6000fd5b505050506040513d6020811015610bda57600080fd5b50516040517f4515cef30000000000000000000000000000000000000000000000000000000081529091506001600160a01b03871690634515cef390879087906004018083606080828437600081840152601f19601f82011690508083019250505082815260200192505050600060405180830381600087803b158015610c6057600080fd5b505af1158015610c74573d6000803e3d6000fd5b5050604080516370a0823160e01b81523060048201529051600093506001600160a01b03871692506370a0823191602480820192602092909190829003018186803b158015610cc257600080fd5b505afa158015610cd6573d6000803e3d6000fd5b505050506040513d6020811015610cec57600080fd5b505190506000610d02828463ffffffff6116c616565b905085811015610d59576040805162461bcd60e51b815260206004820152600e60248201527f4c505f414d545f544f4f5f4c4f57000000000000000000000000000000000000604482015290519081900360640190fd5b336001600160a01b03167f96b486485420b963edd3fdec0b0195730035600feb7de6f544383d7950fa97ee88876001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610dbe57600080fd5b505afa158015610dd2573d6000803e3d6000fd5b505050506040513d6020811015610de857600080fd5b505160405185908084606080828437600083820152601f01601f1916909101938452505060208201526040805191829003019150a25050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610f06576040805162461bcd60e51b81526020600482015260136024820152724e4f545f4d414e414745525f4144445245535360681b604482015290519081900360640190fd5b60408051632474521560e21b81527f0000000000000000000000000000000000000000000000000000000000000000600482015233602482015290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916391d14854916044808301926020929190829003018186803b158015610f9257600080fd5b505afa158015610fa6573d6000803e3d6000fd5b505050506040513d6020811015610fbc57600080fd5b505161100f576040805162461bcd60e51b815260206004820152601960248201527f4e4f545f52454d4f56455f4c49515549444954595f524f4c4500000000000000604482015290519081900360640190fd5b600061101b85856114b4565b90506000856001600160a01b031663c6610657856040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b15801561106557600080fd5b505af1158015611079573d6000803e3d6000fd5b505050506040513d602081101561108f57600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b1580156110dd57600080fd5b505afa1580156110f1573d6000803e3d6000fd5b505050506040513d602081101561110757600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561115557600080fd5b505afa158015611169573d6000803e3d6000fd5b505050506040513d602081101561117f57600080fd5b5051604080517ff1dc3cc9000000000000000000000000000000000000000000000000000000008152600481018a9052602481018990526044810188905290519192506001600160a01b038a169163f1dc3cc99160648082019260009290919082900301818387803b1580156111f457600080fd5b505af1158015611208573d6000803e3d6000fd5b5050604080516370a0823160e01b81523060048201529051600093506001600160a01b03881692506370a0823191602480820192602092909190829003018186803b15801561125657600080fd5b505afa15801561126a573d6000803e3d6000fd5b505050506040513d602081101561128057600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038716916370a08231916024808301926020929190829003018186803b1580156112ce57600080fd5b505afa1580156112e2573d6000803e3d6000fd5b505050506040513d60208110156112f857600080fd5b50519050808310611350576040805162461bcd60e51b815260206004820152601560248201527f42414c414e43455f4d5553545f494e4352454153450000000000000000000000604482015290519081900360640190fd5b81611361858b63ffffffff6116c616565b146113b3576040805162461bcd60e51b815260206004820152601560248201527f4c505f544f4b454e5f414d545f4d49534d415443480000000000000000000000604482015290519081900360640190fd5b60008a6001600160a01b0316634fb08c5e898b6040518363ffffffff1660e01b81526004018083815260200182815260200192505050602060405180830381600087803b15801561140357600080fd5b505af1158015611417573d6000803e3d6000fd5b505050506040513d602081101561142d57600080fd5b5051604080518c8152602081018c90528082018390526001600160a01b0389166060820152905191925033917fc6776316e4b4f8b92356a3110d6c6ecfdbb3462d8c2137d1a34726f57edfb7ba9181900360800190a25050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806114c084611723565b9050836001600160a01b0316816001600160a01b0316146114e6576114e68185856119ac565b9392505050565b6114f5611fa7565b60005b600381101561160b576000836001600160a01b031663c6610657836040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b15801561154957600080fd5b505af115801561155d573d6000803e3d6000fd5b505050506040513d602081101561157357600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038416916370a08231916024808301926020929190829003018186803b1580156115c157600080fd5b505afa1580156115d5573d6000803e3d6000fd5b505050506040513d60208110156115eb57600080fd5b50519050808484600381106115fc57fe5b602002015250506001016114f8565b50919050565b60005b60038110156116c057600082826003811061162b57fe5b602002015190508061166486846003811061164257fe5b602002015186856003811061165357fe5b60200201519063ffffffff6116c616565b10156116b7576040805162461bcd60e51b815260206004820152601660248201527f494e56414c49445f42414c414e43455f4348414e474500000000000000000000604482015290519081900360640190fd5b50600101611614565b50505050565b60008282111561171d576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60006001600160a01b038216611780576040805162461bcd60e51b815260206004820152601460248201527f494e56414c49445f504f4f4c5f41444452455353000000000000000000000000604482015290519081900360640190fd5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a262904b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156117db57600080fd5b505afa1580156117ef573d6000803e3d6000fd5b505050506040513d602081101561180557600080fd5b5051604080517f379510490000000000000000000000000000000000000000000000000000000081526001600160a01b03868116600483015291519293506000929184169163379510499160248082019260209290919082900301818787803b15801561187157600080fd5b505af1158015611885573d6000803e3d6000fd5b505050506040513d602081101561189b57600080fd5b505190506001600160a01b0381166118b05750825b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663eb6b26408260006040518363ffffffff1660e01b815260040180836001600160a01b03166001600160a01b031681526020018281526020019250505060206040518083038186803b15801561192f57600080fd5b505afa158015611943573d6000803e3d6000fd5b505050506040513d602081101561195957600080fd5b50516114e6576040805162461bcd60e51b815260206004820152601060248201527f494e56414c49445f4c505f544f4b454e00000000000000000000000000000000604482015290519081900360640190fd5b60408051636eb1769f60e11b81523060048201526001600160a01b038481166024830152915160009286169163dd62ed3e916044808301926020929190829003018186803b1580156119fd57600080fd5b505afa158015611a11573d6000803e3d6000fd5b505050506040513d6020811015611a2757600080fd5b505190508015611a4b57611a4b6001600160a01b038516848363ffffffff611a6516565b6116c06001600160a01b038516848463ffffffff611b9016565b6000611b0d82604051806060016040528060298152602001611fc66029913960408051636eb1769f60e11b81523060048201526001600160a01b03888116602483015291519189169163dd62ed3e91604480820192602092909190829003018186803b158015611ad457600080fd5b505afa158015611ae8573d6000803e3d6000fd5b505050506040513d6020811015611afe57600080fd5b5051919063ffffffff611c2116565b604080516001600160a01b038616602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790529091506116c0908590611cb8565b60408051636eb1769f60e11b81523060048201526001600160a01b0384811660248301529151600092611b0d9285929188169163dd62ed3e91604480820192602092909190829003018186803b158015611be957600080fd5b505afa158015611bfd573d6000803e3d6000fd5b505050506040513d6020811015611c1357600080fd5b50519063ffffffff611d6e16565b60008184841115611cb05760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c75578181015183820152602001611c5d565b50505050905090810190601f168015611ca25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6060611d0d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611dc89092919063ffffffff16565b805190915015611d6957808060200190516020811015611d2c57600080fd5b5051611d695760405162461bcd60e51b815260040180806020018281038252602a815260200180612015602a913960400191505060405180910390fd5b505050565b6000828201838110156114e6576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6060611dd78484600085611ddf565b949350505050565b606082471015611e205760405162461bcd60e51b8152600401808060200182810382526026815260200180611fef6026913960400191505060405180910390fd5b611e2985611f3b565b611e7a576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611eb95780518252601f199092019160209182019101611e9a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611f1b576040519150601f19603f3d011682016040523d82523d6000602084013e611f20565b606091505b5091509150611f30828286611f41565b979650505050505050565b3b151590565b60608315611f505750816114e6565b825115611f605782518084602001fd5b60405162461bcd60e51b8152602060048201818152845160248401528451859391928392604401919085019080838360008315611c75578181015183820152602001611c5d565b6040518060600160405280600390602082028036833750919291505056fe5361666545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220e8515da4f9ac143e98fef43d681348c02bdb18d330afdf3194e065f3a544f55c64736f6c634300060b0033";

export class CurveControllerV2Pool3__factory extends ContractFactory {
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
    _manager: string,
    _accessControl: string,
    _addressRegistry: string,
    _curveAddressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CurveControllerV2Pool3> {
    return super.deploy(
      _manager,
      _accessControl,
      _addressRegistry,
      _curveAddressProvider,
      overrides || {}
    ) as Promise<CurveControllerV2Pool3>;
  }
  getDeployTransaction(
    _manager: string,
    _accessControl: string,
    _addressRegistry: string,
    _curveAddressProvider: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _manager,
      _accessControl,
      _addressRegistry,
      _curveAddressProvider,
      overrides || {}
    );
  }
  attach(address: string): CurveControllerV2Pool3 {
    return super.attach(address) as CurveControllerV2Pool3;
  }
  connect(signer: Signer): CurveControllerV2Pool3__factory {
    return super.connect(signer) as CurveControllerV2Pool3__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveControllerV2Pool3Interface {
    return new utils.Interface(_abi) as CurveControllerV2Pool3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveControllerV2Pool3 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CurveControllerV2Pool3;
  }
}
