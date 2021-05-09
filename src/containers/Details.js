import tw from 'twin.macro'
import { Suspense } from 'react'
import Layout from '../layouts/DefaultLayout'
import AnimeDetails from '../components/anime-list/AnimeDetails'

const Details = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Getting anime details&hellip;</div>}>
        <AnimeDetails />
      </Suspense>
    </Layout>
  )
}

export default Details
