import React from 'react'

import { Heading, Paragraph, Code, Grid, Cell, AlertContainer, Alert } from 'react-blazecss'

const Alerts = () => {
  return (
    <div>
      <Heading size='large'>Alerts</Heading>
      <Paragraph>
        Messages that usually appear at the top of the page or container.
        Blaze alerts are grouped together in an <Code>.c-alerts</Code> block.
      </Paragraph>
      <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
        <Cell width={50}>
          <AlertContainer>
            <Alert>Default</Alert>
            <Alert state='primary'>Primary</Alert>
            <Alert state='secondary'>Secondary</Alert>
            <Alert state='success'>Success</Alert>
            <Alert state='error'>Error</Alert>
          </AlertContainer>
        </Cell>
        <Cell width={50}>
          <Code multiline>
            {
              `<AlertContainer>
  <Alert>Default</Alert>
  <Alert state='primary'>Primary</Alert>
  <Alert state='secondary'>Secondary</Alert>
  <Alert state='success'>Success</Alert>
  <Alert state='error'>Error</Alert>
</AlertContainer>`
            }
          </Code>
        </Cell>
      </Grid>
    </div>
  )
}

export default Alerts
