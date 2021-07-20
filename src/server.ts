import 'reflect-metadata'

import express from 'express'

import { errors } from 'celebrate'

import { appRouter } from './routes'

import "./database"

const app = express()
app.use(express.json())

app.use(appRouter)
app.use(errors())

app.listen(3333, () => console.log('initialized server'))
