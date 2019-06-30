import EmbarkJS from '../embarkjs'
let BancorFormulaJSONConfig = {
  contract_name: {
    deploy: false,
    className: 'BancorFormula',
    args: [],
    code:
      '608060405234801561001057600080fd5b506001606060020a641c35fedd1502036020556001605e60020a646c3390ecc902036021556001606160020a640cf801476102036022556001605f60020a6431bdb23e1d02036023556001605b60020a6502fb1d8fe08302036024556001605a60020a6505b771955b3702036025556001605960020a650af67a93bb5102036026556001605860020a6515060c256cb302036027556001605860020a651428a2f98d7302036028556001605660020a654d515663970902036029556001605560020a65944620b0e70f0203602a557011c592761c666fffffffffffffffffffff602b5570110a688680a757ffffffffffffffffffff602c55701056f1b5bedf77ffffffffffffffffffff602d55700faadceceeff8bffffffffffffffffffff602e55700f05dc6b27edadffffffffffffffffffff602f55700e67a5a25da4107fffffffffffffffffff603055700dcff115b14eedffffffffffffffffffff603155700d3e7a392431239fffffffffffffffffff603255700cb2ff529eb71e4fffffffffffffffffff603355700c2d415c3db974afffffffffffffffffff603455700bad03e7d883f69bffffffffffffffffff603555700b320d03b2c343d5ffffffffffffffffff603655700abc25204e02828dffffffffffffffffff603755700a4b16f74ee4bb207fffffffffffffffff6038557009deaf736ac1f569ffffffffffffffffff603955700976bd9952c7aa957fffffffffffffffff603a557009131271922eaa606fffffffffffffffff603b557008b380f3558668c46fffffffffffffffff603c55700857ddf0117efa215bffffffffffffffff603d556001608360020a03603e557007abbf6f6abb9d087fffffffffffffffff603f5570075af62cbac95f7dfa7fffffffffffffff60405570070d7fb7452e187ac13fffffffffffffff6041557006c3390ecc8af379295fffffffffffffff60425570067c00a3b07ffc01fd6fffffffffffffff604355700637b647c39cbb9d3d27ffffffffffffff6044557005f63b1fc104dbd39587ffffffffffffff6045557005b771955b36e12f7235ffffffffffffff60465570057b3d49dda84556d6f6ffffffffffffff60475570054183095b2c8ececf30ffffffffffffff60485570050a28be635ca2b888f77fffffffffffff6049557004d5156639708c9db33c3fffffffffffff604a557004a23105873875bd52dfdfffffffffffff604b55700471649d87199aa990756fffffffffffff604c557004429a21a029d4c1457cfbffffffffffff604d55700415bc6d6fb7dd71af2cb3ffffffffffff604e557003eab73b3bbfe282243ce1ffffffffffff604f557003c1771ac9fb6b4c18e229ffffffffffff605055700399e96897690418f785257fffffffffff605155700373fc456c53bb779bf0ea9fffffffffff60525570034f9e8e490c48e67e6ab8bfffffffffff60535570032cbfd4a7adc790560b3337ffffffffff60545570030b50570f6e5d2acca94613ffffffffff6055557002eb40f9f620fda6b56c2861ffffffffff6056557002cc8340ecb0d0f520a6af58ffffffffff6057557002af09481380a0a35cf1ba02ffffffffff605855700292c5bdd3b92ec810287b1b3fffffffff605955700277abdcdab07d5a77ac6d6b9fffffffff605a5570025daf6654b1eaa55fd64df5efffffffff605b55700244c49c648baa98192dce88b7ffffffff605c5570022ce03cd5619a311b2471268bffffffff605d55700215f77c045fbe885654a44a0fffffffff605e556001608160020a03605f557001eaefdbdaaee7421fc4d3ede5ffffffff6060557001d6bd8b2eb257df7e8ca57b09bfffffff6061557001c35fedd14b861eb0443f7f133fffffff6062557001b0ce43b322bcde4a56e8ada5afffffff60635570019f0028ec1fff007f5a195a39dfffffff60645570018ded91f0e72ee74f49b15ba527ffffff60655570017d8ec7f04136f4e5615fd41a63ffffff60665570016ddc6556cdb84bdc8d12d22e6fffffff60675570015ecf52776a1155b5bd8395814f7fffff60685570015060c256cb23b3b3cc3754cf40ffffff6069557001428a2f98d728ae223ddab715be3fffff606a5570013545598e5c23276ccf0ede68034fffff606b557001288c4161ce1d6f54b7f61081194fffff606c5570011c592761c666aa641d5a01a40f17ffff606d55700110a688680a7530515f3e6e6cfdcdffff606e557001056f1b5bedf75c6bcb2ce8aed428ffff606f556ffaadceceeff8a0890f3875f008277fff6070556ff05dc6b27edad306388a600f6ba0bfff6071556fe67a5a25da41063de1495d5b18cdbfff6072556fdcff115b14eedde6fc3aa5353f2e4fff6073556fd3e7a3924312399f9aae2e0f868f8fff6074556fcb2ff529eb71e41582cccd5a1ee26fff6075556fc2d415c3db974ab32a51840c0b67edff6076556fbad03e7d883f69ad5b0a186184e06bff6077556fb320d03b2c343d4829abd6075f0cc5ff6078556fabc25204e02828d73c6e80bcdb1a95bf6079556fa4b16f74ee4bb2040a1ec6c15fbbf2df607a556f9deaf736ac1f569deb1b5ae3f36c130f607b556f976bd9952c7aa957f5937d790ef65037607c556f9131271922eaa6064b73a22d0bd4f2bf607d556f8b380f3558668c46c91c49a2f8e967b9607e556f857ddf0117efa215952912839f6473e6607f556035806107c16000396000f3fe6080604052600080fdfea165627a7a72305820fa4081e54368d98cd94f5bc874f6550c9214d97b683ec5d6ec27cdc79b61aa910029',
    runtimeBytecode:
      '6080604052600080fdfea165627a7a72305820fa4081e54368d98cd94f5bc874f6550c9214d97b683ec5d6ec27cdc79b61aa910029',
    realRuntimeBytecode: '6080604052600080fdfea165627a7a72305820',
    linkReferences: {},
    swarmHash:
      'fa4081e54368d98cd94f5bc874f6550c9214d97b683ec5d6ec27cdc79b61aa91',
    gasEstimates: {
      creation: {
        codeDepositCost: '10600',
        executionCost: '1921627',
        totalCost: '1932227',
      },
      internal: {
        'findPositionInMaxExpArray(uint256)': 'infinite',
        'floorLog2(uint256)': 'infinite',
        'generalExp(uint256,uint8)': 'infinite',
        'generalLog(uint256)': 'infinite',
        'optimalExp(uint256)': 'infinite',
        'optimalLog(uint256)': 'infinite',
        'power(uint256,uint256,uint32,uint32)': 'infinite',
      },
    },
    functionHashes: {},
    abiDefinition: [
      {
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
    ],
    filename:
      '/Users/georgispasov/Development/LimeLabs/status/discover/.embark/contracts/utils/BancorFormula.sol',
    originalFilename: 'contracts/utils/BancorFormula.sol',
    path:
      '/Users/georgispasov/Development/LimeLabs/status/discover/contracts/utils/BancorFormula.sol',
    gas: 'auto',
    type: 'file',
  },
  code:
    '608060405234801561001057600080fd5b506001606060020a641c35fedd1502036020556001605e60020a646c3390ecc902036021556001606160020a640cf801476102036022556001605f60020a6431bdb23e1d02036023556001605b60020a6502fb1d8fe08302036024556001605a60020a6505b771955b3702036025556001605960020a650af67a93bb5102036026556001605860020a6515060c256cb302036027556001605860020a651428a2f98d7302036028556001605660020a654d515663970902036029556001605560020a65944620b0e70f0203602a557011c592761c666fffffffffffffffffffff602b5570110a688680a757ffffffffffffffffffff602c55701056f1b5bedf77ffffffffffffffffffff602d55700faadceceeff8bffffffffffffffffffff602e55700f05dc6b27edadffffffffffffffffffff602f55700e67a5a25da4107fffffffffffffffffff603055700dcff115b14eedffffffffffffffffffff603155700d3e7a392431239fffffffffffffffffff603255700cb2ff529eb71e4fffffffffffffffffff603355700c2d415c3db974afffffffffffffffffff603455700bad03e7d883f69bffffffffffffffffff603555700b320d03b2c343d5ffffffffffffffffff603655700abc25204e02828dffffffffffffffffff603755700a4b16f74ee4bb207fffffffffffffffff6038557009deaf736ac1f569ffffffffffffffffff603955700976bd9952c7aa957fffffffffffffffff603a557009131271922eaa606fffffffffffffffff603b557008b380f3558668c46fffffffffffffffff603c55700857ddf0117efa215bffffffffffffffff603d556001608360020a03603e557007abbf6f6abb9d087fffffffffffffffff603f5570075af62cbac95f7dfa7fffffffffffffff60405570070d7fb7452e187ac13fffffffffffffff6041557006c3390ecc8af379295fffffffffffffff60425570067c00a3b07ffc01fd6fffffffffffffff604355700637b647c39cbb9d3d27ffffffffffffff6044557005f63b1fc104dbd39587ffffffffffffff6045557005b771955b36e12f7235ffffffffffffff60465570057b3d49dda84556d6f6ffffffffffffff60475570054183095b2c8ececf30ffffffffffffff60485570050a28be635ca2b888f77fffffffffffff6049557004d5156639708c9db33c3fffffffffffff604a557004a23105873875bd52dfdfffffffffffff604b55700471649d87199aa990756fffffffffffff604c557004429a21a029d4c1457cfbffffffffffff604d55700415bc6d6fb7dd71af2cb3ffffffffffff604e557003eab73b3bbfe282243ce1ffffffffffff604f557003c1771ac9fb6b4c18e229ffffffffffff605055700399e96897690418f785257fffffffffff605155700373fc456c53bb779bf0ea9fffffffffff60525570034f9e8e490c48e67e6ab8bfffffffffff60535570032cbfd4a7adc790560b3337ffffffffff60545570030b50570f6e5d2acca94613ffffffffff6055557002eb40f9f620fda6b56c2861ffffffffff6056557002cc8340ecb0d0f520a6af58ffffffffff6057557002af09481380a0a35cf1ba02ffffffffff605855700292c5bdd3b92ec810287b1b3fffffffff605955700277abdcdab07d5a77ac6d6b9fffffffff605a5570025daf6654b1eaa55fd64df5efffffffff605b55700244c49c648baa98192dce88b7ffffffff605c5570022ce03cd5619a311b2471268bffffffff605d55700215f77c045fbe885654a44a0fffffffff605e556001608160020a03605f557001eaefdbdaaee7421fc4d3ede5ffffffff6060557001d6bd8b2eb257df7e8ca57b09bfffffff6061557001c35fedd14b861eb0443f7f133fffffff6062557001b0ce43b322bcde4a56e8ada5afffffff60635570019f0028ec1fff007f5a195a39dfffffff60645570018ded91f0e72ee74f49b15ba527ffffff60655570017d8ec7f04136f4e5615fd41a63ffffff60665570016ddc6556cdb84bdc8d12d22e6fffffff60675570015ecf52776a1155b5bd8395814f7fffff60685570015060c256cb23b3b3cc3754cf40ffffff6069557001428a2f98d728ae223ddab715be3fffff606a5570013545598e5c23276ccf0ede68034fffff606b557001288c4161ce1d6f54b7f61081194fffff606c5570011c592761c666aa641d5a01a40f17ffff606d55700110a688680a7530515f3e6e6cfdcdffff606e557001056f1b5bedf75c6bcb2ce8aed428ffff606f556ffaadceceeff8a0890f3875f008277fff6070556ff05dc6b27edad306388a600f6ba0bfff6071556fe67a5a25da41063de1495d5b18cdbfff6072556fdcff115b14eedde6fc3aa5353f2e4fff6073556fd3e7a3924312399f9aae2e0f868f8fff6074556fcb2ff529eb71e41582cccd5a1ee26fff6075556fc2d415c3db974ab32a51840c0b67edff6076556fbad03e7d883f69ad5b0a186184e06bff6077556fb320d03b2c343d4829abd6075f0cc5ff6078556fabc25204e02828d73c6e80bcdb1a95bf6079556fa4b16f74ee4bb2040a1ec6c15fbbf2df607a556f9deaf736ac1f569deb1b5ae3f36c130f607b556f976bd9952c7aa957f5937d790ef65037607c556f9131271922eaa6064b73a22d0bd4f2bf607d556f8b380f3558668c46c91c49a2f8e967b9607e556f857ddf0117efa215952912839f6473e6607f556035806107c16000396000f3fe6080604052600080fdfea165627a7a72305820fa4081e54368d98cd94f5bc874f6550c9214d97b683ec5d6ec27cdc79b61aa910029',
  runtime_bytecode:
    '6080604052600080fdfea165627a7a72305820fa4081e54368d98cd94f5bc874f6550c9214d97b683ec5d6ec27cdc79b61aa910029',
  real_runtime_bytecode: '6080604052600080fdfea165627a7a72305820',
  swarm_hash:
    'fa4081e54368d98cd94f5bc874f6550c9214d97b683ec5d6ec27cdc79b61aa91',
  gas_estimates: {
    creation: {
      codeDepositCost: '10600',
      executionCost: '1921627',
      totalCost: '1932227',
    },
    internal: {
      'findPositionInMaxExpArray(uint256)': 'infinite',
      'floorLog2(uint256)': 'infinite',
      'generalExp(uint256,uint8)': 'infinite',
      'generalLog(uint256)': 'infinite',
      'optimalExp(uint256)': 'infinite',
      'optimalLog(uint256)': 'infinite',
      'power(uint256,uint256,uint32,uint32)': 'infinite',
    },
  },
  function_hashes: {},
  abi: [
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
  ],
}
let BancorFormula = new EmbarkJS.Blockchain.Contract(BancorFormulaJSONConfig)
export default BancorFormula
