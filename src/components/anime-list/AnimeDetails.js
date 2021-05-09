import tw from 'twin.macro'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { PageHeader } from '../layout'
import useAPI from '../../api/useAPI'
import get from 'lodash.get'

const AnimeDetails = () => {
  const { id } = useParams()
  const { animeAPI } = useAPI()
  const { data: anime } = useSWR(
    ['/', id],
    (_, id) => animeAPI.getDetails(id),
    { suspense: true },
  )

  return (
    <>
      <PageHeader title={get(anime, 'alternative_titles.en', anime.title)} />
      <section tw='m-8 h-full flex'>
        <div>
          <img src={anime.main_picture.medium} />
        </div>
        <div tw='ml-8'>{anime.synopsis}</div>
      </section>
    </>
  )
}

export default AnimeDetails
