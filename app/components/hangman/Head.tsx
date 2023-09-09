interface HeadProps {
  isDead?: boolean
}
export default function Head({ isDead }: HeadProps) {
  return (
    <div className="bg-white rounded-full h-[40px] w-[40px] absolute left-[304px] top-[69px]">
      {isDead ? (
        <>
          <div className="absolute bg-black w-2 h-[2px] rotate-45 left-2 top-3"></div>
          <div className="absolute bg-black w-2 h-[2px] -rotate-45 left-2 top-3"></div>
          <div className="absolute bg-black w-2 h-[2px] rotate-45 left-6 top-3"></div>
          <div className="absolute bg-black w-2 h-[2px] -rotate-45 left-6 top-3"></div>
          <div className="absolute bg-black w-4 h-[2px] top-7 left-3"></div>
        </>
      ) : (
        <>
          <div className="relative bg-black rounded-full w-1 h-1 top-3 left-3"></div>
          <div className="relative bg-black rounded-full w-1 h-1 top-2 left-6"></div>
          <div className="relative bg-black w-4 h-[2px] top-5 left-3"></div>
        </>
      )}
    </div>
  )
}
