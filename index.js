import express from 'express'
import { routes } from './src/routes/routes.js'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()


let __dirname = path.resolve(path.dirname('')) 

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(routes)

const port = 3001

app.listen(port, (req, res)=>{
    console.log(`estou na porta ${port}`)
})
 
