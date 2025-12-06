import express, { Request, Response } from "express"
import initDB from "./config/db";
import config from "./config";


const app = express()
const port = config.port;


app.use(express.json());

initDB()

app.get('/', (req: Request, res: Response) => {
    res.send('App running!')
})

app.listen(port, () => {
    console.log(`Vehicle Rental app listening on port ${port}`)
})
