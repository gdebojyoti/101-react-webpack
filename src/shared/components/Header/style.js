import { css } from '@linaria/core'
import { styled } from '@linaria/react'

export const headerStyle = css`
  background-color: brown;
  color: gold;
`
export const h1AltStyle = css`
  font-style: italic;
`

export const h1Style = css`
  background-color: brown;
`

export const RandomDiv = styled.div`
  font-weight: ${({ count }) => count ? 'bold' : 'normal'}
`

// NOTE: this is not removed from the generated CSS file even though it is not being used anywhere
export const unusedStyle = css`
  color: red;
  text-decoration: dashed;
`

export const linkStyle = css`
  margin-left: 10px;
  color: white;
  text-decoration: none;

  &:first-of-type {
    margin-left: 0;
  }
`