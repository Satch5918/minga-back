import { Comic } from "../models/Comic.js";
import defaultResponse from "../config/response.js";
import { User } from '../models/User.js'

const controllers = {
    read: async (req,res) => {
        try{
            let comics = Comic.findById(id).populate("company_id").populate("author_id")
            if (comics){
                res.status(200).json({
                success:true,
                response: comics
                })
            }else {
                res.status(404).json({
                    success: false,
                    response: 'not found'
                })
            }
        }catch(error){
            console.log(error)
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
            response: "update",
            update_comic: comic
          });
        } catch (error) {
          console.log(error);
        }
      },
      destroy: async (req, res) => {
        try {
          const { id } = req.params;
          await Comic.findByIdAndDelete(
            { _id: id }
        );
          res.status(200).json({
            success: true,
            response: "deleted",
          });
        } catch (error) {
          console.log(error);
        }
      },
}

export default controllers