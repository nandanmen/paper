import React from 'react'
import styled from 'styled-components'

import { Navigation } from './components/navigation'
import { Button } from './components/button'

export function App() {
  return (
    <Container>
      <Navigation />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button variant="primary">Create new doc</Button>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
