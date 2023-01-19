import passport from 'passport'
import passportJwt from 'passport-jwt'
import { User } from '../models/User.js'
const { KEY_JWT } = process.env

passport.use(
    new passportJwt.Strategy( //definimos la estrategia de extraccion de jwt
        {
            jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(), // de tipo bearer, aca des encriptamos gracias a la clave jwt
            secretOrKey: KEY_JWT //con la clave secreta
        }, //la estrategia devuelve la extraccion en un objeto: jwt_payload
        async (jwt_payload,done) => {
            //console.log(jwt_payload)
            try {
                let user = await User.findOne({ _id:jwt_payload.id }) //buscamos el usuario, cuando se des encripta, nos retorna el id del usuario, hagarro el id y busco el usuario que le corresponde, si ese usuario existe, enchufale todos los proximos datos.
                if (user) {
                    user = { //este es el objeto user que se "inyecta" al req
                        //aqui es donde protejo los datos del usuario.

                        id: user._id,
                        // esta propiedad id se la agregamos para que en la estrategia de passport se le enchufe al usuario su id.
                        mail: user.mail,
                        photo: user.photo,
                        is_admin: user.is_admin,
                        is_author: user.is_author,
                        is_company: user.is_company,
                        id: user.user_id
                    }
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            } catch (error) {
                console.log(error)
                return done(error,false)
            }
        }
    )
)

export default passport