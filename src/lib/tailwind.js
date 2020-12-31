const boxProps = {
  /* LAYOUT */
  sizing: value => `box-${value}`, // https://tailwindcss.com/docs/box-sizing
  display: value => value, // https://tailwindcss.com/docs/display
  float: value => `float-${value}`, // https://tailwindcss.com/docs/float
  clear: value => `clear-${value}`, // https://tailwindcss.com/docs/clear
  object: value => {
    // https://tailwindcss.com/docs/object-fit
    // https://tailwindcss.com/docs/object-position
    return ['contain', 'cover', 'fill', 'scale-down'].includes(value)
      ? `object-${value}`
      : `object-none object-${value}`
  },
  overflow: value => `overflow-${value}`, // https://tailwindcss.com/docs/overflow
  overflowX: value => `overflow-x-${value}`, // https://tailwindcss.com/docs/overflow
  overflowY: value => `overflow-y-${value}`, // https://tailwindcss.com/docs/overflow
  overflowScroll: value => `overscroll-y-${value}`, // https://tailwindcss.com/docs/overscroll-behavior
  position: value => value, // https://tailwindcss.com/docs/position
  inset: value => (value >= 0 ? `inset-${value}` : `-inset-${value}`), // https://tailwindcss.com/docs/top-right-bottom-left
  insetX: value => (value >= 0 ? `inset-x-${value}` : `-inset-x-${value}`), // https://tailwindcss.com/docs/top-right-bottom-left
  insetY: value => (value >= 0 ? `inset-x-${value}` : `-inset-x-${value}`), // https://tailwindcss.com/docs/top-right-bottom-left
  top: value => (value >= 0 ? `top-${value}` : `-top-${value}`), // https://tailwindcss.com/docs/top-right-bottom-left
  right: value => (value >= 0 ? `right-${value}` : `-right-${value}`), // https://tailwindcss.com/docs/top-right-bottom-left
  left: value => (value >= 0 ? `left-${value}` : `-left-${value}`), // https://tailwindcss.com/docs/top-right-bottom-left
  bottom: value => (value >= 0 ? `bottom-${value}` : `-bottom-${value}`), // https://tailwindcss.com/docs/top-right-bottom-left
  visible: value => (!!value ? 'visible' : 'invisible'), // https://tailwindcss.com/docs/visibility
  z: value => `z-${value}`, // https://tailwindcss.com/docs/z-index
  zIndex: value => `z-${value}`, // https://tailwindcss.com/docs/z-index

  /* FLEXBOX */
  flex: value => `flex-${value}`,
  flexDirection: value => `flex-${value}`,
  flexWrap: value => `flex-${value}`,
  flexGrow: value => (value === 0 ? `flex-grow-0` : 'flex-grow'),
  flexShrink: value => (value === 0 ? `flex-shrink-0` : 'flex-shrink'),
  order: value => `order-${value}`,

  /* GRID */

  /* BOX ALIGNMENT */

  /* SPACING */

  /* SIZING */

  /* TYPOGRAPHY */

  /* BACKGROUNDS */

  /* BORDERS */

  /* EFFECTS */

  /* TABLES */
  // Consider NOT doing it

  /* TRANSITIONS AND ANIMATION */

  /* TRANSFORMS */

  /* INTERACTIVITY */

  /* SVG */
  // Consider NOT doing it

  /* ACCESSIBILITY */
}

export const propsToTailwind = props => {
  return Object.keys(_.pick(props, Object.keys(boxProps))).reduce(
    (acc, key) => {
      const value = props[key]
      const className = boxProps[key](value)
      return className ? [...acc, className] : [...acc]
    },
    [],
  )
}
