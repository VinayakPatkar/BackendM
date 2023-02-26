const mongoose  = require('mongoose')
const User  =  new mongoose.Schema({
    Name : {
        type : String,
        required : true,
        maxlength : 20,
    },
    UserName : {
        type : String,
        required : true,
        maxlength : 20,
    },
    PhoneNumber : {
        type :  String,
        required : true,
        maxlength : 10,
    },
    Email : {
        type : String,
        required : true,
    },
    Gender : {
        type : String,
        default : 'Male',
    },
    Password : {
        type : String,
        required : true,
    },
    Followers : [{
        type : mongoose.Types.ObjectId, ref : 'User'
    }],
    Following : [{
        type : mongoose.Types.ObjectId, ref : 'User'
    }]
},{
    timestamps : true
})
module.exports = mongoose.model('User',User)