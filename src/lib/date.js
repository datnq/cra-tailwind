const LongDate = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

export const format = date => {
  return LongDate.format(date)
}
