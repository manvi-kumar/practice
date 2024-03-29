const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email' ],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
      type: String,
      required: [true, 'Please enter an password' ],
      minlength: [6, 'Minimum password length is 6 characters']
    },
});

// fire a function after doc saved to db
userSchema.post('save', function (doc, next) {
  console.log('new user was created & saved', doc);
  next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;