const express = require('express')
const app = express()
const port = 4000
const {PrismaClient} = require('@prisma/client')
const db = new PrismaClient()

app.get('/info', async (req, res) => {
    console.log(req.query)
    await db.user.create({
        data: {
            email: req.query.email,
            password: req.query.password,
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
