import { useState, useEffect } from 'react'

export function useIntersecting(ref, options) {
  // configure the state
  const [state, setState] = useState({
    visible: false,
    triggered: false,
    entry: undefined,
  })

  const observer = new IntersectionObserver((entries, observerInstance) => {
    if (entries[0].intersectionRatio > 0) {
      setState({
        visible: true,
        triggered: true,
        entry: observerInstance,
      })
      observerInstance.unobserve(ref.current)
    }
  }, options)

  useEffect(() => {
    if (ref.current && !state.triggered) {
      observer.observe(ref.current)
    }
  })
  return [state.visible, state.entry]
}
