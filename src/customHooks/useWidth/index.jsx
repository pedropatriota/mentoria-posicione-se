/* eslint-disable prettier/prettier */
import React from 'react'

export function useWindowSize() {
  const isSSR = typeof window !== 'undefined'
  const [windowSize, setWindowSize] = React.useState({
    width: 1200,
  })

  const changeWindowSize = React.useCallback(() => {
    if (!isSSR) {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [isSSR])

  React.useEffect(() => {
    window.addEventListener('resize', changeWindowSize)

    return () => {
      window.removeEventListener('resize', changeWindowSize)
    }
  }, [changeWindowSize])

  return windowSize
}
