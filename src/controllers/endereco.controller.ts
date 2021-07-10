import EnderecoDao from '../DAO/enderecoDAO';
import express from 'express';
    

/* 	#swagger.tags = ['User']
        #swagger.description = 'Lista as fazendas disponíveis' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'User information.',
            required: true,
      
    } */


    /* #swagger.security = [{
            "apiKeyAuth": ['JWT']
    }] */
    const enderecoDao:EnderecoDao = new EnderecoDao();
    const create = (async (req:express.Request,res:express.Response)=>{
        const {CEP,bairro,cidade,complemento,estado,numero} = req.body;
        try{
        
        
        const endereco = await enderecoDao.create({CEP,bairro,cidade,complemento,estado,numero});
        res.json({endereco});
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const list = (async (req:express.Request,res:express.Response)=>{
        try{
        
        
        const enderecos = await enderecoDao.list();
        console.log(enderecos);
        res.json(enderecos);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

    const update = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        const {CEP,bairro,cidade,complemento,estado,numero} = req.body;
        try{
              
        
        const endereco = await enderecoDao.update({CEP,bairro,cidade,complemento,estado,numero,id});
        console.log(endereco);
        res.json(endereco);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })
    const _delete = (async (req:express.Request,res:express.Response)=>{
        const {id} = req.params;
        try{
              
        
        const endereco = await enderecoDao._delete({id});
        console.log(endereco);
        res.json(endereco);
        }
        catch(err){
            res.status(500).json({error:err.message})
        }    
    })

export default {create,list,update,_delete};