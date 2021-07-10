import {getRepository} from 'typeorm';
import {Localizacao} from '../models/Localizacao';

interface Create {
    latitude:string;
    longitude:string;
}
interface Update {
    id:string|number;
    latitude?:string;
    longitude?:string;
}
interface _Delete {
    id:string|number;
}


class LocalizacaoDAO{


    async create({latitude,longitude}:Create){
        const localizacao = new Localizacao();
        const localizacaoModel = getRepository(Localizacao);
        localizacao.latitude = latitude;
        localizacao.longitude = longitude;       
        await localizacaoModel.save(localizacao);
        return localizacao;
    }
    async list(){
        const localizacaoModel = getRepository(Localizacao);      
        return await localizacaoModel.find();
    }
    async update({latitude,longitude,id}:Update){
        const localizacaoModel = getRepository(Localizacao);
        const localizacao = await localizacaoModel.findOne(id);
        if(!localizacao){
            throw new Error("Cannot find Localizacao with this id");
        }
        localizacao.latitude = latitude || localizacao.latitude;
        localizacao.longitude = longitude || localizacao.longitude;
        await localizacaoModel.save(localizacao)
        return localizacao;
    }
    async _delete({id}:_Delete){
        const localizacaoModel = getRepository(Localizacao);
        const localizacao = await localizacaoModel.findOne(id);
        if(!localizacao){
            throw new Error("Cannot find Localizacao with this id");
        }
        const localizacaoRemoved = await localizacaoModel.remove(localizacao);
        return localizacaoRemoved;
    }
}


export default LocalizacaoDAO;