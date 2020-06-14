const mongoose = require('mongoose');
const Schema =mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const commentSchema = new Schema ({
    rating : {
        type: Number,
        min:1,
        max:5,
        required:true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});

const noticeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    department: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: ''
    },

    featured: {
        type: Boolean,
        default:false      
    },
    comments:[commentSchema]
}, {
    timestamps: true
});

var Notices = mongoose.model('Notice',noticeSchema);

module.exports = Notices;