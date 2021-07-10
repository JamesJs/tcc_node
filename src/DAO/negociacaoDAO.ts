import {getRepository} from 'typeorm';
import {Negociacao} from '../models/Negociacao';
import {Financeiro} from '../models/Financeiro';

interface Create {
    valor:number;
    data:Date;
    idFinanceiro:number;
    quantGado:number
}
interface Update {
    id:number|string;
    valor:number;
    data:Date;
    idFinanceiro:number;
    quantGado:number
}
interface _Delete {
    id:string|number;
}


class negociacaoDAO{


    async create({data,idFinanceiro,quantGado,valor}:Create){
        const negociacao = new Negociacao();
        const negociacaoModel = getRepository(Negociacao);
        const financeiroModel = getRepository(Financeiro);
        negociacao.valor = valor;
        negociacao.data = data;  
        negociacao.quantGado = quantGado;
        console.log("oi")
        const financeiro =  await financeiroModel.findOne(idFinanceiro)
        if(!financeiro){
            throw new Error("Cannot find financeiro with this id");
        }   
        negociacao.idFinanceiro = financeiro;
        await negociacaoModel.save(negociacao);
        return negociacao;
    }
    async list(){
        const negociacaoModel = getRepository(Negociacao);      
        return await negociacaoModel.find({relations:["idFinanceiro"]});
    }
    async update({data,idFinanceiro,quantGado,valor,id}:Update){
        const negociacaoModel = getRepository(Negociacao);
        const financeiroModel = getRepository(Financeiro);
        const negociacao = await negociacaoModel.findOne(id);
        if(!negociacao){
            throw new Error("Cannot find negociacao with this id");
        }
        negociacao.data = data || negociacao.data;
        negociacao.quantGado = quantGado || negociacao.quantGado;
        negociacao.valor =  valor || negociacao.valor;
        const financeiro = await financeiroModel.findOne(idFinanceiro)
        
        negociacao.idFinanceiro = financeiro  || negociacao.idFinanceiro;


        await negociacaoModel.save(negociacao)
        return negociacao;
    }
    async _delete({id}:_Delete){
        const negociacaoModel = getRepository(Negociacao);
        const negociacao = await negociacaoModel.findOne(id);
        if(!negociacao){
            throw new Error("Cannot find negociacao with this id");
        }
        const negociacaoRemoved = await negociacaoModel.remove(negociacao);
        return negociacaoRemoved;
    }
}


export default negociacaoDAO;