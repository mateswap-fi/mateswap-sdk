import { Dogechain } from '../entities/Native'

import { ChainId } from '../enums'

export const NATIVE = {
  [ChainId.DOGECHAIN]: Dogechain.onChain(ChainId.DOGECHAIN),
  [ChainId.DOGECHAIN_TESTNET]: Dogechain.onChain(ChainId.DOGECHAIN_TESTNET)
}
