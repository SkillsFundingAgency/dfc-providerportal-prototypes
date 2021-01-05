const express = require('express')
const router = express.Router()

// Copy and paste the below code into the relevant routes file if convetring date to text is needed
/*
var months = [
	'January', 'February', 'March', 'April', 'May',
	'June', 'July', 'August', 'September',
	'October', 'November', 'December'
	];

function monthNumToName(monthnum) {
	return months[monthnum - 1] || '';
}
*/

// Add your routes here - above the module.exports line

// GET SPRINT NAME - useful for relative templates
router.use('/', (req, res, next) => {
    res.locals.currentURL = req.originalUrl; //current screen
    res.locals.prevURL = req.get('Referrer'); // previous screen
    //console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
    next();
});


require('./routes/sprint-13.js')(router);
require('./routes/sprint-14.js')(router);
require('./routes/sprint-16.js')(router);
require('./routes/sprint-18.js')(router);

require('./routes/v1.js')(router);


module.exports = router
