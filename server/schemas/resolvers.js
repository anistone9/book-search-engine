const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

// TODO! for Query part:
// is this correct, to look up a user by either id or username, based on user-controller?
const resolvers = {
    Query: {
        me: async (parent, { _id, username }) => {
            const id = _id ? { _id } : {};
            return User.findOne({ id, username });
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }

            const token = signToken(user);

            return { token, user };
        },

        saveBook: async (parent, { bookData }, context) => {
            if (context.user) {
                console.log(bookData)
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: bookData } },
                    { new: true, runValidators: true }
                );
            }
        },

        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true }
                );
            }
        },
    },
};

module.exports = resolvers;