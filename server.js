const express = require('express')
const path = require('path')

const app = express()
const distPath = path.join(__dirname + '/dist/kpi-technical-front')

app.use(express.static(distPath))


app.get('/*',(req,res)=>{
 res.sendFile(distPath+'/index.html')
})


app.listen(process.env.PORT)