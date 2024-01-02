import { compareDesc, parseISO, format } from 'date-fns'

export const cx = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(' ')
}

export const formatDate = (date: string, dateFormat = 'MMMM dd, yyyy') => {
  return format(parseISO(date), dateFormat)
}
