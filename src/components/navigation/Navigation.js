import React from 'react'
import { Link, List, Nav, Title } from './style'

export function Navigation() {
  return (
    <Nav>
      <List>
        <li>
          <Title>
            <Link href="/">Paper</Link>
          </Title>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </List>
    </Nav>
  )
}
