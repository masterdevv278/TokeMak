/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Rewards, RewardsInterface } from "../Rewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "signerAddress",
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
        indexed: false,
        internalType: "uint256",
        name: "cycle",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Claimed",
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
        name: "newSigner",
        type: "address",
      },
    ],
    name: "SignerSet",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cycle",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IRewards.Recipient",
        name: "recipient",
        type: "tuple",
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
    name: "claim",
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
    name: "claimedAmounts",
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
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cycle",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct IRewards.Recipient",
        name: "recipient",
        type: "tuple",
      },
    ],
    name: "getClaimableAmount",
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
    name: "rewardsSigner",
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
        name: "newSigner",
        type: "address",
      },
    ],
    name: "setSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokeToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
  "0x60c06040523480156200001157600080fd5b506040516200162838038062001628833981016040819052620000349162000216565b6000620000496001600160e01b03620001a116565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160a01b038216620000c55760405162461bcd60e51b8152600401620000bc90620002ea565b60405180910390fd5b6001600160a01b038116620000ee5760405162461bcd60e51b8152600401620000bc9062000321565b606082901b6001600160601b03191660a0908152600280546001600160a01b0319166001600160a01b0384161790556040805160c081018252601160808201908152702a27a5a2902234b9ba3934b13aba34b7b760791b938201939093529182528051808201825260018152603160f81b60208083019190915283015262000195919081016200017d620001a5565b8152306020909101526001600160e01b03620001a916565b60805250620003719050565b3390565b4690565b6000604051620001b99062000254565b604051809103902082600001518051906020012083602001518051906020012084604001518560600151604051602001620001f9959493929190620002be565b604051602081830303815290604052805190602001209050919050565b6000806040838503121562000229578182fd5b8251620002368162000358565b6020840151909250620002498162000358565b809150509250929050565b7f454950373132446f6d61696e28737472696e67206e616d652c737472696e672081527f76657273696f6e2c75696e7432353620636861696e49642c6164647265737320602082015271766572696679696e67436f6e74726163742960701b604082015260520190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b60208082526014908201527f496e76616c696420544f4b452041646472657373000000000000000000000000604082015260600190565b60208082526016908201527f496e76616c6964205369676e6572204164647265737300000000000000000000604082015260600190565b6001600160a01b03811681146200036e57600080fd5b50565b60805160a05160601c611286620003a26000398061014e528061049352806105cc52508061075b52506112866000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80638da5cb5b11610076578063e1fc86911161005b578063e1fc86911461011e578063efd5d26514610131578063f2fde38b14610139576100a3565b80638da5cb5b14610103578063a68d49e91461010b576100a3565b80634e67b54b146100a85780636c19e783146100c657806371417b32146100db578063715018a6146100fb575b600080fd5b6100b061014c565b6040516100bd9190610d58565b60405180910390f35b6100d96100d4366004610b71565b610170565b005b6100ee6100e9366004610b71565b610241565b6040516100bd91906111f8565b6100d9610253565b6100b06102e9565b6100ee610119366004610bac565b6102f8565b6100d961012c366004610bc7565b610341565b6100b061064f565b6100d9610147366004610b71565b61065e565b7f000000000000000000000000000000000000000000000000000000000000000081565b61017861072b565b6001600160a01b03166101896102e9565b6001600160a01b0316146101b85760405162461bcd60e51b81526004016101af906110f8565b60405180910390fd5b6001600160a01b0381166101de5760405162461bcd60e51b81526004016101af90611164565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383161790556040517f9eaa897564d022fb8c5efaf0acdb5d9d27b440b2aad44400b6e1c702e65b9ed390610236908390610d58565b60405180910390a150565b60016020526000908152604090205481565b61025b61072b565b6001600160a01b031661026c6102e9565b6001600160a01b0316146102925760405162461bcd60e51b81526004016101af906110f8565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031690565b600061033b6001826103106060860160408701610b71565b6001600160a01b0316815260208101919091526040016000205460608401359063ffffffff61072f16565b92915050565b600061036e84848461036061035b368b90038b018b610c10565b610757565b92919063ffffffff6107b116565b6002549091506001600160a01b0380831691161461039e5760405162461bcd60e51b81526004016101af906110c1565b6103a66108a7565b8535146103c55760405162461bcd60e51b81526004016101af90610e39565b336103d66060870160408801610b71565b6001600160a01b0316146103fc5760405162461bcd60e51b81526004016101af90611048565b600061043f60018261041460608a0160408b01610b71565b6001600160a01b0316815260208101919091526040016000205460608801359063ffffffff61072f16565b9050600081116104615760405162461bcd60e51b81526004016101af90611011565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815281906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a08231906104c8903090600401610d58565b60206040518083038186803b1580156104e057600080fd5b505afa1580156104f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105189190610c79565b10156105365760405162461bcd60e51b81526004016101af90610f04565b610574816001600061054e60608b0160408c01610b71565b6001600160a01b031681526020810191909152604001600020549063ffffffff6108ab16565b6001600061058860608a0160408b01610b71565b6001600160a01b03166001600160a01b03168152602001908152602001600020819055506105f98660400160208101906105c29190610b71565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016908363ffffffff6108d716565b7f4ec90e965519d92681267467f775ada5bd214aa92c0dc93d90a5e880ce9ed026602087013561062f6060890160408a01610b71565b8360405161063f93929190611201565b60405180910390a1505050505050565b6002546001600160a01b031681565b61066661072b565b6001600160a01b03166106776102e9565b6001600160a01b03161461069d5760405162461bcd60e51b81526004016101af906110f8565b6001600160a01b0381166106c35760405162461bcd60e51b81526004016101af90610e70565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b3390565b6000828211156107515760405162461bcd60e51b81526004016101af90610f3b565b50900390565b60007f00000000000000000000000000000000000000000000000000000000000000006107838361095f565b604051602001610794929190610cad565b604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156107f35760405162461bcd60e51b81526004016101af90610f72565b8360ff16601b148061080857508360ff16601c145b6108245760405162461bcd60e51b81526004016101af9061107f565b6000600186868686604051600081526020016040526040516108499493929190610db1565b6020604051602081039080840390855afa15801561086b573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661089e5760405162461bcd60e51b81526004016101af90610e02565b95945050505050565b4690565b6000828201838110156108d05760405162461bcd60e51b81526004016101af90610ecd565b9392505050565b61095a8363a9059cbb60e01b84846040516024016108f6929190610d6c565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261099d565b505050565b600060405161096d90610ce3565b60405180910390208260000151836020015184604001518560600151604051602001610794959493929190610d85565b60606109f2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610a2c9092919063ffffffff16565b80519091501561095a5780806020019051810190610a109190610b8c565b61095a5760405162461bcd60e51b81526004016101af9061119b565b6060610a3b8484600085610a43565b949350505050565b606082471015610a655760405162461bcd60e51b81526004016101af90610fb4565b610a6e85610b04565b610a8a5760405162461bcd60e51b81526004016101af9061112d565b60006060866001600160a01b03168587604051610aa79190610c91565b60006040518083038185875af1925050503d8060008114610ae4576040519150601f19603f3d011682016040523d82523d6000602084013e610ae9565b606091505b5091509150610af9828286610b0a565b979650505050505050565b3b151590565b60608315610b195750816108d0565b825115610b295782518084602001fd5b8160405162461bcd60e51b81526004016101af9190610dcf565b80356001600160a01b038116811461033b57600080fd5b600060808284031215610b6b578081fd5b50919050565b600060208284031215610b82578081fd5b6108d08383610b43565b600060208284031215610b9d578081fd5b815180151581146108d0578182fd5b600060808284031215610bbd578081fd5b6108d08383610b5a565b60008060008060e08587031215610bdc578283fd5b610be68686610b5a565b9350608085013560ff81168114610bfb578384fd5b939693955050505060a08201359160c0013590565b600060808284031215610c21578081fd5b6040516080810181811067ffffffffffffffff82111715610c40578283fd5b80604052508235815260208301356020820152610c608460408501610b43565b6040820152606083013560608201528091505092915050565b600060208284031215610c8a578081fd5b5051919050565b60008251610ca3818460208701611220565b9190910192915050565b7f190100000000000000000000000000000000000000000000000000000000000081526002810192909252602282015260420190565b7f526563697069656e742875696e7432353620636861696e49642c75696e74323581527f36206379636c652c616464726573732077616c6c65742c75696e74323536206160208201527f6d6f756e74290000000000000000000000000000000000000000000000000000604082015260460190565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b948552602085019390935260408401919091526001600160a01b03166060830152608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082528251806020840152610dee816040850160208701611220565b601f01601f19169190910160400192915050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b6020808252600f908201527f496e76616c696420636861696e49640000000000000000000000000000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526012908201527f496e73756666696369656e742046756e64730000000000000000000000000000604082015260600190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b60208082526018908201527f496e76616c696420636c61696d61626c6520616d6f756e740000000000000000604082015260600190565b60208082526016908201527f53656e6465722077616c6c6574204d69736d6174636800000000000000000000604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b60208082526011908201527f496e76616c6964205369676e6174757265000000000000000000000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b60208082526016908201527f496e76616c6964205369676e6572204164647265737300000000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b90815260200190565b9283526001600160a01b03919091166020830152604082015260600190565b60005b8381101561123b578181015183820152602001611223565b8381111561124a576000848401525b5050505056fea264697066735822122051fadaafcde3977c534c272d726d901b01624797c4be2b0ed85a1318189b6ab664736f6c634300060b0033";

export class Rewards__factory extends ContractFactory {
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
    token: string,
    signerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Rewards> {
    return super.deploy(
      token,
      signerAddress,
      overrides || {}
    ) as Promise<Rewards>;
  }
  getDeployTransaction(
    token: string,
    signerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, signerAddress, overrides || {});
  }
  attach(address: string): Rewards {
    return super.attach(address) as Rewards;
  }
  connect(signer: Signer): Rewards__factory {
    return super.connect(signer) as Rewards__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardsInterface {
    return new utils.Interface(_abi) as RewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Rewards {
    return new Contract(address, _abi, signerOrProvider) as Rewards;
  }
}
