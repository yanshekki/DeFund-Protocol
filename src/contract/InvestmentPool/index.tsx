export const InvestmentPoolAbi = [
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
      {
        indexed: false,
        internalType: "uint256",
        name: "flowAmount",
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
        internalType: "address",
        name: "flowTokenAddress",
        type: "address",
      },
    ],
    name: "FlowTokenSet",
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
        name: "flowAmount",
        type: "uint256",
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
    name: "flowToken",
    outputs: [
      {
        internalType: "contract FlowToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    name: "getFlowTokenAddress",
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
    name: "getFlowTokenName",
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
    name: "getFlowTokenSymbol",
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
    inputs: [],
    name: "getTotalFlowSupply",
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
    name: "getUserFlowBalance",
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
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pendingRequestCount",
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
        name: "flowAmount",
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
        internalType: "address",
        name: "_flowTokenAddress",
        type: "address",
      },
    ],
    name: "setFlowToken",
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
        name: "flowAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requestTime",
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

export const InvestmentPoolBytecode =
  "60a0604052732cd1b9b6e315a60e075ab710d8b0b3a58dc3a15773ffffffffffffffffffffffffffffffffffffffff1660809073ffffffffffffffffffffffffffffffffffffffff168152505f60095f6101000a81548160ff02191690831515021790555034801561006f575f80fd5b50604051615a08380380615a08833981810160405281019061009191906105b5565b60015f819055505f8951116100db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100d2906106ef565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff1603610149576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161014090610757565b60405180910390fd5b5f871161018b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610182906107e5565b60405180910390fd5b868610156101ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c590610873565b60405180910390fd5b610e10851015610213576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020a906108db565b60405180910390fd5b6064811115610257576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024e90610943565b60405180910390fd5b5f81101561029a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610291906109ab565b60405180910390fd5b88600190816102a99190610bcd565b508360025f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508160045f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508760055f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600a8190555085600b8190555084600c8190555080600d819055505f600e81905550505050505050505050610c9c565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b61043a826103f4565b810181811067ffffffffffffffff8211171561045957610458610404565b5b80604052505050565b5f61046b6103db565b90506104778282610431565b919050565b5f67ffffffffffffffff82111561049657610495610404565b5b61049f826103f4565b9050602081019050919050565b8281835e5f83830152505050565b5f6104cc6104c78461047c565b610462565b9050828152602081018484840111156104e8576104e76103f0565b5b6104f38482856104ac565b509392505050565b5f82601f83011261050f5761050e6103ec565b5b815161051f8482602086016104ba565b91505092915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61055182610528565b9050919050565b61056181610547565b811461056b575f80fd5b50565b5f8151905061057c81610558565b92915050565b5f819050919050565b61059481610582565b811461059e575f80fd5b50565b5f815190506105af8161058b565b92915050565b5f805f805f805f805f6101208a8c0312156105d3576105d26103e4565b5b5f8a015167ffffffffffffffff8111156105f0576105ef6103e8565b5b6105fc8c828d016104fb565b995050602061060d8c828d0161056e565b985050604061061e8c828d016105a1565b975050606061062f8c828d016105a1565b96505060806106408c828d016105a1565b95505060a06106518c828d0161056e565b94505060c06106628c828d0161056e565b93505060e06106738c828d0161056e565b9250506101006106858c828d016105a1565b9150509295985092959850929598565b5f82825260208201905092915050565b7f46756e64206e616d652063616e6e6f7420626520656d707479000000000000005f82015250565b5f6106d9601983610695565b91506106e4826106a5565b602082019050919050565b5f6020820190508181035f830152610706816106cd565b9050919050565b7f496e76616c696420746f6b656e206164647265737300000000000000000000005f82015250565b5f610741601583610695565b915061074c8261070d565b602082019050919050565b5f6020820190508181035f83015261076e81610735565b9050919050565b7f4d696e206465706f736974206d7573742062652067726561746572207468616e5f8201527f2030000000000000000000000000000000000000000000000000000000000000602082015250565b5f6107cf602283610695565b91506107da82610775565b604082019050919050565b5f6020820190508181035f8301526107fc816107c3565b9050919050565b7f4d6178206465706f736974206d757374206265203e3d206d696e206465706f735f8201527f6974000000000000000000000000000000000000000000000000000000000000602082015250565b5f61085d602283610695565b915061086882610803565b604082019050919050565b5f6020820190508181035f83015261088a81610851565b9050919050565b7f467265657a6520706572696f6420746f6f2073686f72740000000000000000005f82015250565b5f6108c5601783610695565b91506108d082610891565b602082019050919050565b5f6020820190508181035f8301526108f2816108b9565b9050919050565b7f436f6d6d697373696f6e2072617465206d757374206265203c3d2031303000005f82015250565b5f61092d601e83610695565b9150610938826108f9565b602082019050919050565b5f6020820190508181035f83015261095a81610921565b9050919050565b7f436f6d6d697373696f6e2072617465206d757374206265203e203000000000005f82015250565b5f610995601b83610695565b91506109a082610961565b602082019050919050565b5f6020820190508181035f8301526109c281610989565b9050919050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610a1757607f821691505b602082108103610a2a57610a296109d3565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f60088302610a8c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a51565b610a968683610a51565b95508019841693508086168417925050509392505050565b5f819050919050565b5f610ad1610acc610ac784610582565b610aae565b610582565b9050919050565b5f819050919050565b610aea83610ab7565b610afe610af682610ad8565b848454610a5d565b825550505050565b5f90565b610b12610b06565b610b1d818484610ae1565b505050565b5b81811015610b4057610b355f82610b0a565b600181019050610b23565b5050565b601f821115610b8557610b5681610a30565b610b5f84610a42565b81016020851015610b6e578190505b610b82610b7a85610a42565b830182610b22565b50505b505050565b5f82821c905092915050565b5f610ba55f1984600802610b8a565b1980831691505092915050565b5f610bbd8383610b96565b9150826002028217905092915050565b610bd6826109c9565b67ffffffffffffffff811115610bef57610bee610404565b5b610bf98254610a00565b610c04828285610b44565b5f60209050601f831160018114610c35575f8415610c23578287015190505b610c2d8582610bb2565b865550610c94565b601f198416610c4386610a30565b5f5b82811015610c6a57848901518255600182019150602085019450602081019050610c45565b86831015610c875784890151610c83601f891682610b96565b8355505b6001600288020188555050505b505050505050565b608051614d4d610cbb5f395f8181610b5601526132cd0152614d4d5ff3fe608060405234801561000f575f80fd5b50600436106103b8575f3560e01c806374b8f2c7116101f2578063a4563e0311610118578063cf5b4fd5116100ab578063f2847e641161007a578063f2847e6414610ac9578063fc0c546a14610afc578063fe21268c14610b1a578063ffa1ad7414610b36576103b8565b8063cf5b4fd514610a55578063d46c00c014610a71578063dd49756e14610a8f578063e23f4da514610aab576103b8565b8063b02c0c56116100e7578063b02c0c56146109cf578063b5d44ec6146109ed578063b6b55f2514610a1d578063bb371fdd14610a39576103b8565b8063a4563e0314610959578063a4dbc6a814610977578063a87fe87e14610995578063af13d910146109b3576103b8565b80638da5cb5b116101905780639ce1413b1161015f5780639ce1413b146108e35780639ee679e8146109015780639fd0506d1461091d578063a3f4df7e1461093b576103b8565b80638da5cb5b1461086f5780638fcc9cfb1461088d5780639314466d146108a95780639c7fc154146108c7576103b8565b8063796c8902116101cc578063796c8902146107f75780637b4d065b146108155780637d88209714610833578063893d20e814610851576103b8565b806374b8f2c71461078e578063773041ce146107aa578063777dc24a146107c6576103b8565b80633b98e466116102e25780635c975abb1161027557806366ba8d551161024457806366ba8d55146107185780636805b84b146107345780636f9fb98a146107525780637008b54814610770576103b8565b80635c975abb146106a05780635ea1d6f8146106be5780636083e59a146106dc578063631c3074146106fa576103b8565b80634a4e3bd5116102b15780634a4e3bd5146106145780634e5a23281461061e578063550d8366146106515780635648af9d14610682576103b8565b80633b98e4661461059e5780633e4eb36c146105bc57806341b3d185146105da5780634377cd5e146105f8576103b8565b806317d7de7c1161035a5780632d88af4a116103295780632d88af4a14610516578063341934b2146105325780633619bc77146105505780633665152914610580576103b8565b806317d7de7c146104a057806319fac8fd146104be5780631e0018d6146104da57806321df0da7146104f8576103b8565b80630eaad3f1116103965780630eaad3f1146104285780630fb812f414610446578063120a88ad14610464578063168a482214610482576103b8565b806302d05d3f146103bc5780630b4b14ae146103da5780630d8e6e2c1461040a575b5f80fd5b6103c4610b54565b6040516103d19190613ab2565b60405180910390f35b6103f460048036038101906103ef9190613b06565b610b78565b6040516104019190613b49565b60405180910390f35b610412610c19565b60405161041f9190613bd2565b60405180910390f35b610430610c56565b60405161043d9190613b49565b60405180910390f35b61044e610c5f565b60405161045b9190613bd2565b60405180910390f35b61046c610d4f565b6040516104799190613ab2565b60405180910390f35b61048a610d77565b6040516104979190613b49565b60405180910390f35b6104a8610d80565b6040516104b59190613bd2565b60405180910390f35b6104d860048036038101906104d39190613c1c565b610dbd565b005b6104e2610e6f565b6040516104ef9190613ab2565b60405180910390f35b610500610e94565b60405161050d9190613ab2565b60405180910390f35b610530600480360381019061052b9190613b06565b610ebc565b005b61053a611027565b6040516105479190613bd2565b60405180910390f35b61056a60048036038101906105659190613b06565b611117565b6040516105779190613b49565b60405180910390f35b610588611160565b6040516105959190613b49565b60405180910390f35b6105a6611169565b6040516105b39190613b49565b60405180910390f35b6105c4611172565b6040516105d19190613b49565b60405180910390f35b6105e261117b565b6040516105ef9190613b49565b60405180910390f35b610612600480360381019061060d9190613d73565b611181565b005b61061c611266565b005b61063860048036038101906106339190613dba565b61131c565b6040516106489493929190613e12565b60405180910390f35b61066b60048036038101906106669190613c1c565b61136e565b604051610679929190613e55565b60405180910390f35b61068a61139d565b6040516106979190613b49565b60405180910390f35b6106a86113a3565b6040516106b59190613e7c565b60405180910390f35b6106c66113b5565b6040516106d39190613b49565b60405180910390f35b6106e46113bb565b6040516106f19190613b49565b60405180910390f35b6107026113c1565b60405161070f9190613ef0565b60405180910390f35b610732600480360381019061072d9190613c1c565b6113e6565b005b61073c61148d565b6040516107499190613e7c565b60405180910390f35b61075a6114a2565b6040516107679190613b49565b60405180910390f35b610778611541565b6040516107859190613ab2565b60405180910390f35b6107a860048036038101906107a39190613b06565b611569565b005b6107c460048036038101906107bf9190613b06565b611742565b005b6107e060048036038101906107db9190613c1c565b6118ad565b6040516107ee929190613f21565b60405180910390f35b6107ff6118dc565b60405161080c9190613ab2565b60405180910390f35b61081d611904565b60405161082a9190613f48565b60405180910390f35b61083b611baf565b6040516108489190613b49565b60405180910390f35b610859611bb5565b6040516108669190613ab2565b60405180910390f35b610877611bdd565b6040516108849190613ab2565b60405180910390f35b6108a760048036038101906108a29190613c1c565b611c02565b005b6108b1611cb4565b6040516108be9190613b49565b60405180910390f35b6108e160048036038101906108dc9190613c1c565b611d48565b005b6108eb61228e565b6040516108f89190613bd2565b60405180910390f35b61091b60048036038101906109169190613c1c565b61231a565b005b610925612708565b6040516109329190613ab2565b60405180910390f35b61094361272d565b6040516109509190613bd2565b60405180910390f35b610961612766565b60405161096e9190613b49565b60405180910390f35b61097f61276c565b60405161098c9190613b49565b60405180910390f35b61099d612775565b6040516109aa9190613bd2565b60405180910390f35b6109cd60048036038101906109c89190613f61565b612805565b005b6109d76129e6565b6040516109e49190613b49565b60405180910390f35b610a076004803603810190610a029190613b06565b612aa6565b604051610a149190613b49565b60405180910390f35b610a376004803603810190610a329190613c1c565b612abb565b005b610a536004803603810190610a4e9190613c1c565b612cdb565b005b610a6f6004803603810190610a6a9190613d73565b612d82565b005b610a79612e45565b604051610a869190613b49565b60405180910390f35b610aa96004803603810190610aa49190613c1c565b612e4b565b005b610ab3612f36565b604051610ac09190613b49565b60405180910390f35b610ae36004803603810190610ade9190613dba565b612f3f565b604051610af39493929190613fbb565b60405180910390f35b610b04613061565b604051610b11919061401e565b60405180910390f35b610b346004803603810190610b2f9190614061565b613086565b005b610b3e613669565b604051610b4b9190613bd2565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b8152600401610bd39190613ab2565b602060405180830381865afa158015610bee573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c1291906140a0565b9050919050565b60606040518060400160405280600581526020017f312e302e30000000000000000000000000000000000000000000000000000000815250905090565b5f600a54905090565b60605f73ffffffffffffffffffffffffffffffffffffffff1660065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610cb9575f80fd5b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b81526004015f60405180830381865afa158015610d22573d5f803e3d5ffd5b505050506040513d5f823e3d601f19601f82011682018060405250810190610d4a9190614139565b905090565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f600754905090565b60606040518060400160405280600e81526020017f496e766573746d656e74506f6f6c000000000000000000000000000000000000815250905090565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610e15575f80fd5b6064811115610e22575f80fd5b5f811015610e2e575f80fd5b80600d819055507f3a64504f0bc0c335e2aecb78638a257e0351a3fe0370861fd54ee4190b92093381604051610e6491906141ca565b60405180910390a150565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610f14575f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610f4b575f80fd5b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160035f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f64e73bff6805de0b6789825ae0104b869cf17040bf0e43f6ee820a435324dd2f815f604051610fe1929190614240565b60405180910390a17f64e73bff6805de0b6789825ae0104b869cf17040bf0e43f6ee820a435324dd2f82600160405161101b929190614240565b60405180910390a15050565b60605f73ffffffffffffffffffffffffffffffffffffffff1660065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611081575f80fd5b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b81526004015f60405180830381865afa1580156110ea573d5f803e3d5ffd5b505050506040513d5f823e3d601f19601f820116820180604052508101906111129190614139565b905090565b5f600f5f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20805490509050919050565b5f600e54905090565b5f600c54905090565b5f600d54905090565b600a5481565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146111d9575f80fd5b5f81511161121c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611213906142c4565b60405180910390fd5b806001908161122b91906144d3565b507f15720680018c101cf614059866aae9b88ce50a1e218fbc4a096e811ae8856a3a8160405161125b9190613bd2565b60405180910390a150565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146112be575f80fd5b5f60095f6101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167ff5cbf596165cc457b2cd92e8d8450827ee314968160a5696402d75766fc52caf60405160405180910390a2565b600f602052815f5260405f208181548110611335575f80fd5b905f5260205f2090600402015f9150915050805f015490806001015490806002015490806003015f9054906101000a900460ff16905084565b6012818154811061137d575f80fd5b905f5260205f2090600202015f91509050805f0154908060010154905082565b600c5481565b60095f9054906101000a900460ff1681565b600d5481565b600b5481565b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461143e575f80fd5b610e1081101561144c575f80fd5b80600c819055507f3a64504f0bc0c335e2aecb78638a257e0351a3fe0370861fd54ee4190b9209338160405161148291906145ec565b60405180910390a150565b5f60095f9054906101000a900460ff16905090565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016114fd9190613ab2565b602060405180830381865afa158015611518573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061153c91906140a0565b905090565b5f60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146115c1575f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036115f8575f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff1660065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611650575f80fd5b5f8173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561169a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906116be91906140a0565b10156116c8575f80fd5b8060065f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f1f9dfa9683d425c97c53e17b3f03b015c04658401abb43fc35f71bc6f97e5065816040516117379190613ab2565b60405180910390a150565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461179a575f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036117d1575f80fd5b5f60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508160045f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f64e73bff6805de0b6789825ae0104b869cf17040bf0e43f6ee820a435324dd2f815f604051611867929190614662565b60405180910390a17f64e73bff6805de0b6789825ae0104b869cf17040bf0e43f6ee820a435324dd2f8260016040516118a1929190614662565b60405180910390a15050565b601181815481106118bc575f80fd5b905f5260205f2090600202015f91509050805f0154908060010154905082565b5f60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5f80601280549050148061191957505f600754145b15611926575f9050611bac565b5f6301e133804261193791906146c9565b90505f805f80600160128054905061194f91906146c9565b90505b5f8110611ac257846012828154811061196e5761196d6146fc565b5b905f5260205f2090600202015f015410611ac2575f808214806119be575085601260018461199c91906146c9565b815481106119ad576119ac6146fc565b5b905f5260205f2090600202015f0154105b156119f857601282815481106119d7576119d66146fc565b5b905f5260205f2090600202015f0154426119f191906146c9565b9050611a57565b6012600183611a0791906146c9565b81548110611a1857611a176146fc565b5b905f5260205f2090600202015f015460128381548110611a3b57611a3a6146fc565b5b905f5260205f2090600202015f0154611a5491906146c9565b90505b8060128381548110611a6c57611a6b6146fc565b5b905f5260205f20906002020160010154611a869190614729565b84611a91919061476a565b93508083611a9f919061476a565b92505f8203611aae5750611ac2565b508080611aba9061479d565b915050611952565b505f8103611ad6575f945050505050611bac565b5f8183611ae391906147f1565b90505f8103611af9575f95505050505050611bac565b5f6001601180549050611b0c91906146c9565b90505b5f8110611b8b578560118281548110611b2b57611b2a6146fc565b5b905f5260205f2090600202015f015410611b8b5760118181548110611b5357611b526146fc565b5b905f5260205f2090600202016001015485611b6e9190614821565b94505f810315611b8b578080611b839061479d565b915050611b0f565b5080606485611b9a9190614862565b611ba491906148d8565b955050505050505b90565b60075481565b5f60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611c5a575f80fd5b5f8111611c65575f80fd5b600b54811115611c73575f80fd5b80600a819055507f3a64504f0bc0c335e2aecb78638a257e0351a3fe0370861fd54ee4190b92093381604051611ca9919061498a565b60405180910390a150565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611d1f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d4391906140a0565b905090565b60095f9054906101000a900460ff1615611d60575f80fd5b611d686136a2565b5f73ffffffffffffffffffffffffffffffffffffffff1660065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603611dc0575f80fd5b5f600f5f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20905080805490508210611e0f575f80fd5b5f818381548110611e2357611e226146fc565b5b905f5260205f2090600402019050806003015f9054906101000a900460ff1615611e4b575f80fd5b600c548160020154611e5d919061476a565b421015611e68575f80fd5b5f8160010154905060055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401611eca9190613ab2565b602060405180830381865afa158015611ee5573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f0991906140a0565b811115611f14575f80fd5b60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639dc29fac30845f01546040518363ffffffff1660e01b8152600401611f739291906149b6565b5f604051808303815f87803b158015611f8a575f80fd5b505af1158015611f9c573d5f803e3d5ffd5b5050505080600754611fae91906146c9565b60078190555080600e54611fc291906146c9565b600e819055506001826003015f6101000a81548160ff021916908315150217905550600160105f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205461202e91906146c9565b60105f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055506120bb338260055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166136e69092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167fddfdc995965c1fea3bbd2158d885347ad5c250f422d97342c6a3fa680600cf68835f015483604051612106929190613e55565b60405180910390a25f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016121699190613ab2565b602060405180830381865afa158015612184573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906121a891906140a0565b14806121f057505f60105f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2054145b1561228057600f5f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f61223d9190613a14565b5f60105f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055505b50505061228b613765565b50565b6001805461229b9061430f565b80601f01602080910402602001604051908101604052809291908181526020018280546122c79061430f565b80156123125780601f106122e957610100808354040283529160200191612312565b820191905f5260205f20905b8154815290600101906020018083116122f557829003601f168201915b505050505081565b60095f9054906101000a900460ff1615612332575f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff1660065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361238a575f80fd5b5f81116123cc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016123c390614a4d565b60405180910390fd5b8060065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016124279190613ab2565b602060405180830381865afa158015612442573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061246691906140a0565b10156124a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161249e90614ab5565b60405180910390fd5b5f6124b18261376e565b9050600f5f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2060405180608001604052808481526020018381526020014281526020015f1515815250908060018154018082558091505060019003905f5260205f2090600402015f909190919091505f820151815f015560208201518160010155604082015181600201556060820151816003015f6101000a81548160ff0219169083151502179055505050600160105f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20546125c0919061476a565b60105f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208190555060065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161265f93929190614ad3565b6020604051808303815f875af115801561267b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061269f9190614b32565b5080600e546126ae919061476a565b600e819055503373ffffffffffffffffffffffffffffffffffffffff167fddfdc995965c1fea3bbd2158d885347ad5c250f422d97342c6a3fa680600cf68835f6040516126fc929190614b96565b60405180910390a25050565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040518060400160405280600e81526020017f496e766573746d656e74506f6f6c00000000000000000000000000000000000081525081565b600e5481565b5f600b54905090565b6060600180546127849061430f565b80601f01602080910402602001604051908101604052809291908181526020018280546127b09061430f565b80156127fb5780601f106127d2576101008083540402835291602001916127fb565b820191905f5260205f20905b8154815290600101906020018083116127de57829003601f168201915b5050505050905090565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461285d575f80fd5b60095f9054906101000a900460ff1615612875575f80fd5b61287d6136a2565b5f8211612888575f80fd5b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016128e39190613ab2565b602060405180830381865afa1580156128fe573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061292291906140a0565b905082600e54612932919061476a565b81101561293d575f80fd5b612989338460055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166136e69092919063ffffffff16565b3373ffffffffffffffffffffffffffffffffffffffff167fc2c65a8987d388025391b993490730e0e63a6007f953487a6d8e75ebd92b7f7784846040516129d1929190614bbd565b60405180910390a2506129e2613765565b5050565b5f60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a0823160045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401612a629190613ab2565b602060405180830381865afa158015612a7d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190612aa191906140a0565b905090565b6010602052805f5260405f205f915090505481565b60095f9054906101000a900460ff1615612ad3575f80fd5b612adb6136a2565b5f73ffffffffffffffffffffffffffffffffffffffff1660065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603612b33575f80fd5b600a54811015612b41575f80fd5b600b54811115612b4f575f80fd5b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612b7b91906146c9565b6007541115612b88575f80fd5b612bd633308360055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16613832909392919063ffffffff16565b5f612be0826138b4565b905060065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1933836040518363ffffffff1660e01b8152600401612c3e9291906149b6565b5f604051808303815f87803b158015612c55575f80fd5b505af1158015612c67573d5f803e3d5ffd5b5050505081600754612c79919061476a565b6007819055503373ffffffffffffffffffffffffffffffffffffffff167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a158383604051612cc7929190613e55565b60405180910390a250612cd8613765565b50565b60025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612d33575f80fd5b600a54811015612d41575f80fd5b80600b819055507f3a64504f0bc0c335e2aecb78638a257e0351a3fe0370861fd54ee4190b92093381604051612d779190614c35565b60405180910390a150565b60035f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612dda575f80fd5b600160095f6101000a81548160ff0219169083151502179055503373ffffffffffffffffffffffffffffffffffffffff167f375c0abd968f4602b557f6ac9a48ffc89820233aa9becc5d7ff1176fd09eafff82604051612e3a9190613bd2565b60405180910390a250565b60085481565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612ea3575f80fd5b5f8111612eae575f80fd5b612efc33308360055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16613832909392919063ffffffff16565b7f77acf75e237f9aae98f997395832d522bdb695e4a9bd07704936aa889a3667d181604051612f2b9190613b49565b60405180910390a150565b5f600854905090565b5f805f80600f5f8773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20805490508510612f8e575f80fd5b5f600f5f8873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f208681548110612fde57612fdd6146fc565b5b905f5260205f2090600402016040518060800160405290815f82015481526020016001820154815260200160028201548152602001600382015f9054906101000a900460ff16151515158152505090508060200151600c548260400151613045919061476a565b8260600151836020015194509450945094505092959194509250565b60055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146130de575f80fd5b6130e66136a2565b5f73ffffffffffffffffffffffffffffffffffffffff1660065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff160361313e575f80fd5b5f8103613149575f80fd5b5f805f805f85131561334e575f8590506064600d54826131699190614729565b61317391906147f1565b945060646001826131849190614729565b61318e91906147f1565b935083858261319d91906146c9565b6131a791906146c9565b925083856131b5919061476a565b91508160055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016132129190613ab2565b602060405180830381865afa15801561322d573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061325191906140a0565b101561325b575f80fd5b6132c860025f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff168660055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166136e69092919063ffffffff16565b6133347f00000000000000000000000000000000000000000000000000000000000000008560055f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166136e69092919063ffffffff16565b82600754613342919061476a565b6007819055505061337f565b5f8561335990614c61565b9050806007541015613369575f80fd5b8060075461337791906146c9565b600781905550505b426008819055505f6301e133804261339791906146c9565b90505b5f6011805490501180156133e057508060115f815481106133be576133bd6146fc565b5b905f5260205f2090600202015f015410806133df5750606460118054905010155b5b156134aa575f5b60016011805490506133f991906146c9565b81101561346e57601160018261340f919061476a565b815481106134205761341f6146fc565b5b905f5260205f209060020201601182815481106134405761343f6146fc565b5b905f5260205f2090600202015f820154815f01556001820154816001015590505080806001019150506133e7565b50601180548061348157613480614ca7565b5b600190038181905f5260205f2090600202015f8082015f9055600182015f90555050905561339a565b6011604051806040016040528042815260200188815250908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f01556020820151816001015550506064601280549050106135c9575f5b600160128054905061351c91906146c9565b811015613591576012600182613532919061476a565b81548110613543576135426146fc565b5b905f5260205f20906002020160128281548110613563576135626146fc565b5b905f5260205f2090600202015f820154815f015560018201548160010155905050808060010191505061350a565b5060128054806135a4576135a3614ca7565b5b600190038181905f5260205f2090600202015f8082015f9055600182015f9055505090555b60126040518060400160405280428152602001600754815250908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f01556020820151816001015550507fd81ddf3548afe95f4789b1b0b4e3b9f76b6d5711b29219647618104db47edfe0868686426040516136519493929190614cd4565b60405180910390a15050505050613666613765565b50565b6040518060400160405280600581526020017f312e302e3000000000000000000000000000000000000000000000000000000081525081565b60025f54036136dd576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025f81905550565b613760838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb85856040516024016137199291906149b6565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613979565b505050565b60015f81905550565b5f8060065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156137da573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906137fe91906140a0565b90505f8103613810575f91505061382d565b806007548461381f9190614729565b61382991906147f1565b9150505b919050565b6138ae848573ffffffffffffffffffffffffffffffffffffffff166323b872dd86868660405160240161386793929190614ad3565b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613979565b50505050565b5f80600754036138c657819050613974565b5f60065f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015613931573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061395591906140a0565b905060075481846139669190614729565b61397091906147f1565b9150505b919050565b5f8060205f8451602086015f885af180613998576040513d5f823e3d81fd5b3d92505f519150505f82146139b15760018114156139cc565b5f8473ffffffffffffffffffffffffffffffffffffffff163b145b15613a0e57836040517f5274afe7000000000000000000000000000000000000000000000000000000008152600401613a059190613ab2565b60405180910390fd5b50505050565b5080545f8255600402905f5260205f2090810190613a329190613a35565b50565b5b80821115613a6f575f8082015f9055600182015f9055600282015f9055600382015f6101000a81549060ff021916905550600401613a36565b5090565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f613a9c82613a73565b9050919050565b613aac81613a92565b82525050565b5f602082019050613ac55f830184613aa3565b92915050565b5f604051905090565b5f80fd5b5f80fd5b613ae581613a92565b8114613aef575f80fd5b50565b5f81359050613b0081613adc565b92915050565b5f60208284031215613b1b57613b1a613ad4565b5b5f613b2884828501613af2565b91505092915050565b5f819050919050565b613b4381613b31565b82525050565b5f602082019050613b5c5f830184613b3a565b92915050565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f613ba482613b62565b613bae8185613b6c565b9350613bbe818560208601613b7c565b613bc781613b8a565b840191505092915050565b5f6020820190508181035f830152613bea8184613b9a565b905092915050565b613bfb81613b31565b8114613c05575f80fd5b50565b5f81359050613c1681613bf2565b92915050565b5f60208284031215613c3157613c30613ad4565b5b5f613c3e84828501613c08565b91505092915050565b5f80fd5b5f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b613c8582613b8a565b810181811067ffffffffffffffff82111715613ca457613ca3613c4f565b5b80604052505050565b5f613cb6613acb565b9050613cc28282613c7c565b919050565b5f67ffffffffffffffff821115613ce157613ce0613c4f565b5b613cea82613b8a565b9050602081019050919050565b828183375f83830152505050565b5f613d17613d1284613cc7565b613cad565b905082815260208101848484011115613d3357613d32613c4b565b5b613d3e848285613cf7565b509392505050565b5f82601f830112613d5a57613d59613c47565b5b8135613d6a848260208601613d05565b91505092915050565b5f60208284031215613d8857613d87613ad4565b5b5f82013567ffffffffffffffff811115613da557613da4613ad8565b5b613db184828501613d46565b91505092915050565b5f8060408385031215613dd057613dcf613ad4565b5b5f613ddd85828601613af2565b9250506020613dee85828601613c08565b9150509250929050565b5f8115159050919050565b613e0c81613df8565b82525050565b5f608082019050613e255f830187613b3a565b613e326020830186613b3a565b613e3f6040830185613b3a565b613e4c6060830184613e03565b95945050505050565b5f604082019050613e685f830185613b3a565b613e756020830184613b3a565b9392505050565b5f602082019050613e8f5f830184613e03565b92915050565b5f819050919050565b5f613eb8613eb3613eae84613a73565b613e95565b613a73565b9050919050565b5f613ec982613e9e565b9050919050565b5f613eda82613ebf565b9050919050565b613eea81613ed0565b82525050565b5f602082019050613f035f830184613ee1565b92915050565b5f819050919050565b613f1b81613f09565b82525050565b5f604082019050613f345f830185613b3a565b613f416020830184613f12565b9392505050565b5f602082019050613f5b5f830184613f12565b92915050565b5f8060408385031215613f7757613f76613ad4565b5b5f613f8485828601613c08565b925050602083013567ffffffffffffffff811115613fa557613fa4613ad8565b5b613fb185828601613d46565b9150509250929050565b5f608082019050613fce5f830187613b3a565b613fdb6020830186613b3a565b613fe86040830185613e03565b613ff56060830184613b3a565b95945050505050565b5f61400882613ebf565b9050919050565b61401881613ffe565b82525050565b5f6020820190506140315f83018461400f565b92915050565b61404081613f09565b811461404a575f80fd5b50565b5f8135905061405b81614037565b92915050565b5f6020828403121561407657614075613ad4565b5b5f6140838482850161404d565b91505092915050565b5f8151905061409a81613bf2565b92915050565b5f602082840312156140b5576140b4613ad4565b5b5f6140c28482850161408c565b91505092915050565b5f6140dd6140d884613cc7565b613cad565b9050828152602081018484840111156140f9576140f8613c4b565b5b614104848285613b7c565b509392505050565b5f82601f8301126141205761411f613c47565b5b81516141308482602086016140cb565b91505092915050565b5f6020828403121561414e5761414d613ad4565b5b5f82015167ffffffffffffffff81111561416b5761416a613ad8565b5b6141778482850161410c565b91505092915050565b7f436f6d6d697373696f6e526174650000000000000000000000000000000000005f82015250565b5f6141b4600e83613b6c565b91506141bf82614180565b602082019050919050565b5f6040820190508181035f8301526141e1816141a8565b90506141f06020830184613b3a565b92915050565b7f50617573657200000000000000000000000000000000000000000000000000005f82015250565b5f61422a600683613b6c565b9150614235826141f6565b602082019050919050565b5f6060820190508181035f8301526142578161421e565b90506142666020830185613aa3565b6142736040830184613e03565b9392505050565b7f46756e64206e616d652063616e6e6f7420626520656d707479000000000000005f82015250565b5f6142ae601983613b6c565b91506142b98261427a565b602082019050919050565b5f6020820190508181035f8301526142db816142a2565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061432657607f821691505b602082108103614339576143386142e2565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f6008830261439b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82614360565b6143a58683614360565b95508019841693508086168417925050509392505050565b5f6143d76143d26143cd84613b31565b613e95565b613b31565b9050919050565b5f819050919050565b6143f0836143bd565b6144046143fc826143de565b84845461436c565b825550505050565b5f90565b61441861440c565b6144238184846143e7565b505050565b5b818110156144465761443b5f82614410565b600181019050614429565b5050565b601f82111561448b5761445c8161433f565b61446584614351565b81016020851015614474578190505b61448861448085614351565b830182614428565b50505b505050565b5f82821c905092915050565b5f6144ab5f1984600802614490565b1980831691505092915050565b5f6144c3838361449c565b9150826002028217905092915050565b6144dc82613b62565b67ffffffffffffffff8111156144f5576144f4613c4f565b5b6144ff825461430f565b61450a82828561444a565b5f60209050601f83116001811461453b575f8415614529578287015190505b61453385826144b8565b86555061459a565b601f1984166145498661433f565b5f5b828110156145705784890151825560018201915060208501945060208101905061454b565b8683101561458d5784890151614589601f89168261449c565b8355505b6001600288020188555050505b505050505050565b7f5769746864726177616c467265657a65506572696f64000000000000000000005f82015250565b5f6145d6601683613b6c565b91506145e1826145a2565b602082019050919050565b5f6040820190508181035f830152614603816145ca565b90506146126020830184613b3a565b92915050565b7f496e766573746f720000000000000000000000000000000000000000000000005f82015250565b5f61464c600883613b6c565b915061465782614618565b602082019050919050565b5f6060820190508181035f83015261467981614640565b90506146886020830185613aa3565b6146956040830184613e03565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6146d382613b31565b91506146de83613b31565b92508282039050818111156146f6576146f561469c565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f61473382613b31565b915061473e83613b31565b925082820261474c81613b31565b915082820484148315176147635761476261469c565b5b5092915050565b5f61477482613b31565b915061477f83613b31565b92508282019050808211156147975761479661469c565b5b92915050565b5f6147a782613b31565b91505f82036147b9576147b861469c565b5b600182039050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f6147fb82613b31565b915061480683613b31565b925082614816576148156147c4565b5b828204905092915050565b5f61482b82613f09565b915061483683613f09565b92508282019050828112155f8312168382125f84121516171561485c5761485b61469c565b5b92915050565b5f61486c82613f09565b915061487783613f09565b925082820261488581613f09565b91507f800000000000000000000000000000000000000000000000000000000000000084145f841216156148bc576148bb61469c565b5b82820584148315176148d1576148d061469c565b5b5092915050565b5f6148e282613f09565b91506148ed83613f09565b9250826148fd576148fc6147c4565b5b60015f0383147f8000000000000000000000000000000000000000000000000000000000000000831416156149355761493461469c565b5b828205905092915050565b7f4d696e4465706f736974000000000000000000000000000000000000000000005f82015250565b5f614974600a83613b6c565b915061497f82614940565b602082019050919050565b5f6040820190508181035f8301526149a181614968565b90506149b06020830184613b3a565b92915050565b5f6040820190506149c95f830185613aa3565b6149d66020830184613b3a565b9392505050565b7f576974686472617720616d6f756e74206d7573742062652067726561746572205f8201527f7468616e20300000000000000000000000000000000000000000000000000000602082015250565b5f614a37602683613b6c565b9150614a42826149dd565b604082019050919050565b5f6020820190508181035f830152614a6481614a2b565b9050919050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f614a9f601483613b6c565b9150614aaa82614a6b565b602082019050919050565b5f6020820190508181035f830152614acc81614a93565b9050919050565b5f606082019050614ae65f830186613aa3565b614af36020830185613aa3565b614b006040830184613b3a565b949350505050565b614b1181613df8565b8114614b1b575f80fd5b50565b5f81519050614b2c81614b08565b92915050565b5f60208284031215614b4757614b46613ad4565b5b5f614b5484828501614b1e565b91505092915050565b5f819050919050565b5f614b80614b7b614b7684614b5d565b613e95565b613b31565b9050919050565b614b9081614b66565b82525050565b5f604082019050614ba95f830185613b3a565b614bb66020830184614b87565b9392505050565b5f604082019050614bd05f830185613b3a565b8181036020830152614be28184613b9a565b90509392505050565b7f4d61784465706f736974000000000000000000000000000000000000000000005f82015250565b5f614c1f600a83613b6c565b9150614c2a82614beb565b602082019050919050565b5f6040820190508181035f830152614c4c81614c13565b9050614c5b6020830184613b3a565b92915050565b5f614c6b82613f09565b91507f80000000000000000000000000000000000000000000000000000000000000008203614c9d57614c9c61469c565b5b815f039050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603160045260245ffd5b5f608082019050614ce75f830187613f12565b614cf46020830186613b3a565b614d016040830185613b3a565b614d0e6060830184613b3a565b9594505050505056fea26469706673582212203734ae0f2b0f3e959e639ecad30754272af64cc2d102d51c3b51f911ccafe4bc64736f6c634300081a0033";
