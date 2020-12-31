import cx from 'classnames'
import { propsToTailwind } from '../../lib/tailwind'

const Box = ({ children, ...props }) => {
  const className = propsToTailwind(props)
  return <div className={cx(className)}>{children}</div>
}

export default Box
