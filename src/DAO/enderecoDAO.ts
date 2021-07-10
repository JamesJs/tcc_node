import {getRepository} from 'typeorm';
import {Endereco} from '../models/Endereco';

interface Create {
    CEP:string
    numero:number;
    bairro:string;
    complemento:string;
    estado:string;
    cidade:string;
}
interface Update {
    id:number|string;
    CEP?:string
    numero?:number;
    bairro?:string;
    complemento?:string;
    estado?:string;
    cidade?:string;
}
interface _Delete {
    id:string|number;
}


class EnderecoDAO{


    async create({CEP,bairro,cidade,complemento,estado,numero}:Create){
        const endereco = new Endereco();
    
        const enderecoModel = getRepository(Endereco);
        endereco.bairro = bairro;
        endereco.cep = CEP;
        endereco.cidade = cidade;
        endereco.complemento = complemento;
        endereco.estado = estado;
        endereco.numero = numero;       
        await enderecoModel.save(endereco);
        return endereco;
    }
    async list(){
        const enderecoModel = getRepository(Endereco);      
        return await enderecoModel.find();
    }
    async update({CEP,bairro,cidade,complemento,estado,numero,id}:Update){
        const enderecoModel = getRepository(Endereco);
        const endereco = await enderecoModel.findOne(id);
        if(!endereco){
            throw new Error("Cannot find endereco with this id");
        }


        endereco.bairro = bairro || endereco.bairro;
        endereco.cep = CEP || endereco.cep;
        endereco.cidade = cidade || endereco.cidade;
        endereco.complemento = complemento || endereco.complemento;
        endereco.estado = estado || endereco.estado;
        endereco.numero = numero || endereco.numero;

              
        await enderecoModel.save(endereco)
        return endereco;
    }


    async _delete({id}:_Delete){
        const enderecoModel = getRepository(Endereco);
        const endereco = await enderecoModel.findOne(id);
        if(!endereco){
            throw new Error("Cannot find endereco with this id");
        }
        const enderecoRemoved = await enderecoModel.remove(endereco);
        return enderecoRemoved;
    }
}


export default EnderecoDAO;