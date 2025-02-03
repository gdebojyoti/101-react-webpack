import React, { useEffect, useState } from 'react'
import { cx } from '@linaria/core'

import { headerStyle, h1Style, h1AltStyle, RandomDiv, linkStyle } from './style'

const Header = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCounter(2)
    }, 2000);
  }, [])

  const links = [
    {
      key: 'home',
      url: '/',
      label: 'Home'
    },
    {
      key: 'about',
      url: '/about',
      label: 'About Us'
    }
  ]

  return (
    <header className={headerStyle}>
      <h1 className={cx(h1Style, counter && h1AltStyle)}>I got in.</h1>
      <RandomDiv count={counter}>I have {counter} items.</RandomDiv>
      <nav>
        {links.map(({ key, url, label }) => (
          <a key={key} href={url} className={linkStyle}>{ label }</a>
        ))}
      </nav>
    </header>
  )
}

export default Header