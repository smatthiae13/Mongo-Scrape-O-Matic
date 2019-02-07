var mongoose = require ("mongoose");

//saving a reference to Schema constructor
var Schema = mongoose.Schema;

//my Schema object
var ArticleSchema = new Schema ({
    title: {
        type: String,
        required: true
    },

    link: {
        type: String,
        required: true
    },


})

module.exports = Article;