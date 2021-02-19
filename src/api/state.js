import { proxy } from 'valtio'

export const state = proxy({
  now: new Promise(resolve => {
    const data = localStorage.getItem('now')
    setTimeout(() => {
      resolve(data ? JSON.parse(data) : null)
    }, 2000)
  }),
})
