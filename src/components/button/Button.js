import styled from 'styled-components'
import { variant, space, color, fontSize } from 'styled-system'

const variants = variant({
  variants: {
    primary: {
      bg: 'blues.med',
      color: 'white',
      display: 'flex',
      py: '4px',
      px: 3,
      textAlign: 'center'
    },
    action: {
      color: 'blues.med',
      '&:hover': {
        color: 'colors.blues.light'
      }
    }
  }
})

export const Button = styled.button`
  appearance: none;
  outline: none;
  border: none;
  background: none;

  border-radius: 4px;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;

  ${space}
  ${color}
  ${fontSize}
  ${variants}
`
