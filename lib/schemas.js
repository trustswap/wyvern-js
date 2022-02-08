"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
const json_schemas_1 = require("@0xproject/json-schemas");
const data = { type: 'string', pattern: '^0x[0-9a-f]*$' };
const orderSchema = {
    id: '/Order',
    properties: {
        exchange: { $ref: '/addressSchema' },
        maker: { $ref: '/addressSchema' },
        taker: { $ref: '/addressSchema' },
        makerRelayerFee: { $ref: '/numberSchema' },
        takerRelayerFee: { $ref: '/numberSchema' },
        makerProtocolFee: { $ref: '/numberSchema' },
        takerProtocolFee: { $ref: '/numberSchema' },
        feeRecipient: { $ref: '/addressSchema' },
        feeMethod: { $ref: '/numberSchema' },
        side: { $ref: '/numberSchema' },
        saleKind: { $ref: '/numberSchema' },
        target: { $ref: '/addressSchema' },
        howToCall: { $ref: '/numberSchema' },
        calldata: data,
        replacementPattern: data,
        staticTarget: { $ref: '/addressSchema' },
        staticExtradata: data,
        paymentToken: { $ref: '/addressSchema' },
        basePrice: { $ref: '/numberSchema' },
        extra: { $ref: '/numberSchema' },
        listingTime: { $ref: '/numberSchema' },
        expirationTime: { $ref: '/numberSchema' },
        salt: { $ref: '/numberSchema' },
        data: data,
        dataType: data,
    },
    required: [
        'exchange',
        'maker',
        'taker',
        'makerRelayerFee',
        'takerRelayerFee',
        'makerProtocolFee',
        'takerProtocolFee',
        'feeRecipient',
        'feeMethod',
        'side',
        'saleKind',
        'target',
        'howToCall',
        'calldata',
        'replacementPattern',
        'staticTarget',
        'staticExtradata',
        'paymentToken',
        'basePrice',
        'extra',
        'listingTime',
        'expirationTime',
        'salt',
    ],
    type: 'object',
};
const signedOrderSchema = {
    id: '/SignedOrder',
    allOf: [
        { $ref: '/Order' },
        {
            properties: {
                ecSignature: { $ref: '/ECSignature' },
            },
            required: ['ecSignature'],
        },
    ],
};
exports.schemas = {
    numberSchema: json_schemas_1.schemas.numberSchema,
    addressSchema: json_schemas_1.schemas.addressSchema,
    ecSignatureSchema: json_schemas_1.schemas.ecSignatureSchema,
    ecSignatureParameterSchema: json_schemas_1.schemas.ecSignatureParameterSchema,
    orderHashSchema: json_schemas_1.schemas.orderHashSchema,
    orderSchema,
    signedOrderSchema,
};
//# sourceMappingURL=schemas.js.map