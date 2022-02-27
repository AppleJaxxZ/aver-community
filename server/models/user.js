const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validateDate, validatePassword } = require('./utils')
require("dotenv").config();


const customPasswordValidator = [validatePassword, " Password must contain:  6 or more characters, 1 capital, 1 lower case, and one special character"];
const customDateValidator = [validateDate, "Please enter a validate date of birth in mm/dd/yyy format including the slashes."];
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error(
                        "Email is invalid.  Please enter a valid email address."

                    );
                }
            },
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minLength: 6,
            validate: customPasswordValidator,
        },
        pinNumber: {
            type: String,
            required: true,
            minlength: 7,
            maxLength: 7,
        },
        dateOfBirth: {
            type: String,
            required: true,
            minlength: 10,
            maxLength: 10,
            validate: customDateValidator,
        },
        phoneNumber: {
            type: String,
            required: [true, "User phone number required"],
            minLength: 11,
            maxLength: 11
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);



//behind the scene this works because res.send is calling stringify on our data.  so this method attatches
//to that response call and hides the password and tokens from our users endpoint
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;
    delete userObject.avatar;

    return userObject;
};

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_TOKEN);

    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Unable to login.");
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Unable to login.");
    }
    return user;
};

//Hash the plain text password before saving.
userSchema.pre("save", async function (next) {
    const user = this;

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

//User Model
const User = mongoose.model("User", userSchema);

module.exports = User;