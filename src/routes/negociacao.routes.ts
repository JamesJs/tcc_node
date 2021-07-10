import {Router} from 'express';
import controller from '../controllers/negociacao.controller';
const negociacaoRouter = Router();
 

    /* 	#swagger.tags = ['User']
        #swagger.description = 'seila' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'User information.',
            required: true,
      
    } */


    /* #swagger.security = [{
            "apiKeyAuth": ['JWT']
    }] */

negociacaoRouter.get('/list',controller.list);

negociacaoRouter.post('/create',controller.create);

negociacaoRouter.put('/update/:id',controller.update);

negociacaoRouter.delete('/delete/:id',controller._delete);


export default negociacaoRouter;