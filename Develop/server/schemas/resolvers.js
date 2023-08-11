const { Books, User } = require("../models");
// const jwt = require("jsonwebtoken");

const resolvers = {
  Query: {
    me: async () => {
      return User.find({});
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("User not found");
        }
        const validPassword = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }
        const token = jwt.sign({ userId: user._id }, "your-secret-key", {
          expiresIn: "expires soon",
        });
        return {
          token,
          user,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },

    addUser: async (_, { email, username, password }) => {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error("User is already in system");
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const addUser = await User.create({
          username,
          email,
          password: hashedPassword,
        });

        const token = jwt.sign({ userId: newUser._id }, "secret-key", {
          expiresIn: "expires soon",
        });

        return {
          token,
          user: addUser,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    saveBook: async (_, { Books }, bookSchema) => {
      try {
        const User = await User.findById(bookSchema.user.userId);

        if (!User) {
          throw new Error("User not found");
        }

        User.savedBooks.push(Books);
        const updatedUser = await User.save();

        return updatedUser;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    removeBook: async (_, { bookId }, bookSchema) => {
      try {
        const User = await User.findById(bookSchema.user.userId);

        if (!User) {
          throw new Error("User not found");
        }
        User.savedBooks = User.savedBooks.filter(
          (book) => book.bookId !== bookId
        );

        const updatedUser = await User.save();

        return updatedUser;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  },
};

module.exports = resolvers;
