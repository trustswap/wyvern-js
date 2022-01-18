export const exchangeABI = [
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32'
            },
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'exchange',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'maker',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'taker',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'makerRelayerFee',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'takerRelayerFee',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'makerProtocolFee',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'takerProtocolFee',
                'type': 'uint256'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'feeRecipient',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'enum ExchangeCore.FeeMethod',
                'name': 'feeMethod',
                'type': 'uint8'
            },
            {
                'indexed': false,
                'internalType': 'enum SaleKindInterface.Side',
                'name': 'side',
                'type': 'uint8'
            },
            {
                'indexed': false,
                'internalType': 'enum SaleKindInterface.SaleKind',
                'name': 'saleKind',
                'type': 'uint8'
            },
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'target',
                'type': 'address'
            }
        ],
        'name': 'OrderApprovedPartOne',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32'
            },
            {
                'indexed': false,
                'internalType': 'enum AuthenticatedProxy.HowToCall',
                'name': 'howToCall',
                'type': 'uint8'
            },
            {
                'indexed': false,
                'internalType': 'bytes',
                'name': 'calldatas',
                'type': 'bytes'
            },
            {
                'indexed': false,
                'internalType': 'bytes',
                'name': 'replacementPattern',
                'type': 'bytes'
            },
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'staticTarget',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'bytes',
                'name': 'staticExtradata',
                'type': 'bytes'
            },
            {
                'indexed': false,
                'internalType': 'address',
                'name': 'paymentToken',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'basePrice',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'extra',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'listingTime',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'expirationTime',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'salt',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'internalType': 'bool',
                'name': 'orderbookInclusionDesired',
                'type': 'bool'
            }
        ],
        'name': 'OrderApprovedPartTwo',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32'
            }
        ],
        'name': 'OrderCancelled',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'internalType': 'bytes32',
                'name': 'buyHash',
                'type': 'bytes32'
            },
            {
                'indexed': false,
                'internalType': 'bytes32',
                'name': 'sellHash',
                'type': 'bytes32'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'maker',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'taker',
                'type': 'address'
            },
            {
                'indexed': false,
                'internalType': 'uint256',
                'name': 'price',
                'type': 'uint256'
            },
            {
                'indexed': true,
                'internalType': 'bytes32',
                'name': 'metadata',
                'type': 'bytes32'
            }
        ],
        'name': 'OrdersMatched',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'previousOwner',
                'type': 'address'
            },
            {
                'indexed': true,
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'OwnershipTransferred',
        'type': 'event'
    },
    {
        'inputs': [],
        'name': 'INVERSE_BASIS_POINT',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'order',
                'type': 'tuple'
            },
            {
                'internalType': 'bool',
                'name': 'orderbookInclusionDesired',
                'type': 'bool'
            }
        ],
        'name': 'approveOrder',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': '',
                'type': 'bytes32'
            }
        ],
        'name': 'approvedOrders',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'buy',
                'type': 'tuple'
            },
            {
                'components': [
                    {
                        'internalType': 'uint8',
                        'name': 'v',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes32',
                        'name': 'r',
                        'type': 'bytes32'
                    },
                    {
                        'internalType': 'bytes32',
                        'name': 's',
                        'type': 'bytes32'
                    }
                ],
                'internalType': 'struct ExchangeCore.Sig',
                'name': 'buySig',
                'type': 'tuple'
            },
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'sell',
                'type': 'tuple'
            },
            {
                'components': [
                    {
                        'internalType': 'uint8',
                        'name': 'v',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes32',
                        'name': 'r',
                        'type': 'bytes32'
                    },
                    {
                        'internalType': 'bytes32',
                        'name': 's',
                        'type': 'bytes32'
                    }
                ],
                'internalType': 'struct ExchangeCore.Sig',
                'name': 'sellSig',
                'type': 'tuple'
            },
            {
                'internalType': 'bytes32',
                'name': 'metadata',
                'type': 'bytes32'
            }
        ],
        'name': 'atomicMatch',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'order',
                'type': 'tuple'
            }
        ],
        'name': 'calculateCurrentPrice',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'enum SaleKindInterface.Side',
                'name': 'side',
                'type': 'uint8'
            },
            {
                'internalType': 'enum SaleKindInterface.SaleKind',
                'name': 'saleKind',
                'type': 'uint8'
            },
            {
                'internalType': 'uint256',
                'name': 'basePrice',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'extra',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'listingTime',
                'type': 'uint256'
            },
            {
                'internalType': 'uint256',
                'name': 'expirationTime',
                'type': 'uint256'
            }
        ],
        'name': 'calculateFinalPrice',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'buy',
                'type': 'tuple'
            },
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'sell',
                'type': 'tuple'
            }
        ],
        'name': 'calculateMatchPrice',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'order',
                'type': 'tuple'
            },
            {
                'components': [
                    {
                        'internalType': 'uint8',
                        'name': 'v',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes32',
                        'name': 'r',
                        'type': 'bytes32'
                    },
                    {
                        'internalType': 'bytes32',
                        'name': 's',
                        'type': 'bytes32'
                    }
                ],
                'internalType': 'struct ExchangeCore.Sig',
                'name': 'sig',
                'type': 'tuple'
            }
        ],
        'name': 'cancelOrder',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': '',
                'type': 'bytes32'
            }
        ],
        'name': 'cancelledOrFinalized',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newDevWalletAddress',
                'type': 'address'
            }
        ],
        'name': 'changeDevWalletAddress',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'newMinimumMakerProtocolFee',
                'type': 'uint256'
            }
        ],
        'name': 'changeMinimumMakerProtocolFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'uint256',
                'name': 'newMinimumTakerProtocolFee',
                'type': 'uint256'
            }
        ],
        'name': 'changeMinimumTakerProtocolFee',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newProtocolFeeRecipient',
                'type': 'address'
            }
        ],
        'name': 'changeProtocolFeeRecipient',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'codename',
        'outputs': [
            {
                'internalType': 'string',
                'name': '',
                'type': 'string'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'devWallet',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'exchangeToken',
        'outputs': [
            {
                'internalType': 'contract ERC20Upgradeable',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'array',
                'type': 'bytes'
            },
            {
                'internalType': 'bytes',
                'name': 'desired',
                'type': 'bytes'
            },
            {
                'internalType': 'bytes',
                'name': 'mask',
                'type': 'bytes'
            }
        ],
        'name': 'guardedArrayReplace',
        'outputs': [
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'order',
                'type': 'tuple'
            }
        ],
        'name': 'hashOrder',
        'outputs': [
            {
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32'
            }
        ],
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'order',
                'type': 'tuple'
            }
        ],
        'name': 'hashToSign',
        'outputs': [
            {
                'internalType': 'bytes32',
                'name': '',
                'type': 'bytes32'
            }
        ],
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'contract ProxyRegistry',
                'name': 'registryAddress',
                'type': 'address'
            },
            {
                'internalType': 'contract TokenTransferProxy',
                'name': 'tokenTransferProxyAddress',
                'type': 'address'
            },
            {
                'internalType': 'contract ERC20Upgradeable',
                'name': 'tokenAddress',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': 'protocolFeeAddress',
                'type': 'address'
            },
            {
                'internalType': 'address',
                'name': 'devWalletAddress',
                'type': 'address'
            }
        ],
        'name': 'initialize',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'minimumMakerProtocolFee',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'minimumTakerProtocolFee',
        'outputs': [
            {
                'internalType': 'uint256',
                'name': '',
                'type': 'uint256'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'internalType': 'string',
                'name': '',
                'type': 'string'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'buyCalldata',
                'type': 'bytes'
            },
            {
                'internalType': 'bytes',
                'name': 'buyReplacementPattern',
                'type': 'bytes'
            },
            {
                'internalType': 'bytes',
                'name': 'sellCalldata',
                'type': 'bytes'
            },
            {
                'internalType': 'bytes',
                'name': 'sellReplacementPattern',
                'type': 'bytes'
            }
        ],
        'name': 'orderCalldataCanMatch',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool'
            }
        ],
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'buy',
                'type': 'tuple'
            },
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'sell',
                'type': 'tuple'
            }
        ],
        'name': 'ordersCanMatch',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'protocolFeeRecipient',
        'outputs': [
            {
                'internalType': 'address',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'registry',
        'outputs': [
            {
                'internalType': 'contract ProxyRegistry',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'target',
                'type': 'address'
            },
            {
                'internalType': 'bytes',
                'name': 'calldatas',
                'type': 'bytes'
            },
            {
                'internalType': 'bytes',
                'name': 'extradata',
                'type': 'bytes'
            }
        ],
        'name': 'staticCall',
        'outputs': [
            {
                'internalType': 'bool',
                'name': 'result',
                'type': 'bool'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'bytes',
                'name': 'arrToCopy',
                'type': 'bytes'
            }
        ],
        'name': 'testCopy',
        'outputs': [
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'addr',
                'type': 'address'
            }
        ],
        'name': 'testCopyAddress',
        'outputs': [
            {
                'internalType': 'bytes',
                'name': '',
                'type': 'bytes'
            }
        ],
        'stateMutability': 'pure',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'tokenTransferProxy',
        'outputs': [
            {
                'internalType': 'contract TokenTransferProxy',
                'name': '',
                'type': 'address'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'address',
                'name': 'newOwner',
                'type': 'address'
            }
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'internalType': 'bytes32',
                'name': 'hash',
                'type': 'bytes32'
            },
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'order',
                'type': 'tuple'
            },
            {
                'components': [
                    {
                        'internalType': 'uint8',
                        'name': 'v',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes32',
                        'name': 'r',
                        'type': 'bytes32'
                    },
                    {
                        'internalType': 'bytes32',
                        'name': 's',
                        'type': 'bytes32'
                    }
                ],
                'internalType': 'struct ExchangeCore.Sig',
                'name': 'sig',
                'type': 'tuple'
            }
        ],
        'name': 'validateOrder',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [
            {
                'components': [
                    {
                        'internalType': 'address',
                        'name': 'exchange',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'maker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'address',
                        'name': 'taker',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerRelayerFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'makerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'takerProtocolFee',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'address',
                        'name': 'feeRecipient',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum ExchangeCore.FeeMethod',
                        'name': 'feeMethod',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.Side',
                        'name': 'side',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'enum SaleKindInterface.SaleKind',
                        'name': 'saleKind',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'address',
                        'name': 'target',
                        'type': 'address'
                    },
                    {
                        'internalType': 'enum AuthenticatedProxy.HowToCall',
                        'name': 'howToCall',
                        'type': 'uint8'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'calldatas',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'replacementPattern',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'staticTarget',
                        'type': 'address'
                    },
                    {
                        'internalType': 'bytes',
                        'name': 'staticExtradata',
                        'type': 'bytes'
                    },
                    {
                        'internalType': 'address',
                        'name': 'paymentToken',
                        'type': 'address'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'basePrice',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'extra',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'listingTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'expirationTime',
                        'type': 'uint256'
                    },
                    {
                        'internalType': 'uint256',
                        'name': 'salt',
                        'type': 'uint256'
                    }
                ],
                'internalType': 'struct ExchangeCore.Order',
                'name': 'order',
                'type': 'tuple'
            }
        ],
        'name': 'validateOrderParameters',
        'outputs': [
            {
                'internalType': 'bool',
                'name': '',
                'type': 'bool'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'inputs': [],
        'name': 'version',
        'outputs': [
            {
                'internalType': 'string',
                'name': '',
                'type': 'string'
            }
        ],
        'stateMutability': 'view',
        'type': 'function'
    }
];
// tslint:disable:max-file-line-count