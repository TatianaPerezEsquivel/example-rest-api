import express from 'express' 
import {config} from 'dotenv'
config();

import usuariosRoutes from './routes/usuario.router.js'

const PORT = process.env.PORT || 3005;


const app = express()
app.use(express.json())

app.use("/api/usuario",usuariosRoutes)


app.listen(PORT,()=>{
    console.log("😂 Server is running on http://localhost:" + PORT)
})
