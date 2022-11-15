/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BalanceTracker,
  BalanceTrackerInterface,
} from "../BalanceTracker";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "BalanceDelegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "stateSynced",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "applied",
        type: "bool",
      },
    ],
    name: "BalanceUpdate",
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
        indexed: false,
        internalType: "address",
        name: "proxyAddress",
        type: "address",
      },
    ],
    name: "ProxyAddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "SupportedTokensAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "SupportedTokensRemoved",
    type: "event",
  },
  {
    inputs: [],
    name: "EVENT_TYPE_DELEGATION_DISABLED",
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
    name: "EVENT_TYPE_DELEGATION_ENABLED",
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
    name: "EVENT_TYPE_DEPOSIT",
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
    name: "EVENT_TYPE_SLASH",
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
    name: "EVENT_TYPE_TRANSFER",
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
    name: "EVENT_TYPE_WITHDRAW",
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
    name: "EVENT_TYPE_WITHDRAWALREQUEST",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "accountTokenBalances",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokensToSupport",
        type: "address[]",
      },
    ],
    name: "addSupportedTokens",
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
    name: "delegatedBalance",
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
    name: "delegatedTo",
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
    name: "eventProxy",
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
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "getActualBalance",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct TokenBalance[]",
        name: "userBalances",
        type: "tuple[]",
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
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "getBalance",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct TokenBalance[]",
        name: "userBalances",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSupportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "supportedTokensArray",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "eventProxyAddress",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "eventProxy",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
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
        internalType: "bytes32",
        name: "eventType",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onEventReceive",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address[]",
        name: "tokensToSupport",
        type: "address[]",
      },
    ],
    name: "removeSupportedTokens",
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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IBalanceTracker.SetTokenBalance[]",
        name: "balances",
        type: "tuple[]",
      },
    ],
    name: "setBalance",
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
    ],
    name: "supportedTokenRemoved",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "totalTokenBalances",
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
  "0x608060405234801561001057600080fd5b50612eb5806100206000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80638c7ac746116100ee578063c4d66de811610097578063e6f4b47011610071578063e6f4b47014610339578063f27d418914610341578063f2fde38b14610349578063fb0fe3b61461035c576101a3565b8063c4d66de8146102fe578063d3c7c2c714610311578063dca8a9e414610326576101a3565b8063a3851c95116100c8578063a3851c95146102d0578063a6bd7024146102e3578063af4dbdac146102f6576101a3565b80638c7ac746146102a25780638da5cb5b146102b5578063a2d2dbe2146102bd576101a3565b80634b06298c116101505780637d29019f1161012a5780637d29019f1461027f57806387dbbdf7146102875780638a448c591461028f576101a3565b80634b06298c1461024457806365da126414610257578063715018a614610277576101a3565b806319ab453c1161018157806319ab453c146102075780633b307b4f1461021c578063405916b614610224576101a3565b806304437b9f146101a85780630a3cede8146101d257806316f4f118146101f2575b600080fd5b6101bb6101b63660046126b2565b610364565b6040516101c992919061297e565b60405180910390f35b6101e56101e03660046126e4565b6103a1565b6040516101c99190612a57565b6101fa6104b7565b6040516101c99190612ac7565b61021a610215366004612698565b6104db565b005b6101fa61064f565b610237610232366004612698565b610673565b6040516101c99190612abc565b6101fa6102523660046126b2565b610688565b61026a610265366004612698565b6106a5565b6040516101c991906128ed565b61021a6106cd565b6101fa6107e4565b61026a610808565b61021a61029d3660046127b7565b61082a565b61021a6102b03660046127b7565b610aa7565b61026a610d24565b6101fa6102cb366004612698565b610d40565b61021a6102de366004612735565b610d52565b61021a6102f13660046127f7565b610dbb565b6101fa610ec0565b61021a61030c366004612698565b610ee4565b610319610fd7565b6040516101c991906129fd565b6101e56103343660046126e4565b61107f565b6101fa611223565b6101fa611247565b61021a610357366004612698565b61126b565b6101fa61140d565b60656020908152600092835260408084209091529082529020805460019091015473ffffffffffffffffffffffffffffffffffffffff9091169082565b60608167ffffffffffffffff811180156103ba57600080fd5b506040519080825280602002602001820160405280156103f457816020015b6103e16125a9565b8152602001906001900390816103d95790505b50905060005b828110156104af5773ffffffffffffffffffffffffffffffffffffffff851660009081526065602052604081209085858481811061043457fe5b90506020020160208101906104499190612698565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000208251808401909352805490911682526001015491810191909152825183908390811061049c57fe5b60209081029190910101526001016103fa565b509392505050565b7f44656c65676174696f6e44697361626c6564000000000000000000000000000081565b600054610100900460ff16806104f457506104f4611431565b80610502575060005460ff16155b610557576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e52602e913960400191505060405180910390fd5b600054610100900460ff161580156105bd57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b73ffffffffffffffffffffffffffffffffffffffff8216610613576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612d2d565b60405180910390fd5b61061c82611442565b801561064b57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b5050565b7f4465706f7369740000000000000000000000000000000000000000000000000081565b606b6020526000908152604090205460ff1681565b606a60209081526000928352604080842090915290825290205481565b60676020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6106d56114ce565b73ffffffffffffffffffffffffffffffffffffffff166106f3610d24565b73ffffffffffffffffffffffffffffffffffffffff161461077557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60335460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3603380547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b7f576974686472617700000000000000000000000000000000000000000000000081565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1681565b6108326114ce565b73ffffffffffffffffffffffffffffffffffffffff16610850610d24565b73ffffffffffffffffffffffffffffffffffffffff16146108d257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b80610909576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612c88565b60005b81811015610a6957600083838381811061092257fe5b90506020020160208101906109379190612698565b73ffffffffffffffffffffffffffffffffffffffff161415610985576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612c51565b6109b183838381811061099457fe5b90506020020160208101906109a99190612698565b6068906114d2565b6109e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612cbf565b6001606b60008585858181106109f957fe5b9050602002016020810190610a0e9190612698565b73ffffffffffffffffffffffffffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001691151591909117905560010161090c565b507f523333869bfbf21f09fb20643d9db1c46a8a97b6a4dddf8bfc447bce915a9e958282604051610a9b9291906129a4565b60405180910390a15050565b610aaf6114ce565b73ffffffffffffffffffffffffffffffffffffffff16610acd610d24565b73ffffffffffffffffffffffffffffffffffffffff1614610b4f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b80610b86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612c88565b60005b81811015610cf2576000838383818110610b9f57fe5b9050602002016020810190610bb49190612698565b73ffffffffffffffffffffffffffffffffffffffff161415610c02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612c51565b606b6000848484818110610c1257fe5b9050602002016020810190610c279190612698565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff1615610c88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612d64565b610cb4838383818110610c9757fe5b9050602002016020810190610cac9190612698565b6068906114fd565b610cea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612be3565b600101610b89565b507f382eb5f3e5059a4d82d098d943ff7e4267a29bde3d3048afbf590a5f8bbc0f5d8282604051610a9b9291906129a4565b60335473ffffffffffffffffffffffffffffffffffffffff1690565b60666020526000908152604090205481565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314610da9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612b3e565b610db58484848461151f565b50505050565b610dc36114ce565b73ffffffffffffffffffffffffffffffffffffffff16610de1610d24565b73ffffffffffffffffffffffffffffffffffffffff1614610e6357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60005b81811015610ebb5736838383818110610e7b57fe5b606002919091019150610eb29050610e966020830183612698565b610ea66040840160208501612698565b83604001356000611694565b50600101610e66565b505050565b7f44656c65676174696f6e456e61626c656400000000000000000000000000000081565b600054610100900460ff1680610efd5750610efd611431565b80610f0b575060005460ff16155b610f60576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e52602e913960400191505060405180910390fd5b600054610100900460ff16158015610fc657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b610fce611ab2565b61061c826104db565b60606000610fe56068611c43565b90508067ffffffffffffffff81118015610ffe57600080fd5b50604051908082528060200260200182016040528015611028578160200160208202803683370190505b50915060005b8181101561107a57611041606882611c56565b83828151811061104d57fe5b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015260010161102e565b505090565b60608167ffffffffffffffff8111801561109857600080fd5b506040519080825280602002602001820160405280156110d257816020015b6110bf6125a9565b8152602001906001900390816110b75790505b50905060005b828110156104af5773ffffffffffffffffffffffffffffffffffffffff858116600090815260676020526040902054161561117557604051806040016040528085858481811061112457fe5b90506020020160208101906111399190612698565b73ffffffffffffffffffffffffffffffffffffffff168152602001600081525082828151811061116557fe5b602002602001018190525061121b565b73ffffffffffffffffffffffffffffffffffffffff85166000908152606560205260408120908585848181106111a757fe5b90506020020160208101906111bc9190612698565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409182016000208251808401909352805490911682526001015491810191909152825183908390811061120f57fe5b60200260200101819052505b6001016110d8565b7f5472616e7366657200000000000000000000000000000000000000000000000081565b7f5769746864726177616c2052657175657374000000000000000000000000000081565b6112736114ce565b73ffffffffffffffffffffffffffffffffffffffff16611291610d24565b73ffffffffffffffffffffffffffffffffffffffff161461131357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff811661137f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612e2c6026913960400191505060405180910390fd5b60335460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b7f536c61736800000000000000000000000000000000000000000000000000000081565b600061143c30611c62565b15905090565b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff848116820292909217928390556040517f9a3202088337cf7e4d3f19d98fffddbbc525f8569bb2a61b2a23672999329127936114c393929004909116906128ed565b60405180910390a150565b3390565b60006114f48373ffffffffffffffffffffffffffffffffffffffff8416611c68565b90505b92915050565b60006114f48373ffffffffffffffffffffffffffffffffffffffff8416611d4c565b7f4465706f7369740000000000000000000000000000000000000000000000000083148061156c57507f5472616e7366657200000000000000000000000000000000000000000000000083145b8061159657507f576974686472617700000000000000000000000000000000000000000000000083145b806115c057507f536c61736800000000000000000000000000000000000000000000000000000083145b806115ea57507f5769746864726177616c2052657175657374000000000000000000000000000083145b156115fe576115f98282611d96565b610db5565b7f44656c65676174696f6e456e61626c6564000000000000000000000000000000831415611630576115f98282611dbf565b7f44656c65676174696f6e44697361626c65640000000000000000000000000000831415611662576115f98282611de6565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612cf6565b73ffffffffffffffffffffffffffffffffffffffff83166116e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612b07565b73ffffffffffffffffffffffffffffffffffffffff841661172e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612c1a565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152606560209081526040808320878516845282529182902082518084019093528054909316825260019092015491810191909152818061179f5750805173ffffffffffffffffffffffffffffffffffffffff16155b15611a6a5760408051808201825273ffffffffffffffffffffffffffffffffffffffff86811680835260208084018881528a8416600081815260658452878120948152938352868420955186547fffffffffffffffffffffffff000000000000000000000000000000000000000016908616178655905160019095019490945592815260679092529190205416156119855773ffffffffffffffffffffffffffffffffffffffff80861660009081526067602090815260408083205484168352606582528083209388168352928152919020600101549082015161189090859061188a908490611e0a565b90611e81565b60408051808201825273ffffffffffffffffffffffffffffffffffffffff88811680835260208084018681528c8416600090815260678352868120805486168252606584528782208583528452878220965187547fffffffffffffffffffffffff00000000000000000000000000000000000000001690871617875591516001909601959095558882015190549093168452606a8152848420918452529190205491925061194491869161188a9190611e0a565b73ffffffffffffffffffffffffffffffffffffffff80881660009081526067602090815260408083205484168352606a8252808320938a1683529290522055505b73ffffffffffffffffffffffffffffffffffffffff8086166000818152606a60209081526040808320948916808452948252808320549383526065825280832094835293905291909120600101546119dc91611e81565b73ffffffffffffffffffffffffffffffffffffffff86811660009081526065602090815260408083209389168352928152919020600101829055820151611a2591869190611ef5565b7f53a33d22ff9200fa66da20c899619dc2a429273409f028609fd7bf9bf77d03ae858585856001604051611a5d95949392919061293e565b60405180910390a1611aab565b7f53a33d22ff9200fa66da20c899619dc2a429273409f028609fd7bf9bf77d03ae858585600080604051611aa295949392919061293e565b60405180910390a15b5050505050565b600054610100900460ff1680611acb5750611acb611431565b80611ad9575060005460ff16155b611b2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612e52602e913960400191505060405180910390fd5b600054610100900460ff16158015611b9457600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b6000611b9e6114ce565b603380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3508015611c4057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555b50565b6000611c4e82611f5a565b90505b919050565b60006114f48383611f5e565b3b151590565b60008181526001830160205260408120548015611d425783547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8083019190810190600090879083908110611cb957fe5b9060005260206000200154905080876000018481548110611cd657fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611d0657fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506114f7565b60009150506114f7565b6000611d588383611fdc565b611d8e575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556114f7565b5060006114f7565b6000611da482840184612867565b9050610ebb8160200151826040015183606001516001611694565b6000611dcd828401846128d2565b9050610ebb816020015182604001518360600151611ff4565b6000611df4828401846128d2565b9050610ebb816020015160008360600151611ff4565b600082821115611e7b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000828201838110156114f457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff831660009081526066602052604081205490611f2a8361188a8487611e0a565b73ffffffffffffffffffffffffffffffffffffffff90951660009081526066602052604090209490945550505050565b5490565b81546000908210611fba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612e0a6022913960400191505060405180910390fd5b826000018281548110611fc957fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b807f766f74696e6700000000000000000000000000000000000000000000000000001415610ebb5760006120286068611c43565b905060005b81811015612058576000612042606883611c56565b905061204f8187876120ae565b5060010161202d565b50505073ffffffffffffffffffffffffffffffffffffffff918216600090815260676020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b73ffffffffffffffffffffffffffffffffffffffff82166120fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612ad0565b73ffffffffffffffffffffffffffffffffffffffff8316612148576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612b75565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156121ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612bac565b73ffffffffffffffffffffffffffffffffffffffff818116600090815260676020526040902054161561220d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612dd2565b73ffffffffffffffffffffffffffffffffffffffff8083166000908152606a602090815260408083209387168352929052205415612277576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060a90612d9b565b73ffffffffffffffffffffffffffffffffffffffff80831660008181526065602090815260408083208886168452825280832081518083018352815487168152600190910154818401529383526067909152902054909116156124235773ffffffffffffffffffffffffffffffffffffffff8381166000908152606760209081526040808320548416835260658252808320888516845282529182902082518084019093528054909316825260019092015481830181905291830151909161233e91611e0a565b602082810191825273ffffffffffffffffffffffffffffffffffffffff8681166000908152606783526040808220805484168352606585528183208b8516808552908652828420885181547fffffffffffffffffffffffff00000000000000000000000000000000000000001690871617815596516001909701969096558785015190549093168252606a845280822094825293909252919020546123e291611e0a565b73ffffffffffffffffffffffffffffffffffffffff80861660009081526067602090815260408083205484168352606a8252808320938a1683529290522055505b73ffffffffffffffffffffffffffffffffffffffff8216156125685773ffffffffffffffffffffffffffffffffffffffff8083166000908152606560209081526040808320888516845282529182902082518084019093528054909316825260019092015481830181905291830151909161249d91611e81565b602082810191825273ffffffffffffffffffffffffffffffffffffffff87811680855286821660008181526065855260408082208483528652808220885181547fffffffffffffffffffffffff0000000000000000000000000000000000000000169616959095178555955160019094019390935586840151908352606a84528483209183529252919091205461253391611e81565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152606a60209081526040808320938a1683529290522055505b7f9bbdb5a3120e00393fdc7ac23578124845de7fbeddefd02dfeaf0a62989e743c84848460405161259b9392919061290e565b60405180910390a150505050565b604080518082019091526000808252602082015290565b803573ffffffffffffffffffffffffffffffffffffffff81168114611c5157600080fd5b60008083601f8401126125f5578182fd5b50813567ffffffffffffffff81111561260c578182fd5b602083019150836020808302850101111561262657600080fd5b9250929050565b60006080828403121561263e578081fd5b6040516080810181811067ffffffffffffffff8211171561265b57fe5b60405282358152905080612671602084016125c0565b6020820152612682604084016125c0565b6040820152606083013560608201525092915050565b6000602082840312156126a9578081fd5b6114f4826125c0565b600080604083850312156126c4578081fd5b6126cd836125c0565b91506126db602084016125c0565b90509250929050565b6000806000604084860312156126f8578081fd5b612701846125c0565b9250602084013567ffffffffffffffff81111561271c578182fd5b612728868287016125e4565b9497909650939450505050565b6000806000806060858703121561274a578081fd5b612753856125c0565b935060208501359250604085013567ffffffffffffffff80821115612776578283fd5b818701915087601f830112612789578283fd5b813581811115612797578384fd5b8860208285010111156127a8578384fd5b95989497505060200194505050565b600080602083850312156127c9578182fd5b823567ffffffffffffffff8111156127df578283fd5b6127eb858286016125e4565b90969095509350505050565b60008060208385031215612809578182fd5b823567ffffffffffffffff80821115612820578384fd5b818501915085601f830112612833578384fd5b813581811115612841578485fd5b866020606083028501011115612855578485fd5b60209290920196919550909350505050565b600060808284031215612878578081fd5b6040516080810181811067ffffffffffffffff8211171561289557fe5b604052823581526128a8602084016125c0565b60208201526128b9604084016125c0565b6040820152606083013560608201528091505092915050565b6000608082840312156128e3578081fd5b6114f4838361262d565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff93841681529183166020830152909116604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff9586168152939094166020840152604083019190915215156060820152901515608082015260a00190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b60208082528181018390526000908460408401835b868110156129f25773ffffffffffffffffffffffffffffffffffffffff6129df846125c0565b16825291830191908301906001016129b9565b509695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015612a4b57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101612a19565b50909695505050505050565b602080825282518282018190526000919060409081850190868401855b82811015612aaf578151805173ffffffffffffffffffffffffffffffffffffffff168552860151868501529284019290850190600101612a74565b5091979650505050505050565b901515815260200190565b90815260200190565b6020808252600c908201527f494e56414c49445f46524f4d0000000000000000000000000000000000000000604082015260600190565b60208082526015908201527f494e56414c49445f544f4b454e5f414444524553530000000000000000000000604082015260600190565b60208082526010908201527f4556454e545f50524f58595f4f4e4c5900000000000000000000000000000000604082015260600190565b6020808252600d908201527f494e56414c49445f544f4b454e00000000000000000000000000000000000000604082015260600190565b60208082526007908201527f4e4f5f53454c4600000000000000000000000000000000000000000000000000604082015260600190565b60208082526008908201527f4144445f4641494c000000000000000000000000000000000000000000000000604082015260600190565b60208082526017908201527f494e56414c49445f4143434f554e545f41444452455353000000000000000000604082015260600190565b6020808252600c908201527f5a45524f5f414444524553530000000000000000000000000000000000000000604082015260600190565b60208082526009908201527f4e4f5f544f4b454e530000000000000000000000000000000000000000000000604082015260600190565b6020808252600b908201527f52454d4f56455f4641494c000000000000000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f4556454e545f545950450000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f524f4f545f50524f58590000000000000000000000000000604082015260600190565b60208082526011908201527f544f4b454e5f5741535f52454d4f564544000000000000000000000000000000604082015260600190565b60208082526011908201527f414c52454144595f44454c454741544545000000000000000000000000000000604082015260600190565b60208082526011908201527f414c52454144595f44454c454741544f5200000000000000000000000000000060408201526060019056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564a264697066735822122002c4429dce9cead19814e1e7559bbfb1a370116159262088852263125e888a5a64736f6c63430007060033";

export class BalanceTracker__factory extends ContractFactory {
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
  ): Promise<BalanceTracker> {
    return super.deploy(overrides || {}) as Promise<BalanceTracker>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BalanceTracker {
    return super.attach(address) as BalanceTracker;
  }
  connect(signer: Signer): BalanceTracker__factory {
    return super.connect(signer) as BalanceTracker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BalanceTrackerInterface {
    return new utils.Interface(_abi) as BalanceTrackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BalanceTracker {
    return new Contract(address, _abi, signerOrProvider) as BalanceTracker;
  }
}
