const http = require('http')
const server = http.createServer((req, res)=> {
    console.log("New connetion")
    res.end('Hello awesome WITH CI/CD')
})
const PORT = process.env.PORT || 8080 
server.listen(PORT, () => console.log('Listening'))
