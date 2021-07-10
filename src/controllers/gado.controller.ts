import GadoDao from '../DAO/gadoDAO';
import express from 'express';

    const gadoDao:GadoDao = new GadoDao();
    const create = (async (req:express.Request,res:express.Response)=>{
        const{dataNascimento,idFazenda,idLocalizacao,idNegociacao,idade,isVaca,nome,peso,
            quantFilhos,sexo} = req.body;
        try{
        
        
        const gado = await gadoDao.create({
            dataNascimento,idFazenda,idLocalizacao,idNegociacao,idade,isVaca,nome,peso,
            quantFilhos,sexo});
        res.json({gado});
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const list = (async (req:express.Request,res:express.Response)=>{
        try{
        
        
        const gado = await gadoDao.list();
        console.log(gado);
        res.json(gado);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const update = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        const {dataNascimento,idFazenda,idLocalizacao,idNegociacao,idade,isVaca,nome,peso,
            quantFilhos,sexo} = req.body;
        try{
              
       
        const gado = await gadoDao.update({dataNascimento,
            idFazenda,idLocalizacao,idNegociacao,idade,isVaca,nome,peso,
            quantFilhos,sexo,id});
        console.log(gado);
        res.json(gado);
        }
        catch(err){
          
            res.status(500).json({error:err.message})
        }    
    })
    const _delete = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        try{
              
        
        const gado = await gadoDao._delete({id});
        console.log(gado);
        res.json(gado);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

export default {create,list,update,_delete};