/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
  }
});

// Export the student model
module.exports = Student;