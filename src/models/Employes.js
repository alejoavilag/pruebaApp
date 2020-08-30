import Sequelize from 'sequelize'
import { sequelize } from '../database/database'


const Employes = sequelize.define('employes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    fullname: {
       type: Sequelize.TEXT 
    },
    idjefe: {
        type: Sequelize.INTEGER 
     },
    cargo:  {
        type: Sequelize.TEXT 
     },
    isboss: {
        type: Sequelize.BOOLEAN
     },
}, {
    timestamps: false
})

//Project.hasMany(Task,{ foreingKey: 'projectid', sourceKey: 'id' })
//Task.belongsTo(Project,{ foreingKey: 'projectid', sourceKey: 'id' })

export default Employes