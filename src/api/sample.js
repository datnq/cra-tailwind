const user = (client) => {
  return {
    get() {
      return client.get('users')
    }
  }
}

export default user