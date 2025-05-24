export const InvestmentContractAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_fundName",
        type: "string",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxDeposit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_withdrawalFreezePeriod",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pauser",
        type: "address",
      },
      {
        internalType: "address",
        name: "_investor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_commissionRate",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "EmergencyPaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address",
      },
    ],
    name: "EmergencyUnpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "newFundName",
        type: "string",
      },
    ],
    name: "FundNameUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "investor",
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
        internalType: "string",
        name: "protocol",
        type: "string",
      },
    ],
    name: "InvestmentWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "parameter",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "ParameterUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "totalProfit",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "commission",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "creatorTax",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "ProfitDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "role",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "granted",
        type: "bool",
      },
    ],
    name: "RoleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawalProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
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
        internalType: "uint256",
        name: "unlockTime",
        type: "uint256",
      },
    ],
    name: "WithdrawalRequested",
    type: "event",
  },
  {
    inputs: [],
    name: "NAME",
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
    name: "VERSION",
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
    name: "commissionRate",
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
    name: "creator",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "depositSnapshots",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalDeposits",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositTokens",
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
    name: "deposits",
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
        internalType: "int256",
        name: "profit",
        type: "int256",
      },
    ],
    name: "distributeProfit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "emergencyPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyUnpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fundName",
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
    name: "getAnnualReturnRate",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCommissionRate",
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
    name: "getContractBalance",
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
    name: "getFundName",
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
    name: "getInvestor",
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
    name: "getInvestorBalance",
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
    name: "getLastProfitDistributionTime",
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
    name: "getMaxDeposit",
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
    name: "getMinDeposit",
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
    name: "getName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
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
    name: "getPaused",
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
    inputs: [],
    name: "getPauser",
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
    name: "getPendingWithdrawalTotal",
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
    name: "getToken",
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
    name: "getTotalDeposits",
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
        name: "user",
        type: "address",
      },
    ],
    name: "getUserDeposit",
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
        name: "user",
        type: "address",
      },
    ],
    name: "getUserWithdrawalRequestCount",
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
    name: "getVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getWithdrawalFreezePeriod",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getWithdrawalRequest",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unlockTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "processed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "investor",
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
    name: "lastProfitDistributionTime",
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
    name: "maxDeposit",
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
    name: "minDeposit",
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
    name: "paused",
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
    inputs: [],
    name: "pauser",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "profitHistory",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "profit",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "requestWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "setCommissionRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newFundName",
        type: "string",
      },
    ],
    name: "setFundName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newInvestor",
        type: "address",
      },
    ],
    name: "setInvestor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMax",
        type: "uint256",
      },
    ],
    name: "setMaxDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMin",
        type: "uint256",
      },
    ],
    name: "setMinDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPauser",
        type: "address",
      },
    ],
    name: "setPauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newPeriod",
        type: "uint256",
      },
    ],
    name: "setWithdrawalFreezePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
    inputs: [],
    name: "totalDeposits",
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
    name: "totalPendingWithdrawals",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "users",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "protocol",
        type: "string",
      },
    ],
    name: "withdrawForInvestment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "withdrawShare",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawalFreezePeriod",
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
    name: "withdrawalRequests",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unlockTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "processed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const InvestmentContractBytecode =
  "60a0604052732cd1b9b6e315a60e075ab710d8b0b3a58dc3a15773ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff168152505f60095f6101000a81548160ff02191690831515021790555034801561006f575f80fd5b50604051616930380380616930833981810160405281019061009191906105b5565b60015f819055505f8951116100db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100d2906106ef565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1603610149576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014090610757565b60405180910390fd5b5f871161018b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610182906107e5565b60405180910390fd5b868610156101ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c590610873565b60405180910390fd5b610e10851015610213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020a906108db565b60405180910390fd5b6064811115610257576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024e90610943565b60405180910390fd5b5f81101561029a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610291906109ab565b60405180910390fd5b88600190816102a99190610bcd565b508360025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160045f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508760055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600a8190555085600b8190555084600c8190555080600f819055505f601081905550505050505050505050610c9c565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61043a826103f4565b810181811067ffffffffffffffff8211171561045957610458610404565b5b80604052505050565b5f61046b6103db565b90506104778282610431565b919050565b5f67ffffffffffffffff82111561049657610495610404565b5b61049f826103f4565b9050602081019050919050565b8281835e5f83830152505050565b5f6104cc6104c78461047c565b610462565b9050828152602081018484840111156104e8576104e76103f0565b5b6104f38482856104ac565b509392505050565b5f82601f83011261050f5761050e6103ec565b5b815161051f8482602086016104ba565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61055182610528565b9050919050565b61056181610547565b811461056b575f80fd5b50565b5f8151905061057c81610558565b92915050565b5f819050919050565b61059481610582565b811461059e575f80fd5b50565b5f815190506105af8161058b565b92915050565b5f805f805f805f805f6101208a8c0312156105d3576105d26103e4565b5b5f8a015167ffffffffffffffff8111156105f0576105ef6103e8565b5b6105fc8c828d016104fb565b995050602061060d8c828d0161056e565b985050604061061e8c828d016105a1565b975050606061062f8c828d016105a1565b96505060806106408c828d016105a1565b95505060a06106518c828d0161056e565b94505060c06106628c828d0161056e565b93505060e06106738c828d0161056e565b9250506101006106858c828d016105a1565b9150509295985092959850929598565b5f82825260208201905092915050565b7f46756e64206e616d652063616e6e6f7420626520656d707479000000000000005f82015250565b5f6106d9601983610695565b91506106e4826106a5565b602082019050919050565b5f6020820190508181035f830152610706816106cd565b9050919050565b7f496e76616c696420746f6b656e206164647265737300000000000000000000005f82015250565b5f610741601583610695565b915061074c8261070d565b602082019050919050565b5f6020820190508181035f83015261076e81610735565b9050919050565b7f4d696e206465706f736974206d7573742062652067726561746572207468616e5f8201527f2030000000000000000000000000000000000000000000000000000000000000602082015250565b5f6107cf602283610695565b91506107da82610775565b604082019050919050565b5f6020820190508181035f8301526107fc816107c3565b9050919050565b7f4d6178206465706f736974206d757374206265203e3d206d696e206465706f735f8201527f6974000000000000000000000000000000000000000000000000000000000000602082015250565b5f61085d602283610695565b915061086882610803565b604082019050919050565b5f6020820190508181035f83015261088a81610851565b9050919050565b7f467265657a6520706572696f6420746f6f2073686f72740000000000000000005f82015250565b5f6108c5601783610695565b91506108d082610891565b602082019050919050565b5f6020820190508181035f8301526108f2816108b9565b9050919050565b7f436f6d6d697373696f6e2072617465206d757374206265203c3d2031303000005f82015250565b5f61092d601e83610695565b9150610938826108f9565b602082019050919050565b5f6020820190508181035f83015261095a81610921565b9050919050565b7f436f6d6d697373696f6e2072617465206d757374206265203e3d2030000000005f82015250565b5f610995601c83610695565b91506109a082610961565b602082019050919050565b5f6020820190508181035f8301526109c281610989565b9050919050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610a1757607f821691505b602082108103610a2a57610a296109d3565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302610a8c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a51565b610a968683610a51565b95508019841693508086168417925050509392505050565b5f819050919050565b5f610ad1610acc610ac784610582565b610aae565b610582565b9050919050565b5f819050919050565b610aea83610ab7565b610afe610af682610ad8565b848454610a5d565b825550505050565b5f90565b610b12610b06565b610b1d818484610ae1565b505050565b5b81811015610b4057610b355f82610b0a565b600181019050610b23565b5050565b601f821115610b8557610b5681610a30565b610b5f84610a42565b81016020851015610b6e578190505b610b82610b7a85610a42565b830182610b22565b50505b505050565b5f82821c905092915050565b5f610ba55f1984600802610b8a565b1980831691505092915050565b5f610bbd8383610b96565b9150826002028217905092915050565b610bd6826109c9565b67ffffffffffffffff811115610bef57610bee610404565b5b610bf98254610a00565b610c04828285610b44565b5f60209050601f831160018114610c35575f8415610c23578287015190505b610c2d8582610bb2565b865550610c94565b601f198416610c4386610a30565b5f5b82811015610c6a57848901518255600182019150602085019450602081019050610c45565b86831015610c875784890151610c83601f891682610b96565b8355505b6001600288020188555050505b505050505050565b608051615c59610cd75f395f8181610a9b015281816131ab01528181613213015281816132740152818161342f01526134890152615c595ff3fe608060405234801561000f575f80fd5b5060043610610381575f3560e01c8063777dc24a116101dc578063a87fe87e1161010d578063d46c00c0116100ab578063fc0c546a1161007a578063fc0c546a14610a11578063fc7e286d14610a2f578063fe21268c14610a5f578063ffa1ad7414610a7b57610381565b8063d46c00c014610987578063dd49756e146109a5578063e23f4da5146109c1578063f2847e64146109df57610381565b8063b6b55f25116100e7578063b6b55f2514610903578063bb371fdd1461091f578063c084b10b1461093b578063cf5b4fd51461096b57610381565b8063a87fe87e146108ab578063af13d910146108c9578063b02c0c56146108e557610381565b80639c7fc1541161017a5780639fd0506d116101545780639fd0506d14610833578063a3f4df7e14610851578063a4563e031461086f578063a4dbc6a81461088d57610381565b80639c7fc154146107dd5780639ce1413b146107f95780639ee679e81461081757610381565b80637d882097116101b65780637d88209714610767578063893d20e8146107855780638da5cb5b146107a35780638fcc9cfb146107c157610381565b8063777dc24a146106fa578063796c89021461072b5780637b4d065b1461074957610381565b806341b3d185116102b65780635ea1d6f8116102545780636805b84b1161022e5780636805b84b146106845780636f9fb98a146106a25780637008b548146106c0578063773041ce146106de57610381565b80635ea1d6f81461062c5780636083e59a1461064a57806366ba8d551461066857610381565b80634e5a2328116102905780634e5a23281461058d578063550d8366146105bf5780635648af9d146105f05780635c975abb1461060e57610381565b806341b3d185146105495780634377cd5e146105675780634a4e3bd51461058357610381565b806321df0da711610323578063365b98b2116102fd578063365b98b2146104bf57806336651529146104ef5780633b98e4661461050d5780633e4eb36c1461052b57610381565b806321df0da7146104555780632d88af4a146104735780633619bc771461048f57610381565b8063168a48221161035f578063168a4822146103df57806317d7de7c146103fd57806319fac8fd1461041b5780631e0018d61461043757610381565b806302d05d3f146103855780630d8e6e2c146103a35780630eaad3f1146103c1575b5f80fd5b61038d610a99565b60405161039a9190614134565b60405180910390f35b6103ab610abd565b6040516103b891906141bd565b60405180910390f35b6103c9610afa565b6040516103d691906141f5565b60405180910390f35b6103e7610b03565b6040516103f491906141f5565b60405180910390f35b610405610b0c565b60405161041291906141bd565b60405180910390f35b61043560048036038101906104309190614249565b610b49565b005b61043f610ca0565b60405161044c9190614134565b60405180910390f35b61045d610cc5565b60405161046a9190614134565b60405180910390f35b61048d6004803603810190610488919061429e565b610ced565b005b6104a960048036038101906104a4919061429e565b610ec6565b6040516104b691906141f5565b60405180910390f35b6104d960048036038101906104d49190614249565b610f0f565b6040516104e69190614134565b60405180910390f35b6104f7610f4a565b60405161050491906141f5565b60405180910390f35b610515610f53565b60405161052291906141f5565b60405180910390f35b610533610f5c565b60405161054091906141f5565b60405180910390f35b610551610f65565b60405161055e91906141f5565b60405180910390f35b610581600480360381019061057c91906143f5565b610f6b565b005b61058b611087565b005b6105a760048036038101906105a2919061443c565b611174565b6040516105b693929190614494565b60405180910390f35b6105d960048036038101906105d49190614249565b6111c0565b6040516105e79291906144c9565b60405180910390f35b6105f86111ef565b60405161060591906141f5565b60405180910390f35b6106166111f5565b60405161062391906144f0565b60405180910390f35b610634611207565b60405161064191906141f5565b60405180910390f35b61065261120d565b60405161065f91906141f5565b60405180910390f35b610682600480360381019061067d9190614249565b611213565b005b61068c611328565b60405161069991906144f0565b60405180910390f35b6106aa61133d565b6040516106b791906141f5565b60405180910390f35b6106c86113dc565b6040516106d59190614134565b60405180910390f35b6106f860048036038101906106f3919061429e565b611404565b005b610714600480360381019061070f9190614249565b6115dd565b604051610722929190614521565b60405180910390f35b61073361160c565b6040516107409190614134565b60405180910390f35b610751611634565b60405161075e9190614548565b60405180910390f35b61076f6118df565b60405161077c91906141f5565b60405180910390f35b61078d6118e5565b60405161079a9190614134565b60405180910390f35b6107ab61190d565b6040516107b89190614134565b60405180910390f35b6107db60048036038101906107d69190614249565b611932565b005b6107f760048036038101906107f29190614249565b611a89565b005b610801611dd5565b60405161080e91906141bd565b60405180910390f35b610831600480360381019061082c9190614249565b611e61565b005b61083b612140565b6040516108489190614134565b60405180910390f35b610859612165565b60405161086691906141bd565b60405180910390f35b61087761219e565b60405161088491906141f5565b60405180910390f35b6108956121a4565b6040516108a291906141f5565b60405180910390f35b6108b36121ad565b6040516108c091906141bd565b60405180910390f35b6108e360048036038101906108de9190614561565b61223d565b005b6108ed6124fa565b6040516108fa91906141f5565b60405180910390f35b61091d60048036038101906109189190614249565b6125ba565b005b61093960048036038101906109349190614249565b612954565b005b6109556004803603810190610950919061429e565b612a69565b60405161096291906141f5565b60405180910390f35b610985600480360381019061098091906143f5565b612aaf565b005b61098f612ba9565b60405161099c91906141f5565b60405180910390f35b6109bf60048036038101906109ba9190614249565b612baf565b005b6109c9612d08565b6040516109d691906141f5565b60405180910390f35b6109f960048036038101906109f4919061443c565b612d11565b604051610a0893929190614494565b60405180910390f35b610a19612e48565b604051610a269190614616565b60405180910390f35b610a496004803603810190610a44919061429e565b612e6d565b604051610a5691906141f5565b60405180910390f35b610a796004803603810190610a749190614659565b612e82565b005b610a83613d02565b604051610a9091906141bd565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b60606040518060400160405280600581526020017f312e302e30000000000000000000000000000000000000000000000000000000815250905090565b5f600a54905090565b5f600754905090565b60606040518060400160405280601281526020017f496e766573746d656e74436f6e74726163740000000000000000000000000000815250905090565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcf906146ce565b60405180910390fd5b6064811115610c1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1390614736565b60405180910390fd5b5f811015610c5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c569061479e565b60405180910390fd5b80600f819055507f3a64504f0bc0c335e2aecb78638a257e0351a3fe0370861fd54ee4190b92093381604051610c959190614806565b60405180910390a150565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d7c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d73906146ce565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610dea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de19061487c565b60405180910390fd5b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f64e73bff6805de0b6789825ae0104b869cf17040bf0e43f6ee820a435324dd2f815f604051610e809291906148e4565b60405180910390a17f64e73bff6805de0b6789825ae0104b869cf17040bf0e43f6ee820a435324dd2f826001604051610eba9291906148e4565b60405180910390a15050565b5f60115f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20805490509050919050565b600d8181548110610f1e575f80fd5b905f5260205f20015f915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f601054905090565b5f600c54905090565b5f600f54905090565b600a5481565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610ffa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ff1906146ce565b60405180910390fd5b5f81511161103d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103490614968565b60405180910390fd5b806001908161104c9190614b77565b507f15720680018c101cf614059866aae9b88ce50a1e218fbc4a096e811ae8856a3a8160405161107c91906141bd565b60405180910390a150565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611116576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110d90614c90565b60405180910390fd5b5f60095f6101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167ff5cbf596165cc457b2cd92e8d8450827ee314968160a5696402d75766fc52caf60405160405180910390a2565b6011602052815f5260405f20818154811061118d575f80fd5b905f5260205f2090600302015f9150915050805f015490806001015490806002015f9054906101000a900460ff16905083565b601381815481106111cf575f80fd5b905f5260205f2090600202015f91509050805f0154908060010154905082565b600c5481565b60095f9054906101000a900460ff1681565b600f5481565b600b5481565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146112a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611299906146ce565b60405180910390fd5b610e108110156112e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112de90614cf8565b60405180910390fd5b80600c819055507f3a64504f0bc0c335e2aecb78638a257e0351a3fe0370861fd54ee4190b9209338160405161131d9190614d60565b60405180910390a150565b5f60095f9054906101000a900460ff16905090565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016113989190614134565b602060405180830381865afa1580156113b3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113d79190614da0565b905090565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611493576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148a906146ce565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611501576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114f890614e15565b60405180910390fd5b5f60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160045f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f64e73bff6805de0b6789825ae0104b869cf17040bf0e43f6ee820a435324dd2f815f604051611597929190614e7d565b60405180910390a17f64e73bff6805de0b6789825ae0104b869cf17040bf0e43f6ee820a435324dd2f8260016040516115d1929190614e7d565b60405180910390a15050565b601281815481106115ec575f80fd5b905f5260205f2090600202015f91509050805f0154908060010154905082565b5f60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f80601380549050148061164957505f600754145b15611656575f90506118dc565b5f6301e13380426116679190614ee4565b90505f805f80600160138054905061167f9190614ee4565b90505b5f81106117f257846013828154811061169e5761169d614f17565b5b905f5260205f2090600202015f0154106117f2575f808214806116ee57508560136001846116cc9190614ee4565b815481106116dd576116dc614f17565b5b905f5260205f2090600202015f0154105b15611728576013828154811061170757611706614f17565b5b905f5260205f2090600202015f0154426117219190614ee4565b9050611787565b60136001836117379190614ee4565b8154811061174857611747614f17565b5b905f5260205f2090600202015f01546013838154811061176b5761176a614f17565b5b905f5260205f2090600202015f01546117849190614ee4565b90505b806013838154811061179c5761179b614f17565b5b905f5260205f209060020201600101546117b69190614f44565b846117c19190614f85565b935080836117cf9190614f85565b92505f82036117de57506117f2565b5080806117ea90614fb8565b915050611682565b505f8103611806575f9450505050506118dc565b5f8183611813919061500c565b90505f8103611829575f955050505050506118dc565b5f600160128054905061183c9190614ee4565b90505b5f81106118bb57856012828154811061185b5761185a614f17565b5b905f5260205f2090600202015f0154106118bb576012818154811061188357611882614f17565b5b905f5260205f209060020201600101548561189e919061503c565b94505f8103156118bb5780806118b390614fb8565b91505061183f565b50806064856118ca919061507d565b6118d491906150f3565b955050505050505b90565b60075481565b5f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146119c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119b8906146ce565b60405180910390fd5b5f8111611a03576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119fa906151cb565b60405180910390fd5b600b54811115611a48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a3f90615259565b60405180910390fd5b80600a819055507f3a64504f0bc0c335e2aecb78638a257e0351a3fe0370861fd54ee4190b92093381604051611a7e91906152c1565b60405180910390a150565b60095f9054906101000a900460ff1615611ad8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611acf90615337565b60405180910390fd5b611ae0613d3b565b60115f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20805490508110611b62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b599061539f565b60405180910390fd5b5f60115f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208281548110611bb257611bb1614f17565b5b905f5260205f2090600302019050806002015f9054906101000a900460ff1615611c11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c0890615407565b60405180910390fd5b8060010154421015611c58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c4f9061546f565b60405180910390fd5b5f815f015490506001826002015f6101000a81548160ff0219169083151502179055508060105f828254611c8c9190614ee4565b92505081905550611cdf338260055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16613d7f9092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167f5abb0fc89def2ee3226cc48f5621ee8e2b45f6dcc7898d2bdb5d480533c32bc082604051611d2591906141f5565b60405180910390a25f60065f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054148015611db95750600160115f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2080549050145b15611dc857611dc733613dfe565b5b5050611dd2613fcf565b50565b60018054611de2906149b3565b80601f0160208091040260200160405190810160405280929190818152602001828054611e0e906149b3565b8015611e595780601f10611e3057610100808354040283529160200191611e59565b820191905f5260205f20905b815481529060010190602001808311611e3c57829003601f168201915b505050505081565b60095f9054906101000a900460ff1615611eb0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ea790615337565b60405180910390fd5b5f8111611ef2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ee9906154fd565b60405180910390fd5b8060065f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015611f72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611f6990615565565b60405180910390fd5b8060065f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054611fbb9190614ee4565b60065f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508060075461200a9190614ee4565b6007819055505f600c544261201f9190614f85565b905060115f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2060405180606001604052808481526020018381526020015f1515815250908060018154018082558091505060019003905f5260205f2090600302015f909190919091505f820151815f0155602082015181600101556040820151816002015f6101000a81548160ff02191690831515021790555050508160105f8282546120e59190614f85565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f24b91f4f47caf44230a57777a9be744924e82bf666f2d5702faf97df35e60f9f83836040516121349291906144c9565b60405180910390a25050565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040518060400160405280601281526020017f496e766573746d656e74436f6e7472616374000000000000000000000000000081525081565b60105481565b5f600b54905090565b6060600180546121bc906149b3565b80601f01602080910402602001604051908101604052809291908181526020018280546121e8906149b3565b80156122335780601f1061220a57610100808354040283529160200191612233565b820191905f5260205f20905b81548152906001019060200180831161221657829003601f168201915b5050505050905090565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146122cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016122c3906155cd565b60405180910390fd5b60095f9054906101000a900460ff161561231b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161231290615337565b60405180910390fd5b612323613d3b565b5f8211612365576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161235c90615635565b60405180910390fd5b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016123c09190614134565b602060405180830381865afa1580156123db573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906123ff9190614da0565b90508260105461240f9190614f85565b811015612451576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612448906156c3565b60405180910390fd5b61249d338460055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16613d7f9092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167fc2c65a8987d388025391b993490730e0e63a6007f953487a6d8e75ebd92b7f7784846040516124e59291906156e1565b60405180910390a2506124f6613fcf565b5050565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a0823160045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016125769190614134565b602060405180830381865afa158015612591573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906125b59190614da0565b905090565b60095f9054906101000a900460ff1615612609576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161260090615337565b60405180910390fd5b612611613d3b565b600a54811015612656576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161264d90615759565b60405180910390fd5b600b5481111561269b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612692906157c1565b60405180910390fd5b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6126c79190614ee4565b600754111561270b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161270290615829565b60405180910390fd5b61275933308360055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16613fd8909392919063ffffffff16565b8060065f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20546127a29190614f85565b60065f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550806007546127f19190614f85565b600781905550600e5f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f9054906101000a900460ff166128fb57600d33908060018154018082558091505060019003905f5260205f20015f9091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600e5f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff0219169083151502179055505b3373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c8260405161294191906141f5565b60405180910390a2612951613fcf565b50565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146129e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129da906146ce565b60405180910390fd5b600a54811015612a28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612a1f906158b7565b60405180910390fd5b80600b819055507f3a64504f0bc0c335e2aecb78638a257e0351a3fe0370861fd54ee4190b92093381604051612a5e919061591f565b60405180910390a150565b5f60065f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612b3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612b3590614c90565b60405180910390fd5b600160095f6101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167f375c0abd968f4602b557f6ac9a48ffc89820233aa9becc5d7ff1176fd09eafff82604051612b9e91906141bd565b60405180910390a250565b60085481565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612c3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c35906155cd565b60405180910390fd5b5f8111612c80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612c7790615635565b60405180910390fd5b612cce33308360055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16613fd8909392919063ffffffff16565b7f77acf75e237f9aae98f997395832d522bdb695e4a9bd07704936aa889a3667d181604051612cfd91906141f5565b60405180910390a150565b5f600854905090565b5f805f60115f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20805490508410612d96576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d8d9061539f565b60405180910390fd5b5f60115f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208581548110612de657612de5614f17565b5b905f5260205f2090600302016040518060600160405290815f820154815260200160018201548152602001600282015f9054906101000a900460ff1615151515815250509050805f015181602001518260400151935093509350509250925092565b60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6006602052805f5260405f205f915090505481565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612f11576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f08906155cd565b60405180910390fd5b612f19613d3b565b5f8103612f5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f5290615995565b60405180910390fd5b5f60075411612f9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612f96906159fd565b60405180910390fd5b5f805f80841315613667575f8490508060055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016130099190614134565b602060405180830381865afa158015613024573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906130489190614da0565b1015613089576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161308090615a65565b60405180910390fd5b6064600f54826130999190614f44565b6130a3919061500c565b935060646001826130b49190614f44565b6130be919061500c565b92508284826130cd9190614ee4565b6130d79190614ee4565b91508360065f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20546131439190614f85565b60065f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508260065f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205461320e9190614f85565b60065f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555060065f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205460065f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20546133369190614f85565b6007541115613649575f5b600d80549050811015613647575f600d828154811061336357613362614f17565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505f60065f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054118015613426575060025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561347e57507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b15613639575f60065f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205460065f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205460075461354e9190614ee4565b6135589190614ee4565b8560065f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20546135a19190614f44565b6135ab919061500c565b90508060065f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20546135f69190614f85565b60065f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505b508080600101915050613341565b505b8060075f82825461365a9190614f85565b9250508190555050613a19565b5f8461367290615a83565b90508060075410156136b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016136b090615b39565b60405180910390fd5b5f805b600d8054905081101561384e575f600d82815481106136de576136dd614f17565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690505f60065f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541115613840575f6007548560065f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205461379a9190614f44565b6137a4919061500c565b90508060065f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20546137ef9190614ee4565b60065f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550808461383c9190614f85565b9350505b5080806001019150506136bc565b5081811015613a02575f81836138649190614ee4565b90508060065f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541061399c578060065f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20546139359190614ee4565b60065f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550613a00565b5f60065f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505b505b81600754613a109190614ee4565b60078190555050505b426008819055505f6301e1338042613a319190614ee4565b90505b5f601280549050118015613a7a57508060125f81548110613a5857613a57614f17565b5b905f5260205f2090600202015f01541080613a795750606460128054905010155b5b15613b44575f5b6001601280549050613a939190614ee4565b811015613b08576012600182613aa99190614f85565b81548110613aba57613ab9614f17565b5b905f5260205f20906002020160128281548110613ada57613ad9614f17565b5b905f5260205f2090600202015f820154815f0155600182015481600101559050508080600101915050613a81565b506012805480613b1b57613b1a615b57565b5b600190038181905f5260205f2090600202015f8082015f9055600182015f905550509055613a34565b6012604051806040016040528042815260200187815250908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f0155602082015181600101555050606460138054905010613c63575f5b6001601380549050613bb69190614ee4565b811015613c2b576013600182613bcc9190614f85565b81548110613bdd57613bdc614f17565b5b905f5260205f20906002020160138281548110613bfd57613bfc614f17565b5b905f5260205f2090600202015f820154815f0155600182015481600101559050508080600101915050613ba4565b506013805480613c3e57613c3d615b57565b5b600190038181905f5260205f2090600202015f8082015f9055600182015f9055505090555b60136040518060400160405280428152602001600754815250908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f01556020820151816001015550507fd81ddf3548afe95f4789b1b0b4e3b9f76b6d5711b29219647618104db47edfe085858542604051613ceb9493929190615b84565b60405180910390a150505050613cff613fcf565b50565b6040518060400160405280600581526020017f312e302e3000000000000000000000000000000000000000000000000000000081525081565b60025f5403613d76576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f81905550565b613df9838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401613db2929190615bc7565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061405a565b505050565b5f5b600d80549050811015613fcb578173ffffffffffffffffffffffffffffffffffffffff16600d8281548110613e3857613e37614f17565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603613fbe57600d6001600d80549050613e8f9190614ee4565b81548110613ea057613e9f614f17565b5b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600d8281548110613edc57613edb614f17565b5b905f5260205f20015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600d805480613f3357613f32615b57565b5b600190038181905f5260205f20015f6101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905590555f600e5f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f6101000a81548160ff021916908315150217905550613fcb565b8080600101915050613e00565b5050565b60015f81905550565b614054848573ffffffffffffffffffffffffffffffffffffffff166323b872dd86868660405160240161400d93929190615bee565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061405a565b50505050565b5f8060205f8451602086015f885af180614079576040513d5f823e3d81fd5b3d92505f519150505f82146140925760018114156140ad565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b156140ef57836040517f5274afe70000000000000000000000000000000000000000000000000000000081526004016140e69190614134565b60405180910390fd5b50505050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61411e826140f5565b9050919050565b61412e81614114565b82525050565b5f6020820190506141475f830184614125565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f61418f8261414d565b6141998185614157565b93506141a9818560208601614167565b6141b281614175565b840191505092915050565b5f6020820190508181035f8301526141d58184614185565b905092915050565b5f819050919050565b6141ef816141dd565b82525050565b5f6020820190506142085f8301846141e6565b92915050565b5f604051905090565b5f80fd5b5f80fd5b614228816141dd565b8114614232575f80fd5b50565b5f813590506142438161421f565b92915050565b5f6020828403121561425e5761425d614217565b5b5f61426b84828501614235565b91505092915050565b61427d81614114565b8114614287575f80fd5b50565b5f8135905061429881614274565b92915050565b5f602082840312156142b3576142b2614217565b5b5f6142c08482850161428a565b91505092915050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61430782614175565b810181811067ffffffffffffffff82111715614326576143256142d1565b5b80604052505050565b5f61433861420e565b905061434482826142fe565b919050565b5f67ffffffffffffffff821115614363576143626142d1565b5b61436c82614175565b9050602081019050919050565b828183375f83830152505050565b5f61439961439484614349565b61432f565b9050828152602081018484840111156143b5576143b46142cd565b5b6143c0848285614379565b509392505050565b5f82601f8301126143dc576143db6142c9565b5b81356143ec848260208601614387565b91505092915050565b5f6020828403121561440a57614409614217565b5b5f82013567ffffffffffffffff8111156144275761442661421b565b5b614433848285016143c8565b91505092915050565b5f806040838503121561445257614451614217565b5b5f61445f8582860161428a565b925050602061447085828601614235565b9150509250929050565b5f8115159050919050565b61448e8161447a565b82525050565b5f6060820190506144a75f8301866141e6565b6144b460208301856141e6565b6144c16040830184614485565b949350505050565b5f6040820190506144dc5f8301856141e6565b6144e960208301846141e6565b9392505050565b5f6020820190506145035f830184614485565b92915050565b5f819050919050565b61451b81614509565b82525050565b5f6040820190506145345f8301856141e6565b6145416020830184614512565b9392505050565b5f60208201905061455b5f830184614512565b92915050565b5f806040838503121561457757614576614217565b5b5f61458485828601614235565b925050602083013567ffffffffffffffff8111156145a5576145a461421b565b5b6145b1858286016143c8565b9150509250929050565b5f819050919050565b5f6145de6145d96145d4846140f5565b6145bb565b6140f5565b9050919050565b5f6145ef826145c4565b9050919050565b5f614600826145e5565b9050919050565b614610816145f6565b82525050565b5f6020820190506146295f830184614607565b92915050565b61463881614509565b8114614642575f80fd5b50565b5f813590506146538161462f565b92915050565b5f6020828403121561466e5761466d614217565b5b5f61467b84828501614645565b91505092915050565b7f43616c6c6572206973206e6f7420746865206f776e65720000000000000000005f82015250565b5f6146b8601783614157565b91506146c382614684565b602082019050919050565b5f6020820190508181035f8301526146e5816146ac565b9050919050565b7f436f6d6d697373696f6e2072617465206d757374206265203c3d2031303000005f82015250565b5f614720601e83614157565b915061472b826146ec565b602082019050919050565b5f6020820190508181035f83015261474d81614714565b9050919050565b7f436f6d6d697373696f6e2072617465206d757374206265203e3d2030000000005f82015250565b5f614788601c83614157565b915061479382614754565b602082019050919050565b5f6020820190508181035f8301526147b58161477c565b9050919050565b7f436f6d6d697373696f6e526174650000000000000000000000000000000000005f82015250565b5f6147f0600e83614157565b91506147fb826147bc565b602082019050919050565b5f6040820190508181035f83015261481d816147e4565b905061482c60208301846141e6565b92915050565b7f496e76616c6964207061757365722061646472657373000000000000000000005f82015250565b5f614866601683614157565b915061487182614832565b602082019050919050565b5f6020820190508181035f8301526148938161485a565b9050919050565b7f50617573657200000000000000000000000000000000000000000000000000005f82015250565b5f6148ce600683614157565b91506148d98261489a565b602082019050919050565b5f6060820190508181035f8301526148fb816148c2565b905061490a6020830185614125565b6149176040830184614485565b9392505050565b7f46756e64206e616d652063616e6e6f7420626520656d707479000000000000005f82015250565b5f614952601983614157565b915061495d8261491e565b602082019050919050565b5f6020820190508181035f83015261497f81614946565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f60028204905060018216806149ca57607f821691505b6020821081036149dd576149dc614986565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302614a3f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614a04565b614a498683614a04565b95508019841693508086168417925050509392505050565b5f614a7b614a76614a71846141dd565b6145bb565b6141dd565b9050919050565b5f819050919050565b614a9483614a61565b614aa8614aa082614a82565b848454614a10565b825550505050565b5f90565b614abc614ab0565b614ac7818484614a8b565b505050565b5b81811015614aea57614adf5f82614ab4565b600181019050614acd565b5050565b601f821115614b2f57614b00816149e3565b614b09846149f5565b81016020851015614b18578190505b614b2c614b24856149f5565b830182614acc565b50505b505050565b5f82821c905092915050565b5f614b4f5f1984600802614b34565b1980831691505092915050565b5f614b678383614b40565b9150826002028217905092915050565b614b808261414d565b67ffffffffffffffff811115614b9957614b986142d1565b5b614ba382546149b3565b614bae828285614aee565b5f60209050601f831160018114614bdf575f8415614bcd578287015190505b614bd78582614b5c565b865550614c3e565b601f198416614bed866149e3565b5f5b82811015614c1457848901518255600182019150602085019450602081019050614bef565b86831015614c315784890151614c2d601f891682614b40565b8355505b6001600288020188555050505b505050505050565b7f43616c6c6572206973206e6f74206120706175736572000000000000000000005f82015250565b5f614c7a601683614157565b9150614c8582614c46565b602082019050919050565b5f6020820190508181035f830152614ca781614c6e565b9050919050565b7f467265657a6520706572696f6420746f6f2073686f72740000000000000000005f82015250565b5f614ce2601783614157565b9150614ced82614cae565b602082019050919050565b5f6020820190508181035f830152614d0f81614cd6565b9050919050565b7f5769746864726177616c467265657a65506572696f64000000000000000000005f82015250565b5f614d4a601683614157565b9150614d5582614d16565b602082019050919050565b5f6040820190508181035f830152614d7781614d3e565b9050614d8660208301846141e6565b92915050565b5f81519050614d9a8161421f565b92915050565b5f60208284031215614db557614db4614217565b5b5f614dc284828501614d8c565b91505092915050565b7f496e76616c696420696e766573746f72206164647265737300000000000000005f82015250565b5f614dff601883614157565b9150614e0a82614dcb565b602082019050919050565b5f6020820190508181035f830152614e2c81614df3565b9050919050565b7f496e766573746f720000000000000000000000000000000000000000000000005f82015250565b5f614e67600883614157565b9150614e7282614e33565b602082019050919050565b5f6060820190508181035f830152614e9481614e5b565b9050614ea36020830185614125565b614eb06040830184614485565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f614eee826141dd565b9150614ef9836141dd565b9250828203905081811115614f1157614f10614eb7565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f614f4e826141dd565b9150614f59836141dd565b9250828202614f67816141dd565b91508282048414831517614f7e57614f7d614eb7565b5b5092915050565b5f614f8f826141dd565b9150614f9a836141dd565b9250828201905080821115614fb257614fb1614eb7565b5b92915050565b5f614fc2826141dd565b91505f8203614fd457614fd3614eb7565b5b600182039050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f615016826141dd565b9150615021836141dd565b92508261503157615030614fdf565b5b828204905092915050565b5f61504682614509565b915061505183614509565b92508282019050828112155f8312168382125f84121516171561507757615076614eb7565b5b92915050565b5f61508782614509565b915061509283614509565b92508282026150a081614509565b91507f800000000000000000000000000000000000000000000000000000000000000084145f841216156150d7576150d6614eb7565b5b82820584148315176150ec576150eb614eb7565b5b5092915050565b5f6150fd82614509565b915061510883614509565b92508261511857615117614fdf565b5b60015f0383147f8000000000000000000000000000000000000000000000000000000000000000831416156151505761514f614eb7565b5b828205905092915050565b7f4d696e206465706f736974206d7573742062652067726561746572207468616e5f8201527f2030000000000000000000000000000000000000000000000000000000000000602082015250565b5f6151b5602283614157565b91506151c08261515b565b604082019050919050565b5f6020820190508181035f8301526151e2816151a9565b9050919050565b7f4d696e206465706f736974206d757374206265203c3d206d6178206465706f735f8201527f6974000000000000000000000000000000000000000000000000000000000000602082015250565b5f615243602283614157565b915061524e826151e9565b604082019050919050565b5f6020820190508181035f83015261527081615237565b9050919050565b7f4d696e4465706f736974000000000000000000000000000000000000000000005f82015250565b5f6152ab600a83614157565b91506152b682615277565b602082019050919050565b5f6040820190508181035f8301526152d88161529f565b90506152e760208301846141e6565b92915050565b7f436f6e74726163742069732070617573656400000000000000000000000000005f82015250565b5f615321601283614157565b915061532c826152ed565b602082019050919050565b5f6020820190508181035f83015261534e81615315565b9050919050565b7f496e76616c696420696e646578000000000000000000000000000000000000005f82015250565b5f615389600d83614157565b915061539482615355565b602082019050919050565b5f6020820190508181035f8301526153b68161537d565b9050919050565b7f5265717565737420616c72656164792070726f636573736564000000000000005f82015250565b5f6153f1601983614157565b91506153fc826153bd565b602082019050919050565b5f6020820190508181035f83015261541e816153e5565b9050919050565b7f467265657a6520706572696f64206e6f7420656c6170736564000000000000005f82015250565b5f615459601983614157565b915061546482615425565b602082019050919050565b5f6020820190508181035f8301526154868161544d565b9050919050565b7f576974686472617720616d6f756e74206d7573742062652067726561746572205f8201527f7468616e20300000000000000000000000000000000000000000000000000000602082015250565b5f6154e7602683614157565b91506154f28261548d565b604082019050919050565b5f6020820190508181035f830152615514816154db565b9050919050565b7f496e73756666696369656e74206465706f7369740000000000000000000000005f82015250565b5f61554f601483614157565b915061555a8261551b565b602082019050919050565b5f6020820190508181035f83015261557c81615543565b9050919050565b7f43616c6c6572206973206e6f7420616e20696e766573746f72000000000000005f82015250565b5f6155b7601983614157565b91506155c282615583565b602082019050919050565b5f6020820190508181035f8301526155e4816155ab565b9050919050565b7f416d6f756e74206d7573742062652067726561746572207468616e20300000005f82015250565b5f61561f601d83614157565b915061562a826155eb565b602082019050919050565b5f6020820190508181035f83015261564c81615613565b9050919050565b7f496e73756666696369656e742062616c616e63652061667465722072657365725f8201527f76696e672070656e64696e67207769746864726177616c730000000000000000602082015250565b5f6156ad603883614157565b91506156b882615653565b604082019050919050565b5f6020820190508181035f8301526156da816156a1565b9050919050565b5f6040820190506156f45f8301856141e6565b81810360208301526157068184614185565b90509392505050565b7f4465706f73697420746f6f20736d616c6c0000000000000000000000000000005f82015250565b5f615743601183614157565b915061574e8261570f565b602082019050919050565b5f6020820190508181035f83015261577081615737565b9050919050565b7f4465706f73697420746f6f206c617267650000000000000000000000000000005f82015250565b5f6157ab601183614157565b91506157b682615777565b602082019050919050565b5f6020820190508181035f8301526157d88161579f565b9050919050565b7f546f74616c206465706f7369747320776f756c64206f766572666c6f770000005f82015250565b5f615813601d83614157565b915061581e826157df565b602082019050919050565b5f6020820190508181035f83015261584081615807565b9050919050565b7f4d6178206465706f736974206d757374206265203e3d206d696e206465706f735f8201527f6974000000000000000000000000000000000000000000000000000000000000602082015250565b5f6158a1602283614157565b91506158ac82615847565b604082019050919050565b5f6020820190508181035f8301526158ce81615895565b9050919050565b7f4d61784465706f736974000000000000000000000000000000000000000000005f82015250565b5f615909600a83614157565b9150615914826158d5565b602082019050919050565b5f6040820190508181035f830152615936816158fd565b905061594560208301846141e6565b92915050565b7f50726f6669742063616e6e6f74206265207a65726f00000000000000000000005f82015250565b5f61597f601583614157565b915061598a8261594b565b602082019050919050565b5f6020820190508181035f8301526159ac81615973565b9050919050565b7f4e6f206465706f7369747320746f20646973747269627574652070726f6669745f82015250565b5f6159e7602083614157565b91506159f2826159b3565b602082019050919050565b5f6020820190508181035f830152615a14816159db565b9050919050565b7f496e73756666696369656e7420636f6e74726163742062616c616e63650000005f82015250565b5f615a4f601d83614157565b9150615a5a82615a1b565b602082019050919050565b5f6020820190508181035f830152615a7c81615a43565b9050919050565b5f615a8d82614509565b91507f80000000000000000000000000000000000000000000000000000000000000008203615abf57615abe614eb7565b5b815f039050919050565b7f496e73756666696369656e7420746f74616c206465706f7369747320666f72205f8201527f6c6f737300000000000000000000000000000000000000000000000000000000602082015250565b5f615b23602483614157565b9150615b2e82615ac9565b604082019050919050565b5f6020820190508181035f830152615b5081615b17565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffd5b5f608082019050615b975f830187614512565b615ba460208301866141e6565b615bb160408301856141e6565b615bbe60608301846141e6565b95945050505050565b5f604082019050615bda5f830185614125565b615be760208301846141e6565b9392505050565b5f606082019050615c015f830186614125565b615c0e6020830185614125565b615c1b60408301846141e6565b94935050505056fea2646970667358221220617bf6d65a054efdde203297df5fd6fe1b56b6dbc83bc39f38eebc5727fd39d064736f6c634300081a0033";
