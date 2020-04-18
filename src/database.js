import MongoClient from 'mongodb';

export async function connect(){
    
    const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongo:27017'
    console.log('DB is test');
    try {

    
    const client =  await MongoClient.connect( MONGO_URL ,{
        useUnifiedTopology: true
    })
    
    const db = client.db('node-restapi');
    console.log('DB is connected');
    return db;

    }catch(e){
        console.log("error conect");
        console.log(e);
    }
}

