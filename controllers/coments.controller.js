import { Comment } from "../models/Comment.js";

const controller = {
  create: async (req, res, next) => {
    try {
      const { chapter_id, text, commentable_id } = req.body;
      await Comment.create({
        chapter_id,
        user_id: req.user.id,
        text,
        commentable_id,
      });
      res.status(201).json({
        success: true,
        response: "done",
      });
    } catch (error) {
      next(error);
    }
  },
};
export default controller;

/* const controller = {
  create: async (req, res) => {

  },
  read: async (req, res) => {},
  one : async (req, res) => {},
  update: async (req, res) => {},
  destroy: async (req, res) => {},

  
}

export default controller */
