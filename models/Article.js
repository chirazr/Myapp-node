const mongoose = require("mongoose");
//tab ta3i 
// schema class
const Schema = mongoose.Schema;

//article object mel schema 
const articleSchema = new Schema({

    //key:value,
	title: String,
	body: String,
	numberOfLikes: Number,
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;