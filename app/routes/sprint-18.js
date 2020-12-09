module.exports = function (router) {

    // Nested checkbox journey for provider type

        router.post('/sprint-18/tribal-provider-type', function (req, res) {
            if (req.session.data['s18-provider-type'].includes("T Levels") && !req.session.data['s18-provider-type-tlevels']){
                res.redirect('/sprint-18/tribal-provider-type-error');
            } else {

                // check if current array of provider types has at least what the prev array has
                // or just chekc if it has something missing

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

                if ( req.session.data['s18-prev-provider-type'].includes("T Levels") && !req.session.data['s18-provider-type'].includes("T Levels") ){
                    // T Levels has been removed
                    req.session.data['s18-provider-type-removed'] = true;
                    req.session.data['s18-provider-type-removed-tlevels'] = true;
                }

                if (req.session.data['s18-provider-type-removed'] == true){
                    res.redirect('/sprint-18/tribal-provider-removetypecheck');
                } else {
                    res.redirect('/sprint-18/tribal-provider');
                }



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

}