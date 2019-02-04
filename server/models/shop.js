const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    title : {type: String, required: true, max: [128, 'Too long, max is 128 characters']},
    city: {type: String, required: true, lowercase: true},
    street: {type: String, required: true, lowercase: true[4, 'Too short, min is 4 characters']},
    location: {type: String, required: true, lowercase: true},
    category: {type: String, required: true, lowercase:true },
    established: {type: String, required: true, lowercase: true},
    image: {type: String, required: true},
    description: {type: String, required: true, lowercase: true},
    createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Shop', shopSchema);