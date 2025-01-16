import { css } from '@linaria/core'
import { styled } from '@linaria/react'

export const headerStyle = css`
  background-color: brown;
  color: gold;
`

export const RandomDiv = styled.div`
  font-weight: ${({ count }) => count ? 'bold' : 'normal'}
`