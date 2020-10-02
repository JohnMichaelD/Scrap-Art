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

app.post('/login', jsonParser, (req, res) => {
console.log('Anything')

let phoneNumber = req.body.phoneNumber

  // Download the helper library from https://www.twilio.com/docs/node/install
        // Your Account Sid and Auth Token from twilio.com/console
        // DANGER! This is insecure. See http://twil.io/secure
        const accountSid = 'AC51f4066216500079216089aee41dc87a';
        const authToken = '6583fc314fd61ccf1a2a234cc0dbc4db';
        const client = require('twilio')(accountSid, authToken);

        client.verify.services('VAc9e3c0feee4f1fe0c4c8806107a015b5')
             .verifications
             .create({to: '+1'+phoneNumber, channel: 'sms'})
             .then(verification => console.log(verification.status));

          res.send("hi")
})

app.post('/smspin', jsonParser, (req, res) => {
  console.log('smspin')
  let pin = req.body.pin
  let phoneNumber= req.body.phoneNumber
  console.log(pin)



    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    const accountSid = 'AC51f4066216500079216089aee41dc87a';
    const authToken = '6583fc314fd61ccf1a2a234cc0dbc4db';
    const client = require('twilio')(accountSid, authToken);

    client.verify.services('VAc9e3c0feee4f1fe0c4c8806107a015b5')
          .verificationChecks
          .create({to: '+1'+phoneNumber, code: pin})
          .then(verification_check => console.log(verification_check.status));

  res.send("hi")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})