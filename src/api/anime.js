const animeAPI = client => {
  return {
    get(resource, params) {
      return client.get('anime' + resource, { params })
    },
  }
}

export default animeAPI
