/* RUTA	
1) PUT: api/auth/role/company para modificar el rol de un usuario común a empresa	

2) PUT: api/auth/role/author para modificar el rol de un usuario común a autor	
en ambas, cambia la propiedad de rol correspondiente del modelo User
y además cambia la propiedad active a true del modelo Author/Company correspondiente

3) GET: api/companies?active={active} para ver las companias activas o inactivas
4) GET: api/authors?active={active} para ver los autores activos o inactivos	 */

import { User } from "../models/User";
import { Author } from "../models/Author.js";
import { Company } from "../models/Company.js";

const adminController = {
  updateRoleCompany: async (req, res) => {
    try {
      
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { is_company: true } }
      );
      const company = await Company.findOneAndUpdate(
        { user: req.params.id },
        { $set: { active: true } }
      );
      res
        .status(200)
        .json({ message: "User role successfully updated to company" });
    } catch (err) {
      res.status(404).json({ error: err.message });
      next(err);
    }
  },

  updateRoleAuthor: async (req, res) => {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { is_author: true } }
      );
      const author = await Author.findOneAndUpdate(
        { user: req.params.id },
        { $set: { active: true } }
      );
      res
        .status(200).json({ 
            succes: true,
            message: "User role successfully updated to author" });
    } catch (err) {
      res.status(404).json({ error: err.message });
        next(err);
    }
  },
};

export default adminController;
