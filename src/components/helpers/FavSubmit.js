import { useState } from "react"

export const FavSubmit = ( data, dispatch ) => {
  // e.preventDefault()
  // const newfav = data
  const {checked} = data
   const [addToggle, setAddToggle] = useState( checked )
  // debugger
  const handleAdd = () => {
    dispatch({
      type: 'add',
      payload: data,
      // checked: !checked
    })

    setAddToggle({
      ...data,
      checked: checked
    })

    // debugger
  }

  const handleRemove = () => {
    dispatch({
      type: 'del',
      payload: data.id
    })

    setAddToggle(!addToggle)
  }

  const handleRemoveAll = () => {
    dispatch({
      type: 'remove',
      payload: data
    })
  }
  // debugger
  return { handleAdd, handleRemove, addToggle, handleRemoveAll }
}