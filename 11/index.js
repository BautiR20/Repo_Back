
import express from 'express'
import { DB_PORT } from './config/config.js'
import { testConnection } from './config/db.js'
const app = express()


app.use(express.json())

app.use(express.urlencoded({ extended: true }))



app.get("/", (req, res) => {
    res.json({
        message: "Bienvenidos",
        endpoints: {
            "GET /estudiantes": "Obtener todos los estudiantes"
        }
    })
})










app.listen(DB_PORT, async () => {
    console.log(`Servidor corriendo en el puerto ${DB_PORT}` )
    await testConnection()

})



