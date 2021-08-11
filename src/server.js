import express from 'express'
import cors from 'cors'
import listEndpoints from 'express-list-endpoints'
import authorRouter from './services/authors/index.js'


const server = express()
const port = 3004


server.use(cors())
server.use(express.json())

server.use('/authors', authorRouter)
console.table(listEndpoints(server))

server.listen(port, () => {
    console.log('listening on 3001')
})