import React from 'react'
import { HiEmojiHappy as Like, HiEmojiSad as Dislike, HiPlay as Play } from 'react-icons/hi';
import { RiAddCircleFill as Add } from 'react-icons/ri';
export const InteractiveButtons = () => {
  return (
    <div className="interactive__buttons">
      <Play />
      <Like />
      <Dislike />
      <Add />
    </div>
  )
}
