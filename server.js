const express = require('express')
const app = express()
const port = process.argv[2] || 80

const frontend_file = express.static(`${__dirname}/frontend_file`)
app.use(frontend_file)

app.listen(port, function() {
	console.log(`reunning the server on port ${port}! visit http://localhost:${port}`)
})

