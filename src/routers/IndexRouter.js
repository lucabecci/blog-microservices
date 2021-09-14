import express from 'express'


const router = express.Router()

router.get("/status", function(req, res){
    let database = global.database ? true : false
    let redis = global.redis ? true : false

    return res.status(200).json({message: {
        active: true,
        port: process.env.PORT,
        namespace: process.env.NAMESPACE,
        env: process.env.NODE_ENV,
        database: database,
        redis: redis
    }})
})

router.get("/", function(req, res){
    return res.status(200).json({message: `Index of ${process.env.NAMESPACE}`})
})


export default router