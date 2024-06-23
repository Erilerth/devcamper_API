// @desc        Get all bootcamps
// @route       GET /api/vi/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'show all bootcamps',
    hello: req.hello,
  });
};

// @desc        Get single bootcamp
// @route       GET /api/vi/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `show bootcamp ${req.params.id}` });
};

// @desc        Create new bootcamp
// @route       POST /api/vi/bootcamps
// @access      Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: 'create new bootcamp' });
};

// @desc        Update bootcamp
// @route       POST /api/vi/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `update bootcamp ${req.params.id}` });
};

// @desc        Delete bootcamp
// @route       POST /api/vi/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `delete bootcamp ${req.params.id}` });
};
