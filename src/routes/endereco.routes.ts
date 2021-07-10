import {Router} from 'express';
import controller from '../controllers/endereco.controller';
const enderecoRouter = Router();
 

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

enderecoRouter.get('/list',controller.list);

enderecoRouter.post('/create',controller.create);

enderecoRouter.put('/update/:id',controller.update);

enderecoRouter.delete('/delete/:id',controller._delete);


export default enderecoRouter;