import tw, { styled } from 'twin.macro'
import { NavLink as RouterLink } from 'react-router-dom'
import routes from '../../containers/routes'

const NavLink = styled(RouterLink)`
  ${tw`px-3 py-2 hover:bg-gray-100 rounded-lg flex mb-2 space-x-2 items-center text-gray-600 text-sm`}
  & > svg {
    ${tw`text-body`}
  }
  &.active {
    ${tw`bg-gray-200 font-bold text-body`}
    & > svg {
      ${tw`text-primary`}
    }
  }
`

const Nav = () => {
  return (
    <nav tw='flex-grow my-4'>
      {routes.map(route => {
        const Icon = route.icon
        return (
          <NavLink key={route.name} to={route.path} exact={route.exact}>
            <Icon /> <span>{route.label}</span>
          </NavLink>
        )
      })}
    </nav>
  )
}

export default Nav
