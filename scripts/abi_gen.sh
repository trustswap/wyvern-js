#!/bin/sh

yarn run abi-gen --abiGlob 'src/wyvern-ethereum/build/contracts/@(WyvernExchange|WyvernProxyRegistry|WyvernAtomicizer).json' --templates src/abi_templates --output src/abi_gen 
