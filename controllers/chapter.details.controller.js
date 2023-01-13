import { Chapter } from "../models/Chapter.js";

const controllerDetails = {

    get_comics_order: async(req,res,next)=>{
        let consulta = {};
        let ordenamiento = { order: "asc" };
        if (req.query.comic_id) {
          consulta.comic_id = req.query.comic_id;
        }
        if (req.query.page) {
          paginacion.pages = req.query.page;
        }
        if (req.query.sort) {
          ordenamiento = { order: req.query.sort };
        }
       if (req.query.order){
            consulta.order = parseInt (req.query.order);
        } 
        try {
            console.log(consulta);
          const chapters = await Chapter.find(consulta, "-_id")
            .sort(ordenamiento)
            console.log(chapters);
          res.status(201).json({
            succes: true,
            response: chapters,
          });
        } catch (error) {
          console.log(error);
        }
    },
  get_comics_chapters: async (req, res, next) => {
    let consulta = {};
    let ordenamiento = { order: "asc" };
    let paginacion = {
      pages: 1,
      limit: 5,
    };
    if (req.query.comic_id) {
      consulta.comic_id = req.query.comic_id;
    }
    if (req.query.page) {
      paginacion.pages = req.query.page;
    }
    if (req.query.limit) {
      paginacion.limit = req.query.limit;
    }
    if (req.query.sort) {
      ordenamiento = { order: req.query.sort };
    }
    if (req.query.order){
        consulta.order = req.query.order;
    }
    try {
      const chapters = await Chapter.find(consulta, "-_id")
        .sort(ordenamiento)
        .skip(
          paginacion.pages > 0 ? (paginacion.pages - 1) * paginacion.limit : 0
        )
        .limit(paginacion.limit);
      res.status(201).json({
        succes: true,
        response: chapters,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default controllerDetails;