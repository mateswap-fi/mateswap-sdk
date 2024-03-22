import { ChainId } from '../enums'
import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

//TODO(ILoveBones)
export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.DOGECHAIN]:       '0x01ce69082153fd3a909b4fa249d44516d542bab9c4626d8cc023635b2256cffc',
  [ChainId.DOGECHAIN_TESTNET]: '0x01ce69082153fd3a909b4fa249d44516d542bab9c4626d8cc023635b2256cffc',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const LAMBDA_URL = 'https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev'

export const SOCKET_URL = 'wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev'
