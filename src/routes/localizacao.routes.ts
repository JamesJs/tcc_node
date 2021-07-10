import {Router} from 'express';
import controller from '../controllers/localizacao.controller';
const localizacaoRouter = Router();
 

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

localizacaoRouter.get('/list',controller.list);

localizacaoRouter.post('/create',controller.create);

localizacaoRouter.put('/update/:id',controller.update);

localizacaoRouter.delete('/delete/:id',controller._delete);


export default localizacaoRouter;