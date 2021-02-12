module.exports = function (router) {

    var v = "sprint-21"

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

        router.post('/'+v+'/venues/add/manual-edit', function (req, res) {
            res.redirect('/'+v+'/venues/add/check-publish');
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