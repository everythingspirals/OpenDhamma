import express from 'express';

//model
import Monastic from '../schema/monastic';

//router
const router = express.Router();

//get
router.get('/', (req, res) => {
  Monastic.find((err, monastics) => {
    console.log(err);
    console.log(monastics);
    res.send(monastics);
  });
});

export default router;
