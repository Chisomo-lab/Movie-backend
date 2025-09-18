import express from 'express'
import moviesRoute from './routes/movies.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

// Routes
app.use('/movies', moviesRoute)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
