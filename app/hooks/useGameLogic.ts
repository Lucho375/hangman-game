import React, { useEffect, useState } from 'react'

type GuessedLettersType = Array<string>

export default function useGameLogic(word: string | null) {
  const [selectedLetters, setSelectedLetters] = useState<GuessedLettersType>([])
  const [incorrectLetters, setIncorrectLetters] = useState<Array<string>>([])
  const [winner, setWinner] = useState<boolean>(false)
  const [loser, setLoser] = useState<boolean>(false)
  const isMobile = typeof window !== 'undefined' && window?.innerWidth <= 768

  useEffect(() => {
    const hasWon = word?.split('').every(letter => selectedLetters.includes(letter))
    const hasLose = incorrectLetters.length === 6
    if (hasWon) {
      setWinner(prev => true)
    }
    if (hasLose) {
      setLoser(prev => true)
    }
  }, [incorrectLetters, selectedLetters, word, loser, winner])

  return {
    incorrectLetters,
    selectedLetters,
    loser,
    winner,
    isMobile,
    setLoser,
    setWinner,
    setIncorrectLetters,
    setSelectedLetters
  }
}
