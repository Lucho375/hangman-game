interface ResetGameButtonProps {
  isMobile: boolean
  winner: boolean
  loser: boolean
  resetGame: () => void
}

export default function ResetGameButton({ isMobile, winner, loser, resetGame }: ResetGameButtonProps) {
  return isMobile && (winner || loser) ? (
    <button onClick={resetGame} className="text-xl p-2 text-white bg-black rounded">
      Reset game
    </button>
  ) : (
    (winner || loser) && <p>Press enter to reset game</p>
  )
}
