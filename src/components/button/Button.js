import styled from 'styled-components'
import { variant, space, color, fontSize } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import SystemTypes from '@styled-system/prop-types'
import Types from 'prop-types'

const variants = variant({
  variants: {
    primary: {
      bg: 'blues.med',
      color: 'white',
      display: 'flex',
      py: '4px',
      px: 3,
      textAlign: 'center',
      '&:hover': {
        bg: 'blues.light'
      }
    },
    action: {
      color: 'blues.med',
      '&:hover': {
        color: 'blues.light'
      }
    },
    text: {
      color: 'grays.dark',
      '&:hover': {
        color: 'inherit'
      }
    }
  }
})

const Button = styled.button`
  appearance: none;
  outline: none;
  border: none;
  background: none;

  cursor: pointer;
  border-radius: 4px;
  font-family: inherit;
  font-size: ${themeGet('fontSizes.1')}px;

  ${space}
  ${color}
  ${fontSize}
  ${variants}
`

Button.defaultProps = {
  variant: 'primary'
}

Button.propTypes = {
  variant: Types.oneOf(['primary', 'action', 'text']),
  fontSize: Types.number,
  ...SystemTypes.space,
  ...SystemTypes.color
}

export { Button }
