import React from 'react'
import Types from 'prop-types'

function Item({ tags, title, type }) {
  return <li></li>
}

Item.propTypes = {
  tags: Types.arrayOf(Types.string).isRequired,
  title: Types.string.isRequired,
  type: Types.oneOf(['doc', 'folder']).isRequired
}

export { Item }
