import NegociacaoDao from '../DAO/negociacaoDAO';
import express from 'express';

    const negociacaoDao:NegociacaoDao = new NegociacaoDao();
    const create = (async (req:express.Request,res:express.Response)=>{
        const {data,idFinanceiro,quantGado,valor} = req.body;
        try{
        
        
        const negociacao = await negociacaoDao.create({data,idFinanceiro,quantGado,valor});
        
        res.json({negociacao});
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const list = (async (req:express.Request,res:express.Response)=>{
        try{
        
       
        const negociacao = await negociacaoDao.list();
        console.log(negociacao);
        res.json(negociacao);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const update = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        const {data,idFinanceiro,quantGado,valor} = req.body;
        try{
              
      
        const negociacao = await negociacaoDao.update({data,idFinanceiro,quantGado,valor,id});
        console.log(negociacao);
        res.json(negociacao);
        }
        catch(err){
          
            res.status(500).json({error:err.message})
        }    
    })
    const _delete = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        try{
              
      
        const negociacao = await negociacaoDao._delete({id});
        console.log(negociacao);
        res.json(negociacao);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

export default {create,list,update,_delete};