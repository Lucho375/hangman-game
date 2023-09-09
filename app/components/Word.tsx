interface WordProps {
  word: string
  selectedLetters: string[]
  loser: boolean
}

function Word({ word, selectedLetters, loser }: WordProps) {
  return (
    <span className="text-5xl m-5">
      {word.split('').map((letter, index) => (
        <span
          key={`${word}-${letter}-${index}`}
          className={`${!selectedLetters.includes(letter) && loser ? 'text-red-400' : ''}`}
        >
          {loser ? letter : selectedLetters.includes(letter) ? letter : '_ '}
        </span>
      ))}
    </span>
  )
}

export default Word
