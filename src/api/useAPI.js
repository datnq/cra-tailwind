import { useAtom } from 'jotai'
import { useEffect } from 'react'
import authAPI from './auth'
import animeAPI from './anime'
import { authClient, client } from './client'
import { tokenAtom } from './state'

const useAPI = () => {
  const [token] = useAtom(tokenAtom)

  return {
    authAPI: authAPI(authClient),
    animeAPI: animeAPI(client),
  }
}
export default useAPI
