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
    //console.log('previous page is: ' + res.locals.prevURL + " and current page is " + req.url + " " + res.locals.currentURL );
    next();
});


router.post('/sprint-13/tlevels-add', function (req, res) {

    // Clear previous sessions from add journey
    req.session.data['tlevels-desc-whothiscourseisfor'] = "";
    req.session.data['tlevels-desc-entryrequirements'] = "";
    req.session.data['tlevels-desc-whatyoulllearn'] = "";
    req.session.data['tlevels-desc-howyoulllearn'] = "";
    req.session.data['tlevels-desc-howassessed'] = "";
    req.session.data['tlevels-desc-whatyoucandonext'] = "";

    // Which course was selected?
    if (req.session.data['tlevels'] == "T Level Technical Qualification in Design, Surveying and Planning for Construction") {
        req.session.data['selectedcourse'] = "design";
    }
    if (req.session.data['tlevels'] == "T Level Technical Qualification in Digital Production, Design and Development") {
        req.session.data['selectedcourse'] = "digital";
    }
    if (req.session.data['tlevels'] == "T Level Technical Qualification in Education and Childcare") {
        req.session.data['selectedcourse'] = "education";
    }

    // Populate current journey variables from those stored from previous journey
    req.session.data['tlevels-desc-whothiscourseisfor'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-whothiscourseisfor'];
    req.session.data['tlevels-desc-entryrequirements'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-entryrequirements'];
    req.session.data['tlevels-desc-whatyoulllearn'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-whatyoulllearn'];
    req.session.data['tlevels-desc-howyoulllearn'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-howyoulllearn'];
    req.session.data['tlevels-desc-howassessed'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-howassessed'];
    req.session.data['tlevels-desc-whatyoucandonext'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-whatyoucandonext'];

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

    // Store data from journey to be able to present later on same T Level add journey
    if (req.session.data['tlevels'] == "T Level Technical Qualification in Design, Surveying and Planning for Construction") {
        req.session.data['coursetosave'] = "design";
    }
    if (req.session.data['tlevels'] == "T Level Technical Qualification in Digital Production, Design and Development") {
        req.session.data['coursetosave'] = "digital";
    }
    if (req.session.data['tlevels'] == "T Level Technical Qualification in Education and Childcare") {
        req.session.data['coursetosave'] = "education";
    }
    
    req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-whothiscourseisfor'] = req.session.data['tlevels-desc-whothiscourseisfor'];
    req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-entryrequirements'] = req.session.data['tlevels-desc-entryrequirements'];
    req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-whatyoulllearn'] = req.session.data['tlevels-desc-whatyoulllearn'];
    req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-howyoulllearn'] = req.session.data['tlevels-desc-howyoulllearn'];
    req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-howassessed'] = req.session.data['tlevels-desc-howassessed'];
    req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-whatyoucandonext'] = req.session.data['tlevels-desc-whatyoucandonext'];

    res.redirect('/sprint-13/tlevels-confirmation');
})


// Set variable to show notification if edited details were published
    router.get('/sprint-14/tlevels-editdetails-design-avenue', function (req, res) {
        req.session.data['published-tlevel-edit-details'] = "false";
        res.render('sprint-14/tlevels-editdetails-design-avenue');
    })
    router.get('/sprint-14/tlevels-editdescription-design-avenue', function (req, res) {
        req.session.data['published-tlevel-edit-details'] = "false";
        res.render('sprint-14/tlevels-editdescription-design-avenue');
    })




    router.post('/sprint-14/tribal-provider-type', function (req, res) {
        res.redirect('/sprint-14/tribal-provider-details');
    })
    router.post('/sprint-14/tribal-provider-displayname', function (req, res) {
        res.redirect('/sprint-14/tribal-provider-details');
    })
    router.post('/sprint-14/tribal-provider-information', function (req, res) {
        res.redirect('/sprint-14/tribal-provider-details');
    })

    



module.exports = router

//module.exports = function (router) {

//}