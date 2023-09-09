'use client'
import { useEffect, useState } from 'react'
import { Gallows } from './components/Gallows'

import Keyboard from './components/Keyboard'
import Word from './components/Word'
import normalizeString from './helpers/normalizeString'
import getRandomWord from './helpers/getRandomWord'
import useWord from './hooks/useWord'
import ResetGameButton from './components/ResetGameButton'
import useGameLogic from './hooks/useGameLogic'

export default function Page() {
  const { word, setWord } = useWord()
  const {
    winner,
    incorrectLetters,
    isMobile,
    loser,
    selectedLetters,
    setIncorrectLetters,
    setLoser,
    setSelectedLetters,
    setWinner
  } = useGameLogic(word)

  const handleLetter = (letter: string): void => {
    if (selectedLetters.includes(letter)) {
      return
    }
    if (!word?.includes(letter)) {
      setIncorrectLetters(prev => [...prev, letter])
    }
    setSelectedLetters(prev => [...prev, letter])
  }

  const resetGame = () => {
    setWinner(prev => false)
    setLoser(prev => false)
    setSelectedLetters([])
    setIncorrectLetters([])
    setWord(normalizeString(getRandomWord()))
  }

  return (
    <section className="flex flex-col items-center justify-center">
      <Gallows errors={incorrectLetters.length} />
      <Word word={word ? word : ''} selectedLetters={selectedLetters} loser={loser} />
      <Keyboard
        selectedLetters={selectedLetters}
        handleLetter={handleLetter}
        disabled={winner || loser}
        resetGame={resetGame}
        isMobile={isMobile}
      />
      <div className="min-h-[90px] mt-5">
        <ResetGameButton isMobile={isMobile} resetGame={resetGame} loser={loser} winner={winner} />
      </div>
    </section>
  )
}
