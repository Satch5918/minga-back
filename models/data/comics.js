import 'dotenv/config.js'
import '../../config/database.js'
import {Comic}  from '../Comic.js'


let comics = [
    {
        author_id: "63ac47d8b4db2f7baacad498",
        company_id: "63ac47d8b4db2f7baacad498",
        title: "berserk",
        photo: "photo.png",
        description: "classic awesome comic",
        category: "63ac47d8b4db2f7baacad498",

    },{
        author_id: "63ac47d8b4db2f7baacad498",
        company_id: "63ac47d8b4db2f7baacad498",
        title: "akira",
        photo: "photo.png",
        description: "one of the most iconic manga",
        category: "63ac47d8b4db2f7baacad498",
    },{
        author_id: "63ac47d8b4db2f7baacad498",
        company_id: "63ac47d8b4db2f7baacad498",
        title: "spawn",
        photo: "photo.png",
        description: "american neo gotic comic",
        category: "63ac47d8b4db2f7baacad498",
    },{
        author_id: "63ac47d8b4db2f7baacad498",
        company_id: "63ac47d8b4db2f7baacad498",
        title: "evangelion",
        photo: "photo.png",
        description: "bio robotic",
        category: "63ac47d8b4db2f7baacad498",
    }
]

Comic.insertMany(comics)