import { clusterApiUrl, PublicKey } from '@solana/web3.js'
import tiktok from './tiktok_clone.json'

export const SOLANA_HOST = clusterApiUrl('devnet')

export const TIKTOK_PROGRAM_ID = new PublicKey(
    "3zVRbg8a2odQiXuVAJZdK9mKsKAYCp3o3a5pFqXNZdsp"
)

export const TIKTOK_IDL = tiktok