import  {Comment}  from '../models/Comment.js'


const controller = {
  create: async(req,res, next)=> { 
      try {
          // aca nunca deberiamos pedir el id del usuario, el usuario lo debemos mostrar con req.user, este req. user trae los datos que le dijimos en passport que enchufara a un usuario registrado, esto llega por que en la ruta de comments agregamos el middleware que se encarga de autentificar el usuario, a traves del metodo autenthicate que se aplica a passport, en passport es en donde configuramos que datos se le enchufan al usuario.entonces saco user_id
          const { chapter_id,text,commentable_id } = req.body
          await Comment.create({ chapter_id,
          // esta propiedad ahora la mando por passport, viene del req que se inyecta por passport. user:id, recordar que entonces debo sacar la validacion por joi  de este valor
          user_id : req.user.id,
          text,
          commentable_id })
       
          res.status(201).json({
              success: true,
              response: 'done',
          })
      } catch(error) {
          next(error)
      }
  }
}
export default controller

/* const controller = {
  create: async (req, res) => {

  },
  read: async (req, res) => {},
  one : async (req, res) => {},
  update: async (req, res) => {},
  destroy: async (req, res) => {},

  
}

export default controller */