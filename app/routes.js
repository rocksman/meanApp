var User = require('../app/models/users');
var Projects = require('../app/models/projects');
var Actions = require('../app/models/actions');
var jwt = require('jsonwebtoken');

var fbname;
var fbemail;
var fbrole;

module.exports = function (app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
    app.post('/login', function (req, res) {
        console.log(req.body);
        User.findOne({
            "local.email": req.body.email
        }, function (err, user) {
            if (err) throw err;
            console.log(user);
            if (!user) {
                res.send({ success: false, msg: 'Authentication failed. User not found.' });
            } else {
                // check if password matches
                if (user.validPassword(req.body.password)) {
                    res.json({ success: true, msg: "successfully logged in", user: user.local });
                } else {
                    res.send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            }
        });

    });

    app.post('/signup', (req, res, next) => {
        console.log("Signup");
        var newUser = new User();
        newUser.local.name = req.body.username;
        newUser.local.email = req.body.email;
        newUser.local.password = newUser.generateHash(req.body.password);
        newUser.local.role = req.body.roles;
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Username already exists.' });
            }
            res.json({ success: true, msg: 'Successful created new user.', user: newUser.local });
        });

    });

    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['public_profile', 'email']
    }));

    app.get('/auth/facebook/callback', function (req, res, next) {
        passport.authenticate('facebook', (err, user, info) => {
            this.fbemail = user.facebook.email;
            this.fbname = user.facebook.name;
            this.fbrole = user.facebook.role;
            if (err) { return res.send({ success: false }) }
            if (!user) { return res.redirect('/#/home') }
            req.logIn(user, function (err) {
                if (err) { return next(err); }
                User.findOne({ "facebook.email": user.facebook.email },
                    function (err, result) {
                        if (err)
                            throw err;

                        this.fbrole = result.facebook.role;
                    }
                )
                return res.redirect('/#/profile');
            });
        })(req, res, next)
    });
    app.get('/fblogin', function (req, res) {
        var data = {
            name: this.fbname,
            email: this.fbemail,
            role: this.fbrole
        }
        res.json(data);
    })
    app.post('/addproj', function (req, res) {
        var newAction = new Actions();
        var newProj = new Projects();
        newProj.projects.name = req.body.name;
        newProj.projects.amount_req = req.body.amount;
        newProj.projects.email = req.body.email;
        newProj.save(function (err) {
            if (err)
                return res.json({ success: false, msg: 'Failed to add' });
            // res.json({ success: true, msg: 'Project added.' });
            newAction.actions.emailfrom = req.body.email;
            newAction.actions.added = true;
            newAction.save(function (err) {
                if (err)
                    return res.json({ success: false, msg: 'Failed to add' });
                res.json({ success: true, msg: 'Project added.' });
            })
        })
    });
    app.get('/getproj', function (req, res) {
        Projects.find({}, { _id: 0, __v: 0 }, function (err, result) {
            if (err)
                res.send({ succes: "false" });
            console.log(result);

            res.json(result);
        })
    })
    app.post('/donate', function (req, res) {
        var newAction = new Actions();
        Projects.update({ "projects.name": req.body.proj }, { $set: { "projects.amount_req": 0 } },
            function (err) {
                console.log(req.body);
                if (err)
                    res.send({ succes: false, msg: "Something went wrong" });
                console.log("EmailTo: " + req.body.emailTo)
                newAction.actions.emailfrom = req.body.email;
                newAction.actions.donate = true;
                newAction.actions.amount_don = req.body.amount;
                newAction.actions.emailto = req.body.emailTo;
                newAction.save(function (err) {
                    if (err)
                        return res.json({ success: false, msg: 'Failed to add' });
                    res.json({ success: true, msg: 'Succesfully donated' });
                })
            }
        )
    })
    app.post('/getActions', function (req, res) {
        Actions.find({ $or: [{ "actions.emailto": req.body.email }, { "actions.emailfrom": req.body.email }] },
            { _id: 0, __v: 0 },
            function (err, result) {
                if (err)
                    res.send({ succes: false, msg: "Something went wrong" });
                res.json({ sucess: true, actions: result });
            })
    })
    app.get('/allActions', function (req, res) {
        console.log("ENTERED");
        Actions.find({}, { "_id": 0, "__v": 0 },
            function (err, result) {
                console.log(result);
                if (err)
                    res.json({ success: false, msg: "error occured" });
                res.send({ success: true, actions: result })
            })
    })
    app.post('/role', function (req, res) {
        console.log(req.body.email);
        User.update({ "facebook.email": req.body.email }, { $set: { "facebook.role": req.body.roles } },
            function (err) {
                if (err)
                    throw err;
                res.json({ success: true })
            }
        )
    })
}