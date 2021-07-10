import PesoDiaDAO from '../DAO/pesoDiaDAO';
import {Between, FindOperator} from 'typeorm';


interface FindByRangeOfDays{
    initialDay:Date;
    finalDay:Date;
    idGado:number
}

interface where{
    dia:FindOperator<Date>;
    idGado:number
}


 class PesoDiaRepository{
    
    
    
    async findByRangeOfDays({initialDay,finalDay,idGado}:FindByRangeOfDays){
        const pesoDiaDao = new PesoDiaDAO()
        return await pesoDiaDao.find<where>({
            idGado,
            dia:Between(new Date(initialDay),new Date(finalDay))
        })


    }
}
export default PesoDiaRepository;