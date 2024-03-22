import { Dogechain } from './Dogechain'

describe('Dogechain', () => {
  it('static constructor uses cache', () => {
    expect(Dogechain.onChain(2000) === Dogechain.onChain(2000)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(Dogechain.onChain(2000) !== Dogechain.onChain(568)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(Dogechain.onChain(2000).equals(Dogechain.onChain(568))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(Dogechain.onChain(2000).equals(Dogechain.onChain(2000))).toEqual(true)
  })
})
