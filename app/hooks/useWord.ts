import { useEffect, useState } from 'react'
import getRandomWord from '../helpers/getRandomWord'
import normalizeString from '../helpers/normalizeString'

export default function useWord() {
  const [word, setWord] = useState<null | string>(null)

  useEffect(() => {
    const randomWord = normalizeString(getRandomWord())
    setWord(randomWord)
  }, [])

  return {
    word,
    setWord
  }
}
