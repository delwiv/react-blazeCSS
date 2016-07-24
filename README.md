# React Blaze CSS

React implementation of [BlazeCSS Modular CSS Framework](http://blazecss.com).

---

**Currently building**

Any help would be appreciated, specially for building to production and making this available as npm module.

---

## Usage

Currently, you just have to import what you need from `index.js`.

## Objects

* [Container](#container)
* [Grid](#grid)
* [Cell](#cell)
* [Image](#image)
* [Panel](#panel)

### Container

```javascript
import React from 'react'
import { Container } from './index'

const Example = () => <Container>Example</Container>

export default Example
```

#### Props

| Prop | Values | Description |
|---|---|---|
| size | `xsmall`, `small`, `medium`, `large`, `xlarge`, `super` | Container size |

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

| Prop | Values | Description |
|---|---|---|
| wrap | `true`, `false` | Wrap grid cells |
| align | `top`, `center`, `bottom` | Vertical alignment |
| size | `small`, `medium`, `large` | Grid responsiveness (see [BlazeCSS doc](http://blazecss.com/objects/grid/)) |
| behavior | `fit`, `full` | Grid responsiveness (see [BlazeCSS doc](http://blazecss.com/objects/grid/)) |
| noGutter | `true`, `false` | Remove cells gutters |

**Note:** If `size` is provided, `behavior` must also be provided, and vice versa.

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

| Prop | Values | Description |
|---|---|---|
| width | Any number between `5` and `100` (incremented by `5`) | Cell width in percent |
| align | `top`, `center`, `bottom` | Vertical alignment |
| offset | Any number between `5` and `100` (incremented by `5`) | Cell horizontal offset in percent |
| responsive | `small`, `medium`, `large` | Responsive suffix (see [BlazeCSS doc](http://blazecss.com/objects/grid/)) |
| noGutter | `true`, `false` | Remove cell gutters |
| fixed | `true`, `false` | Allow fixed cell width |
| hidden | `true`, `false` | Hide cell |
| visible | `true`, `false` | Show cell |

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

| Prop | Values | Description |
|---|---|---|
| src | String | Image source |

### Panel

```javascript
import React from 'react'
import { Panel } from './index'

const Example = () => (
  <Panel topNav={true}>
    <Nav title='Header' />
    Panel content
  </Panel>
)

export default Example
```

#### Props

| Prop | Values | Description |
|---|---|---|
| topNav | `true`, `false` | Define if panel has a top nav |
| bottomNav | `true`, `false` | Define if panel has a bottom nav |

## Components

* [Address](#address)
* [AlertContainer](#alert-container)
* [Alert](#alert)
* [Badge](#badge)
* [Bubble](#bubble)

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

| Prop | Values | Description |
|---|---|---|
| heading | String | Address heading text |

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

| Prop | Values | Description |
|---|---|---|
| animate | `true`, `false` | Define if Alerts in container are animated |
| from | `top`, `bottom`, `left`, `right` | Animation direction |
| speed | `slow`, `fast` | Animation speed |
| trigger | `true`, `false` | Trigger animation |

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

**Note:** Currently, Alerts doesn't have a close button, because Buttons are not yet available.

#### Props

| Prop | Values | Description |
|---|---|---|
| state | `primary`, `secondary`, `success`, `error` | Alert colour state |
| animate | `true`, `false` | Define if Alert is animated |
| from | `top`, `bottom`, `left`, `right` | Animation direction |
| speed | `slow`, `fast` | Animation speed |
| trigger | `true`, `false` | Trigger animation |

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

| Prop | Values | Description |
|---|---|---|
| state | `primary`, `secondary`, `success`, `error` | Badge colour state |
| round | `true`, `false` | Define if Badge is rounded |

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

| Prop | Values | Description |
|---|---|---|
| position | `top`, `bottom`, `left`, `right` | Bubble position (change carret position) |
| from | `top`, `bottom`, `left`, `right` | Animation direction |
| speed | `slow`, `fast` | Animation speed |
| trigger | `true`, `false` | Trigger animation |
