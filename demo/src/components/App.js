import React, { Component } from 'react'

import { Container, Nav, NavItem, Grid, Cell, Link } from 'react-blazecss'

import Addresses from './showcase/Addresses'
import Alerts from './showcase/Alerts'

import 'blaze/dist/blaze.min.css'
import 'blaze/dist/blaze.animations.min.css'

export default class App extends Component {
  render () {
    const responsiveness = [{
      size: 'small',
      behavior: 'full'
    }, {
      size: 'medium',
      behavior: 'full'
    }]

    return (
      <div>
        <Nav brand='React BlazeCSS' inline animate>
          <NavItem>Objects</NavItem>
          <NavItem state='primary' active>Components</NavItem>
          <NavItem right state='error'>
            <Link href='http://github.com/nicolas-goudry/react-blazecss'>GitHub</Link>
          </NavItem>
        </Nav>
        <Container size='xlarge'>
          <Grid wrap align='top' responsiveness={responsiveness}>
            <Cell>
              <Addresses />
              <Alerts />
            </Cell>
          </Grid>
        </Container>
      </div>
    )
  }
}
