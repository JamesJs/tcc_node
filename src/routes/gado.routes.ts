import {Router} from 'express';
import controller from '../controllers/gado.controller';
const gadoRouter = Router();
 

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

gadoRouter.get('/list',controller.list);

gadoRouter.post('/create',controller.create);

gadoRouter.put('/update/:id',controller.update);

gadoRouter.delete('/delete/:id',controller._delete);


export default gadoRouter;