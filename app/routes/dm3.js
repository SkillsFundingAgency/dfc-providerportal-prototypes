module.exports = function (router) {

    var v = "dm3"


	router.get('/'+v+'/data-upload/courses/goto-validation', function (req, res) {
        req.session.data['dm3courses-deleted'] = [];
        req.session.data['dm3courses-resolved'] = [];
        res.redirect('/'+v+'/data-upload/courses/validation');
    })

    // User choice on how to handle errors in upload
    router.post('/'+v+'/data-upload/courses/validation', function (req, res) {
        if (req.session.data['course-validation'] == "resolve"){
            req.session.data['dm3courses-errorcount'] = 6; // this needs to become dynamic
            res.redirect('/'+v+'/data-upload/courses/resolve');
        } else if (req.session.data['course-validation'] == "download"){
            res.redirect('/'+v+'/data-upload/courses/download');
        } else if (req.session.data['course-validation'] == "cancel"){
            res.redirect('/'+v+'/data-upload/courses/cancel');
        }
    })

    router.post('/'+v+'/data-upload/courses/resolve/delete', function (req, res) {

        // convert the row to be deleted from a string to a number so it matches the row count on the resolve screen
        req.session.data['dm3courses-deleted'].push( parseInt(req.session.data['deleterow']) );

        // remove variable that contains row to be deleted
        delete req.session.data['deleterow'];

        // Check to see if there are still errors and redirect accordingly
        if (req.session.data['dm3courses-errorcount'] == (parseInt(req.session.data['dm3courses-deleted'].length) + parseInt(req.session.data['dm3courses-resolved'].length))){
            res.redirect('/'+v+'/data-upload/courses/checkandpublish');
        } else {
            res.redirect('/'+v+'/data-upload/courses/resolve');
        }
    })


	router.get('/'+v+'/data-upload/courses/resolve/showcourse', function (req, res) {
        var coursestartdate = req.session.data['dm3courses'][req.session.data['row']-1].START_DATE;
        req.session.data["coursestartdate"] = coursestartdate.split('/');
        res.redirect('/'+v+'/data-upload/courses/resolve/course');
    })

    router.post('/'+v+'/data-upload/courses/resolve/course', function (req, res) {

        // convert the row to be deleted from a string to a number so it matches the row count on the resolve screen
        req.session.data['dm3courses-resolved'].push( parseInt(req.session.data['resolverow']) );

        // remove variable that contains row to be deleted
        delete req.session.data['resolverow'];

        // Check to see if there are still errors and redirect accordingly        
        if (req.session.data['dm3courses-errorcount'] == (parseInt(req.session.data['dm3courses-deleted'].length) + parseInt(req.session.data['dm3courses-resolved'].length))){
            res.redirect('/'+v+'/data-upload/courses/checkandpublish');
        } else {
            res.redirect('/'+v+'/data-upload/courses/resolve');
        }
    })


    router.post('/'+v+'/data-upload/courses/checkandpublish', function (req, res) {
        delete req.session.data['dm3courses-deleted'];
        delete req.session.data['dm3courses-resolved'];
        res.redirect('/'+v+'/data-upload/courses/success');
    })

}