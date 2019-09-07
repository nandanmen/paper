import styled from 'styled-components'
import { space } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export const Container = styled.div`
  border-radius: 4px;
  box-shadow: ${themeGet('shadow')};
  ${space}
`
