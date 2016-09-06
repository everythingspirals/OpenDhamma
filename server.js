//lib
import express from 'express';
import mongoose from 'mongoose';

//route
import Monastic from './routes/monastic';

//db
mongoose.connect('mongodb://138.68.11.119:27017/opendhamma');

//app
let app = express();
app.use('/monastic', Monastic);

app.listen(8080, ()=>{
  console.log("OpenDhamma server started on port 8080...");
});
