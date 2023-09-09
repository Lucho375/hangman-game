import Body from './hangman/Body'
import Head from './hangman/Head'
import LeftArm from './hangman/LeftArm'
import LeftLeg from './hangman/LeftLeg'
import RightArm from './hangman/RightArm'
import RightLeg from './hangman/RightLeg'

const BODY_PARTS = [Head, Body, LeftArm, RightArm, LeftLeg, RightLeg]

interface GallowProps {
  errors: number
}

export function Gallows({ errors }: GallowProps) {
  return (
    <section className="h-[400px] w-[400px] relative">
      {BODY_PARTS.slice(0, errors).map((Part, index) =>
        index === 0 ? <Part key={index} isDead={errors === 6} /> : <Part key={index} />
      )}
      <div className="absolute bg-white h-[400px] w-2 bottom-0 left-[125px]"></div>
      <div className="absolute bg-white h-[70px] w-2 left-[320px]"></div>
      <div className="absolute bg-white h-2 w-[200px] left-[125px]"></div>
      <div className="absolute bg-white h-2 w-[250px] bottom-0"></div>
    </section>
  )
}
