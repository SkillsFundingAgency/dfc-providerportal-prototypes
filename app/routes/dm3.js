module.exports = function (router) {

    var v = "dm3"

    // 
    
        router.post('/'+v+'/data-upload/courses/validation', function (req, res) {
            if (req.session.data['course-validation'] == "resolve"){
                res.redirect('/'+v+'/data-upload/courses/resolve');
            } else if (req.session.data['course-validation'] == "download"){
                res.redirect('/'+v+'/data-upload/courses/download');
            } else if (req.session.data['course-validation'] == "cancel"){
                res.redirect('/'+v+'/data-upload/courses/cancel');
            }
        })


}