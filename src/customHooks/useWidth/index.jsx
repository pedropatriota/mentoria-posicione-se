/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react'

export function useWindowSize() {
  const isSSR = typeof window !== `undefined`
  const [size, setSize] = useState(1200)

  useEffect(() => {
    if (isSSR) {
      const handleResize = () => {
        setSize(window.innerWidth)
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
    return null
  }, [isSSR])

  return {
    size,
  }
}
