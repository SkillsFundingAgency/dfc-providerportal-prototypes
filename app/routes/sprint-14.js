module.exports = function (router) {

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
        if (!req.session.data['provider-type']){
            req.session.data['provider-type'] == "None";
        } else if (req.session.data['provider-type'].includes("T Levels") && !req.session.data['provider-type-tlevels']){
            res.redirect('/sprint-14/tribal-provider-type-error');
        }
        res.redirect('/sprint-14/tribal-provider-details');
    })
    router.post('/sprint-14/tribal-provider-type-error', function (req, res) {
        if (req.session.data['provider-type'].includes("T Levels") && !req.session.data['provider-type-tlevels']){
            res.redirect('/sprint-14/tribal-provider-type-error');
        }
        res.redirect('/sprint-14/tribal-provider-details');
    })


    router.post('/sprint-14/tribal-provider-displayname', function (req, res) {
        res.redirect('/sprint-14/tribal-provider-details');
    })
    router.post('/sprint-14/tribal-provider-information', function (req, res) {
        res.redirect('/sprint-14/tribal-provider-details');
    })

}