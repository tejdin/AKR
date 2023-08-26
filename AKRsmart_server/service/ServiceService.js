const db = require('../models');

class ServiceService {

        static async createService(name, description, price, image) {
            const service = await db.Service.create({
                name: name,
                description: description,
                type: 'Service',
                parentId: null,
                price: price,
                image: image

            });
            return service;
        }

       static async updateService(id, name, description, price, image) {
            const service = await db.Service.findByPk(id);
            if (!service) {
                throw new Error("Service not found");
            }
            if (name) service.name = name;
            else service.name = service.name;
            if (description) service.description = description;
            else service.description = service.description;
            if (price) service.price = price;
            else service.price = service.price;
            if (image) service.image = image;
            else service.image = service.image;
            await service.save();
            return service;

        }

       static async deleteService(id) {
            const service = await db.Service.findByPk(id);
            if (!service) {
                throw new Error("Service not found");
            }
            await service.destroy();
            return service;
        }


         static async getAllServices() {
            // Sauf les sous services
            const services = await db.Service.findAll({ where: { type: 'Service' } });
            return services;
        }

       static async getServiceById(id) {
            const service = await db.Service.findByPk(id);
            if (!service) {
                throw new Error("Service not found");
            }
            return service;
        }

        static async createSubService(name, description, price, image, parentId) {
           console.log(parentId);
            const service = await db.Service.create({
                name: name,
                description: description,
                type: 'SubService',
                parentId: parentId,
                price: price,
                image: image
            });
            return service;
        }

        static async updateSubService(id, name, description, price, image) {
            const service = await db.Service.findByPk(id);
            if (!service) {
                throw new Error("Service not found");
            }
            if (name) service.name = name;
            else service.name = service.name;
            if (description) service.description = description;
            else service.description = service.description;
            if (price) service.price = price;
            else service.price = service.price;
            if (image) service.image = image;
            else service.image = service.image;
            await service.save();
            return service;

        }

        static async deleteSubService(id) {
            const service = await db.Service.findByPk(id);
            if (!service) {
                throw new Error("Service not found");
            }
            await service.destroy();
            return service;
        }


        static async findSubServicesByParentId(parentId) {
            console.log(parentId);
            const services = await db.Service.findAll({ where: { parentId: parentId } });
            return services;

        }








}

module.exports =  ServiceService;