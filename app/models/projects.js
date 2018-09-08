var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    projects : {
        name : String,
        amount_req : Number,
        amount_don : Number,
        desc : String,
        email : String
    }
})

module.exports = mongoose.model('Projects', projectSchema);