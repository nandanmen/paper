import React from 'react'
import Types from 'prop-types'
import SystemTypes from '@styled-system/prop-types'

import { Container } from './style'

function Dropdown({ isOpen, ...props }) {
  if (isOpen) {
    return <Container {...props} />
  }
  return null
}

Dropdown.defaultProps = {
  p: 2
}

Dropdown.propTypes = {
  isOpen: Types.bool.isRequired,
  ...SystemTypes.space
}

export { Dropdown }
