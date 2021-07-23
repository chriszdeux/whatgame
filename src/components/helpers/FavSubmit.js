import { useState } from "react"

export const FavSubmit = ( data, dispatch ) => {
  // e.preventDefault()
  // const newfav = data
  const [addToggle, setAddToggle] = useState( false )

  const handleAdd = () => {
    dispatch({
      type: 'add',
      payload: data
    })

    setAddToggle(!addToggle)
  }

  const handleRemove = () => {
    dispatch({
      type: 'del',
      payload: data.id
    })

    setAddToggle(!addToggle)
  }
  // debugger
  return { handleAdd, handleRemove, addToggle }
}