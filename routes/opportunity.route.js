const express = require('express');
const app = express();
const opportunityRoute = express.Router();

// Opportunity model
let Opportunity = require('../database/models/Opportunity');

// Add Opportunity
opportunityRoute.route('/create').post((req, res, next) => {
    Opportunity.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get All Opportunities
opportunityRoute.route('/').get((req, res) => {
    Opportunity.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single Opportunity
opportunityRoute.route('/read/:id').get((req, res) => {
    Opportunity.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Opportunity
opportunityRoute.route('/update/:id').put((req, res, next) => {
    Opportunity.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Record updated successfully')
        }
    })
})

// Delete Opportunity
opportunityRoute.route('/delete/:id').delete((req, res, next) => {
    Opportunity.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = opportunityRoute;