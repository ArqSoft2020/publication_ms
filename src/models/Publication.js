const { Schema, model } = require('mongoose');

const publicationSchema = new Schema ({
    title : {
      type: String
    } ,
    description : String,
    state_publication : Boolean,
    contact_information : String,
    id_image : {
        type : Number,
        default : 0
    } ,
    stock : {
        type :Number,
        default : 0
    } ,
    expiration_date : {
        type: Date,
        default : Date.now
    } ,
    price : {
        type :  Number,
        default : 0
    },
    categories : [String]
})

module.exports = model('Publication', publicationSchema);