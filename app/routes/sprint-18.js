module.exports = function (router) {

    // Nested checkbox journey for provider type

        router.post('/sprint-18/tribal-provider-type', function (req, res) {

            if (req.session.data['s18-provider-type']){

                if (req.session.data['s18-provider-type'].includes("T Levels") && !req.session.data['s18-provider-type-tlevels']){
                    res.redirect('/sprint-18/tribal-provider-type-error');
                } else {

                    // check if current array of provider types has at least what the prev array has
                    // or just chekc if it has something missing
/*
                    if ( req.session.data['s18-prev-provider-type'].includes("FE Courses") && !req.session.data['s18-provider-type'].includes("FE Courses") ){
                        // FE Courses has been removed
                        req.session.data['s18-provider-type-removed'] = true;
                        req.session.data['s18-provider-type-removed-fecourses'] = true;
                    }

                    if ( req.session.data['s18-prev-provider-type'].includes("Apprenticeships") && !req.session.data['s18-provider-type'].includes("Apprenticeships") ){
                        // Apprenticeships has been removed
                        req.session.data['s18-provider-type-removed'] = true;
                        req.session.data['s18-provider-type-removed-apprenticeships'] = true;
                    }
*/
                    if ( req.session.data['s18-prev-provider-type'].includes("T Levels") && !req.session.data['s18-provider-type'].includes("T Levels") ){
                        // T Levels has been removed
                        //req.session.data['s18-provider-type-removed'] = true;
                        req.session.data['s18-provider-type-removed-tlevels'] = true;
                        res.redirect('/sprint-18/tribal-provider-removetypecheck');
                    } else {
                        req.session.data['s18-prev-provider-type'] = req.session.data['s18-provider-type'];
                        res.redirect('/sprint-18/tribal-provider');
                    }
/*
                    if (req.session.data['s18-provider-type-removed'] == true){
                        res.redirect('/sprint-18/tribal-provider-removetypecheck');
                    } else {
                        req.session.data['s18-prev-provider-type'] = req.session.data['s18-provider-type'];
                        res.redirect('/sprint-18/tribal-provider');
                    }
*/
                }

            } else {
                //delete(req.session.data['s18-provider-type']);
                req.session.data['s18-provider-type-removed'] = true;
                /*
                if ( req.session.data['s18-prev-provider-type'].includes("FE Courses") ){
                    req.session.data['s18-provider-type-removed-fecourses'] = true;
                }
                if ( req.session.data['s18-prev-provider-type'].includes("Apprenticeships") ){
                    req.session.data['s18-provider-type-removed-apprenticeships'] = true;
                }
                */
                if ( req.session.data['s18-prev-provider-type'].includes("T Levels") ){
                    req.session.data['s18-provider-type-removed-tlevels'] = true;
                }
                res.redirect('/sprint-18/tribal-provider-removetypecheck');

            }

            /*if (!req.session.data['s18-provider-type']){
                req.session.data['s18-provider-type'] == "None";
            } else if (req.session.data['s18-provider-type'].includes("T Levels") && !req.session.data['s18-provider-type-tlevels']){
                res.redirect('/sprint-18/tribal-provider-type-error');
            }*/
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
            

}