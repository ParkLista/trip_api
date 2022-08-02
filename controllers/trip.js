const Trip = require('../models/Trip');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');


/**
 * @Desc Add a new taxi to the database
 */
exports.addTrip = asyncHandler(async(req, res, next)=>{
    const taxi = await Trip.create(req.body);
    res.status(201).json({
        success: true,
        message: 'A trip has been added successfully',
        data: taxi
    });
});

/**
 * @Desc Get all the available taxis in the database
*/
exports.getTrips = asyncHandler(async(req, res, next)=>{
    const taxis = await Trip.find();
    return res.status(200).json({
        success: true,
        message: 'All trips available',
        data: taxis
    })
})