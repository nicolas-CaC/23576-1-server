const express = require('express')
const app = express()

const PORT = 8080

let count = 0

app.get('/', (_, res) => {
    count++
    if (count === 2)
        res.send('SSOS EL 2')
    else
        res.send(`Sos mi visitante nro: ${count}`)
})

app.get('/api', (_, res) => {
    res.send('bienvenidos a mi pagina!!')
})

const server = app.listen(PORT, () => {
    console.log(`listening at ${server.address().port} - http://localhost:${PORT}`)
})



