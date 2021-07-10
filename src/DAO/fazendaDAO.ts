import {getRepository} from 'typeorm';
import {Fazenda} from '../models/Fazenda';
import {Localizacao} from '../models/Localizacao';
interface Create {
    nome:string
    tamanho:number;
    quantFuncionarios:number;
    idLocalizacao:number;
}
interface Update {
    id:string|number;
    nome?:string
    tamanho?:number;
    quantFuncionarios?:number;
    idLocalizacao?:number;
}
interface _Delete {
    id:string|number;
}


class fazendaDAO {


    async create({nome,tamanho,quantFuncionarios,idLocalizacao}:Create){
        const fazenda = new Fazenda();
        const localizacaoModel = getRepository(Localizacao);
        const fazendaModel = getRepository(Fazenda);
        fazenda.nome = nome;
        fazenda.tamanho = tamanho;
        fazenda.quantFuncionarios = quantFuncionarios;
        const localizacao = await localizacaoModel.findOne(idLocalizacao);
        if(!localizacao){
            throw Error('Cannot find localization with this id');
        }   
        fazenda.idLocalizacao = localizacao;
      
        await fazendaModel.save(fazenda);
        return fazenda;
    }
    async list(){
        const fazendaModel = getRepository(Fazenda);      
        return await fazendaModel.find({relations:["idLocalizacao"]});
    }
    async update({nome,tamanho,quantFuncionarios,idLocalizacao,id}:Update){
        const localizacaoModel = getRepository(Localizacao);
        const fazendaModel = getRepository(Fazenda);
        const fazenda = await fazendaModel.findOne(id);
        if(!fazenda){
            throw new Error("Cannot find fazenda with this id");
        }

        fazenda.nome = nome || fazenda.nome;
        fazenda.tamanho = tamanho || fazenda.tamanho;
        fazenda.quantFuncionarios = quantFuncionarios || fazenda.quantFuncionarios;
        fazenda.nome = nome || fazenda.nome;
        fazenda.tamanho = tamanho || fazenda.tamanho;
        fazenda.quantFuncionarios = quantFuncionarios || fazenda.quantFuncionarios;
        const localizacao = await localizacaoModel.findOne(idLocalizacao);
        fazenda.idLocalizacao = localizacao || fazenda.idLocalizacao;

        await fazendaModel.save(fazenda)
        return fazenda; 

    }


    async _delete({id}:_Delete){
        const fazendaModel = getRepository(Fazenda);
        const fazenda = await fazendaModel.findOne(id,{relations:["idLocalizacao"]});
        if(!fazenda){
            throw new Error("Cannot find fazenda with this id");
        }
        const fazendaRemoved = await fazendaModel.remove(fazenda);
        return fazendaRemoved;
    }
}


export default fazendaDAO;