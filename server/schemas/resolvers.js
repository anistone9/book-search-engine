const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils.auth');

// TODO! for Query part:
// is this correct, to look up a user by either id or username, based on user-controller?
// do we need to user the Book model at all here? it is not exported in index
const resolvers = {
    Query: {
        user: async (parent, { _id, username }) => {
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
        // TODO! needs rewritten
        saveBook: async (parent, { body }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedbooks: body } },
                    { new: true, runValidators: true }
                );
            }
        },
        // TODO! needs rewritten
        deleteBook: async (parent, { params }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: params.bookId } } },
                    { new: true }
                );
            }
        },
    },
};

module.exports = resolvers;