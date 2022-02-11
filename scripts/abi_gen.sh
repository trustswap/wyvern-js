#!/bin/sh

./node_modules/@0x/abi-gen/bin/abi-gen.js --abis 'src/wyvern-ethereum/build/contracts/@(WyvernToken|WyvernDAO|WyvernExchange|WyvernExchangeV1|WyvernProxyRegistry|WyvernAtomicizer).json' --template 'src/abi_templates/contract.handlebars' --partials 'src/abi_templates/partials/*.handlebars' --output 'src/abi_gen'
