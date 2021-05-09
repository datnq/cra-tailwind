import { useEffect } from "react"
import useAuth from "./useAuth"

const useAutheticated = (callback) => {
  const auth = useAuth()
  useEffect(() => {
    if (!auth.isAutheticated()) {
      callback(auth)
    }
  }, [auth, callback])
}

export default useAutheticated
