import { nanoid } from 'nanoid'

const useFieldId = (defaultId) => {
  return defaultId || nanoid(8)
}

export default useFieldId