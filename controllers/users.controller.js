import { User } from '../models/User.js'
import accountVerificationMail from "../config/accountVerfificationMail.js";
import bcryptjs from 'bcryptjs' //modulo para hashear la contraseña
import crypto from 'crypto' //modulo para generar codigos aleatorios
import jwt from 'jsonwebtoken' //modulo para utilizar los metodos de jwt
import defaultResponse from '../config/response.js'




const controller = {

    signup: async (req, res, next) => {

        const user = {
            mail: req.body.mail,
            password: req.body.password,
            photo: req.body.photo,
            is_online: false,
            is_admin: false,
            is_author: false,
            is_company: false,
            is_verified: false,
            verify_code: crypto.randomBytes(10).toString("hex"),
            password: bcryptjs.hashSync(req.body.password, 10),
          };
          try {

            await accountVerificationMail(user, res);
            await User.create(user); //crea el usuari
            req.body.success = true;
            req.body.sc = 201; //agrego el codigo de estado
            req.body.data = "User created!";
            return defaultResponse(req, res);
          } catch (error) {
            next(error);
          }
        },

        veryfy:  async(req,res,next) => {
            const  {verify_Code}  = req.params
              try {
        
               const user =  await User.findOneAndUpdate({ "verify_code" : verify_Code },{ is_verified: true })
            console.log(user)
        
                req.body.success = true
                req.body.sc = 200
                req.body.data = "User successfully verified!!!"
                return defaultResponse(req, res);
            } catch (error) {
              next(error)
            }
          },
      


    signin: async (req, res, next) => {
        let { password } = req.body
        let { user } = req
        try {
            const verified = bcryptjs.compareSync(password, user.password) //comparo contraseña
            if(verified) {
                await User.findOneAndUpdate( //busco y actualizo
                    { mail: user.mail }, //parametro de busqueda
                    { is_online: true }, //parametro a modificar
                    { new: true } //especificacion que reemplace el documento de origen
                )
                // parte de procesamiento de token
                let token = jwt.sign( //creo la firma de jwt, a traves de un metodo sign, de la libreria json web token, genero un token unicamente con el id, en este objeto podria poner otros datos por ejemplo la foto, en la linea de abajo ejem { id: user.id, pohoto: user.photo } entonces genera un token con esta info encriptada, al des encriptarla me trae estos datos.
                // este metodo sign requiere 3 parametros
                    { id: user.id }, //parametro a convertir en token. 1.objeto que quiero encriptar.
                    process.env.KEY_JWT, //parámetro secreto, necesario para la conversion 2.la llave que hace el proceso de encriptado y des encriptado esta en el env, no se recomienda cambiar esta llave ni aca ni en el env.
                    { expiresIn: 60*60*24 } //tiempo de expiracion en segundos 3. es el tiempo de expiracion.
                )
                //console.log(token)
                user = { //protejo mas datos sensibles
                    mail: user.mail,
                    photo: user.photo
                }
                req.body.success = true
                req.body.sc = 200
                req.body.data = { user,token }
                return defaultResponse(req,res)
            }
                req.body.success = false
                req.body.sc = 400
                req.body.data = 'invalid credentials'                
            return defaultResponse(req,res)
        } catch (error) {
            next(error) //respuesta del catch
        }
    },

    signintoken: async (req, res, next) => {
        let { user } = req
        try {
            req.body.success = true
            req.body.sc = 200
            req.body.data = { user }
            return defaultResponse(req,res)
        } catch (error) {
            next(error)
        }
    },

    signout: async (req, res, next) => {
        const { mail } = req.user
        try {
            //si tiene éxito debe cambiar online de true a false
            await User.findOneAndUpdate(
                { mail }, //parametro de busqueda
                { is_online: false }, //parametro a modificar
                { new: true } //especificacion que reemplace el documento de origen

            )
            req.body.success = true
            req.body.sc = 200
            req.body.data = 'come back soon!'
            return defaultResponse(req,res)
        } catch (error) {
            next(error)
        }
    },

    read: async(req,res,next) => {
        try {
            let all = await User.find()
            if (all) {
                req.body.success = true
                req.body.sc = 200
                req.body.data = { all }
                return defaultResponse(req,res)
            } else {
                req.body.success = false
                req.body.sc = 404
                req.body.data = 'no users yet'
                return defaultResponse(req,res)
            }            
        } catch(error) {
            next(error)
        }        
    }

}

export default controller