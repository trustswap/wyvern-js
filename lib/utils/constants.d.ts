export declare const constants: {
    NULL_ADDRESS: string;
    INVALID_JUMP_PATTERN: string;
    OUT_OF_GAS_PATTERN: string;
    INVALID_TAKER_FORMAT: string;
    MAX_DIGITS_IN_UNSIGNED_256_INT: number;
    DEFAULT_BLOCK_POLLING_INTERVAL: number;
    DEPLOYED: {
        rinkeby: {
            TestToken: string;
            TestDAO: string;
            Migrations: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            WyvernRegistry: string;
            SaleKindInterface: string;
            WyvernExchange: string;
            DirectEscrowProvider: string;
            WyvernProxyRegistry: string;
            TestStatic: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernTokenTransferProxy: string;
        };
        development: {
            Migrations: string;
            TestToken: string;
            TestDAO: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            WyvernRegistry: string;
            SaleKindInterface: string;
            WyvernExchange: string;
            DirectEscrowProvider: string;
            WyvernProxyRegistry: string;
            TestStatic: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernTokenTransferProxy: string;
        };
        main: {
            Migrations: string;
            MerkleProof: string;
            WyvernToken: string;
            WyvernDAO: string;
            TestToken: string;
            TestDAO: string;
            TestStatic: string;
            WyvernProxyRegistry: string;
            SaleKindInterface: string;
            WyvernExchange: string;
            WyvernDAOProxy: string;
            WyvernAtomicizer: string;
            WyvernTokenTransferProxy: string;
        };
        mumbai: {
            Migrations: string;
            WyvernProxyRegistry: string;
            WyvernTokenTransferProxy: string;
            WyvernExchange: string;
            WyvernAtomicizer: string;
        };
        matic: {
            Migrations: string;
            WyvernProxyRegistry: string;
            WyvernTokenTransferProxy: string;
            WyvernExchange: string;
            WyvernAtomicizer: string;
        };
    };
    ATOMICIZER_ABI: {
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        payable: boolean;
        stateMutability: string;
        type: string;
    }[];
    EXCHANGE_ABI: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
        constant?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        constant?: undefined;
    } | {
        constant: boolean;
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    PROXY_REGISTRY_ABI: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
        constant?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
        constant?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        constant?: undefined;
    } | {
        constant: boolean;
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    DAO_ABI: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
    TOKEN_ABI: ({
        constant: boolean;
        inputs: {
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            name: string;
            type: string;
        }[];
        payable: boolean;
        stateMutability: string;
        type: string;
        constant?: undefined;
        name?: undefined;
        outputs?: undefined;
        anonymous?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        constant?: undefined;
        outputs?: undefined;
        payable?: undefined;
        stateMutability?: undefined;
    })[];
};
