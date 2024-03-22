import { UXD_ADDRESS, WLAC_ADDRESS } from '../constants'

import { ChainId } from '../enums'
import { Token } from '.'
import { computeConstantProductPoolAddress } from '../functions/computeConstantProductPoolAddress'

// import { keccak256, pack } from '@ethersproject/solidity'

// import { computePoolInitCodeHash } from '../functions/computePoolInitCodeHash'
// import { ConstantProductPool } from './ConstantProductPool'
// import { InsufficientInputAmountError } from '../errors'
// import { computeConstantProductPoolAddress } from '../functions/computeConstantProductPoolAddress'
// import { defaultAbiCoder } from '@ethersproject/abi'

// import { getCreate2Address } from '@ethersproject/address'

// describe('computePoolAddress', () => {
//   it('should correctly compute the pool address', () => {
//     const tokenA = new Token(274, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 18, 'UXD', 'USD Coin')

//     const tokenB = new Token(274, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'DAI Stablecoin')

//     const fee = 25

//     const twap = true

//     const result = computeConstantProductPoolAddress({
//       factoryAddress: '0x1111111111111111111111111111111111111111',
//       tokenA,
//       tokenB,
//       fee,
//       twap
//     })

//     expect(result).toEqual('0x265C560bB05630701Eb49BF8cA427A674AaCb955')
//   })
// })

describe('computePoolAddress', () => {
  it('should correctly compute the pool address 2', () => {
    const tokenA = new Token(ChainId.LACHAIN, UXD_ADDRESS[ChainId.LACHAIN], 18, 'UXD', 'UXD token')
    const tokenB = new Token(ChainId.LACHAIN, WLAC_ADDRESS[ChainId.LACHAIN], 18, 'WLAC', 'Wrapped LAC')

    expect(tokenA.address).toEqual('0x7b2B3C5308ab5b2a1d9a94d20D35CCDf61e05b72')
    expect(tokenB.address).toEqual('0x0000000000000000000000000000000000002711')

    const fee = 30

    const twap = true

    const address = computeConstantProductPoolAddress({
      factoryAddress: '0x5e343eD1586e13d5e34A204667FAb0D81F85a2c2',
      tokenA,
      tokenB,
      fee,
      twap
    })

    // const address = getCreate2Address(
    //   '0x2d7933851D0b372ffB810793Cf86D33177F6812f',
    //   keccak256(['bytes'], [deployData]),
    //   INIT_CODE_HASH
    // )

    expect(address).toEqual('0x0fAEf585696341BD02F607a1C617dbAa2bb6381a')
  })
})

// describe('ConstantProductPool', () => {
//   const UXD = new Token(274, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 18, 'UXD', 'USD Coin')
//   const DAI = new Token(274, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'DAI Stablecoin')

//   describe('constructor', () => {
//     it('cannot be used for tokens on different chains', () => {
//       expect(
//         () =>
//           new ConstantProductPool(
//             CurrencyAmount.fromRawAmount(UXD, '100'),
//             CurrencyAmount.fromRawAmount(WLAC[3], '100')
//           )
//       ).toThrow('CHAIN_IDS')
//     })
//   })

//   describe('#getAddress', () => {
//     it('returns the correct address', () => {
//       expect(ConstantProductPool.getAddress(UXD, DAI)).toEqual('0x99871df1a759702b4015771Bc278F89c0C090F76')
//     })
//   })

//   describe('#token0', () => {
//     it('always is the token that sorts before', () => {
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(UXD, '100'), CurrencyAmount.fromRawAmount(DAI, '100'))
//           .token0
//       ).toEqual(DAI)
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(DAI, '100'), CurrencyAmount.fromRawAmount(UXD, '100'))
//           .token0
//       ).toEqual(DAI)
//     })
//   })
//   describe('#token1', () => {
//     it('always is the token that sorts after', () => {
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(UXD, '100'), CurrencyAmount.fromRawAmount(DAI, '100'))
//           .token1
//       ).toEqual(UXD)
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(DAI, '100'), CurrencyAmount.fromRawAmount(UXD, '100'))
//           .token1
//       ).toEqual(UXD)
//     })
//   })
//   describe('#reserve0', () => {
//     it('always comes from the token that sorts before', () => {
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(UXD, '100'), CurrencyAmount.fromRawAmount(DAI, '101'))
//           .reserve0
//       ).toEqual(CurrencyAmount.fromRawAmount(DAI, '101'))
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(DAI, '101'), CurrencyAmount.fromRawAmount(UXD, '100'))
//           .reserve0
//       ).toEqual(CurrencyAmount.fromRawAmount(DAI, '101'))
//     })
//   })
//   describe('#reserve1', () => {
//     it('always comes from the token that sorts after', () => {
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(UXD, '100'), CurrencyAmount.fromRawAmount(DAI, '101'))
//           .reserve1
//       ).toEqual(CurrencyAmount.fromRawAmount(UXD, '100'))
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(DAI, '101'), CurrencyAmount.fromRawAmount(UXD, '100'))
//           .reserve1
//       ).toEqual(CurrencyAmount.fromRawAmount(UXD, '100'))
//     })
//   })

//   describe('#token0Price', () => {
//     it('returns price of token0 in terms of token1', () => {
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(UXD, '101'), CurrencyAmount.fromRawAmount(DAI, '100'))
//           .token0Price
//       ).toEqual(new Price(DAI, UXD, '100', '101'))
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(DAI, '100'), CurrencyAmount.fromRawAmount(UXD, '101'))
//           .token0Price
//       ).toEqual(new Price(DAI, UXD, '100', '101'))
//     })
//   })

//   describe('#token1Price', () => {
//     it('returns price of token1 in terms of token0', () => {
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(UXD, '101'), CurrencyAmount.fromRawAmount(DAI, '100'))
//           .token1Price
//       ).toEqual(new Price(UXD, DAI, '101', '100'))
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(DAI, '100'), CurrencyAmount.fromRawAmount(UXD, '101'))
//           .token1Price
//       ).toEqual(new Price(UXD, DAI, '101', '100'))
//     })
//   })

//   describe('#priceOf', () => {
//     const pair = new ConstantProductPool(
//       CurrencyAmount.fromRawAmount(UXD, '101'),
//       CurrencyAmount.fromRawAmount(DAI, '100')
//     )
//     it('returns price of token in terms of other token', () => {
//       expect(pair.priceOf(DAI)).toEqual(pair.token0Price)
//       expect(pair.priceOf(UXD)).toEqual(pair.token1Price)
//     })

//     it('throws if invalid token', () => {
//       expect(() => pair.priceOf(WLAC[274])).toThrow('TOKEN')
//     })
//   })

//   describe('#reserveOf', () => {
//     it('returns reserves of the given token', () => {
//       expect(
//         new ConstantProductPool(
//           CurrencyAmount.fromRawAmount(UXD, '100'),
//           CurrencyAmount.fromRawAmount(DAI, '101')
//         ).reserveOf(UXD)
//       ).toEqual(CurrencyAmount.fromRawAmount(UXD, '100'))
//       expect(
//         new ConstantProductPool(
//           CurrencyAmount.fromRawAmount(DAI, '101'),
//           CurrencyAmount.fromRawAmount(UXD, '100')
//         ).reserveOf(UXD)
//       ).toEqual(CurrencyAmount.fromRawAmount(UXD, '100'))
//     })

//     it('throws if not in the pair', () => {
//       expect(() =>
//         new ConstantProductPool(
//           CurrencyAmount.fromRawAmount(DAI, '101'),
//           CurrencyAmount.fromRawAmount(UXD, '100')
//         ).reserveOf(WLAC[274])
//       ).toThrow('TOKEN')
//     })
//   })

//   describe('#chainId', () => {
//     it('returns the token0 chainId', () => {
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(UXD, '100'), CurrencyAmount.fromRawAmount(DAI, '100'))
//           .chainId
//       ).toEqual(1)
//       expect(
//         new ConstantProductPool(CurrencyAmount.fromRawAmount(DAI, '100'), CurrencyAmount.fromRawAmount(UXD, '100'))
//           .chainId
//       ).toEqual(1)
//     })
//   })
//   describe('#involvesToken', () => {
//     expect(
//       new ConstantProductPool(
//         CurrencyAmount.fromRawAmount(UXD, '100'),
//         CurrencyAmount.fromRawAmount(DAI, '100')
//       ).involvesToken(UXD)
//     ).toEqual(true)
//     expect(
//       new ConstantProductPool(
//         CurrencyAmount.fromRawAmount(UXD, '100'),
//         CurrencyAmount.fromRawAmount(DAI, '100')
//       ).involvesToken(DAI)
//     ).toEqual(true)
//     expect(
//       new ConstantProductPool(
//         CurrencyAmount.fromRawAmount(UXD, '100'),
//         CurrencyAmount.fromRawAmount(DAI, '100')
//       ).involvesToken(WLAC[274])
//     ).toEqual(false)
//   })
//   describe('miscellaneous', () => {
//     it('getLiquidityMinted:0', async () => {
//       const tokenA = new Token(568, '0x0000000000000000000000000000000000000001', 18)
//       const tokenB = new Token(568, '0x0000000000000000000000000000000000000002', 18)
//       const pair = new ConstantProductPool(
//         CurrencyAmount.fromRawAmount(tokenA, '0'),
//         CurrencyAmount.fromRawAmount(tokenB, '0')
//       )

//       expect(() => {
//         pair.getLiquidityMinted(
//           CurrencyAmount.fromRawAmount(pair.liquidityToken, '0'),
//           CurrencyAmount.fromRawAmount(tokenA, '1000'),
//           CurrencyAmount.fromRawAmount(tokenB, '1000')
//         )
//       }).toThrow(InsufficientInputAmountError)

//       expect(() => {
//         pair.getLiquidityMinted(
//           CurrencyAmount.fromRawAmount(pair.liquidityToken, '0'),
//           CurrencyAmount.fromRawAmount(tokenA, '1000000'),
//           CurrencyAmount.fromRawAmount(tokenB, '1')
//         )
//       }).toThrow(InsufficientInputAmountError)

//       const liquidity = pair.getLiquidityMinted(
//         CurrencyAmount.fromRawAmount(pair.liquidityToken, '0'),
//         CurrencyAmount.fromRawAmount(tokenA, '1001'),
//         CurrencyAmount.fromRawAmount(tokenB, '1001')
//       )

//       expect(liquidity.quotient.toString()).toEqual('1')
//     })

//     it('getLiquidityMinted:!0', async () => {
//       const tokenA = new Token(568, '0x0000000000000000000000000000000000000001', 18)
//       const tokenB = new Token(568, '0x0000000000000000000000000000000000000002', 18)
//       const pair = new ConstantProductPool(
//         CurrencyAmount.fromRawAmount(tokenA, '10000'),
//         CurrencyAmount.fromRawAmount(tokenB, '10000')
//       )

//       expect(
//         pair
//           .getLiquidityMinted(
//             CurrencyAmount.fromRawAmount(pair.liquidityToken, '10000'),
//             CurrencyAmount.fromRawAmount(tokenA, '274'),
//             CurrencyAmount.fromRawAmount(tokenB, '274')
//           )
//           .quotient.toString()
//       ).toEqual('274')
//     })

//     it('getLiquidityValue:!feeOn', async () => {
//       const tokenA = new Token(568, '0x0000000000000000000000000000000000000001', 18)
//       const tokenB = new Token(568, '0x0000000000000000000000000000000000000002', 18)
//       const pair = new ConstantProductPool(
//         CurrencyAmount.fromRawAmount(tokenA, '1000'),
//         CurrencyAmount.fromRawAmount(tokenB, '1000')
//       )

//       {
//         const liquidityValue = pair.getLiquidityValue(
//           tokenA,
//           CurrencyAmount.fromRawAmount(pair.liquidityToken, '1000'),
//           CurrencyAmount.fromRawAmount(pair.liquidityToken, '1000'),
//           false
//         )
//         expect(liquidityValue.currency.equals(tokenA)).toBe(true)
//         expect(liquidityValue.quotient.toString()).toBe('1000')
//       }

//       // 500
//       {
//         const liquidityValue = pair.getLiquidityValue(
//           tokenA,
//           CurrencyAmount.fromRawAmount(pair.liquidityToken, '1000'),
//           CurrencyAmount.fromRawAmount(pair.liquidityToken, '500'),
//           false
//         )
//         expect(liquidityValue.currency.equals(tokenA)).toBe(true)
//         expect(liquidityValue.quotient.toString()).toBe('500')
//       }

//       // tokenB
//       {
//         const liquidityValue = pair.getLiquidityValue(
//           tokenB,
//           CurrencyAmount.fromRawAmount(pair.liquidityToken, '1000'),
//           CurrencyAmount.fromRawAmount(pair.liquidityToken, '1000'),
//           false
//         )
//         expect(liquidityValue.currency.equals(tokenB)).toBe(true)
//         expect(liquidityValue.quotient.toString()).toBe('1000')
//       }
//     })

//     it('getLiquidityValue:feeOn', async () => {
//       const tokenA = new Token(568, '0x0000000000000000000000000000000000000001', 18)
//       const tokenB = new Token(568, '0x0000000000000000000000000000000000000002', 18)

//       const pair = new ConstantProductPool(
//         CurrencyAmount.fromRawAmount(tokenA, '1000'),
//         CurrencyAmount.fromRawAmount(tokenB, '1000')
//       )

//       const liquidityValue = pair.getLiquidityValue(
//         tokenA,
//         CurrencyAmount.fromRawAmount(pair.liquidityToken, '500'),
//         CurrencyAmount.fromRawAmount(pair.liquidityToken, '500'),
//         true,
//         '250000' // 500 ** 2
//       )

//       expect(liquidityValue.currency.equals(tokenA)).toBe(true)

//       expect(liquidityValue.quotient.toString()).toBe('917') // ceiling(1000 - (500 * (1 / 6)))
//     })
//   })
// })
