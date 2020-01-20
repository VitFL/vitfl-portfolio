import * as path from 'path';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './router';

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

const {
  env: { MONGODB_URI, NODE_ENV, PORT }
} = process;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('Mongo connected'))
  .catch(err => console.log(err));

router(app);

// serve react client on production enviroment
if (NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));
