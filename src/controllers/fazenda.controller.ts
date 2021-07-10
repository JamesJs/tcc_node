import FazendaDao from '../DAO/fazendaDAO';
import express from 'express';

    const fazendaDao:FazendaDao = new FazendaDao();
    const create = (async (req:express.Request,res:express.Response)=>{
        const{nome,tamanho,quantFuncionarios,idLocalizacao} = req.body;
        try{
        
        
        const fazenda = await fazendaDao.create({nome,tamanho,quantFuncionarios,idLocalizacao});
        res.json({fazenda});
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const list = (async (req:express.Request,res:express.Response)=>{
        try{
        
        
        const fazenda = await fazendaDao.list();
        console.log(fazenda);
        res.json(fazenda);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const update = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        const {nome,tamanho,quantFuncionarios,idLocalizacao} = req.body;
        try{
              
       
        const fazenda = await fazendaDao.update({nome,tamanho,quantFuncionarios,idLocalizacao,id});
        console.log(fazenda);
        res.json(fazenda);
        }
        catch(err){
          
            res.status(500).json({error:err.message})
        }    
    })
    const _delete = (async (req:express.Request,res:express.Response)=>{
        
        const {id} = req.params;
        
        try{
              
        
        const fazenda = await fazendaDao._delete({id});
        console.log(fazenda);
        res.json(fazenda);
        }
        catch(err){
            console.log(err)
            res.status(500).json({error:err.message})
        }    
    })

export default {create,list,update,_delete};