const express = require('express');
const compression = require('compression');
// 买域名后要做的事1 导入模块
// const https = require('https');
// const fs = require('fs');
const app=express()
// 买域名后要做的事2 ：导入full_chain.pem 和private.key 导入到当前文件夹同级
// 买域名后要做的事3
// const options={
//     cert:fs.readFile('./full_chain.pem'),
//     key:fs.readFileSync('./private.key')
// }


app.use(compression())
app.use(express.static('./dist'))
app.listen(10000,()=>{
    console.log('web server running at http://127.0.0.1:10000')
})
// 买域名后要做的事4
// https.createServer(options,app).listen(443)