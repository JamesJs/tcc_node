import PesoDiaDao from '../DAO/pesoDiaDAO';
import express from 'express';
import PesoDiaRepository from '../repositories/pesoDiaRepository'

    const pesoDiaDao:PesoDiaDao = new PesoDiaDao();
    const create = (async (req:express.Request,res:express.Response)=>{
        const {dia,ganhoPeso,idGado} = req.body;
        try{
        
        
        const pesoDia = await pesoDiaDao.create({dia,ganhoPeso,idGado});
        res.json({pesoDia});
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const list = (async (req:express.Request,res:express.Response)=>{
        try{
        
  
        const funcoes = await pesoDiaDao.list();
        console.log(funcoes);
        res.json(funcoes);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const update = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        const {dia,ganhoPeso,idGado} = req.body;
        try{
              
     
        const pesoDia = await pesoDiaDao.update({id,dia,ganhoPeso,idGado});
        console.log(pesoDia);
        res.json(pesoDia);
        }
        catch(err){
          
            res.status(500).json({error:err.message})
        }    
    })
    const _delete = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        try{
              
    
        const pesoDia = await pesoDiaDao._delete({id});
        console.log(pesoDia);
        res.json(pesoDia);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })
    
    const findByRangeDates = (async (req:express.Request,res:express.Response)=>{
        console.log(req.body);
        const {initialDay,finalDay,idGado} = req.body;
        const pesoDiaRepository = new PesoDiaRepository();
        try{
              
    
        const pesoDia = await pesoDiaRepository.findByRangeOfDays({initialDay,finalDay,idGado});
        console.log(pesoDia);
        res.json(pesoDia);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

export default {create,list,update,_delete,findByRangeDates};