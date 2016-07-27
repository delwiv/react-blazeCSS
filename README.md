# React Blaze CSS

React implementation of [BlazeCSS Modular CSS Framework](http://blazecss.com).

---

**Currently building**

Any help would be appreciated, specially for building to production and making this available as npm module.

---

## Summary

* [Objects](#objects)
  * [Container](#container)
  * [Grid](#grid)
  * [Cell](#cell)
  * [Image](#image)
  * [Panel](#panel)
* [Components](#components)
  * [Address](#address)
  * [AlertContainer](#alert-container)
  * [Alert](#alert)
  * [Badge](#badge)
  * [Bubble](#bubble)
  * [ButtonGroup](#button-group)
  * [Button](#button)
* [Utilities](#utilities)
  * [Alignment](#alignment)

## Usage

Currently, you just have to import what you need from `index.js`.

## Objects

### Container

```javascript
import React from 'react'
import { Container } from './index'

const Example = () => <Container>Example</Container>

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| size | `xsmall`, `small`, `medium`, `large`, `xlarge`, `super` | None | Container size |

[Back to top](#react-blaze-css)

### Grid

```javascript
import React from 'react'
import { Grid } from './index'

const Example = () => (
  <Grid>Simple grid</Grid>
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| wrap | `true`, `false` | `false` | Wrap grid cells |
| align | `top`, `center`, `bottom` | None | Vertical alignment |
| size | `small`, `medium`, `large` | None | Grid responsiveness (see [BlazeCSS doc](http://blazecss.com/objects/grid/)) |
| behavior | `fit`, `full` | None | Grid responsiveness (see [BlazeCSS doc](http://blazecss.com/objects/grid/)) |
| noGutter | `true`, `false` | `false` | Remove cells gutters |

**Note:** If `size` is provided, `behavior` must also be provided, and vice versa.

[Back to top](#react-blaze-css)

### Cell

```javascript
import React from 'react'
import { Grid, Cell } from './index'

const Example = () => (
  <Grid>
    <Cell>A cell in a grid</Cell>
  </Grid>
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| width | Any number between `5` and `100` (incremented by `5`) | None | Cell width in percent |
| align | `top`, `center`, `bottom` | None | Vertical alignment |
| offset | Any number between `5` and `100` (incremented by `5`) | None | Cell horizontal offset in percent |
| responsive | `small`, `medium`, `large` | None | Responsive suffix (see [BlazeCSS doc](http://blazecss.com/objects/grid/)) |
| noGutter | `true`, `false` | `false` | Remove cell gutters |
| fixed | `true`, `false` | `false` | Allow fixed cell width |
| hidden | `true`, `false` | `false` | Hide cell |
| visible | `true`, `false` | `false` | Show cell |

[Back to top](#react-blaze-css)

### Image

```javascript
import React from 'react'
import { Image } from './index'

const Example = () => (
  <Image src='https://unsplash.it/1024/963?random' />
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| src | String | None | Image source |

[Back to top](#react-blaze-css)

### Panel

```javascript
import React from 'react'
import { Panel, Nav } from './index'

const createNav = (title) => (
  <Nav title={title} />
)

const Example = () => (
  <Panel topNav={createNav('Header')} bottomNav={createNav('Footer')}>
    Panel content
  </Panel>
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| topNav | React Element | None | Panel top nav |
| bottomNav | React Element | None | Panel bottom nav |

[Back to top](#react-blaze-css)

## Components

### Address

```javascript
import React from 'react'
import { Address } from './index'

const Example = () => (
  <Address>
    742 Evergreen Terrace,<br/>
    Springfield,<br/>
    80085,<br/>
    USA<br/>
  </Address>
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| heading | String | None | Address heading text |

[Back to top](#react-blaze-css)

### Alert Container

```javascript
import React from 'react'
import { AlertContainer, Alert } from './index'

const Example = () => (
  <AlertContainer>
    <Alert>Default alert</Alert>
  </AlertContainer>
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| animate | `true`, `false` | None | Animated Alerts in container |
| from | `top`, `bottom`, `left`, `right` | None | Animation direction |
| speed | `slow`, `fast` | None | Animation speed |
| trigger | `true`, `false` | `false` | Trigger animation |

[Back to top](#react-blaze-css)

### Alert

```javascript
import React from 'react'
import { Alert } from './index'

const Example = () => (
  <Alert>Default alert</Alert>
  <Alert state='success'>Success alert</Alert>
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| state | `primary`, `secondary`, `success`, `error` | None | Alert colour state |
| animate | `true`, `false` | `false` | Animated Alert |
| from | `top`, `bottom`, `left`, `right` | None | Animation direction |
| speed | `slow`, `fast` | None | Animation speed |
| trigger | `true`, `false` | `false` | Trigger animation |

[Back to top](#react-blaze-css)

### Badge

```javascript
import React from 'react'
import { Badge } from './index'

const Example = () => (
  <Badge>v0.0.1</Badge>
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| state | `primary`, `secondary`, `success`, `error` | None | Badge colour state |
| round | `true`, `false` | `false` | Rounded Badge |

[Back to top](#react-blaze-css)

### Bubble

```javascript
import React from 'react'
import { Bubble } from './index'

const Example = () => (
  <Bubble>A basic bubble</Badge>
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| position | `top`, `bottom`, `left`, `right` | None | Bubble position (change carret position) |
| from | `top`, `bottom`, `left`, `right` | None | Animation direction |
| speed | `slow`, `fast` | None | Animation speed |
| trigger | `true`, `false` | `false` | Trigger animation |

[Back to top](#react-blaze-css)

### Button Group

```javascript
import React from 'react'
import { ButtonGroup, Button } from './index'

const Example = () => (
  <ButtonGroup>
    <Button>Default button</Button>
  </ButtonGroup>
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| round | `true`, `false` | `false` | Rounded ButtonGroup |

[Back to top](#react-blaze-css)

### Button

```javascript
import React from 'react'
import { Button } from './index'

const Example = () => (
  <Button>Default button</Button>
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| type | `button`, `input`, `link` | `button` | Button type (HTML element type) |
| state | `primary`, `secondary`, `success`, `error` | None | Button colour state |
| size | `xsmall`, `small`, `medium`, `large`, `xlarge`, `super` | None | Button size |
| block | `true`, `false` | `false` | Block Button (full width) |
| ghost | `true`, `false` | `false` | Ghost Button |
| round | `true`, `false` | `false` | Rounded Button |

[Back to top](#react-blaze-css)

### Card

```javascript
import React from 'react'
import { Card, CardContent, CardHeading, CardItem, CardDivider } from './index'

const Example = () => (
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
)

export default Example
```

#### Props

##### Card

| Prop | Values | Default | Description |
|---|---|---|---|
| shadow | `high`, `higher`, `highest` | None | Shadow level |
| group | `true`, `false` | `False` | Group items |

##### CardDivider

| Prop | Values | Default | Description |
|---|---|---|---|
| group | `true`, `false` | `false` | Grouped items divider |

[Back to top](#react-blaze-css)

## Utilities

### Alignment

```javascript
import React from 'react'
import { Align } from './index'

const Example = () => (
  <Align style={{height: '300px'}}>
    This will be aligned horizontally and vertically
  </Align>
)

export default Example
```

#### Props

| Prop | Values | Default | Description |
|---|---|---|---|
| vertical | `true`, `false` | `false` | Align vertically |
| horizontal | `true`, `false` | `false` | Align horizontally |
| absolute | `true`, `false` | `false` | Align in the center of a relative container |

[Back to top](#react-blaze-css)
