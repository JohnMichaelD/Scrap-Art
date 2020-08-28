const express = require('express')
const { Client } = require('pg');
const cors = require('cors')
const app = express()
const port = 3001

//Define your database credentials here
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '0847501j',
  port: 5432,
});

client.connect();

//This make cors work
app.use(cors())

//Define GET paths here
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/posts', (req, res) => {
  console.log('posts')

  var posts=[]

  const query = `select * from posts;`
  client.query(query, (err, queryRes) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(queryRes.rows);
    res.send(queryRes.rows)
  });

})

app.post('/post', (req, res) => {
  console.log('this is a post post')
  res.send("Woot Woot")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})