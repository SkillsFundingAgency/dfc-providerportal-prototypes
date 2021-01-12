module.exports = function (router) {

    router.post('/sprint-19/venues-delete', function (req, res) {

        if (req.session.data['s19-delete-sure'] == "Yes, Delete"){
            
            res.redirect('/sprint-19/venues-delete-success');
        
        } else {
            
            res.redirect('/sprint-19/venues');

        }
    })

}