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
        email: "sabrinalpz1994@gmail.com",
        password: "password1234"
    },
    {
        name: "Sal",
        email: "sal@hotmail.com",
        password: "password"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;