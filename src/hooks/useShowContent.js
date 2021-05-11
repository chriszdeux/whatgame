import { useState } from "react";

export const useShowContent = ( initialState = false ) => {
  const [showContent, setShowContent] = useState(initialState);

  const handleToggleContent = () => {
    return setShowContent(!showContent)
  }


  return [showContent, handleToggleContent]
}