import tw, { styled } from 'twin.macro'
import { NavLink as RouterLink } from 'react-router-dom'
import routes from '../../containers/routes'

const NavLink = styled(RouterLink)`
  ${tw`py-4 px-6 hover:bg-gray-100 flex mb-2 space-x-4 items-center 
    text-gray-600 text-sm
  `}
  &.active {
    ${tw`font-bold text-primary bg-gray-100`}
  }
`

const Nav = () => {
  return (
    <nav tw='flex-grow'>
      {routes
        .filter(route => !!route.menu)
        .map(route => {
          const Icon = route.icon
          return (
            <NavLink key={route.name} to={route.path} exact={route.exact}>
              <Icon /><span>{route.menu}</span>
            </NavLink>
          )
        })}
    </nav>
  )
}

export default Nav
