import 'dotenv/config.js'
import '../../config/database'
import {Comments} from '../NewComent.js'

let coments = [ { chapter_id:"63ac47d8b4db2f7baacad498",
user_id: "63ac47d8b4db2f7baacad498" ,
text: "Hola",
commentable_id: "63ac47d8b4db2f7baacad498" ,}];

Comments.insertMany(coments)