const students = require('./routes/students')
const express = require('express');
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json())


//routes
// app.get('/hello',(req, res) => {
//     res.send('Task Manager App')
// })

app.use('/api/v1/students',students)


//app.get('/api/v1/students')
//app.post('/api/v1/students')
//app.get('/api/v1/'studets/:id)
//app.patch('/api/v1/students/:id)     
//app.delete('/api/v1/students/:id


const port = 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,
            console.log('listening on port ' + port))
        console.log('Student Manager App')
    } catch (err) {
        console.log('Student Manager App error: ' + err)
    }
}
start()
