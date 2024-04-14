import mongoose from "mongoose";

/**
 * User Model
 * 
 * This module defines the User model schema using Mongoose.
 * 
 * Schema Fields:
 * - auth0Id: String, required field for Auth0 user ID.
 * - email: String, required field for user email.
 * - name: String, required field for user name.
 * - hostel: String, required field for user's hostel.
 * - PhoneNumber: Number, required field for user's phone number.
 * 
 * Dependencies:
 * - mongoose: Library for MongoDB object modeling designed to work in an asynchronous environment.
 * 
 * @returns {Mongoose.Model} User model
 */

const userSchema = new mongoose.Schema({
	auth0Id: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	name: {
		type: String,
		require: true,
	},
	hostel: {
		type: String,
		require: true,
	},
	PhoneNumber: {
		type: Number,
		require: true,
	},
});

const User = mongoose.model("User", userSchema);

export default User;