const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const linkSchema = new mongoose.Schema(
  {
    title: { type: String },
    author: { type: String },
    link: { type: String },
    category: { type: String },
    user: { type: ObjectId, required: true }
  },
  {
    timestamps: true
  }
)

const Link = mongoose.model('link', linkSchema)

module.exports = Link
