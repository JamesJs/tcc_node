import {getRepository} from 'typeorm';
import {Funcao} from '../models/Funcao';

interface Create {
    nome:string;
    salario:number
}
interface Update {
    id:string|number;
    nome?:string|undefined;
    salario?:number|undefined
}
interface _Delete {
    id:string|number;
}


class FuncaoDAO{


    async create({nome,salario}:Create){
        const funcao = new Funcao();
        const funcaoModel = getRepository(Funcao);
        funcao.nome = nome;
        funcao.salario = salario;       
        await funcaoModel.save(funcao);
        return funcao;
    }
    async list(){
        const funcaoModel = getRepository(Funcao);      
        return await funcaoModel.find();
    }
    async update({id,nome,salario}:Update){
        const funcaoModel = getRepository(Funcao);
        const funcao = await funcaoModel.findOne(id);
        if(!funcao){
            throw new Error("Cannot find funcao with this id");
        }
        if(nome){
            funcao.nome = nome;
        }
        if(salario){
            funcao.salario = salario; 
        }
        await funcaoModel.save(funcao)
        return funcao;
    }
    async _delete({id}:_Delete){
        const funcaoModel = getRepository(Funcao);
        const funcao = await funcaoModel.findOne(id);
        if(!funcao){
            throw new Error("Cannot find funcao with this id");
        }
        const funcaoRemoved = await funcaoModel.remove(funcao);
        return funcaoRemoved;
    }
}


export default FuncaoDAO;