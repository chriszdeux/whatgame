import { useEffect, useState } from "react";

export const useIntersectionObserver = ( ref ) => {
  const [isVisible, setIsVisible] = useState(false);
  // const sectionRef = useRef(null)
  const handleIntersection = ( entries ) => {
    const [ entry ] = entries;

    // debugger
    setIsVisible(entry.isIntersecting);
  }

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
    }

  useEffect(() => {
    const observer = new IntersectionObserver( handleIntersection, options )
    // debugger
    if( ref.current ) {
      observer.observe(ref.current)
    }

    return () => {
      if( ref.current ) {
        // setHandleAnimation(fade_in)
        observer.unobserve(ref.current)
        // setTimeout(() => {
        // }, 1000);
      }
    }
  }, [ ref, options ])

  return isVisible
}