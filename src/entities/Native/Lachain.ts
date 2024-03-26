import { Currency } from '../Currency'
import { NativeCurrency } from '../NativeCurrency'
import { Token } from '../Token'
import { WLAC } from '../../constants/tokens'
import invariant from 'tiny-invariant'

export class Lachain extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'LAC', 'LAC')
  }

  public get wrapped(): Token {
    const weth9 = WLAC[this.chainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  private static _cache: { [chainId: number]: Lachain } = {}

  public static onChain(chainId: number): Lachain {
    return this._cache[chainId] ?? (this._cache[chainId] = new Lachain(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
