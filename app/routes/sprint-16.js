module.exports = function (router) {

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

    // Set variables for T Level locations


        router.get('/sprint-16/tlevels-setvars', function (req, res) {
            if (!req.session.data['s16-tlevels-details-location']){
                req.session.data['s16-tlevels-details-location'] = ["Avenue Campus","Medway Campus"]
                req.session.data["s16-tlevels-desc-whothiscourseisfor"] = "This T Level is suitable for anyone wanting a career in construction, specifically in surveying and design, civil engineering, building services design, or hazardous materials surveying. During the two-year programme, you will learn the core knowledge and skills that underpin many jobs in the construction industry. Your learning will combine 40 weeks of classroom theory and practical learning and a minimum of 9 weeks with an employer."
                req.session.data["s16-tlevels-desc-entryrequirements"] = "You will need either, 5 GCSE passes (grade 4 or above), including English, maths and science or a pass in a relevant level 2 qualification."
                req.session.data["s16-tlevels-desc-whatyoulllearn"] = "You'll learn specific topics in design, surveying and planning: Project management, Budgeting and resource allocation, Procurement, Risk management. In addition to the core content, you will have the option to study one of the following specialisms: Surveying and design for construction and the built environment, Civil engineering, Building services design, Hazardous materials analysis and surveying."
                req.session.data["s16-tlevels-desc-howyoulllearn"] = "Your learning will combine 40 weeks of classroom theory and practical learning and include a minimum of 9 weeks with an employer. The industry placement will provide you with a real experience of the workplace. You will take part in investigative and practical work and during the T Level you will be expected to do private study and e-learning."
                req.session.data["s16-tlevels-desc-howassessed"] = "A written examination will take place at the end of the T Level and task based assessments will take place throughout the T Level."
                req.session.data["s16-tlevels-desc-whatyoucandonext"] = "This T Level has been developed in collaboration with employers and businesses so the content will meet the needs of the industry and prepare you for work, providing you the knowledge and experience needed to open the door to highly skilled employment, an Apprenticeship or higher-level study. You can progress into roles such as: Civil engineering technician, Technical surveyor, Building technician, Engineering construction technician, Architectural technician."
            }
            res.redirect('/sprint-16/tlevels-list');
        })

        router.post('/sprint-16/tlevels-edit-details', function (req, res) {
            req.session.data["s16-tlevels-details-startdate-monthname"] = monthNumToShortName(req.session.data["s16-tlevels-details-startdate-month"]);
            res.redirect('/sprint-16/tlevels-view-success');
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