import { Comic } from "../models/Comic.js";
import defaultResponse from "../config/response.js";
import { Category } from '../models/Category.js'

const controller = {
    read: async (req, res, next) => {
        console.log(req.query);
        let consultasParaFiltrar = {};
        let ordenamiento = {title: 'asc'};
        let paginacion = {
            page: 1,
            limit: 34,

        };
        if (req.query.sort) {
            ordenamiento = {title: req.query.sort};
        }
        if (req.query.title) {
            
            consultasParaFiltrar.title = {
                "$regex": req.query.title,
                $options: "i",
            };
        }
        if (req.query.category) {
            consultasParaFiltrar.category = req.query.category.split(",");
        }
        
        if (req.query.page) {
            paginacion.page = req.query.page;
        }
        if (req.query.limit) {
            paginacion.limit = req.query.limit;
        }
        try {
            let all = await Comic.find(consultasParaFiltrar).populate('category')
                .sort(ordenamiento)
                .skip(paginacion.page > 0 ? (paginacion.page - 1) * paginacion.limit: 0
                )
                .limit(paginacion.limit);

            if (all) {
                req.body.success = true;
                req.body.sc = 200;
                req.body.data = all;
                return defaultResponse(req, res);
            } else {
                req.body.success = false;
                req.body.data = "not found";
                return defaultResponse(req, res);
            }
        } catch (error) {
            next(error);
        }
    },
};

export default controller;
