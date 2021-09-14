import express from "express"
import IndexRouter from "./src/routers/IndexRouter"
//set envs for test
process.env.NODE_ENV = "dev"
process.env.NAMESPACE = "PROFILE SERVICE"
process.env.PORT = 4042

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false, limit: "50mb"}))
app.use(IndexRouter)



app.listen(process.env.PORT, () => {
	console.log(`${process.env.NAMESPACE} on port`, process.env.PORT)
})
