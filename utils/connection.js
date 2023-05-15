import {Sequelize} from 'sequelize'
import { config } from 'dotenv';

config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});
    
const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

(async () => {
    await sequelize.sync();
    // Code here
})();

export {sequelize,connect}
