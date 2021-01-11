module.exports = function (router) {

    var months = [
        'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September',
        'October', 'November', 'December'
        ];

    var shortmonths = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May',
        'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
        ];
    
    function monthNumToName(monthnum) {
        return months[monthnum - 1] || '';
    }

    function monthNumToShortName(monthnum) {
        return shortmonths[monthnum - 1] || '';
    }
    
// Courses

    router.post('/v1/courses', function (req, res) {

        if (req.session.data['course-option'] == "add"){
            res.redirect('/v1/courses/add');
        } else if (req.session.data['course-option'] == "upload"){
            //res.redirect('/v1/courses/');
        } else {
            res.redirect('/v1/courses/list');
        }

    })

// Courses - Add

    router.post('/v1/courses/add', function (req, res) {

        if (req.session.data['course-add'] == "yes"){
            res.redirect('/v1/courses/add/regulated');
        } else {
            res.redirect('/v1/courses/add/unregulated');
        }

    })

    router.post('/v1/courses/add/description', function (req, res) {
        res.redirect('/v1/courses/add/details');
    })

    router.post('/v1/courses/add/details', function (req, res) {
        res.redirect('/v1/courses/add/check-publish');
    })

    router.post('/v1/courses/add/check-publish', function (req, res) {
        res.redirect('/v1/courses/add/success');
    })


// Locations



// Locations - Delete

    router.post('/v1/locations/delete', function (req, res) {
        if (req.session.data['location-delete-sure'] == "No, go back"){
            res.redirect('/v1/locations/index');
        } else {
            res.redirect('/v1/locations/delete/success');
        }
    })



}