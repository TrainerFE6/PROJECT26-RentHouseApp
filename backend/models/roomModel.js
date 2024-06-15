import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Room = db.define(
  "room",
  {
    kode: {
      type: DataTypes.STRING,
    },
    tipe: {
      type: DataTypes.STRING,
    },
    fasilitas: {
      type: DataTypes.STRING,
    },
    ukuran: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Room;
