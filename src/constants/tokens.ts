import { UXD_ADDRESS, WLAC_ADDRESS } from './addresses'

import { ChainId } from '../enums'
import { Token } from '../entities/Token'
import { TokenMap } from '../types/TokenMap'


// UXD
// https://explorer.lachain.network/token/0xDe09E74d4888Bc4e65F589e8c13Bce9F71DdF4c7/
export const UXD: TokenMap = {
  [ChainId.LACHAIN]: new Token(ChainId.LACHAIN, UXD_ADDRESS[ChainId.LACHAIN], 18, 'UXD', 'UXD token'),
  [ChainId.LACHAIN_TESTNET]: new Token(ChainId.LACHAIN_TESTNET, UXD_ADDRESS[ChainId.LACHAIN_TESTNET], 18, 'UXD', 'UXD token')
}

export const WLAC: TokenMap = {
  [ChainId.LACHAIN]: new Token(ChainId.LACHAIN, WLAC_ADDRESS[ChainId.LACHAIN], 18, 'WLAC', 'Wrapped LAC'),
  [ChainId.LACHAIN_TESTNET]: new Token(ChainId.LACHAIN_TESTNET, WLAC_ADDRESS[ChainId.LACHAIN_TESTNET], 18, 'WLAC', 'Wrapped LAC')
}

export const WNATIVE: TokenMap = {
  [ChainId.LACHAIN]: WLAC[ChainId.LACHAIN],
  [ChainId.LACHAIN_TESTNET]: WLAC[ChainId.LACHAIN_TESTNET]
}
