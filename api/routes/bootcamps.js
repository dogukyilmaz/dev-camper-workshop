const express = require('express');
const {
	getBootcamps,
	getBootcamp,
	createBootcamp,
	updateBootcamp,
	deleteBootcamp,
	getBootcampsByDistance,
	bootcampUploadPhoto,
} = require('../controllers/bootcamps');

const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses', require('./courses'));

router.route('/radius/:zipcode/:distance').get(getBootcampsByDistance);
router.route('/:id/photo').put(bootcampUploadPhoto);
router
	.route('/:id')
	.get(getBootcamp)
	.put(updateBootcamp)
	.delete(deleteBootcamp);
router.route('/').get(getBootcamps).post(createBootcamp);

module.exports = router;
