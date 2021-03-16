module.exports = function (router) {

    var v = "dm5"

    // Courses data upload
        
        router.get('/'+v+'/data-upload/courses/goto-validation', function (req, res) {
            req.session.data[v+'courses-deleted'] = [];
            req.session.data[v+'courses-resolved'] = [];
            req.session.data[v+'courses-errorcount'] = 6; // this needs to become dynamic
            res.redirect('/'+v+'/data-upload/courses/validation');
        })

        // User choice on how to handle errors in upload
        router.post('/'+v+'/data-upload/courses/validation', function (req, res) {
            if (req.session.data['course-validation'] == "resolve"){
                res.redirect('/'+v+'/data-upload/courses/resolve');
            } else if (req.session.data['course-validation'] == "download"){
                res.redirect('/'+v+'/data-upload/courses/download');
            } else if (req.session.data['course-validation'] == "cancel"){
                //delete req.session.data[v+'courses-deleted'];
                //delete req.session.data[v+'courses-resolved'];
                res.redirect('/'+v+'/data-upload/courses/cancel');
            }
        })

        router.post('/'+v+'/data-upload/courses/resolve/delete', function (req, res) {

            // convert the row to be deleted from a string to a number so it matches the row count on the resolve screen
            req.session.data[v+'courses-deleted'].push( parseInt(req.session.data['deleterow']) );

            // remove variable that contains row to be deleted
            delete req.session.data['deleterow'];

            // Check to see if there are still errors and redirect accordingly
            if (req.session.data[v+'courses-errorcount'] == (parseInt(req.session.data[v+'courses-deleted'].length) + parseInt(req.session.data[v+'courses-resolved'].length))){
                res.redirect('/'+v+'/data-upload/courses/checkandpublish');
            } else {
                res.redirect('/'+v+'/data-upload/courses/resolve');
            }
        })


        router.get('/'+v+'/data-upload/courses/resolve/showcourse', function (req, res) {
            var coursestartdate = req.session.data[v+'courses'][req.session.data['row']-1].START_DATE;
            req.session.data["coursestartdate"] = coursestartdate.split('/');
            res.redirect('/'+v+'/data-upload/courses/resolve/course');
        })

        router.post('/'+v+'/data-upload/courses/resolve/course', function (req, res) {

            // convert the row to be deleted from a string to a number so it matches the row count on the resolve screen
            req.session.data[v+'courses-resolved'].push( parseInt(req.session.data['resolverow']) );

            // remove variable that contains row to be deleted
            delete req.session.data['resolverow'];

            // Check to see if there are still errors and redirect accordingly        
            if (req.session.data[v+'courses-errorcount'] == (parseInt(req.session.data[v+'courses-deleted'].length) + parseInt(req.session.data[v+'courses-resolved'].length))){
                res.redirect('/'+v+'/data-upload/courses/checkandpublish');
            } else {
                res.redirect('/'+v+'/data-upload/courses/resolve');
            }
        })

        router.post('/'+v+'/data-upload/courses/checkandpublish', function (req, res) {
            req.session.data[v+'courses-published'] = parseInt(req.session.data[v+'courses'].length) - parseInt(req.session.data[v+'courses-deleted'].length);
            delete req.session.data[v+'courses-deleted'];
            delete req.session.data[v+'courses-resolved'];
            res.redirect('/'+v+'/data-upload/courses/success');
        })

        router.post('/'+v+'/data-upload/courses/cancel', function (req, res) {
            delete req.session.data[v+'courses-errorcount'];
            delete req.session.data[v+'courses-deleted'];
            delete req.session.data[v+'courses-resolved'];
            res.redirect('/'+v+'/data-upload/courses/cancel/success');
        })


    // Venues data upload
        
    router.get('/'+v+'/data-upload/venues/goto-validation', function (req, res) {
        req.session.data[v+'venues-deleted'] = [];
        req.session.data[v+'venues-resolved'] = [];

        //loop through data to get error count

        //if 0 errors go to checkandpublish
        //if errors, go to validation
        
        req.session.data[v+'venues-errorcount'] = 1; // this needs to become dynamic
        res.redirect('/'+v+'/data-upload/venues/validation');
    })

    // User choice on how to handle errors in upload
    router.post('/'+v+'/data-upload/venues/validation', function (req, res) {
        if (req.session.data['venue-validation'] == "resolve"){
            res.redirect('/'+v+'/data-upload/venues/resolve');
        } else if (req.session.data['venue-validation'] == "upload"){
            res.redirect('/'+v+'/data-upload/venues');
        } else if (req.session.data['venue-validation'] == "delete"){
            delete req.session.data[v+'venues-deleted'];
            delete req.session.data[v+'venues-resolved'];
            res.redirect('/'+v+'/data-upload/venues/delete');
        }
    })

    router.post('/'+v+'/data-upload/venues/resolve/delete', function (req, res) {

        // convert the row to be deleted from a string to a number so it matches the row count on the resolve screen
        req.session.data[v+'venues-deleted'].push( parseInt(req.session.data['deleterow']) );

        // remove variable that contains row to be deleted
        delete req.session.data['deleterow'];

        // Check to see if there are still errors and redirect accordingly
        if (req.session.data[v+'venues-errorcount'] == (parseInt(req.session.data[v+'venues-deleted'].length) + parseInt(req.session.data[v+'venues-resolved'].length))){
            res.redirect('/'+v+'/data-upload/venues/checkandpublish');
        } else {
            res.redirect('/'+v+'/data-upload/venues/resolve');
        }
    })


    router.get('/'+v+'/data-upload/venues/resolve/showvenue', function (req, res) {
        //var venuestartdate = req.session.data[v+'venues'][req.session.data['row']-1].START_DATE;
        //req.session.data["venuestartdate"] = venuestartdate.split('/');
        res.redirect('/'+v+'/data-upload/venues/resolve/venue');
    })

    router.post('/'+v+'/data-upload/venues/resolve/venue', function (req, res) {

        // convert the row to be deleted from a string to a number so it matches the row count on the resolve screen
        req.session.data[v+'venues-resolved'].push( parseInt(req.session.data['resolverow']) );

        // remove variable that contains row to be deleted
        delete req.session.data['resolverow'];

        // Check to see if there are still errors and redirect accordingly        
        if (req.session.data[v+'venues-errorcount'] == (parseInt(req.session.data[v+'venues-deleted'].length) + parseInt(req.session.data[v+'venues-resolved'].length))){
            res.redirect('/'+v+'/data-upload/venues/checkandpublish');
        } else {
            res.redirect('/'+v+'/data-upload/venues/resolve');
        }
    })

    router.post('/'+v+'/data-upload/venues/checkandpublish', function (req, res) {
        req.session.data[v+'venues-published'] = parseInt(req.session.data[v+'venues'].length) - parseInt(req.session.data[v+'venues-deleted'].length);
        delete req.session.data[v+'venues-errorcount'];
        delete req.session.data[v+'venues-deleted'];
        delete req.session.data[v+'venues-resolved'];
        res.redirect('/'+v+'/data-upload/venues/success');
    })

    router.post('/'+v+'/data-upload/venues/cancel', function (req, res) {
        delete req.session.data[v+'venues-errorcount'];
        delete req.session.data[v+'venues-deleted'];
        delete req.session.data[v+'venues-resolved'];
        res.redirect('/'+v+'/data-upload/venues/cancel/success');
    })


    // Data upload where venue deleted
        
    router.get('/'+v+'/venues-deleted-upload/goto-validation', function (req, res) {
        res.redirect('/'+v+'/venues-deleted-upload/validation');
    })

}