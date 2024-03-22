import { USDC_ADDRESS, USDT_ADDRESS, WWDOGE_ADDRESS } from './addresses'

import { ChainId } from '../enums'
import { Token } from '../entities/Token'
import { TokenMap } from '../types/TokenMap'

export const USDC: TokenMap = {
  [ChainId.DOGECHAIN]: new Token(ChainId.DOGECHAIN, USDC_ADDRESS[ChainId.DOGECHAIN], 6, 'USDC', 'USDC token'),
  [ChainId.DOGECHAIN_TESTNET]: new Token(ChainId.DOGECHAIN_TESTNET, USDC_ADDRESS[ChainId.DOGECHAIN_TESTNET], 6, 'USDC', 'USDC token')
}

export const USDT: TokenMap = {
  [ChainId.DOGECHAIN]: new Token(ChainId.DOGECHAIN, USDT_ADDRESS[ChainId.DOGECHAIN], 6, 'USDT', 'USDT token'),
  [ChainId.DOGECHAIN_TESTNET]: new Token(ChainId.DOGECHAIN_TESTNET, USDT_ADDRESS[ChainId.DOGECHAIN_TESTNET], 6, 'USDT', 'USDT token')
}

export const WWDOGE: TokenMap = {
  [ChainId.DOGECHAIN]: new Token(ChainId.DOGECHAIN, WWDOGE_ADDRESS[ChainId.DOGECHAIN], 18, 'WWDOGE', 'Wrapped Doge'),
  [ChainId.DOGECHAIN_TESTNET]: new Token(ChainId.DOGECHAIN_TESTNET, WWDOGE_ADDRESS[ChainId.DOGECHAIN_TESTNET], 18, 'WWDOGE', 'Wrapped Doge')
}

// export const WNATIVE: TokenMap = {
//   [ChainId.DOGECHAIN]: new Token(ChainId.DOGECHAIN, WWDOGE_ADDRESS[ChainId.DOGECHAIN], 18, 'WDOGE', 'Doge'),
//   [ChainId.DOGECHAIN_TESTNET]: new Token(ChainId.DOGECHAIN_TESTNET, WWDOGE_ADDRESS[ChainId.DOGECHAIN_TESTNET], 18, 'WDOGE', 'Doge')
// }

export const WNATIVE: TokenMap = {
  [ChainId.DOGECHAIN]: WWDOGE[ChainId.DOGECHAIN],
  [ChainId.DOGECHAIN_TESTNET]: WWDOGE[ChainId.DOGECHAIN_TESTNET]
}
