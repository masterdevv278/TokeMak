/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapController,
  UniswapControllerInterface,
} from "../UniswapController";

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
    name: "UNISWAP_FACTORY",
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
    name: "UNISWAP_ROUTER",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610180604052604051620000139062000246565b60405190819003812060e0526200002a906200021d565b60405190819003812061010052620000429062000264565b604051908190039020610120523480156200005c57600080fd5b5060405162001e8038038062001e808339810160408190526200007f916200019e565b8282826001600160a01b038316620000b45760405162461bcd60e51b8152600401620000ab906200028d565b60405180910390fd5b6001600160a01b038216620000dd5760405162461bcd60e51b8152600401620000ab906200028d565b6001600160a01b038116620001065760405162461bcd60e51b8152600401620000ab906200028d565b6001600160601b0319606093841b811660805291831b821660a05290911b1660c0526001600160a01b038516620001515760405162461bcd60e51b8152600401620000ab90620002df565b6001600160a01b0384166200017a5760405162461bcd60e51b8152600401620000ab90620002b6565b5050506001600160601b0319606092831b811661014052911b166101605262000320565b600080600080600060a08688031215620001b6578081fd5b8551620001c38162000307565b6020870151909550620001d68162000307565b6040870151909450620001e98162000307565b6060870151909350620001fc8162000307565b60808701519092506200020f8162000307565b809150509295509295909350565b7f52454d4f56455f4c49515549444954595f524f4c450000000000000000000000815260150190565b714144445f4c49515549444954595f524f4c4560701b815260120190565b7f4d4953435f4f5045524154494f4e5f524f4c4500000000000000000000000000815260130190565b6020808252600f908201526e494e56414c49445f4144445245535360881b604082015260600190565b6020808252600f908201526e494e56414c49445f464143544f525960881b604082015260600190565b6020808252600e908201526d24a72b20a624a22fa927aaaa22a960911b604082015260600190565b6001600160a01b03811681146200031d57600080fd5b50565b60805160601c60a05160601c60c05160601c60e05161010051610120516101405160601c6101605160601c611a94620003ec600039806104925280610a385280610ec25250806105cc5280610c275280610ee65280610f555280610fe4528061101e525080610e7a52508061079f5280610e9e5250806101e25280610e0e52508061030552806103c052806108bf528061097a5280610f0a5250806101b552806107725280610e32525080610158528061029f528061071e52806108595280610e565250611a946000f3fe608060405234801561001057600080fd5b50600436106100bd5760003560e01c806361bea27f11610076578063c74c0fac1161005b578063c74c0fac14610135578063d82649201461013d578063f3ad65f414610145576100bd565b806361bea27f146101255780637e841d541461012d576100bd565b80630f967dd6116100a75780630f967dd6146100ea57806313007d5514610108578063481c6a751461011d576100bd565b8062774360146100c25780630968f264146100d7575b600080fd5b6100d56100d0366004611537565b61014d565b005b6100d56100e5366004611537565b610713565b6100f2610e0c565b6040516100ff91906116f5565b60405180910390f35b610110610e30565b6040516100ff9190611625565b610110610e54565b6100f2610e78565b6100f2610e9c565b610110610ec0565b610110610ee4565b610110610f08565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461019e5760405162461bcd60e51b8152600401610195906118ef565b60405180910390fd5b604051632474521560e21b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906391d148549061020c907f00000000000000000000000000000000000000000000000000000000000000009033906004016116fe565b60206040518083038186803b15801561022457600080fd5b505afa158015610238573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025c9190611517565b6102785760405162461bcd60e51b815260040161019590611813565b60008080808080808061028d898b018b61149c565b975097509750975097509750975097507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316146102ee5760405162461bcd60e51b81526004016101959061184a565b6040516303adac9960e61b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063eb6b26409061033d908b906000906004016116dc565b60206040518083038186803b15801561035557600080fd5b505afa158015610369573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038d9190611517565b6103a95760405162461bcd60e51b81526004016101959061177f565b6040516303adac9960e61b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063eb6b2640906103f8908a906000906004016116dc565b60206040518083038186803b15801561041057600080fd5b505afa158015610424573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104489190611517565b6104645760405162461bcd60e51b81526004016101959061177f565b61046e8887610f2c565b6104788786610f2c565b60405163e6a4390560e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e6a43905906104c9908c908c90600401611639565b60206040518083038186803b1580156104e157600080fd5b505afa1580156104f5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610519919061140f565b90506000816001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016105499190611625565b60206040518083038186803b15801561056157600080fd5b505afa158015610575573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059991906115a1565b6040517fe8e337000000000000000000000000000000000000000000000000000000000081529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e8e337009061060f908d908d908d908d908d908d908d908d90600401611693565b606060405180830381600087803b15801561062957600080fd5b505af115801561063d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066191906115dc565b50506040516370a0823160e01b8152600091506001600160a01b038416906370a0823190610693903090600401611625565b60206040518083038186803b1580156106ab57600080fd5b505afa1580156106bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e391906115a1565b90508181116107045760405162461bcd60e51b81526004016101959061195d565b50505050505050505050505050565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461075b5760405162461bcd60e51b8152600401610195906118ef565b604051632474521560e21b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906391d14854906107c9907f00000000000000000000000000000000000000000000000000000000000000009033906004016116fe565b60206040518083038186803b1580156107e157600080fd5b505afa1580156107f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108199190611517565b6108355760405162461bcd60e51b8152600401610195906118b8565b6000808080808080610849888a018a61142b565b96509650965096509650965096507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b0316146108a85760405162461bcd60e51b81526004016101959061184a565b6040516303adac9960e61b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063eb6b2640906108f7908a906000906004016116dc565b60206040518083038186803b15801561090f57600080fd5b505afa158015610923573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109479190611517565b6109635760405162461bcd60e51b81526004016101959061177f565b6040516303adac9960e61b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063eb6b2640906109b29089906000906004016116dc565b60206040518083038186803b1580156109ca57600080fd5b505afa1580156109de573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a029190611517565b610a1e5760405162461bcd60e51b81526004016101959061177f565b60405163e6a4390560e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e6a4390590610a6f908b908b90600401611639565b60206040518083038186803b158015610a8757600080fd5b505afa158015610a9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abf919061140f565b90506001600160a01b038116610ae75760405162461bcd60e51b815260040161019590611881565b610af18187610f2c565b6040516370a0823160e01b8152889088906000906001600160a01b038416906370a0823190610b24903090600401611625565b60206040518083038186803b158015610b3c57600080fd5b505afa158015610b50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b7491906115a1565b90506000826001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610ba49190611625565b60206040518083038186803b158015610bbc57600080fd5b505afa158015610bd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf491906115a1565b6040517fbaa2abde0000000000000000000000000000000000000000000000000000000081529091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063baa2abde90610c68908f908f908f908f908f908f908f90600401611653565b6040805180830381600087803b158015610c8157600080fd5b505af1158015610c95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb991906115b9565b50506040516370a0823160e01b81526000906001600160a01b038616906370a0823190610cea903090600401611625565b60206040518083038186803b158015610d0257600080fd5b505afa158015610d16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3a91906115a1565b90506000846001600160a01b03166370a08231306040518263ffffffff1660e01b8152600401610d6a9190611625565b60206040518083038186803b158015610d8257600080fd5b505afa158015610d96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dba91906115a1565b9050838211610ddb5760405162461bcd60e51b81526004016101959061195d565b828111610dfa5760405162461bcd60e51b81526004016101959061195d565b50505050505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b604051636eb1769f60e11b81526000906001600160a01b0384169063dd62ed3e90610f7d9030907f000000000000000000000000000000000000000000000000000000000000000090600401611639565b60206040518083038186803b158015610f9557600080fd5b505afa158015610fa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcd91906115a1565b9050801561100f5761100f6001600160a01b0384167f00000000000000000000000000000000000000000000000000000000000000008363ffffffff61104e16565b6110496001600160a01b0384167f00000000000000000000000000000000000000000000000000000000000000008463ffffffff61118316565b505050565b60006110f882604051806060016040528060298152602001611a3660299139604051636eb1769f60e11b81526001600160a01b0388169063dd62ed3e9061109b9030908a90600401611639565b60206040518083038186803b1580156110b357600080fd5b505afa1580156110c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110eb91906115a1565b919063ffffffff61121316565b905061117d8463095ea7b360e01b85846040516024016111199291906116dc565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611244565b50505050565b60006110f882856001600160a01b031663dd62ed3e30876040518363ffffffff1660e01b81526004016111b7929190611639565b60206040518083038186803b1580156111cf57600080fd5b505afa1580156111e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120791906115a1565b9063ffffffff6112d316565b600081848411156112375760405162461bcd60e51b81526004016101959190611715565b50508183035b9392505050565b6060611299826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112f89092919063ffffffff16565b80519091501561104957808060200190518101906112b79190611517565b6110495760405162461bcd60e51b815260040161019590611994565b60008282018381101561123d5760405162461bcd60e51b815260040161019590611748565b6060611307848460008561130f565b949350505050565b6060824710156113315760405162461bcd60e51b8152600401610195906117b6565b61133a856113d0565b6113565760405162461bcd60e51b815260040161019590611926565b60006060866001600160a01b031685876040516113739190611609565b60006040518083038185875af1925050503d80600081146113b0576040519150601f19603f3d011682016040523d82523d6000602084013e6113b5565b606091505b50915091506113c58282866113d6565b979650505050505050565b3b151590565b606083156113e557508161123d565b8251156113f55782518084602001fd5b8160405162461bcd60e51b81526004016101959190611715565b600060208284031215611420578081fd5b815161123d81611a1d565b600080600080600080600060e0888a031215611445578283fd5b873561145081611a1d565b9650602088013561146081611a1d565b955060408801359450606088013593506080880135925060a088013561148581611a1d565b8092505060c0880135905092959891949750929550565b600080600080600080600080610100898b0312156114b8578081fd5b88356114c381611a1d565b975060208901356114d381611a1d565b965060408901359550606089013594506080890135935060a0890135925060c08901356114ff81611a1d565b8092505060e089013590509295985092959890939650565b600060208284031215611528578081fd5b8151801515811461123d578182fd5b60008060208385031215611549578182fd5b823567ffffffffffffffff80821115611560578384fd5b81850186601f820112611571578485fd5b8035925081831115611581578485fd5b866020848301011115611592578485fd5b60200196919550909350505050565b6000602082840312156115b2578081fd5b5051919050565b600080604083850312156115cb578182fd5b505080516020909101519092909150565b6000806000606084860312156115f0578283fd5b8351925060208401519150604084015190509250925092565b6000825161161b8184602087016119f1565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039788168152958716602087015260408601949094526060850192909252608084015290921660a082015260c081019190915260e00190565b6001600160a01b039889168152968816602088015260408701959095526060860193909352608085019190915260a084015290921660c082015260e08101919091526101000190565b6001600160a01b03929092168252602082015260400190565b90815260200190565b9182526001600160a01b0316602082015260400190565b60006020825282518060208401526117348160408501602087016119f1565b601f01601f19169190910160400192915050565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252600d908201527f494e56414c49445f544f4b454e00000000000000000000000000000000000000604082015260600190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60408201527f722063616c6c0000000000000000000000000000000000000000000000000000606082015260800190565b60208082526016908201527f4e4f545f4144445f4c49515549444954595f524f4c4500000000000000000000604082015260600190565b6020808252600f908201527f4d5553545f42455f4d414e414745520000000000000000000000000000000000604082015260600190565b60208082526012908201527f7061697220646f65736e27742065786973740000000000000000000000000000604082015260600190565b60208082526019908201527f4e4f545f52454d4f56455f4c49515549444954595f524f4c4500000000000000604082015260600190565b60208082526013908201527f4e4f545f4d414e414745525f4144445245535300000000000000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252600d908201527f4d5553545f494e43524541534500000000000000000000000000000000000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60408201527f6f74207375636365656400000000000000000000000000000000000000000000606082015260800190565b60005b83811015611a0c5781810151838201526020016119f4565b8381111561117d5750506000910152565b6001600160a01b0381168114611a3257600080fd5b5056fe5361666545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212205414f16eee7c96abaaef34433d2ce38f675133976b3402d6cb0a10bd00a0803864736f6c634300060b0033";

export class UniswapController__factory extends ContractFactory {
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
    manager: string,
    accessControl: string,
    addressRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapController> {
    return super.deploy(
      router,
      factory,
      manager,
      accessControl,
      addressRegistry,
      overrides || {}
    ) as Promise<UniswapController>;
  }
  getDeployTransaction(
    router: string,
    factory: string,
    manager: string,
    accessControl: string,
    addressRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      router,
      factory,
      manager,
      accessControl,
      addressRegistry,
      overrides || {}
    );
  }
  attach(address: string): UniswapController {
    return super.attach(address) as UniswapController;
  }
  connect(signer: Signer): UniswapController__factory {
    return super.connect(signer) as UniswapController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapControllerInterface {
    return new utils.Interface(_abi) as UniswapControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapController {
    return new Contract(address, _abi, signerOrProvider) as UniswapController;
  }
}
