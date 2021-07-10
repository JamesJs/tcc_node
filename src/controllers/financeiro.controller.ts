import FinanceiroDao from '../DAO/financeiroDAO';
import express from 'express';

    const financeiroDao:FinanceiroDao = new FinanceiroDao();
    const create = (async (req:express.Request,res:express.Response)=>{
        const {idFazenda} = req.body;
        try{
        
        
        const financeiro = await financeiroDao.create({idFazenda});
        
        res.json({financeiro});
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const list = (async (req:express.Request,res:express.Response)=>{
        try{
        
       
        const financeiro = await financeiroDao.list();
        console.log(financeiro);
        res.json(financeiro);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const update = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        const {idFazenda} = req.body;
        try{
              
      
        const financeiro = await financeiroDao.update({idFazenda,id});
        console.log(financeiro);
        res.json(financeiro);
        }
        catch(err){
          
            res.status(500).json({error:err.message})
        }    
    })
    const _delete = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        try{
              
      
        const financeiro = await financeiroDao._delete({id});
        console.log(financeiro);
        res.json(financeiro);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

export default {create,list,update,_delete};