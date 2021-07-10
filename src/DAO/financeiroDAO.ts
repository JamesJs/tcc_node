import {getRepository} from 'typeorm';
import {Fazenda} from '../models/Fazenda';
import {Financeiro} from '../models/Financeiro';
interface Create {
    idFazenda:number;
}
interface Update {
    idFazenda?:number;
    id:string|number;
}
interface _Delete {
    id:string|number;
}


class financeiroDAO {


    async create({idFazenda}:Create){
        const financeiro = new Financeiro();
        const FazendaModel = getRepository(Fazenda);
        const FinanceiroModel = getRepository(Financeiro);
        const fazenda = await FazendaModel.findOne(idFazenda);
        if(!fazenda){
            throw Error('Cannot find localization with this id');
        }   
        financeiro.idFazenda = fazenda;
      
        await FinanceiroModel.save(financeiro);
        return financeiro;
    }
    async list(){
        const FinanceiroModel = getRepository(Financeiro);      
        return await FinanceiroModel.find({relations:["idFazenda"]});
    }
    async update({idFazenda,id}:Update){
        const financeiroModel = getRepository(Financeiro);     
        const fazendaModel = getRepository(Fazenda);
        const financeiro = await financeiroModel.findOne(id);
        if(!financeiro){
            throw new Error("Cannot find fazenda with this id");
        }
        const fazenda = await fazendaModel.findOne(idFazenda)
        
        financeiro.idFazenda = fazenda || financeiro.idFazenda;

              
        await financeiroModel.save(financeiro)
        return financeiro;
    }


    async _delete({id}:_Delete){
        const financeiroModel = getRepository(Financeiro);
        console.log(id);
        const financeiro = await financeiroModel.findOne(id,{relations:["idFazenda"]});
        if(!financeiro){
            throw new Error("Cannot find financeiro with this id");
        }
        const financeiroRemoved = await financeiroModel.remove(financeiro);
        return financeiroRemoved;
    }
}


export default financeiroDAO;