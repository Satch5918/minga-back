import { Comments } from '../models/NewComent.js'
import mongoose from 'mongoose';

export const createComment = async (comment) => {
    try {
      return await Comments.create(comment);
    } catch (error) {
      throw error;
    }
  };
  
  export const getComments = async () => {
    try {
      return await Comments.find();
    } catch (error) {
      throw error;
    }
  };
  
  export const getCommentById = async (commentId) => {
    try {
      return await Comments.findById(commentId);
    } catch (error) {
      throw error;
    }
  };
  
  export const updateComment = async (commentId, update) => {
    try {
      return await Comments.findByIdAndUpdate(commentId, update, { new: true });
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteComment = async (commentId) => {
    try {
      return await Comments.findByIdAndDelete(commentId);
    } catch (error) {
      throw error;
    }
  };
  

  