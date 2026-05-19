import sequelize from "../config/rom.js";
import { DataTypes } from "sequelize";

const Curso = sequelize.define('Curso', {

    idCurso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    cod: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    curso: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            len: [50]
        }
    },

    ch: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    tipo: {
        type: DataTypes.STRING(50),
        allowNull: false
    }

}, {

    tableName: 'cursos',
    timestamps: false,
    charset: 'utf8'

});

export default Curso;