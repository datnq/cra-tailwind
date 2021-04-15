import { useCallback, useEffect, useRef } from 'react'

const useDisableAutocompleteRef = element => {
  const disableLP = e => {
    e.stopPropagation()
  }
  const disableAutocomplete = useCallback(() => {
    if (element) {
      element.dataset.lpignore = true
      element.addEventListener('keydown', disableLP)
    }
  }, [element])

  useEffect(() => {
    disableAutocomplete()

    return () => {
      element && element.removeEventListener('keydown', disableLP)
    }
  }, [disableAutocomplete, element])

  return disableAutocomplete
}

export default useDisableAutocompleteRef
