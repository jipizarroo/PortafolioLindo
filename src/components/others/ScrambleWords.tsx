'use client'
import { FC, useState } from 'react'
import { inter } from '@/lib/fontsStyles'

type ScrambleWordsTypes = {
  text: string
}

const ScrambleWords: FC<ScrambleWordsTypes> = ({ text }) => {
  const [headlineText, setHeadlineText] = useState(text)
  const letters = '!@#$%^&*()_+-={}|[]:";<>?,.?¡'

  const handleMouseOver = () => {
    let iteration = 0
    let requestId: any = null
    const { length } = headlineText

    const scrambleText = () => {
      setHeadlineText((prevText) => {
        const scrambledText = prevText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }
            return letters[Math.floor(Math.random() * length)]
          })
          .join('')
        iteration += 1 / 9

        if (iteration >= length) {
          setHeadlineText(text)
          cancelAnimationFrame(requestId)
        }
        return scrambledText
      })
      requestId = requestAnimationFrame(scrambleText)
    }
    requestId = requestAnimationFrame(scrambleText)
  }

  return (
    <h1 className={inter.className} onMouseOver={handleMouseOver}>
      {headlineText}
    </h1>
  )
}

export default ScrambleWords
