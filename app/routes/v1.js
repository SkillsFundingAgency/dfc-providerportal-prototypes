module.exports = function (router) {

    var v = "v1"

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

    router.post('/'+v+'/courses', function (req, res) {

        if (req.session.data['course-option'] == "add"){
            res.redirect('/'+v+'/courses/add');
        } else if (req.session.data['course-option'] == "upload"){
            //res.redirect('/'+v+'/courses/');
        } else {
            res.redirect('/'+v+'/courses/list');
        }

    })

// Courses - Add

    router.post('/'+v+'/courses/add', function (req, res) {

        if (req.session.data['course-add'] == "yes"){
            res.redirect('/'+v+'/courses/add/regulated');
        } else {
            res.redirect('/'+v+'/courses/add/unregulated');
        }

    })

    router.post('/'+v+'/courses/add/description', function (req, res) {
        res.redirect('/'+v+'/courses/add/details');
    })

    router.post('/'+v+'/courses/add/details', function (req, res) {
        res.redirect('/'+v+'/courses/add/check-publish');
    })

    router.post('/'+v+'/courses/add/check-publish', function (req, res) {
        res.redirect('/'+v+'/courses/add/success');
    })



// Locations - Add

    router.post('/'+v+'/venues/add/select', function (req, res) {
        res.redirect('/'+v+'/venues/add/details');
    })

    router.post('/'+v+'/venues/add/manual', function (req, res) {
        res.redirect('/'+v+'/venues/add/details');
    })

    router.post('/'+v+'/venues/add/details', function (req, res) {
        res.redirect('/'+v+'/venues/add/check-publish');
    })

    router.post('/'+v+'/venues/add/check-publish', function (req, res) {
        res.redirect('/'+v+'/venues/add/success');
    })


// Locations - Delete

    router.post('/'+v+'/venues/delete', function (req, res) {
        if (req.session.data['location-delete-sure'] == "No, go back"){
            res.redirect('/'+v+'/venues/index');
        } else {
            res.redirect('/'+v+'/venues/delete/success');
        }
    })


}