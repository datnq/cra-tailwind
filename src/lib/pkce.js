import { random } from './string'

export const codeVerifier = () => random(64)

export const codeChallenger = async (verifier, method) => {
  if (method === 'plain') return verifier
  
  const encoded = new TextEncoder().encode(verifier)
  const digest = await crypto.subtle.digest('SHA-256', encoded)

  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}
