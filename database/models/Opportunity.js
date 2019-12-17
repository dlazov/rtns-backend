const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Opportunity = new Schema({
    id: {
        type: Number
    },
    description: {
        type: String
    },
    dateTime: {
        type: String
    },
    status: {
        type: String
    },
    alertSent: {
        type: Boolean
    }
}, {
    collection: 'Opportunities'
})

module.exports = mongoose.model('Opportunity', Opportunity)