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


export default Employes