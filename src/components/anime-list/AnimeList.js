import tw from 'twin.macro'
import useSWR from 'swr'
import useAPI from '../../api/useAPI'
import { Link } from 'react-router-dom'

const AnimeList = () => {
  const { animeAPI } = useAPI()
  const {
    data: { data: animes },
  } = useSWR(
    ['/ranking', 'upcoming'],
    (resource, rankingType) =>
      animeAPI.get(resource, { ranking_type: rankingType }),
    {
      suspense: true,
    },
  )
  return (
    <div tw='flex flex-wrap'>
      {animes.map(({ node: anime }) => {
        return (
          <Link
            key={anime.id}
            tw='w-60 flex flex-col items-center mb-8 mr-8 bg-white shadow-md p-4 rounded-lg'
            to={`/anime/${anime.id}`}
          >
            <img
              src={anime.main_picture.medium}
              alt={anime.title}
              tw='block w-52 h-64 object-contain bg-gray-300 mb-4 rounded-md'
            />
            <h3 tw='text-center text-sm uppercase font-bold line-clamp-2'>
              {anime.title}
            </h3>
          </Link>
        )
      })}
    </div>
  )
}

export default AnimeList
