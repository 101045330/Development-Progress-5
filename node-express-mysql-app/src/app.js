import express from 'express';
import bodyParser from 'body-parser';
import servicesRoutes from './routes/services.js';
import displayRoutes from './routes/display.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/services', servicesRoutes);
app.use('/api/display', displayRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});