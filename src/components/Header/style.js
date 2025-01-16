import { css } from '@linaria/core'
import { styled } from '@linaria/react'

export const headerStyle = css`
  background-color: brown;
  color: gold;
`
export const h1AltStyle = css`
  font-style: italic;
`

// this is not removed from the CSS file even though it is not being used
export const unusedStyle = css`
  color: red;
  text-decoration: dashed;
`

export const h1Style = css`
  background-color: brown;
`

export const RandomDiv = styled.div`
  font-weight: ${({ count }) => count ? 'bold' : 'normal'}
`