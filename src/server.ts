import express, { Request, Response } from "express"
const app = express()
const port = 5000

app.get('/', (req: Request, res: Response) => {
    res.send('App running!')
})

app.listen(port, () => {
    console.log(`Vehicle Rental app listening on port ${port}`)
})
