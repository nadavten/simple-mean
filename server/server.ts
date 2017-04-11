import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as mongoose from 'mongoose';
import config from './config';

import api from './routes';
import {appRoot} from '../helper';

// Get port from environment and store in Express.
const port = process.env.PORT || 4000;

mongoose.connect(config.localDbUrl);

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Point static path to dist
app.use(express.static(path.join(appRoot,'dist')));

// Set our api routes
app.use('/api',api);

// Catch all other routes and return the index file
// MUST COME AFTER ALL OTHER ROUTES
app.get('*', (req, res) => {
  res.sendFile(path.join(appRoot, 'dist/index.html'));
});

app.listen(port,err=>{
    
    if(err){
        throw err;
    }

    console.log(`listening on port ${port}`);
});