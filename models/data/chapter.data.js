import 'dotenv/config.js'
import '../../config/database.js'
import { Chapter } from '../Chapter.js'

let chapter = [   
    {
        comic_id: "63b38cd2475bf4a27fca9090",
        title: "capitulo 1",
        pages: ['asda'],
        order: 1
    }
]

Chapter.insertMany(chapter)