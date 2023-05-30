const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./route/userRoute')
const productRoute = require('./route/productRoute')
require('dotenv/config')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('home')
})

app.use('/api/user',userRoute)
app.use('/api/product',productRoute)

app.listen(process.env.PORT)

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

main()