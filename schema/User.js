const { Schema, model } = require("mongoose");

const User = new Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
    autoIndex: true,
  }
);
// async generateAuthToken() {
//   if (!process.env.INVESTOR_SECRET_KEY?.length) {
//     throw new Error('INVESTOR_SECRET_KEY env var is not defined.');
//   }
//   const { _id, email } = this;
//   return jwt.sign(
//     {
//       _id: _id.toString(),
//       email,
//     },
//     process.env.INVESTOR_SECRET_KEY,
//     {
//       expiresIn: '24h',
//     },
//   );
// }
module.exports = model("user", User, "user");
