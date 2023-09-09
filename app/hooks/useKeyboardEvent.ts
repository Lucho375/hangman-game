import { useEffect } from 'react'

export default function useKeyboardEvent(callback: (event: KeyboardEvent) => void, deps: any[] = []) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      callback(event)
    }

    document.addEventListener('keypress', handleKeyPress)

    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, deps)
}
