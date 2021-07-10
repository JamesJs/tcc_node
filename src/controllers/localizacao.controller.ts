import LocalizacaoDao from '../DAO/localizacaoDAO';
import express from 'express';

    const localizacaoDao:LocalizacaoDao = new LocalizacaoDao();
    const create = (async (req:express.Request,res:express.Response)=>{
        const{latitude,longitude} = req.body;
        try{
        
        
        const localizacao = await localizacaoDao.create({latitude,longitude});
        res.json({localizacao});
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const list = (async (req:express.Request,res:express.Response)=>{
        try{
        
  
        const funcoes = await localizacaoDao.list();
        console.log(funcoes);
        res.json(funcoes);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const update = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        const {latitude,longitude} = req.body;
        try{
              
     
        const localizacao = await localizacaoDao.update({id,latitude,longitude});
        console.log(localizacao);
        res.json(localizacao);
        }
        catch(err){
          
            res.status(500).json({error:err.message})
        }    
    })
    const _delete = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        try{
              
    
        const localizacao = await localizacaoDao._delete({id});
        console.log(localizacao);
        res.json(localizacao);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

export default {create,list,update,_delete};