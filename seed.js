const connection = require('./config/connection');
const { User, Thought } = require('./models');
const mongoose = require('mongoose');

const seedUsers = async () => {
    await mongoose.connection.dropDatabase();

    const users = [
        {
            username: 'Trey',
            email: 'trey@example.com',
            thoughts: [],
            friends:[],
        },
        {
            username: 'Bob',
            email: 'bob@example.com',
            thoughts: [],
            friends: [],
        },
        {
            username: 'Jane',
            email: 'jane@example.com',
            thoughts: [],
            friends: [],
        },
    ];

    try {
        await User.insertMany(users);
        console.log('Users seeded in database');
    } catch (err) {
        console.error('error seeding users:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedUsers();