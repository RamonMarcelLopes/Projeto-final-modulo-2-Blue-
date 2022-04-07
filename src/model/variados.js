import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

 export const variados = connection.define('variados',{
       
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
       },
       nome: {
        type: Sequelize.STRING,
        allowNull: false,
       
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false,
        
    },
       img: {
        type: Sequelize.STRING,
        allowNull: false,
        },
        
        descricao: {
            type: Sequelize.STRING,
            allowNull: false,
           
        },

        diretores: {
        type: Sequelize.STRING,
        allowNull: false,

       },
       
       iframe: {
        type: Sequelize.STRING,
        allowNull: false,

       },

    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
        timestamps: false
    }
)
// const initTable = async () => {
//     await filmes.sync()
// }

// talvez nao precisa  
/*
initTable()

*/
