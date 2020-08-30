import express, { json } from  'express'

import morgan from 'morgan'

import employesRoutes from './routes/employes'


const app = express()

app.use(morgan('dev'))
app.use(json())

app.use('/api/employes',employesRoutes)

export default app