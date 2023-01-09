import 'dotenv/config.js'
import '../../config/database.js'
import { Company } from '../Company.js' // modelo company

let companies = [
    {
        name: "companiaUno",
        logo: "logoUno",
        website: "paginaUno",
        description: "descripcionUno",
        user_id: "63ac47d8b4db2f7baacad498",
        active: true
    },{
        name: "companiaDos",
        logo: "logoDos",
        website: "paginaDos",
        description: "descripcionDos",
        user_id: "63ac47d8b4db2f7baacad498",
        active: false
    }
]

Company.insertMany(companies)