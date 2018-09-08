var mongoose = require('mongoose');

var actionSchema = mongoose.Schema({
    actions : {
        emailfrom : String,
        donate : Boolean,
        amount_don : Number,
        emailto : String,
        added : Boolean
        
    }
})

module.exports = mongoose.model('Actions', actionSchema);