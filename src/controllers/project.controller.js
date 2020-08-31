import { Employes } from '../models/Employes'


export async function createEmploye(req, res) {
    const { id, fullname, cargo, isboss, idjefe} = req.body
    try{
        let newEmploye = await Employes.create({
            id,
            fullname,
            cargo,
            isboss,
            idjefe
        },
        {
            fields: ['id', 'fullname', 'cargo', 'isboss', 'idjefe']
        })
        if (newEmploye){
            return res.json({
                message: 'Employe create successfull',
                data: newEmploye
            })
        }
    } catch(e){
        console.log(e)
        res.status(500).json({
            message: 'Algo salio mal :(',
            data: {}
        })
    }
}

export async function getEmployes(req, res) {
    try{
        const employes = await Employes.findAll()
        res.json({
            data: employes
        })
    } catch(e){
        console.log(e)
    }
}

export async function getOneEmploye(req, res) {
    try{
        const { id } = req.params
        const employe = await Employes.findOne({
            where: {
                id
            }
        })
        res.json({
            data: employe
        })
    }catch(e){
        console.log(e)
    }
}

export async function deleteEmploye(req, res){
    try{
        const { id } = req.params
        const deleteRowCount = await Employes.destroy({
            where: {
                id
            }
        })
        res.json({
            massage: 'Employe deleted successfull',
            count: deleteRowCount
        })
    }catch(e){
        console.log(e)
    }
    
}

export async function updateEmploye(req, res){
    try{
        const { id } = req.params
        const { fullname, cargo, isboss, idjefe} = req.body
        const employes = await Employes.findAll({
            attributes: [ 'id', 'fullname', 'cargo', 'isboss', 'idjefe'],
            where: {
                id
            }
        })
        if(employes.length > 0){
            employes.forEach(async employe => {
                await employe.update({
                    fullname,
                    cargo,
                    isboss,
                    idjefe
                })
            })
        }
        return res.json({
            message:'employe update succesfull',
            data: employes
        })
    }catch(e){
        console.log(e)
    }    
}