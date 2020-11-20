module.exports = function (router) {

    var months = [
        'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September',
        'October', 'November', 'December'
        ];
    
    function monthNumToName(monthnum) {
        return months[monthnum - 1] || '';
    }


    // Set variables for T Level locations


        router.get('/sprint-16/tlevels-view', function (req, res) {
            if (!req.session.data['tlevels-details-location']){
                req.session.data['tlevels-details-location'] = ["Avenue Campus","Medway Campus"]
            }
            res.render('sprint-16/tlevels-view');
        })

        router.post('/sprint-16/tlevels-edit', function (req, res) {
            res.redirect('/sprint-16/tlevels-edit-checkanswers');
        })



    // Nested checkbox journey for provider type

        router.post('/sprint-16/tribal-provider-type', function (req, res) {
            if (!req.session.data['provider-type']){
                req.session.data['provider-type'] == "None";
            } else if (req.session.data['provider-type'].includes("T Levels") && !req.session.data['provider-type-tlevels']){
                res.redirect('/sprint-16/tribal-provider-type-error');
            }
            res.redirect('/sprint-16/tribal-provider-details');
        })
        router.post('/sprint-16/tribal-provider-type-error', function (req, res) {
            if (req.session.data['provider-type'].includes("T Levels") && !req.session.data['provider-type-tlevels']){
                res.redirect('/sprint-16/tribal-provider-type-error');
            }
            res.redirect('/sprint-16/tribal-provider-details');
        })


    // Archived split screen journey for provider type 

        router.get('/sprint-16/split-page-provider-type/tribal-provider-details', function (req, res) {
            if (req.session.data['provider-type-backup']){
                req.session.data['provider-type'] = req.session.data['provider-type-backup']
            }
            res.render('sprint-16/split-page-provider-type/tribal-provider-details');
        })

        router.post('/sprint-16/split-page-provider-type/tribal-provider-type', function (req, res) {
            if (!req.session.data['provider-type']){
                req.session.data['provider-type'] = "None";
            } else if (req.session.data['provider-type'].includes("T Levels")){
                res.redirect('/sprint-16/split-page-provider-type/tribal-provider-tlevels');
            }
            req.session.data['provider-type-backup'] = req.session.data['provider-type'] //set fallback provider typ eif incomplete journey
            res.redirect('/sprint-16/split-page-provider-type/tribal-provider-details');
        })
        router.post('/sprint-16/split-page-provider-type/tribal-provider-tlevels', function (req, res) {
            if (!req.session.data['provider-type-tlevels']){
                res.redirect('/sprint-16/split-page-provider-type/tribal-provider-tlevels-error');
            }
            req.session.data['provider-type-backup'] = req.session.data['provider-type'] //set fallback provider typ eif incomplete journey
            res.redirect('/sprint-16/split-page-provider-type/tribal-provider-details');
        })
        router.post('/sprint-16/split-page-provider-type/tribal-provider-tlevels-error', function (req, res) {
            if (!req.session.data['provider-type-tlevels']){
                res.redirect('/sprint-16/split-page-provider-type/tribal-provider-tlevels-error');
            }
            req.session.data['provider-type-backup'] = req.session.data['provider-type'] //set fallback provider typ eif incomplete journey
            res.redirect('/sprint-16/split-page-provider-type/tribal-provider-details');
        })

    // Add location journey

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