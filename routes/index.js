//Home
exports.home = function (req, res) {
    res.render("home",{
        title:"Tinza monitoring"
    });

};
//APPLICATION CLIENT
exports.application_client = function (req,res) {
    res.render("client", {
        title:'Application client',
        client:"application_client"
    })

};

//APPLICATION TRANSPORTEUR
exports.application_transporteur = function (req,res) {
    res.render("transporteur", {
        title:"Application transporteur"
    })

};
exports.application_simulateur = function (req,res) {
    res.render("simulateur", {
        title:"Simulateur"
    })

};
exports.curriculum = function (req,res) {
    res.render("mon_cv", {
        title:" Fofana Abou"
    })

};
