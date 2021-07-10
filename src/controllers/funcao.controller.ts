import FuncaoDao from '../DAO/funcaoDAO';
import express from 'express';

    const funcaoDao:FuncaoDao = new FuncaoDao();
    const create = (async (req:express.Request,res:express.Response)=>{
        const{nome,salario} = req.body;
        try{
        
       
        const funcao = await funcaoDao.create({nome,salario});
        res.json({funcao});
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const list = (async (req:express.Request,res:express.Response)=>{
        try{
        
        
        const funcoes = await funcaoDao.list();
        console.log(funcoes);
        res.json(funcoes);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const update = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        const {nome,salario} = req.body;
        try{
              
        
        const funcao = await funcaoDao.update({id,salario,nome});
        console.log(funcao);
        res.json(funcao);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })
    const _delete = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        try{
              
        
        const funcao = await funcaoDao._delete({id});
        console.log(funcao);
        res.json(funcao);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

export default {create,list,update,_delete};