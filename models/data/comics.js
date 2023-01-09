import 'dotenv/config.js'
import '../../config/database.js'
import {Comic}  from '../Comic.js'


let comics = [
    {
        author_id: "63ac47d8b4db2f7baacad498",
        company_id: "63b487b8a20665822fca8992",
        title: "berserk",
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
        description: "classic awesome comic",
        category: "63b3890c7516fb05c60d3239",

    },{
        author_id: "63ac47d8b4db2f7baacad498",
        company_id: "63b487b8a20665822fca8992",
        title: "akira",
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
        description: "one of the most iconic manga",
        category: "63b3890c7516fb05c60d3239",
    },{
        author_id: "63ac47d8b4db2f7baacad498",
        company_id: "63b487b8a20665822fca8992",
        title: "spawn",
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
        description: "american neo gotic comic",
        category: "63b3890c7516fb05c60d3239",
    },{
        author_id: "63ac47d8b4db2f7baacad498",
        company_id: "63b487b8a20665822fca8992",
        title: "evangelion",
        photo: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg",
        description: "bio robotic",
        category: "63b3890c7516fb05c60d3239",
    }
]

Comic.insertMany(comics)