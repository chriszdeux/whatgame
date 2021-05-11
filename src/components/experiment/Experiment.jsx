import React, { useState } from 'react'

export const Experiment = () => {
  const [showContent, setShowContent] = useState(false)

  const handleToggle = () => {
    showContent ? setShowContent(false) : setShowContent(true)
  }
  return (
    <div>
      <h1>Experiment</h1>
      <p onClick={ handleToggle }>click</p>
      {
        showContent && <p>showing the text</p>
      }
    </div>
  )
}
