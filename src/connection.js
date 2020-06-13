
const mongoose = require('mongoose');

// const MONGO_URL = process.env.MONGO_URL || 'mongodb+srv://macorreag:helloworld@cluster0-aodgz.mongodb.net/test?retryWrites=true&w=majority';
// console.log('DB is remote');

const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo:27017';
console.log('DB is local');

const db = mongoose.connection;

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})


db.once('open', _ => {
    console.log('Database is connected to' + MONGO_URL );
});

db.on('error', err => {
    console.log(err);
});
