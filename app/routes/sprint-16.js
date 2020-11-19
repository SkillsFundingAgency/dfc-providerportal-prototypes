module.exports = function (router) {

    router.get('/sprint-16/tribal-provider-details', function (req, res) {
        if (req.session.data['provider-type-backup']){
            req.session.data['provider-type'] = req.session.data['provider-type-backup']
        }
        res.render('sprint-16/tribal-provider-details');
    })


    router.post('/sprint-16/tribal-provider-type', function (req, res) {
        if (!req.session.data['provider-type']){
            req.session.data['provider-type'] = "None";
        } else if (req.session.data['provider-type'].includes("T Levels")){
            res.redirect('/sprint-16/tribal-provider-tlevels');
        }
        req.session.data['provider-type-backup'] = req.session.data['provider-type'] //set fallback provider typ eif incomplete journey
        res.redirect('/sprint-16/tribal-provider-details');
    })
    router.post('/sprint-16/tribal-provider-tlevels', function (req, res) {
        if (!req.session.data['provider-type-tlevels']){
            res.redirect('/sprint-16/tribal-provider-tlevels-error');
        }
        req.session.data['provider-type-backup'] = req.session.data['provider-type'] //set fallback provider typ eif incomplete journey
        res.redirect('/sprint-16/tribal-provider-details');
    })
    router.post('/sprint-16/tribal-provider-tlevels-error', function (req, res) {
        if (!req.session.data['provider-type-tlevels']){
            res.redirect('/sprint-16/tribal-provider-tlevels-error');
        }
        req.session.data['provider-type-backup'] = req.session.data['provider-type'] //set fallback provider typ eif incomplete journey
        res.redirect('/sprint-16/tribal-provider-details');
    })



    router.post('/sprint-16/location-add', function (req, res) {
        res.redirect('/sprint-16/location-add-select');
    })

    router.post('/sprint-16/location-add-select', function (req, res) {
        res.redirect('/sprint-16/location-add-details');
    })

    router.post('/sprint-16/location-add-manual', function (req, res) {
        res.redirect('/sprint-16/location-add-details');
    })

    router.post('/sprint-16/location-add-details', function (req, res) {
        res.redirect('/sprint-16/location-add-checkanswers');
    })


}