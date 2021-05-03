import { useState } from 'react'

const useSelection = (initSelected = []) => {
  const [selected, setSelected] = useState(initSelected)

  const isSelected = value =>
    selected.length > 0 && selected.includes(value.toString())

  return [
    selected,
    {
      isSelected,
      select: value => {
        !isSelected(value) && setSelected([...selected, value.toString()])
      },
      deselect: value => {
        isSelected(value) &&
          setSelected(selected.filter(i => i !== value.toString()))
      },
    },
  ]
}

export default useSelection
