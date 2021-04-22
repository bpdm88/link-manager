const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema(
  {
    title: { type: String },
    author: { type: String },
    link: { type: String }
  },
  {
    timestamps: true
  }
)

const Link = mongoose.model('link', linkSchema)

module.exports = Link
