const extendedSizes = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'super'
]

const sizes = [
  'small',
  'medium',
  'large'
]

const sizesRegex = new RegExp(['/', sizes.map((size) => size).join('|'), '/'].join(''))

const behaviorRegex = new RegExp('/fit|full/')

const alignments = [
  'top',
  'center',
  'bottom'
]

const positions = [
  'top',
  'bottom',
  'left',
  'right'
]

const speeds = [
  'slow',
  'fast'
]

const states = [
  'primary',
  'secondary',
  'success',
  'error'
]

export {
  extendedSizes,
  sizes,
  sizesRegex,
  behaviorRegex,
  alignments,
  positions,
  speeds,
  states
}