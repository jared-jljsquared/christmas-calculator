import { parse } from 'date-fns'
import express from 'express'
import type { Request, Response } from 'express'
import info from '../package.json' with { type: 'json' }
import { YYYY_MM_DD } from './constants/date-formats.ts'
import { daysUntilChristmas } from './utils/days-until-christmas.ts'

const { name, version } = info

const app = express()
const port = 3000

const handleDateRequests = (req: Request, res: Response, date: Date) => {
  const dayCount = daysUntilChristmas(date)
  console.log(`${date.toISOString()} - dayCount: ${dayCount}`)
  if (dayCount === 0) {
    res.send('Merry Christmas!')
  } else {
    res.send(`${dayCount} days until Christmas`)
  }
}

app.get('/', (req, res) => {
  const date = new Date(Date.now())
  handleDateRequests(req, res, date)
})

app.get(
  '/days-from-christmas/:date',
  (req: Request<{ date?: string }>, res) => {
    // First validate date string
    const { date } = req.params
    try {
      const dateValue = parse(date as string, YYYY_MM_DD, new Date())
      handleDateRequests(req, res, dateValue)
    } catch (e) {
      const errorMessage = `${date} is not an acceptably formated date string`
      res.send(errorMessage)
      console.warn(errorMessage, e)
      return
    }
  },
)

app.get('/about', (req, res) => {
  res.json({
    name,
    version,
  })
})

app.listen(port, () => {
  return console.log(`Express service listening at htpp://localhost:${port}`)
})
