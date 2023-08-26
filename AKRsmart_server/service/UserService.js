
const db = require('../models');
const bcrypt = require('bcrypt');
const e = require("express");

class UserService {
    //login, register, update, delete, getOne, getAll
  static async login(email, password) {
      console.log(email);

        const user = await db.User.findOne({ where: { email: email } });
        if (!user) {
            throw new Error('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Incorrect password');
        }
        return user;

    }
   static async register(firstName, lastName, email, password) {

        console.log(email)
        const user = await db.User.findOne({ where: { email: email } });
        if (user) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // 3. create the user
        const newUser = await db.User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword
        });
        return newUser;
    }

    static async update(id, firstName, lastName, email, password) {
        // 1. check if user exists
        const user = await db.User.findOne({ where: { id: id } });
        if (!user) {
            throw new Error('User not found');
        }
        // 2. hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // 3. update the user
        if (firstName) {
            user.firstName = firstName;
        }
        else {
            user.firstName = user.firstName;
        }
        if (lastName) {
            user.lastName = lastName;
        }
        else {
            user.lastName = user.lastName;
        }
        if (email) {
            user.email = email;
        }
        else {
            user.email = user.email;
        }
        if (password) {
            user.password = hashedPassword;
        }
        else {
            user.password = user.password;
        }
        await user.save();
        return user;

    }
    static async delete(id) {

        const user = await db.User.findOne({ where: { id: id } });
        if (!user) {
            throw new Error('User not found');
        }

        const deletedUser = await db.User.destroy({ where: { id: id } });
        return deletedUser;

    }
   static async getOne(id) {

        const user = await db.User.findOne({ where: { id: id } });
        if (!user) {
            throw new Error('User not found');
        }

        return user;

    }
    static async  getAll() {

        const users = await db.User.findAll();
        return users;

    }
}

module.exports = UserService;