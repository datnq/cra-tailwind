import { IconHome, IconPackage } from '@tabler/icons'
import Icon from '../components/icon'
import Home from './Home'

const routes = [
  {
    name: 'home',
    label: 'Home',
    icon: props => <Icon icon={IconHome} size={20} {...props} />,
    path: '/',
    exact: true,
    component: props => <Home title='Home Page' {...props} />,
  },
  {
    name: 'product',
    label: 'Product',
    icon: props => <Icon icon={IconPackage} size={20} {...props} />,
    path: '/products',
    component: props => <Home title='Product Page' {...props} />,
  },
]

export default routes
