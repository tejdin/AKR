const userServices = require('../service/UserService');


class UserControlleur {

    static async login(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        try {
            const user = await userServices.login(email, password);
            res.json(user);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async register(req, res) {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;

        try {
            const newUser = await userServices.register(firstName, lastName, email, password);
            res.json(newUser);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async update(req, res) {
        const id = req.params.id;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;

        try {
            const updatedUser = await userServices.update(id, firstName, lastName, email, password);
            res.json(updatedUser);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async delete(req, res) {
        const id = req.params.id;

        try {
            const user = await userServices.delete(id);
            res.json(user);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async getOne(req, res) {
        const id = req.params.id;

        try {
            const user = await userServices.getOne(id);
            res.json(user);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async getAll(req, res) {
        try {
            const users = await userServices.getAll();
            res.json(users);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
}

module.exports = UserControlleur;