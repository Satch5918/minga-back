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
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { is_company: true },
        { new: true }
      );
      const updatedCompany = await Company.findOneAndUpdate(
        { user_id: id },
        { new: true }
      );
      res.status(200).json({ user: updatedUser, company: updatedCompany });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateRoleAuthor: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { is_author: true },
        { new: true }
      );
      const updatedAuthor = await Author.findOneAndUpdate(
        { user_id: id },
        { active: true },
        { new: true }
      );
      res.status(200).json({ user: updatedUser, author: updatedAuthor });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default adminController;
