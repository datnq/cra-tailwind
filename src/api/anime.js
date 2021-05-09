const animeFields = [
  'id',
  'title',
  'alternative_titles',
  'main_pictures',
  'pictures',
  'start_date',
  'end_date',
  'synopsis',
  'media_type',
  'status',
  'genres',
  'num_episodes',
  'rating',
  'studios'
]
const animeAPI = client => {
  return {
    get(resource, params) {
      return client.get('anime' + resource, { params })
    },
    getDetails(id) {
      return client.get('anime/' + id, {
        params: {
          fields: animeFields.join(','),
        },
      })
    },
  }
}

export default animeAPI
