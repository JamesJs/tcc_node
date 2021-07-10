import {Router} from 'express';
import controller from '../controllers/financeiro.controller';
const financeiroRouter = Router();
 

    

financeiroRouter.get('/list',controller.list);

financeiroRouter.post('/create',controller.create);

financeiroRouter.put('/update/:id',controller.update);

financeiroRouter.delete('/delete/:id',controller._delete);


export default financeiroRouter;