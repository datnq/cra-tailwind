import H1 from '../components/typography/H1'
import Layout from '../layouts/DefaultLayout'
import useAuth from '../components/app/useAuth'
import LoginOptions from '../components/loginOptions/LoginOptions'

const Home = () => {
  const [token] = useAuth()
  return <Layout>{!token ? <LoginOptions /> : <H1>Logged in</H1>}</Layout>
}
export default Home
