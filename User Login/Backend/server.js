const express = require('express');
const { MongoClient } = require('mongodb');

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'practice';

server.get('/api/getAll', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = await db.collection('user');
    const result = await collection.find().toArray();
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
});
// Signup
server.post('/api/register', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = await db.collection('user');
    const { name, email, password } = req.body;
    const registers = await collection.find({}).toArray();
    for (register of registers) {
      if (register.name === name || register.email === email) {
        return res.send('You are already register');
      }
    }
    const result = await collection.insertOne({
      name: name,
      email: email,
      password: password,
    });
    return res.status(201).send('ok');
  } catch (error) {
    console.log(error);
  }
});
// login
server.post('/api/login', async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = await db.collection('user');
    const { email, password } = req.body;
    const registers = await collection.find({}).toArray();
    for (register of registers) {
      if (register.email === email && register.password === password) {
        return res.send('Login Successfull');
      }
    }
    return res.send('User does not exist');
  } catch (err) {
    console.log(err);
  }
});

server.listen(3000, () => {
  console.log('Server is listening on the port 3000');
});
