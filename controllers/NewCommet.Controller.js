import { Comments } from '../models/NewComent.js'
import mongoose from 'mongoose';

export const createComment = async (req, res) => {
  const { chapter_id, user_id, text, commentable_id } = req.body;
  const newComment = new Comments({ chapter_id, user_id, text, commentable_id });
  try {
    await newComment.save();
    return res.status(201).json({ message: 'Comment created successfully', newComment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comments.find();
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getCommentById = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comments.findById(id);
    if (comment) {
      return res.status(200).json({ comment });
    } else {
      return res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateComment = async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const comment = await Comments.findByIdAndUpdate(id, update, { new: true });
    if (comment) {
      return res.status(200).json({ message: 'Comment updated successfully', comment });
    } else {
      return res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comments.findByIdAndDelete(id);
    if (comment) {
      return res.status(200).json({ message: 'Comment deleted successfully', comment });
    } else {
      return res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
  

const controller = {
  create: async (req, res) => {},
  read: async (req, res) => {},
  one : async (req, res) => {},
  update: async (req, res) => {},
  destroy: async (req, res) => {},

  
}

export default controller