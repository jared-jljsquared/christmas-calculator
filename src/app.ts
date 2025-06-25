import express from 'express'
import info from '../package.json' with { type: 'json' }
import { daysUntilChristmas } from './utils/days-until-christmas.ts'

const { name, version } = info

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const dayCount = daysUntilChristmas(new Date(Date.now()))
  console.log(`dayCount: ${dayCount}`)
  if (dayCount === 0) {
    res.send('Merry Christmas!')
  } else {
    res.send(`${dayCount} days until Christmas`)
  }
})

app.get('/about', (req, res) => {
  res.json({
    name,
    version,
  })
})

app.listen(port, () => {
  return console.log(`Express service listening at htpp://localhost:${port}`)
})
