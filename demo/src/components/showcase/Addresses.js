import React from 'react'

import { Heading, Paragraph, Code, Address, Grid, Cell } from 'react-blazecss'

const Addresses = () => {
  return (
    <div>
      <Heading size='large'>Addresses</Heading>
      <Paragraph>
        Addresses in Blaze are essentially a reset to a more consistent style.
      </Paragraph>
      <Heading size='medium'>Basic Address</Heading>
      <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
        <Cell width={50}>
          <Address>
            742 Evergreen Terrace,<br />
            Springfield,<br />
            80085,<br />
            USA
          </Address>
        </Cell>
        <Cell width={50}>
          <Code multiline>
            {
              `<Address>
  742 Evergreen Terrace,<br />
  Springfield,<br />
  80085,<br />
  USA
</Address>`
            }
          </Code>
        </Cell>
      </Grid>
      <Heading size='medium'>Heading</Heading>
      <Grid responsiveness={[{ size: 'small', behavior: 'full' }]}>
        <Cell width={50}>
          <Address heading='The Simpsons,'>
            742 Evergreen Terrace,<br />
            Springfield,<br />
            80085,<br />
            USA
          </Address>
        </Cell>
        <Cell width={50}>
          <Code multiline>
            {
              `<Address heading='The Simpsons,'>
  742 Evergreen Terrace,<br />
  Springfield,<br />
  80085,<br />
  USA
</Address>`
            }
          </Code>
        </Cell>
      </Grid>
    </div>
  )
}

export default Addresses
