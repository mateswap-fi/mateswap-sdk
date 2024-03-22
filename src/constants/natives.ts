import { Lachain } from '../entities/Native'

import { ChainId } from '../enums'

export const NATIVE = {
  [ChainId.LACHAIN]: Lachain.onChain(ChainId.LACHAIN),
  [ChainId.LACHAIN_TESTNET]: Lachain.onChain(ChainId.LACHAIN_TESTNET)
}
