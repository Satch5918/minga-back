import { Comic } from "../models/Comic.js";
import defaultResponse from "../config/response.js";

const controller = {
  create: async (req, res, next) => {
    try {
      let comic = await Comic.create(req.body);
      req.body.success = true;
      req.body.sc = 201;
      req.body.data = "comic created";
      return defaultResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  //en el req el usuario me tiene que enviar el Id de ese comic que quiere actualizar
  update: async (req, res) => {
    try {
      const { id } = req.params;
      let comic = await Comic.findByIdAndUpdate(
        { _id: id }, //necesario para encontrar el obj a modificar
        req.body, // el objeto con las modificaciones
        { new: true } //objeto que en true habilida la modificaciones reemplazando el doc.
      );
      res.status(200).json({
        success: true,
        response: "deleted",
      });
    } catch (error) {
      console.log(error);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      await Comic.findByIdAndDelete(id);
      res.status(200).json({});
    } catch (error) {
      console.log(error);
    }
  },
};

export default controller;
/* 
get_comics_from_cia: async (req, res, next) => {
    let filterByProfile = {}
    let orderByDate = {}
    let pagination = {
        limit: 5
    }
    if (req.query.company_id) {
        filterByProfile.company_id = req.query.company_id
    }
    if (req.query.category_id) {
        filterByProfile.category_id = req.query.category_id
    }
    if (req.query.limit) {
        pagination.limit = req.query.limit
    }
    if (orderByDate) {
        orderByDate = { createdAt: "1" }
    }
    try {
        let comics = await Comic.find(filterByProfile, "-author_id -company_id -createdAt -updatedAt -__v")
            .sort(orderByDate)
            .limit(pagination.limit)
        if (comics.length === 0) {
            res.status(404).json({
                success: false,
                message: "No comics found matching the filters",
            })
        } else {
            res.status(200).json({
                success: true,
                response: comics,
                message: "Comics found"
            })
        }
    } catch (error) {
        next(error)
    } 
},


get_comics_from_author: async (req, res, next) => {
    try {
        const query = {}

        const order = {
                createdAt: 'desc'
            }
        let comicsLength = 0;
        
        if (req.query.author_id) {
            query.author_id = req.query.author_id
            const comicsPerAuthor = await Comic.countDocuments({ author_id: req.query.author_id });
            comicsLength = comicsPerAuthor
            console.log(comicsLength)
        }

        if (req.query.new === 'false') {
            order.createdAt = 'asc'
        }

        const comics = await Comic.find(query)
                .sort(order)
                .limit(comicsLength < 4 ? 0 : Math.round(comicsLength / 2))
        res.status(201).json({
            success: true,
            response: comics,
        })
    } catch (error) {
        next(error)
    }
}
} 

get_comic: async (req, res, next) => {
        try{
            const {id} = req.params
            let comic = await Comic.findById(id, '-author_id -_id -company_id')
            if (comic){
                res.status(200).json({
                    success: true,
                    response: comic
                })
            }else{
                res.status(404).json({
                    success: false,
                    response: "comic not found"
                })
            }
        }
        catch(error){
            next(error)
        }
    }
*/
