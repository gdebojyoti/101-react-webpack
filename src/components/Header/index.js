import React, { useEffect, useState } from 'react'
import { cx } from '@linaria/core'

import { headerStyle, h1Style, h1AltStyle, RandomDiv } from './style'

const Header = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCounter(2)
    }, 2000);
  }, [])

  return (
    <header className={headerStyle}>
      <h1 className={cx(h1Style, counter && h1AltStyle)}>I got in.</h1>
      <RandomDiv count={counter}>I have {counter} items.</RandomDiv>
    </header>
  )
}

export default Header