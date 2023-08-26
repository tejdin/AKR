const ServiceService = require('../service/ServiceService');

class ServiceControlleur {

    static async createService(req, res) {
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const image = req.body.image;

        try {
            const newService = await ServiceService.createService(name, description, price, image);
            res.json(newService);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async updateService(req, res) {
        const id = req.params.id;
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const image = req.body.image;

        try {
            const updatedService = await ServiceService.updateService(id, name, description, price, image);
            res.json(updatedService);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async deleteService(req, res) {
        const id = req.params.id;

        try {
            const service = await ServiceService.deleteService(id);
            res.json(service);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async getAllServices(req, res) {
        try {
            const services = await ServiceService.getAllServices();
            res.json(services);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async getServiceById(req, res) {
        const id = req.params.id;

        try {
            const service = await ServiceService.getServiceById(id);
            res.json(service);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async createSubService(req, res) {
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const image = req.body.image;
        const parentId = req.params.id;
        console.log(parentId);

        try {
            const newService = await ServiceService.createSubService(name, description, price, image, parentId);
            res.json(newService);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async updateSubService(req, res) {
        const id = req.params.id;
        const name = req.body.name;
        const description = req.body.description;
        const price = req
    }

    static async getAllSubServices(req, res) {
        try {
            const services = await ServiceService.findSubServicesByParentId(req.params.id);
            res.json(services);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async getSubServiceById(req, res) {
        const id = req.params.id;

        try {
            const service = await ServiceService.getSubServiceById(id);
            res.json(service);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    static async getSubServicesByParentId(req, res) {
        const parentId = req.params.parentId;

        try {
            const services = await ServiceService.findSubServicesByParentId(parentId);
            res.json(services);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
    static async deleteSubService(req, res) {
        const id = req.params.subid;


        try {
            const service = await ServiceService.deleteSubService(id);
            res.json(service);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
}
module.exports = ServiceControlleur;