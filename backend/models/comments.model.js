import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const CommentSchema = new Schema({
  movie_id: String,
  comment: String
})

// this is for removing '__v' field from the query result
CommentSchema.set('toObject', { versionKey: false });
CommentSchema.set('toJSON', { versionKey: false });

const Comments = mongoose.model('Comments', CommentSchema, 'comment')

const query = {
  findAll : async () => {
    return await Comments.find().exec()
  },

  findById : async (id) => {
    return await Comments.findById(id).exec()
    // return await Comments.findOne({movie_id : id}).exec()
  },

  insertOne : async (data) => {
    await new Comments(data).save()
  },

  updateOne : async (id, data) => {
    return await Comments.findByIdAndUpdate(id, data).exec()
  },

  updateMany : async (condition, data) => {
    return await Comments.updateMany(condition, data).exec()
  },

  deleteOne : async (id) => {
    return await Comments.findByIdAndDelete(id).exec()
  },

  deleteMany : async (condition) => {
    return await Comments.deleteMany(condition).exec()
  },

}

// These are available queries in Mongoose. you can use them to build you own query!
// Model.deleteMany()
// Model.deleteOne()
// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndRemove()
// Model.findByIdAndUpdate(id, [data], [option])
// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndReplace()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
// Model.updateOne()

export default query 