import { Currency } from '../Currency'
import { NativeCurrency } from '../NativeCurrency'
import { Token } from '../Token'
import { WWDOGE } from '../../constants/tokens'
import invariant from 'tiny-invariant'

export class Dogechain extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'WDOGE', 'Doge')
  }

  public get wrapped(): Token {
    const weth9 = WWDOGE[this.chainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  private static _cache: { [chainId: number]: Dogechain } = {}

  public static onChain(chainId: number): Dogechain {
    return this._cache[chainId] ?? (this._cache[chainId] = new Dogechain(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
