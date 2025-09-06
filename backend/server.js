import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(helmet()); // HTTP headers security
app.use(morgan("dev")); // log the requests

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});