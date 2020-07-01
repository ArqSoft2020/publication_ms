import express, { json } from 'express'

const app = express();


// Routes 
import IndexRoutes from './routes/index.routes'
import PublicationRoutes from './routes/publications.routes'


// For use a variable Enviroment
const dotenv = require('dotenv');
dotenv.config();

// Settings
app.set('port', process.env.PORT )


// Middlewares
app.use(json());

// Routes
app.use( IndexRoutes );
app.use('/publications' , PublicationRoutes );



export default app;