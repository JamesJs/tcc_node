import {Router} from 'express';
import controller from '../controllers/pesoDia.controller';
const pesoDiaRouter = Router();
 

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

pesoDiaRouter.get('/list',controller.list);

pesoDiaRouter.post('/create',controller.create);

pesoDiaRouter.post('/findbyrangedates',controller.findByRangeDates);

pesoDiaRouter.put('/update/:id',controller.update);

pesoDiaRouter.delete('/delete/:id',controller._delete);


export default pesoDiaRouter;