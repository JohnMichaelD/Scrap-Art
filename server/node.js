const express = require('express')
const { Client } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express()
const port = 3001

var jsonParser = bodyParser.json()

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

app.post('/post', jsonParser, (req, res) => {
  console.log(req.body)
  var query = 'Insert into posts(id,title,price,description,location,category,sellerId) values('
  query = query + "'" + uuidv4() + "',"
  query = query + "'" + req.body.newPostJson.title + "',"
  query = query + req.body.newPostJson.price + ","
  query = query + "'" + req.body.newPostJson.description + "',"
  query = query + "'" + req.body.newPostJson.location + "',"
  query = query + "'" + req.body.newPostJson.category + "',"
  query = query + 0 + ")"

  
  console.log(query)
  
  
  client.query(query, (err, queryRes) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(queryRes);
    res.send(queryRes)
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})