const express = require('express')
const morgan = require('morgan')
const userRouter = require('./router')


const app = express()
app.use(morgan('dev'))

app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send('<h1>I am listening</h1>')
})
app.get('*', (req, res) => {
    res.send('<h1>404 not Found</h1>')
})
const PORT = process.env.PORT || 7070
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})