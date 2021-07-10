import express from 'express';
import routes from './routes';
import './database';
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3333,()=>{
    console.log('server on');
})