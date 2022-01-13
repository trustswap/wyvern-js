#!/bin/sh

yarn run abi-gen --abis 'src/wyvern-ethereum/build/contracts/@(WyvernExchange|WyvernProxyRegistry|WyvernAtomicizer).json' --template 'src/abi_templates/contract.mustache' --partials 'src/abi_templates/partials/*.mustache' --output 'src/abi_gen' 
