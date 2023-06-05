const { User } = require('../models');

const userData =
    [
        {
            name: "Mia",
            email: "miamreid@gmail.com",
            password: "password"
        },
        {
            name: "Sabrina",
            email: "sabrina@gmail.com",
            password: "password"
        },
        {
            name: "Sal",
            email: "sal@hotmail.com",
            password: "password"
        },
        {
            name: "Adam",
            email: "adam@gmail.com",
            password: "password"
        },
    ];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;