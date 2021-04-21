import tw from 'twin.macro'
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
} from '@tabler/icons'
import Icon from './Icon'

export default Icon

export const variantIcons = {
  default: null,
  blank: <Icon icon={IconInfoCircle} size={24} tw='text-primary mr-4' />,
  info: <Icon icon={IconInfoCircle} size={24} tw='text-info mr-4' />,
  warning: <Icon icon={IconAlertTriangle} size={24} tw='text-warning mr-4' />,
  danger: <Icon icon={IconAlertTriangle} size={24} tw='text-negative mr-4' />,
  error: <Icon icon={IconAlertTriangle} size={24} tw='text-negative mr-4' />,
  success: <Icon icon={IconCircleCheck} size={24} tw='text-positive mr-4' />,
}
