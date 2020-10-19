let express = require('express')
let app = express()

app.use(express.static('public'))
np
app.get('/adder', (req, res) => {
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)
    let sum = num1 + num2
    let data = {
        result: sum
    }
    res.json(data)
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})