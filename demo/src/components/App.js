import React, { Component } from 'react'

import { Container, Button } from 'react-blazecss'

import 'blaze/dist/blaze.min.css'

export default class App extends Component {
  render () {
    return (
      <Container>
        <Button ghost state="success" size="xlarge">Test!</Button>
      </Container>
    )
  }
}
