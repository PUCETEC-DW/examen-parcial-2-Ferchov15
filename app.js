import express from "express"
import router from "./routes/tareasRoutes.js"

const app = express()

app.use(express.json())
app.use('/tasks', router)

app.listen(3000, () =>{
    console.log("Servidor listo para su ejecución")
})

export default app;