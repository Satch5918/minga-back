/* RUTA	
1) PUT: api/auth/role/company para modificar el rol de un usuario común a empresa	
2) PUT: api/auth/role/author para modificar el rol de un usuario común a autor	
en ambas, cambia la propiedad de rol correspondiente del modelo User
y además cambia la propiedad active a true del modelo Author/Company correspondiente
3) GET: api/companies?active={active} para ver las companias activas o inactivas
4) GET: api/authors?active={active} para ver los autores activos o inactivos	 */

import { User } from "../models/User.js";
import { Author } from "../models/Author.js";
import { Company } from "../models/Company.js";

const adminController = {
  updateRoleCompany: async (req, res, next) => {
    try {
      const { id } = req.params; 
      const company = await Company.findOne({ _id: id });
      let id2 = company.user_id
      company.active = !company.active
      await company.save()
      const updatedUser = await User.findOne({_id: id2});
      updatedUser.is_company = !updatedUser.is_company
      await updatedUser.save()
      res.status(200).json({ user: updatedUser, company: company });
    } catch (error) {
      console.log(error)
      next(error)
    }
  },

  updateRoleAuthor: async (req, res, next) => {
    try {
      const { id } = req.params;
      const author = await Author.findOne({ _id: id })
      //encuentro el autor que conside el id del parametro
      //uan de las propiedades de autor es: user_id
      let id2 = author.user_id
      author.active = !author.active
      //le modifico la propiedad por la contraria
      await  author.save() 
      //busco la referencia del user_id del author en la coleccion usuarios
      const updatedUser = await User.findOne({_id: id2});
      updatedUser.is_author = !updatedUser.is_author
      await updatedUser.save()
      res.status(200).json({ user: updatedUser, author: author });
    } catch (error) {
      console.log(error)
      next(error)
    }
  },
    getCompanies: async(req, res, next) => {
      try{
        const active = req.query.active === 'true';
        const companies = await Company.find({ active });
        return (
            res.status(200).json({
            succes: true,
            response: companies
          })
        );
      }catch(error){
      console.log(error)
      next(error)
    }},
    getAuthor: async(req, res, next) => {
      try{
        const active = req.query.active === 'true';
        const authors = await Author.find({ active });
        return (
            res.status(200).json({
            succes: true,
            response: authors
          })
        );
      }catch(error){
      console.log(error)
      next(error)
    }},

};

export default adminController;
