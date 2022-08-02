const express = require('express');
const { addTrip, getTrips } = require('../controllers/trip');

const router = express.Router();

router.post('/', addTrip);
router.get('/', getTrips);


module.exports = router;