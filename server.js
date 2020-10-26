const express = require('express')
const app = express()
const PORT = 3000;
const moment = require('moment')
app.use(express.static(__dirname + '/public'));

var log = function(message){
    var time = moment().format()
    console.log('[server] @ '+ time + ' ' + message)
}


app.get('/adder', (req, res) => {
    var num1 = parseInt(req.query.num1)
    var num2 = parseInt(req.query.num2)
    var sum = num1 + num2
    res.send(''+sum+'')
})

app.listen(PORT, () => {
    log('Server listening on port' + PORT)
})