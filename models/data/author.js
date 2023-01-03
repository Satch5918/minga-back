import 'dotenv/config.js'
import '../../config/database.js'
import { Author } from '../Author.js'

let new_author = [{
    name:"Pepito",
    lastname:"Cecio",
    city:"Buenos Aires",
    country:"argentina",
    date: "1990-01-01",
    photo:"https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
    user_id:"63ac47d8b4db2f7baacad498",
    useractive:false,
}]

Author.insertMany(new_author)