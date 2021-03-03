module.exports = function (router) {

    var v = "dm3"

    // User choice on how to handle errors in upload
    router.post('/'+v+'/data-upload/courses/validation', function (req, res) {
        if (req.session.data['course-validation'] == "resolve"){
            res.redirect('/'+v+'/data-upload/courses/resolve');
        } else if (req.session.data['course-validation'] == "download"){
            res.redirect('/'+v+'/data-upload/courses/download');
        } else if (req.session.data['course-validation'] == "cancel"){
            res.redirect('/'+v+'/data-upload/courses/cancel');
        }
    })

    router.post('/'+v+'/data-upload/courses/resolve/delete', function (req, res) {
        
        // Create array if it doesn't exist
        if (!req.session.data['dm3courses-deleted']){
            req.session.data['dm3courses-deleted'] = [];
        }

        // convert the row to be deleted from a string to a number so it matches the row count on the resolve screen
        req.session.data['dm3courses-deleted'].push( parseInt(req.session.data['deleterow']) );

        // remove variable that contains row to be deleted
        delete req.session.data['deleterow'];

        // Add if logic to not show deleted row on resolve errors

        // Need to do the same for resolved errors

        // Then need logic to see if all the ones that have errors are in the resolved or deleted arrays
            // (maybe do this by a simple count?)

        res.redirect('/'+v+'/data-upload/courses/resolve');
    })


	router.get('/'+v+'/data-upload/courses/resolve/showcourse', function (req, res) {
        var coursestartdate = req.session.data['dm3courses'][req.session.data['row']-1].START_DATE;
        req.session.data["coursestartdate"] = coursestartdate.split('/');
        res.redirect('/'+v+'/data-upload/courses/resolve/course');
    })

}