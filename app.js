import express from 'express'
import request from 'request'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    let data = [] 
    request('https://s3.amazonaws.com/roxiler.com/product_transaction.json', function(error, response, body) {
        res.send(body)
    });
//   res.send({data:data, success: true})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      