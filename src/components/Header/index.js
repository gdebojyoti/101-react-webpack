import React, { useEffect, useState } from 'react'

const Header = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCounter(2)
    }, 2000);
  }, [])

  return (
    <header>
      <h1>I got in.</h1>
      <div>I have {counter} items.</div>
    </header>
  )
}

export default Header