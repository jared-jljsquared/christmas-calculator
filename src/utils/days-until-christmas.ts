import { add, differenceInCalendarDays } from 'date-fns'

export const daysUntilChristmas = (day: Date) => {
  const christmasDay = new Date(`${day.getFullYear()}-12-25`)
  const days = differenceInCalendarDays(christmasDay, day)
  if (days < 0) {
    const nextChristmas = add(christmasDay, { years: 1 })
    return differenceInCalendarDays(nextChristmas, day)
  } else {
    return days
  }
}
