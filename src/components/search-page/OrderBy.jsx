import React from 'react'

export const OrderBy = () => {
  return (
    <>
      <label className="list--title">Order By </label>
      <select name="order" id="order" className="order__options">
        <option value="abc">A-Z</option>
        <option value="abc">Z-A</option>
        <option value="number">0-9</option>
        <option value="number">9-0</option>
      </select>
    </>
  )
}
