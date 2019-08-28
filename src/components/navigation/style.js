import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const Link = styled.a`
  text-decoration: none;
  color: ${themeGet('colors.blues.med')};

  &:hover {
    color: ${themeGet('colors.blues.light')};
  }
`

export const List = styled.ul`
  list-style: none;
`

export const Nav = styled.nav`
  background: ${themeGet('colors.grays.lighter')};
  height: 100vh;
  padding: ${themeGet('space.7')}px ${themeGet('space.5')}px;
  width: 280px;
`

export const Title = styled.h1`
  font-weight: ${themeGet('fontWeights.regular')};
  margin-bottom: ${themeGet('space.5')}px;
`
