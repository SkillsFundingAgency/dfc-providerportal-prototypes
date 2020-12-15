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

    // Nested checkbox journey for provider type

        router.post('/sprint-18/tribal-provider-type', function (req, res) {

            // Check that at least one provider type has been selected
            if (req.session.data['s18-provider-type']){

                // if provider type of T Levels is checked but no specific T Levels have been selected
                if (req.session.data['s18-provider-type'].includes("T Levels") && !req.session.data['s18-provider-type-tlevels']){

                    res.redirect('/sprint-18/tribal-provider-type-error');

                } else {

                    // is a T Level provider and has at least 1 specific T Level selected

                    if ( req.session.data['s18-prev-provider-type'].includes("T Levels") && !req.session.data['s18-provider-type'].includes("T Levels") ){

                        // provider type of T Levels has been removed
                        req.session.data['s18-provider-type-removed-tlevels'] = true;
                        res.redirect('/sprint-18/tribal-provider-removetypecheck');

                    } else {

                        if (req.session.data['s18-prev-provider-type-tlevels'].includes("Design, Surveying and Planning for Construction") && !req.session.data['s18-provider-type-tlevels'].includes("Design, Surveying and Planning for Construction") ) {
                            req.session.data['s18-provider-removedtlevel-design'] = true;
                        }

                        if (req.session.data['s18-prev-provider-type-tlevels'].includes("Digital Production, Design and Development") && !req.session.data['s18-provider-type-tlevels'].includes("Digital Production, Design and Development") ){
                            req.session.data['s18-provider-removedtlevel-digital'] = true;
                        }
                        
                        if (req.session.data['s18-prev-provider-type-tlevels'].includes("Education and Childcare") && !req.session.data['s18-provider-type-tlevels'].includes("Education and Childcare")) {
                            req.session.data['s18-provider-removedtlevel-education'] = true;
                        }

                        if ( 
                            // if a specific T Level checkbox is unselected
                            (req.session.data['s18-provider-removedtlevel-design'] == true)
                            || 
                            (req.session.data['s18-provider-removedtlevel-digital'] == true)
                            ||
                            (req.session.data['s18-provider-removedtlevel-education'] == true)){

                            res.redirect('/sprint-18/tribal-provider-removetlevel');

                        } else {

                            req.session.data['s18-prev-provider-type'] = req.session.data['s18-provider-type'];
                            req.session.data['s18-prev-provider-type-tlevels'] = req.session.data['s18-provider-type-tlevels'];
                            res.redirect('/sprint-18/tribal-provider');
                        
                        }

                    }

                }

            } else {
                
                req.session.data['s18-provider-type-removed'] = true;

                if ( req.session.data['s18-prev-provider-type'].includes("T Levels") ){
                    req.session.data['s18-provider-type-removed-tlevels'] = true;
                }

                res.redirect('/sprint-18/tribal-provider-removetypecheck');

            }

        })

        router.post('/sprint-18/tribal-provider-type-error', function (req, res) {

            if (req.session.data['s18-provider-type'].includes("T Levels") && !req.session.data['s18-provider-type-tlevels']){
                res.redirect('/sprint-18/tribal-provider-type-error');
            }

            if (req.session.data['s18-prev-provider-type-tlevels'].includes("Design, Surveying and Planning for Construction") && !req.session.data['s18-provider-type-tlevels'].includes("Design, Surveying and Planning for Construction") ) {
                req.session.data['s18-provider-removedtlevel-design'] = true;
            }

            if (req.session.data['s18-prev-provider-type-tlevels'].includes("Digital Production, Design and Development") && !req.session.data['s18-provider-type-tlevels'].includes("Digital Production, Design and Development") ){
                req.session.data['s18-provider-removedtlevel-digital'] = true;
            }
            
            if (req.session.data['s18-prev-provider-type-tlevels'].includes("Education and Childcare") && !req.session.data['s18-provider-type-tlevels'].includes("Education and Childcare")) {
                req.session.data['s18-provider-removedtlevel-education'] = true;
            }

            if ( 
                // if a specific T Level checkbox is unselected
                (req.session.data['s18-provider-removedtlevel-design'] == true)
                || 
                (req.session.data['s18-provider-removedtlevel-digital'] == true)
                ||
                (req.session.data['s18-provider-removedtlevel-education'] == true)){

                res.redirect('/sprint-18/tribal-provider-removetlevel');

            } else {

                req.session.data['s18-prev-provider-type'] = req.session.data['s18-provider-type'];
                req.session.data['s18-prev-provider-type-tlevels'] = req.session.data['s18-provider-type-tlevels'];
                res.redirect('/sprint-18/tribal-provider');
            
            }

            //res.redirect('/sprint-18/tribal-provider');
        })

        router.post('/sprint-18/tribal-provider-removetypecheck', function (req, res) {
            if (req.session.data['s18-provider-type-remove-areyousure'] == "Yes"){
                
                //req.session.data['s18-provider-type'] = null;
                req.session.data['s18-prev-provider-type'] = req.session.data['s18-provider-type'];
                
                req.session.data['s18-provider-type-removed'] = false;
                /*
                req.session.data['s18-provider-type-removed-fecourses'] = false;
                req.session.data['s18-provider-type-removed-apprenticeships'] = false;
                */
               req.session.data['s18-provider-type-removed-tlevels'] = false;
                res.redirect('/sprint-18/tribal-provider');
            
            } else {

                req.session.data['s18-provider-type'] = req.session.data['s18-prev-provider-type'];
                res.redirect('/sprint-18/tribal-provider-type');

            }
        })

        router.post('/sprint-18/tribal-provider-removetlevel', function (req, res) {

            if (req.session.data['s18-provider-tlevel-remove-areyousure'] == "Yes"){
                
                req.session.data['s18-prev-provider-tlevel'] = req.session.data['s18-provider-tlevel'];
                req.session.data['s18-prev-provider-type-tlevels'] = req.session.data['s18-provider-type-tlevels'];
                
                req.session.data['s18-provider-tlevel-removed'] = false;
                req.session.data['s18-provider-tlevel-removed-tlevels'] = false;

                req.session.data['s18-provider-removedtlevel-design'] = false
                req.session.data['s18-provider-removedtlevel-digital'] = false
                req.session.data['s18-provider-removedtlevel-education'] = false
                
                res.redirect('/sprint-18/tribal-provider');
            
            } else {

                req.session.data['s18-provider-tlevel'] = req.session.data['s18-prev-provider-tlevel'];
                req.session.data['s18-provider-type-tlevels'] = req.session.data['s18-prev-provider-type-tlevels'];
                res.redirect('/sprint-18/tribal-provider-type');

            }
        })
            


    // Set variables for editing a T Level
        router.get('/sprint-18/tlevels-setvars', function (req, res) {
            if (!req.session.data["s18-tlevels-details-location"]){
                req.session.data["s18-tlevels-details-reference"] = "REF12234"
                req.session.data["s18-tlevels-details-startdate-day"] = "21"
                req.session.data["s18-tlevels-details-startdate-month"] = "9"
                req.session.data["s18-tlevels-details-startdate-monthname"] = "Sep"
                req.session.data["s18-tlevels-details-startdate-year"] = "2020"
                req.session.data["s18-tlevels-details-location"] = ["Park Campus"]
                req.session.data["s18-tlevels-desc-whothiscourseisfor"] = "This T Level is suitable for anyone wanting a career in construction, specifically in surveying and design, civil engineering, building services design, or hazardous materials surveying. During the two-year programme, you will learn the core knowledge and skills that underpin many jobs in the construction industry. Your learning will combine 40 weeks of classroom theory and practical learning and a minimum of 9 weeks with an employer."
                req.session.data["s18-tlevels-desc-entryrequirements"] = "You will need either, 5 GCSE passes (grade 4 or above), including English, maths and science or a pass in a relevant level 2 qualification."
                req.session.data["s18-tlevels-desc-whatyoulllearn"] = "You'll learn specific topics in design, surveying and planning: Project management, Budgeting and resource allocation, Procurement, Risk management. In addition to the core content, you will have the option to study one of the following specialisms: Surveying and design for construction and the built environment, Civil engineering, Building services design, Hazardous materials analysis and surveying."
                req.session.data["s18-tlevels-desc-howyoulllearn"] = "Your learning will combine 40 weeks of classroom theory and practical learning and include a minimum of 9 weeks with an employer. The industry placement will provide you with a real experience of the workplace. You will take part in investigative and practical work and during the T Level you will be expected to do private study and e-learning."
                req.session.data["s18-tlevels-desc-howassessed"] = "A written examination will take place at the end of the T Level and task based assessments will take place throughout the T Level."
                req.session.data["s18-tlevels-desc-whatyoucandonext"] = "This T Level has been developed in collaboration with employers and businesses so the content will meet the needs of the industry and prepare you for work, providing you the knowledge and experience needed to open the door to highly skilled employment, an Apprenticeship or higher-level study. You can progress into roles such as: Civil engineering technician, Technical surveyor, Building technician, Engineering construction technician, Architectural technician."
            }
            res.redirect('/sprint-18/tlevels-list');
        })

        router.post('/sprint-18/tlevels-edit', function (req, res) {
            req.session.data["s18-tlevels-details-startdate-monthname"] = monthNumToShortName(req.session.data["s18-tlevels-details-startdate-month"]);
            res.redirect('/sprint-18/tlevels-checkanswers');
        })

        router.post('/sprint-18/tlevels-checkanswers', function (req, res) {
            res.redirect('/sprint-18/tlevels-confirmation');
        })



}