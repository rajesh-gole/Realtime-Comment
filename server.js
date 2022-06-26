const express = require('express')

const app = express()

const port = process.env.PORT || 3000


app.use(express.static('public'))

const server = app.listen(port, () => {
    console.log(`Listing to PORT ${port}`)
})


let io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log(`New Connection : ${socket.id}`)
})