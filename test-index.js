import React from 'react'
import ReactDOM from 'react-dom'

import { Container, Card, CardContent, CardHeading, CardItem, CardDivider } from './index'

ReactDOM.render(
  <Container size='medium'>
    <Card>
      <CardContent>
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
      </CardContent>
    </Card>
    <Card>
      <CardHeading>Header</CardHeading>
      <CardContent>
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.<br/>
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
      </CardContent>
      <CardHeading>Divider</CardHeading>
      <CardContent>
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.<br/>
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
      </CardContent>
      <CardHeading>Footer</CardHeading>
    </Card>
    <Card shadow='high'>
      <CardHeading>High</CardHeading>
      <CardContent>
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.<br/>
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
      </CardContent>
    </Card>
    <Card shadow='higher'>
      <CardHeading>Higher</CardHeading>
      <CardContent>
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.<br/>
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
      </CardContent>
    </Card>
    <Card shadow='highest'>
      <CardHeading>Highest</CardHeading>
      <CardContent>
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.<br/>
        Lorem ipsum dolor sit amet, feugiat corpora ex eam. Inciderint eloquentiam sea et.
      </CardContent>
    </Card>
    <Card shadow='highest'>
      <CardItem>Item 1</CardItem>
      <CardItem>Item 2</CardItem>
      <CardDivider>Divider</CardDivider>
      <CardItem>Item 3</CardItem>
      <CardItem>Item 4</CardItem>
    </Card>
    <Card shadow='highest' group>
      <CardItem>Item 1</CardItem>
      <CardItem>Item 2</CardItem>
      <CardItem>Item 3</CardItem>
      <CardDivider group />
      <CardItem>Item 4</CardItem>
      <CardItem>Item 5</CardItem>
      <CardDivider group />
      <CardItem>Item 6</CardItem>
      <CardItem>Item 7</CardItem>
      <CardItem>Item 8</CardItem>
      <CardDivider group />
      <CardItem>Item 9</CardItem>
      <CardDivider group />
      <CardItem>Item 10</CardItem>
    </Card>
  </Container>,
  document.getElementById('root')
)
