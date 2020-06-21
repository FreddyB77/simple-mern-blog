const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    _id : String,
    title: String,
    text: String,
});

module.exports = mongoose.model('Article', ArticleSchema)