import React from 'react'
import ReactDOM from 'react-dom'

import { Container, AlertContainer, Alert } from './index'

ReactDOM.render(
  <Container size='medium'>
    <AlertContainer animate from='top' trigger>
      <Alert state='error'>Test</Alert>
      <Alert state='primary'>Test 2</Alert>
    </AlertContainer>
  </Container>,
  document.getElementById('root')
)
