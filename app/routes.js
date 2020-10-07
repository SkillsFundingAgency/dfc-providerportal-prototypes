const express = require('express')
const router = express.Router()


var months = [
	'January', 'February', 'March', 'April', 'May',
	'June', 'July', 'August', 'September',
	'October', 'November', 'December'
	];

function monthNumToName(monthnum) {
	return months[monthnum - 1] || '';
}

// Add your routes here - above the module.exports line

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
    res.locals.currentURL = req.originalUrl; //current screen
    res.locals.prevURL = req.get('Referrer'); // previous screen
    console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
    next();
});


router.post('/sprint-13/tlevels-add', function (req, res) {
    res.redirect('/sprint-13/tlevels-description');
})

router.post('/sprint-13/tlevels-description', function (req, res) {
    res.redirect('/sprint-13/tlevels-details');
})

router.post('/sprint-13/tlevels-details', function (req, res) {
    req.session.data['tlevels-details-startdate-monthname'] = monthNumToName(req.session.data['tlevels-details-startdate-month']);
    res.redirect('/sprint-13/tlevels-checkanswers');
})

router.post('/sprint-13/tlevels-checkanswers', function (req, res) {
    req.session.data['sprint13-tlevels-count'] = req.session.data['sprint13-tlevels-count'] + 1;
    res.redirect('/sprint-13/tlevels-confirmation');
})

module.exports = router

//module.exports = function (router) {

//}