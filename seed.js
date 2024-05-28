const connection = require('./config/connection');
const { User, Thought } = require('./models');
const mongoose = require('mongoose');

const seedUsers = async () => {
    await mongoose.connection.dropDatabase();

    const thoughts = [
        {
            thoughtText: 'I have a thought',
            username: 'Trey',
        },
        {
            thoughtText: 'I have a very interesting thought',
            username: 'Bob',
        },
        {
            thoughtText: 'I have the most interesting thought',
            username: 'Jane',
        },
    ]

    const createdThoughts = await Thought.insertMany(thoughts);

    const users = [
        {
            username: 'Trey',
            email: 'trey@example.com',
            thoughts: [createdThoughts[0]._id],
            friends:[],
        },
        {
            username: 'Bob',
            email: 'bob@example.com',
            thoughts: [createdThoughts[1]._id],
            friends: [],
        },
        {
            username: 'Jane',
            email: 'jane@example.com',
            thoughts: [createdThoughts[2]._id],
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