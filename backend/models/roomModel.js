import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const {DataTypes} = Sequelize;

const Room = db.define('room', {
    kode: {
        type: DataTypes.STRING
    },
    tipe: {
        type: DataTypes.STRING
    }, 
    fasilitas: {
        type: DataTypes.STRING
    },
    ukuran: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    }
}, {
    freezeTableName: true
});

export default Room;

// (async() => {
//     await db.sync({ alter: true })
// })();

