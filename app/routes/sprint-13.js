module.exports = function (router) {

    var months = [
        'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September',
        'October', 'November', 'December'
        ];
    
    function monthNumToName(monthnum) {
        return months[monthnum - 1] || '';
    }

    router.post('/sprint-13/tlevels-add', function (req, res) {

        // Clear previous sessions from add journey
        req.session.data['tlevels-desc-whothiscourseisfor'] = "";
        req.session.data['tlevels-desc-entryrequirements'] = "";
        req.session.data['tlevels-desc-whatyoulllearn'] = "";
        req.session.data['tlevels-desc-howyoulllearn'] = "";
        req.session.data['tlevels-desc-howassessed'] = "";
        req.session.data['tlevels-desc-whatyoucandonext'] = "";

        // Which course was selected?
        if (req.session.data['tlevels'] == "T Level in Design, Surveying and Planning for Construction") {
            req.session.data['selectedcourse'] = "design";
        }
        if (req.session.data['tlevels'] == "T Level in Digital Production, Design and Development") {
            req.session.data['selectedcourse'] = "digital";
        }
        if (req.session.data['tlevels'] == "T Level in Education and Childcare") {
            req.session.data['selectedcourse'] = "education";
        }

        // Populate current journey variables from those stored from previous journey
        req.session.data['tlevels-desc-whothiscourseisfor'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-whothiscourseisfor'];
        req.session.data['tlevels-desc-entryrequirements'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-entryrequirements'];
        req.session.data['tlevels-desc-whatyoulllearn'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-whatyoulllearn'];
        req.session.data['tlevels-desc-howyoulllearn'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-howyoulllearn'];
        req.session.data['tlevels-desc-howassessed'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-howassessed'];
        req.session.data['tlevels-desc-whatyoucandonext'] = req.session.data['tlevels-parent-' + req.session.data['selectedcourse'] + '-whatyoucandonext'];

        res.redirect('/sprint-13/tlevels-description');
    })

    router.post('/sprint-13/tlevels-description', function (req, res) {
        res.redirect('/sprint-13/tlevels-details');
    })

    router.post('/sprint-13/tlevels-details', function (req, res) {
        req.session.data['tlevels-details-startdate-monthname'] = monthNumToName(req.session.data['tlevels-details-startdate-month']);
        res.redirect('/sprint-13/tlevels-checkanswers');
    })

    router.post('/sprint-13/tlevels-checkanswers', function (req, res) {
        req.session.data['sprint13-tlevels-count'] = req.session.data['sprint13-tlevels-count'] + 1;

        // Store data from journey to be able to present later on same T Level add journey
        if (req.session.data['tlevels'] == "T Level in Design, Surveying and Planning for Construction") {
            req.session.data['coursetosave'] = "design";
        }
        if (req.session.data['tlevels'] == "T Level in Digital Production, Design and Development") {
            req.session.data['coursetosave'] = "digital";
        }
        if (req.session.data['tlevels'] == "T Level in Education and Childcare") {
            req.session.data['coursetosave'] = "education";
        }
        
        req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-whothiscourseisfor'] = req.session.data['tlevels-desc-whothiscourseisfor'];
        req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-entryrequirements'] = req.session.data['tlevels-desc-entryrequirements'];
        req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-whatyoulllearn'] = req.session.data['tlevels-desc-whatyoulllearn'];
        req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-howyoulllearn'] = req.session.data['tlevels-desc-howyoulllearn'];
        req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-howassessed'] = req.session.data['tlevels-desc-howassessed'];
        req.session.data['tlevels-parent-' + req.session.data['coursetosave'] + '-whatyoucandonext'] = req.session.data['tlevels-desc-whatyoucandonext'];

        res.redirect('/sprint-13/tlevels-confirmation');
    })

}