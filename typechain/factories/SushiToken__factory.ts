/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SushiToken, SushiTokenInterface } from "../SushiToken";

const _abi = [
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
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
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
    inputs: [],
    name: "DELEGATION_TYPEHASH",
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
    name: "DOMAIN_TYPEHASH",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
    ],
    name: "delegates",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
  "0x60806040523480156200001157600080fd5b50604080518082018252600a81526929bab9b434aa37b5b2b760b11b602080830191825283518085019094526005845264535553484960d81b9084015281519192916200006191600391620000f3565b50805162000077906004906020840190620000f3565b50506005805460ff1916601217905550600062000093620000ef565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506200018f565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200013657805160ff191683800117855562000166565b8280016001018555821562000166579182015b828111156200016657825182559160200191906001019062000149565b506200017492915062000178565b5090565b5b8082111562000174576000815560010162000179565b61229e806200019f6000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c8063715018a6116100ee578063a9059cbb11610097578063dd62ed3e11610071578063dd62ed3e146105f4578063e7a324dc1461062f578063f1127ed814610637578063f2fde38b14610696576101a3565b8063a9059cbb14610534578063b4b5ea571461056d578063c3cda520146105a0576101a3565b80638da5cb5b116100c85780638da5cb5b146104eb57806395d89b41146104f3578063a457c2d7146104fb576101a3565b8063715018a614610477578063782d6fe11461047f5780637ecebe00146104b8576101a3565b806339509351116101505780635c19a95c1161012a5780635c19a95c146103c55780636fcfff45146103f857806370a0823114610444576101a3565b806339509351146102f557806340c10f191461032e578063587cde1e14610369576101a3565b806320606b701161018157806320606b701461028c57806323b872dd14610294578063313ce567146102d7576101a3565b806306fdde03146101a8578063095ea7b31461022557806318160ddd14610272575b600080fd5b6101b06106c9565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ea5781810151838201526020016101d2565b50505050905090810190601f1680156102175780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61025e6004803603604081101561023b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561077d565b604080519115158252519081900360200190f35b61027a61079b565b60408051918252519081900360200190f35b61027a6107a1565b61025e600480360360608110156102aa57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356107c5565b6102df610866565b6040805160ff9092168252519081900360200190f35b61025e6004803603604081101561030b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561086f565b6103676004803603604081101561034457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356108ca565b005b61039c6004803603602081101561037f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166109b2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610367600480360360208110156103db57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166109dd565b61042b6004803603602081101561040e57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166109ea565b6040805163ffffffff9092168252519081900360200190f35b61027a6004803603602081101561045a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610a02565b610367610a2a565b61027a6004803603604081101561049557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610b46565b61027a600480360360208110156104ce57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610e10565b61039c610e22565b6101b0610e43565b61025e6004803603604081101561051157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610ec2565b61025e6004803603604081101561054a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610f37565b61027a6004803603602081101561058357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610f4b565b610367600480360360c08110156105b657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060208101359060408101359060ff6060820135169060808101359060a00135610fe7565b61027a6004803603604081101561060a57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516611326565b61027a61135e565b6106766004803603604081101561064d57600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff16906020013563ffffffff16611382565b6040805163ffffffff909316835260208301919091528051918290030190f35b610367600480360360208110156106ac57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166113af565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107735780601f1061074857610100808354040283529160200191610773565b820191906000526020600020905b81548152906001019060200180831161075657829003601f168201915b5050505050905090565b600061079161078a61155b565b848461155f565b5060015b92915050565b60025490565b7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b60006107d28484846116a6565b61085c846107de61155b565b610857856040518060600160405280602881526020016121896028913973ffffffffffffffffffffffffffffffffffffffff8a1660009081526001602052604081209061082961155b565b73ffffffffffffffffffffffffffffffffffffffff1681526020810191909152604001600020549190611876565b61155f565b5060019392505050565b60055460ff1690565b600061079161087c61155b565b84610857856001600061088d61155b565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918c168152925290205490611927565b6108d261155b565b73ffffffffffffffffffffffffffffffffffffffff166108f0610e22565b73ffffffffffffffffffffffffffffffffffffffff161461097257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61097c828261199b565b73ffffffffffffffffffffffffffffffffffffffff8083166000908152600660205260408120546109ae921683611acc565b5050565b73ffffffffffffffffffffffffffffffffffffffff9081166000908152600660205260409020541690565b6109e73382611cb2565b50565b60086020526000908152604090205463ffffffff1681565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b610a3261155b565b73ffffffffffffffffffffffffffffffffffffffff16610a50610e22565b73ffffffffffffffffffffffffffffffffffffffff1614610ad257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600554604051600091610100900473ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600580547fffffffffffffffffffffff0000000000000000000000000000000000000000ff169055565b6000438210610ba0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806121616028913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff831660009081526008602052604090205463ffffffff1680610bdb576000915050610795565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260076020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff860181168552925290912054168310610ca05773ffffffffffffffffffffffffffffffffffffffff841660009081526007602090815260408083207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9490940163ffffffff16835292905220600101549050610795565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260076020908152604080832083805290915290205463ffffffff16831015610ce8576000915050610795565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82015b8163ffffffff168163ffffffff161115610dcc57600282820363ffffffff16048103610d3861205c565b5073ffffffffffffffffffffffffffffffffffffffff8716600090815260076020908152604080832063ffffffff808616855290835292819020815180830190925280549093168082526001909301549181019190915290871415610da7576020015194506107959350505050565b805163ffffffff16871115610dbe57819350610dc5565b6001820392505b5050610d0e565b5073ffffffffffffffffffffffffffffffffffffffff8516600090815260076020908152604080832063ffffffff9094168352929052206001015491505092915050565b60096020526000908152604090205481565b600554610100900473ffffffffffffffffffffffffffffffffffffffff1690565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107735780601f1061074857610100808354040283529160200191610773565b6000610791610ecf61155b565b84610857856040518060600160405280602581526020016122446025913960016000610ef961155b565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000908120918d16815292529020549190611876565b6000610791610f4461155b565b84846116a6565b73ffffffffffffffffffffffffffffffffffffffff811660009081526008602052604081205463ffffffff1680610f83576000610fe0565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260076020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff86011684529091529020600101545b9392505050565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a8666110126106c9565b80519060200120611021611d79565b60408051602080820195909552808201939093526060830191909152306080808401919091528151808403909101815260a0830182528051908401207fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60c084015273ffffffffffffffffffffffffffffffffffffffff8b1660e084015261010083018a90526101208084018a905282518085039091018152610140840183528051908501207f19010000000000000000000000000000000000000000000000000000000000006101608501526101628401829052610182808501829052835180860390910181526101a285018085528151918701919091206000918290526101c2860180865281905260ff8b166101e287015261020286018a905261022286018990529351929650909492939092600192610242808401937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08301929081900390910190855afa15801561119a573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116611231576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806121d46027913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116600090815260096020526040902080546001810190915589146112b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806121b16023913960400191505060405180910390fd5b8742111561130f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806120976027913960400191505060405180910390fd5b611319818b611cb2565b505050505b505050505050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf81565b60076020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b6113b761155b565b73ffffffffffffffffffffffffffffffffffffffff166113d5610e22565b73ffffffffffffffffffffffffffffffffffffffff161461145757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166114c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806120be6026913960400191505060405180910390fd5b60055460405173ffffffffffffffffffffffffffffffffffffffff80841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36005805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b3390565b73ffffffffffffffffffffffffffffffffffffffff83166115cb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806122206024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611637576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806120e46022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316611712576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806121fb6025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661177e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806120746023913960400191505060405180910390fd5b611789838383611cad565b6117d3816040518060600160405280602681526020016121066026913973ffffffffffffffffffffffffffffffffffffffff86166000908152602081905260409020549190611876565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220939093559084168152205461180f9082611927565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000818484111561191f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156118e45781810151838201526020016118cc565b50505050905090810190601f1680156119115780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610fe057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8216611a1d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611a2960008383611cad565b600254611a369082611927565b60025573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054611a699082611927565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611b085750600081115b15611cad5773ffffffffffffffffffffffffffffffffffffffff831615611bdf5773ffffffffffffffffffffffffffffffffffffffff831660009081526008602052604081205463ffffffff169081611b62576000611bbf565b73ffffffffffffffffffffffffffffffffffffffff8516600090815260076020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff87011684529091529020600101545b90506000611bcd8285611d7d565b9050611bdb86848484611df4565b5050505b73ffffffffffffffffffffffffffffffffffffffff821615611cad5773ffffffffffffffffffffffffffffffffffffffff821660009081526008602052604081205463ffffffff169081611c34576000611c91565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260076020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff87011684529091529020600101545b90506000611c9f8285611927565b905061131e85848484611df4565b505050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526006602052604081205490911690611ce684610a02565b73ffffffffffffffffffffffffffffffffffffffff85811660008181526006602052604080822080547fffffffffffffffffffffffff000000000000000000000000000000000000000016898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611d73828483611acc565b50505050565b4690565b600082821115611dee57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000611e184360405180606001604052806035815260200161212c60359139611fe4565b905060008463ffffffff16118015611e8c575073ffffffffffffffffffffffffffffffffffffffff8516600090815260076020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8901811685529252909120548282169116145b15611ef45773ffffffffffffffffffffffffffffffffffffffff8516600090815260076020908152604080832063ffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff89011684529091529020600101829055611f8d565b60408051808201825263ffffffff8084168252602080830186815273ffffffffffffffffffffffffffffffffffffffff8a166000818152600784528681208b861682528452868120955186549086167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000918216178755925160019687015590815260089092529390208054928801909116919092161790555b6040805184815260208101849052815173ffffffffffffffffffffffffffffffffffffffff8816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b6000816401000000008410612054576040517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482018181528351602484015283519092839260449091019190850190808383600083156118e45781810151838201526020016118cc565b509192915050565b60408051808201909152600080825260208201529056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737353555348493a3a64656c656761746542795369673a207369676e617475726520657870697265644f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636553555348493a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747353555348493a3a6765745072696f72566f7465733a206e6f74207965742064657465726d696e656445524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636553555348493a3a64656c656761746542795369673a20696e76616c6964206e6f6e636553555348493a3a64656c656761746542795369673a20696e76616c6964207369676e617475726545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212202a411f580e2065aab865a77729f2003a10db3e00ec85838c84c5a75186cba3df64736f6c634300060c0033";

export class SushiToken__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SushiToken> {
    return super.deploy(overrides || {}) as Promise<SushiToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SushiToken {
    return super.attach(address) as SushiToken;
  }
  connect(signer: Signer): SushiToken__factory {
    return super.connect(signer) as SushiToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SushiTokenInterface {
    return new utils.Interface(_abi) as SushiTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SushiToken {
    return new Contract(address, _abi, signerOrProvider) as SushiToken;
  }
}
