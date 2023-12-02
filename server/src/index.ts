import cors from 'cors'
import express from 'express'
import { createServer } from 'http'
import { routes } from './routes'
import morgan from 'morgan'

// initialize express app
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    credentials: true,
    origin: '*' // frontend edpoint -> store in .env
}))
app.use(morgan('dev')) // console.log activities

// routes
// app.use(express.static(path.join(__dirname, 'frontend/dist')));

// // All other routes should be handled by serving the index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend', 'dist', 'index.html'));
// });

// routes
app.use('/api', routes.customerRoutes)

// httpServer
const httpServer = createServer(app)

//port
const PORT = process.env.PORT || 3001

httpServer.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}...`)
})

export default app