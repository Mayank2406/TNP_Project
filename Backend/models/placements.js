const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placementSchema = new Schema({
    
    
    company: { type: String, required: true },
    batch: { type: Number, required: true },
    lowestsalary: { type: Number, required: true },
    highestsalary: { type: Number, required: true },
    branch:[
        {
            name:String,
            count:Number
        }
    ],
    
    
}, { timestamps: true })


const Placement = mongoose.model('Placement', placementSchema);

module.exports = Placement;