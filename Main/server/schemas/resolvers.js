
//const Item = require('../models/Item');

const User = require('../models/User');

const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error('Failed to fetch users');
      }
    },
  },
  Mutation: {
    createUser: async (_, { username, pin }) => {
      try {
        const newUser = new User({ username, pin });
        await newUser.save();
        return newUser;
      } catch (error) {
        throw new Error('Failed to create user');
      }
    },
  },
};

module.exports = resolvers;