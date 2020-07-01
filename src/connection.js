
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGO_URL ;
console.log('DB is using variable MONGO_URL');


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
