import React, { useEffect, useState } from 'react'

import { headerStyle, h1Style, RandomDiv } from './style'

const Header = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCounter(2)
    }, 2000);
  }, [])

  return (
    <header className={headerStyle}>
      <h1 className={h1Style}>I got in.</h1>
      <RandomDiv count={counter}>I have {counter} items.</RandomDiv>
    </header>
  )
}

export default Header