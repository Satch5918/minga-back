import { Comic } from "../models/Comic.js";
import defaultResponse from "../config/response.js";

const controller = {
    read: async (req, res, next) => {
        console.log(req.query);
        let consultasParaFiltrar = {};
        let ordenamiento = {};
        let paginacion = {
            page: 1,
            limit: 10,
        };
        if (req.query.sort) {
            ordenamiento = {title: req.query.sort};
        }
        if (req.query.title) {
            consultasParaFiltrar.title = req.query.title.split(",");
            consultasParaFiltrar.title = {
                $regex: req.query.title,
                $options: "i",
            };
        }
        if (req.query.category_id) {
            consultasParaFiltrar.category_id = req.query.category_id;
        }
        
        if (req.query.page) {
            paginacion.page = req.query.page;
        }
        if (req.query.limit) {
            paginacion.limit = req.query.limit;
        }
        try {
            let all = await Comic.find(consultasParaFiltrar)
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
