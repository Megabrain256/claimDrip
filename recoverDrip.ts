import { ethers, Wallet, providers } from 'ethers'
import { formatUnits, parseUnits } from 'ethers/lib/utils'
import { getBscSdk } from '@dethcrypto/eth-sdk'
import { error } from 'console'

ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)

const userEOA = process.env.victimWallet

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)

const signer = new Wallet('process.env.victimPrivateKey', provider)

async function main() {
    const sdk = getBscSdk(signer)

    console.log('DRIP Balance in my Wallet is', formatUnits(await sdk.tokens.DRIP.))

}