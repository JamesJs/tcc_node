import {Router} from 'express';
import controller from '../controllers/funcao.controller';
const funcaoRouter = Router();
 

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

funcaoRouter.get('/list',controller.list);

funcaoRouter.post('/create',controller.create);

funcaoRouter.put('/update/:id',controller.update);

funcaoRouter.delete('/delete/:id',controller._delete);


export default funcaoRouter;