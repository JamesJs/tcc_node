import {Router} from 'express';

import funcaoRoutes from './funcao.routes';
import enderecoRoutes from './endereco.routes';
import localizacaoRoutes from './localizacao.routes'
import fazendaRoutes from './fazenda.routes';
import financeiroRoutes from './financeiro.routes'
import negociacaoRoutes from './negociacao.routes';
import gadoRoutes from './gado.routes';
import pesoDiaRoutes from './pesoDia.routes';


const routes = Router();

routes.use('/funcao',funcaoRoutes);

routes.use('/endereco',enderecoRoutes)

routes.use('/localizacao',localizacaoRoutes);

routes.use('/fazenda',fazendaRoutes);

routes.use('/financeiro',financeiroRoutes);

routes.use('/negociacao',negociacaoRoutes);

routes.use('/gado',gadoRoutes);

routes.use('/pesodia',pesoDiaRoutes);


export default routes;