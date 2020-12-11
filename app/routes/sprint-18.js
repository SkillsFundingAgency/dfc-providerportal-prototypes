module.exports = function (router) {

    // Nested checkbox journey for provider type

        router.post('/sprint-18/tribal-provider-type', function (req, res) {

            // Check that  at least on provider type has been selected
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
                            (req.session.data['s18-provider-removedtlevel-education'] == true)
                        ){

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
            res.redirect('/sprint-18/tribal-provider');
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
                
                //req.session.data['s18-provider-tlevel'] = null;
                req.session.data['s18-prev-provider-tlevel'] = req.session.data['s18-provider-tlevel'];
                req.session.data['s18-prev-provider-type-tlevels'] = req.session.data['s18-provider-type-tlevels'];
                
                req.session.data['s18-provider-tlevel-removed'] = false;
                /*
                req.session.data['s18-provider-tlevel-removed-fecourses'] = false;
                req.session.data['s18-provider-tlevel-removed-apprenticeships'] = false;
                */
                req.session.data['s18-provider-tlevel-removed-tlevels'] = false;
                res.redirect('/sprint-18/tribal-provider');
            
            } else {


                req.session.data['s18-provider-removedtlevel-design'] = false
                req.session.data['s18-provider-removedtlevel-digital'] = false
                req.session.data['s18-provider-removedtlevel-education'] = false

                req.session.data['s18-provider-tlevel'] = req.session.data['s18-prev-provider-tlevel'];
                req.session.data['s18-provider-type-tlevels'] = req.session.data['s18-prev-provider-type-tlevels'];
                res.redirect('/sprint-18/tribal-provider-type');

            }
        })
            

}