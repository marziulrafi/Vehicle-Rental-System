import express, { Request, Response } from "express"
import initDB from "./config/db"
import config from "./config"
import { userRoutes } from "./modules/users/user.routes"
import { vehicleRouter } from "./modules/vehicles/vehicle.routes"


const app = express()
const port = config.port


app.use(express.json())

initDB()


app.get('/', (req: Request, res: Response) => {
    res.send('Vehicle Rental App running!')
})


app.use("/v1/users", userRoutes)
app.use("/v1/vehicles", vehicleRouter)



app.listen(port, () => {
    console.log(`Vehicle Rental app listening on port ${port}`)
})
