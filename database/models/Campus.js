/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require("sequelize"); // Import Sequelize
const db = require("../db"); // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define(
  "campus",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    description: {
      type: Sequelize.STRING,
    },

    imageURL: {
      type: Sequelize.STRING,
      defaultValue:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
    },
  },
  {
    hooks: {
      beforeValidate: (campus) => {
        if (campus.imageURL === null) {
          campus.imageURL = campus.rawAttributes.imageURL.defaultValue;
        }
      },
    },
  }
);

// Export the campus model
module.exports = Campus;
