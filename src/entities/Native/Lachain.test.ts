import { Lachain } from './Lachain'

describe('Lachain', () => {
  it('static constructor uses cache', () => {
    expect(Lachain.onChain(274) === Lachain.onChain(274)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(Lachain.onChain(274) !== Lachain.onChain(568)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(Lachain.onChain(274).equals(Lachain.onChain(568))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(Lachain.onChain(274).equals(Lachain.onChain(274))).toEqual(true)
  })
})
