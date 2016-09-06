import mongoose from 'mongoose';

let Schema = mongoose.Schema;

const MonasticSchema = new Schema({
  id: Number,
  name: String,
  title:String,
  ordined:Date,
  address:String
})

const MonasticModel = mongoose.model('monastic', MonasticSchema);

export default MonasticModel;
