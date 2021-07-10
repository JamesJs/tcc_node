import {getRepository} from 'typeorm';
import {PesoDia} from '../models/PesoDia';
import {Gado} from '../models/Gado';
import {Between, FindOperator} from 'typeorm';
interface Create {
    idGado:number;
    dia:Date;
    ganhoPeso:number;
}
interface Update {
    id:string|number;
    idGado?:number;
    dia?:Date;
    ganhoPeso?:number;
}
interface _Delete {
    id:string|number;
}


class pesoDiaDAO{


    async create({dia,ganhoPeso,idGado}:Create){
        const pesoDia = new PesoDia();
        const gadoModel = getRepository(Gado);
        const pesoDiaModel = getRepository(PesoDia);
        pesoDia.dia = dia;
        pesoDia.ganhoPeso = ganhoPeso;
        const gado = await gadoModel.findOne(idGado);
        if(!gado){
            throw Error('Cannot find localization with this id');
        }   
        pesoDia.idGado = gado;
      
        await pesoDiaModel.save(pesoDia);
        return pesoDia;
    }
    async list(){
        const pesoDiaModel = getRepository(PesoDia);      
        return await pesoDiaModel.find({relations:["idGado"]});
    }
    async update({dia,ganhoPeso,idGado,id}:Update){
        const gadoModel = getRepository(Gado);
        const pesoDiaModel = getRepository(PesoDia);
        const pesoDia = await pesoDiaModel.findOne(id);
        if(!pesoDia){
            throw new Error("Cannot find pesoDia with this id");
        }

        pesoDia.dia = dia || pesoDia.dia;
        pesoDia.ganhoPeso = ganhoPeso || pesoDia.ganhoPeso;
        const gado = await gadoModel.findOne(idGado);
        if(!gado){
            throw Error('Cannot find localization with this id');
        } 
        pesoDia.ganhoPeso = ganhoPeso || pesoDia.ganhoPeso;


        await pesoDiaModel.save(pesoDia)
        return pesoDia; 

    }


    async _delete({id}:_Delete){
        const pesoDiaModel = getRepository(PesoDia);
        const pesoDia = await pesoDiaModel.findOne(id,{relations:["idGado"]});
        if(!pesoDia){
            throw new Error("Cannot find pesoDia with this id");
        }
        const pesoDiaRemoved = await pesoDiaModel.remove(pesoDia);
        return pesoDiaRemoved;
    }
    async find <T> (where:T){
   
        const gadoModel = getRepository(Gado);
        const pesoDiaModel = getRepository(PesoDia);
        const value =  await pesoDiaModel.find({where,select:["dia","ganhoPeso"]});
        return value;

    }
}


export default pesoDiaDAO;