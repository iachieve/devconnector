const express = require('express');
const mongoose = require('mongoose');

// routes / apis
const users = require('./routs/api/users');
const posts = require('./routs/api/posts');
const profile = require('./routs/api/profile');


const app = express();


// db config
const db = require('./config/keys').mongoURI;
mongoose
.connect(db)
.then(() => console.log('mongodb connected'))
.catch(err => console.log(' ======= db connection error ========= ', err));


app.get('/', (req, res)=> res.send('hello!'));
// use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`) )