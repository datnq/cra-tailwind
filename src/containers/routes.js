import { IconHome } from '@tabler/icons'
import Icon from '../components/icon'
import Details from './Details'
import Home from './Home'

const routes = [
  {
    name: 'home',
    menu: 'Home',
    icon: props => <Icon icon={IconHome} size={20} {...props} />,
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'anime-details',
    path: '/anime/:id',
    component: Details,
    exact: false,
  },
]

export default routes
