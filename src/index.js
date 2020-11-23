//#region Config Setup
//Create a .env file in the  relative path of index.js & access config using process.env.ConfigKey

require('dotenv/config')

//#endregion

const express = require('express')
const cors= require('cors')
const app = express()
const port=process.env.port|| 3000

//#region story of cors
// It most likely happens because we are accessing a domain from a foreign domain. 
// Cross-origin resource sharing (CORS) was invented to secure web applications on a domain level. 
// The idea: It shouldn't be possible to access data from other domains. For instance, 
// a web application with the domain https://example.com shouldn't be allowed to access another web application with 
// https://website.com by default. CORS is used to restrict access between web applications.

// Now, we can allow CORS by adding this missing CORS header, 
// because we will run eventually into this error ourselves when implementing a consuming client application for our Express server. 
// However, since we don't want to do this manually for every route,
//  we can use an application-level middleware to add the CORS HTTP header to every request by default. 
//#endregion


app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Server is up and running...')
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})