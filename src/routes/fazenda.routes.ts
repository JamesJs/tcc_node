import {Router} from 'express';
import controller from '../controllers/fazenda.controller';
const fazendaRouter = Router();
 

    

fazendaRouter.get('/list',controller.list);

fazendaRouter.post('/create',controller.create);

fazendaRouter.put('/update/:id',controller.update);

fazendaRouter.delete('/delete/:id',controller._delete);


export default fazendaRouter;