import { LETTERS } from '../constants/letters'
import useKeyboardEvent from '../hooks/useKeyboardEvent'

interface KeyboardProps {
  selectedLetters: Array<string>
  disabled: boolean
  handleLetter: (letter: string) => void
  resetGame: () => void
  isMobile: boolean
}

export default function Keyboard({ selectedLetters, handleLetter, disabled, resetGame, isMobile }: KeyboardProps) {
  useKeyboardEvent(
    event => {
      if (isMobile) return
      if (!event.key.match(/^[a-zA-Z]$/) || disabled || selectedLetters.includes(event.key.toUpperCase())) {
        return
      }
      handleLetter(event.key.toUpperCase())
    },
    [selectedLetters, handleLetter, disabled]
  )

  useKeyboardEvent(
    event => {
      if (isMobile) return
      if (event.key !== 'Enter') return
      if (disabled) {
        resetGame()
      }
    },
    [disabled, resetGame]
  )

  return (
    <div>
      <div className="grid grid-cols-9 gap-1 min-w-[400px]">
        {LETTERS.split('').map(letter => (
          <button
            disabled={selectedLetters.includes(letter) || disabled}
            key={letter}
            onClick={() => handleLetter(letter)}
            className="bg-slate-300 p-1 rounded-md hover:bg-slate-600 disabled:opacity-50 disabled:hover:bg-slate-300 text-black text-2xl hover:text-white disabled:hover:text-black"
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  )
}
