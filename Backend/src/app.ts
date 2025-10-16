import { connectDB } from './config/db'
import { PORT } from './config/env'
import { app } from './server'

connectDB()

app.listen(PORT, () => {
  console.table({
    URL: `http://localhost:${PORT}`
  })
})
