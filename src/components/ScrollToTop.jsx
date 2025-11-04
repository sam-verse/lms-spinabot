
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Simple helper component: on every location change, scroll the window to top (0,0).
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    try {
      // Use 'auto' for immediate jump. 'smooth' can be used if desired.
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    } catch (e) {
      // Fallback for older browsers that don't support options object
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
