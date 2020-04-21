const express = require('express');
const {
	getBootcamps,
	getBootcamp,
	createBootcamp,
	updateBootcamp,
	deleteBootcamp,
	getBootcampsByDistance,
} = require('../controllers/bootcamps');
const router = express.Router();

router.route('/radius/:zipcode/:distance').get(getBootcampsByDistance);

router.route('/').get(getBootcamps).post(createBootcamp);

router
	.route('/:id')
	.get(getBootcamp)
	.put(updateBootcamp)
	.delete(deleteBootcamp);

module.exports = router;
