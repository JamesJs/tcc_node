import {getRepository} from 'typeorm';
import {Gado} from '../models/Gado';
import {Localizacao} from '../models/Localizacao';
import {Negociacao} from '../models/Negociacao';
import {Fazenda} from '../models/Fazenda';


interface Create {
    idFazenda:number;
    isVaca:number;
    sexo:string;
    idade:number;
    dataNascimento:Date;
    idLocalizacao:number;
    peso:number;
    quantFilhos:number;
    idNegociacao:number;
    nome:string;

}
interface Update {
    id:string|number;
    idFazenda?:number|undefined;
    isVaca?:number|undefined;
    sexo?:string|undefined;
    idade?:number|undefined;
    dataNascimento?:Date|undefined;
    idLocalizacao?:number|undefined;
    peso?:number|undefined;
    quantFilhos?:number|undefined;
    idNegociacao?:number|undefined;
    nome?:string|undefined;
}
interface _Delete {
    id:string|number;
}


class GadoDAO{


    async create({dataNascimento,idFazenda,idLocalizacao,idNegociacao,idade,isVaca,nome,peso,
    quantFilhos,sexo}:Create){
        const gado = new Gado();
       
        const gadoModel = getRepository(Gado);
        const fazendaModel = getRepository(Fazenda);
        const negociacaoModel = getRepository(Negociacao);
        const localizacaoModel = getRepository(Localizacao);

        gado.nome = nome;
        gado.dataNascimento = dataNascimento;
        gado.idade = idade;
        gado.isVaca = isVaca;
        gado.peso = peso;
        gado.quantFilhos = quantFilhos;
        gado.sexo = sexo;

        const fazenda = await fazendaModel.findOne(idFazenda);
        const localizacao = await localizacaoModel.findOne(idLocalizacao);
        const negociacao = await negociacaoModel.findOne(idNegociacao);
        if(!fazenda){
            throw Error('Cannot find fazenda with this id');
        }
        if(!localizacao){
            throw Error('Cannot find localization with this id');
        }
        if(!negociacao){
            throw Error('Cannot find negociacao with this id');
        }

        gado.idFazenda = fazenda; 
        gado.idNegociacao = negociacao;
        gado.idLocalizacao = localizacao;

        

        await gadoModel.save(gado);
        return gado;
    }
    async list(){
        const gadoModel = getRepository(Gado);      
        return await gadoModel.find({relations:["idFazenda","idLocalizacao","idNegociacao"]});
    }
    async update({id,dataNascimento,idFazenda,idLocalizacao,idNegociacao,idade,isVaca,
    nome,peso,quantFilhos,sexo}:Update){
        const gadoModel = getRepository(Gado);
        const gado = await gadoModel.findOne(id);
        if(!gado){
            throw new Error("Cannot find gado with this id");
        }


        
        const fazendaModel = getRepository(Fazenda);
        const negociacaoModel = getRepository(Negociacao);
        const localizacaoModel = getRepository(Localizacao);
        

        const fazenda = await fazendaModel.findOne(idFazenda);
        const localizacao = await localizacaoModel.findOne(idLocalizacao);
        const negociacao = await negociacaoModel.findOne(idNegociacao);

        gado.nome = nome || gado.nome;
        gado.dataNascimento = dataNascimento || gado.dataNascimento;
        gado.idade = idade || gado.isVaca;
        gado.isVaca = isVaca || gado.isVaca;
        gado.peso = peso || gado.peso;
        gado.quantFilhos = quantFilhos || gado.quantFilhos;
        gado.sexo = sexo || gado.sexo;
        gado.idFazenda = fazenda || gado.idFazenda;
        gado.idNegociacao = negociacao || gado.idNegociacao;
        gado.idLocalizacao = localizacao || gado.idLocalizacao;

        await gadoModel.save(gado)
        return gado;
    }
    async _delete({id}:_Delete){
        const gadoModel = getRepository(Gado);
        const gado = await gadoModel.findOne(id);
        if(!gado){
            throw new Error("Cannot find gado with this id");
        }
        const gadoRemoved = await gadoModel.remove(gado);
        return gadoRemoved;
    }
}


export default GadoDAO;