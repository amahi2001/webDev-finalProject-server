/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require("sequelize"); // Import Sequelize
const db = require("../db"); // Import Sequelize database instance called "db"

const Student = db.define(
  "student",
  {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    GPA: {
      type: Sequelize.DECIMAL(4, 2),
      validate: {
        isGpaValid(value) {
          if (value != null && (value < 0 || value > 4)) {
            throw new Error("GPA must be between 0 and 4");
          }
        },
      },
      defaultValue: null,
    },

    imageURL: {
      type: Sequelize.STRING,
      defaultValue:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
    },
  },

  {
    hooks: {
      beforeValidate: (student) => {
        if (student.imageURL === null) {
          student.imageURL = Student.rawAttributes.imageURL.defaultValue;
        }
      },
    },
  }
);

// Export the student model
module.exports = Student;
