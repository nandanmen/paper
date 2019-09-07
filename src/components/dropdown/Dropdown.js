import styled from 'styled-components'
import { space } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import SystemTypes from '@styled-system/prop-types'

const Dropdown = styled.div`
  border-radius: 4px;
  box-shadow: ${themeGet('shadow')};
  ${space}
`

Dropdown.defaultProps = {
  p: 2
}

Dropdown.propTypes = {
  ...SystemTypes.space
}

export { Dropdown }
