const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        console.log(req);
        db.User
            .findOne({ email: req.email })
            .then(userData => res.json(userData))
            .catch(err => res.status(422).json(err));
    }
}
