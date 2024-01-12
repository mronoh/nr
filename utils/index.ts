export const cx = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(' ')
}

export function formatDate(
  datetimeString: string,
  format: 'long' | 'short' = 'long'
): string {
  const options: Intl.DateTimeFormatOptions = {
    month: format === 'long' ? 'long' : 'short',
    day: 'numeric',
    year: 'numeric'
  }
  const formattedDate: string = new Date(datetimeString).toLocaleDateString(
    'en-US',
    options
  )

  return formattedDate
}
