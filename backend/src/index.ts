require('dotenv').config();
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../docs/swagger.json';  // Ajuste o caminho conforme necessário

import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3500;

app.use(cors());
app.use(express.json());

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Your existing routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
