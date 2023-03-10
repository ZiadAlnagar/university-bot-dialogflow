const student = require("../model/student");
const bcrypt = require("bcrypt");
const path = require("path");

exports.login = (req, res, next) => {
    res.render('auth/login')
};

exports.signup = (req, res, next) => {
    res.render('auth/register')
};

exports.authenticate = (req, res, next) => {
    let email = req.body.email;
    let pass = req.body.password;
    // console.log(req.body);
    student.findOne({ email: email }).exec(async (err, student) => {
        if (err) res.send("authentication faild");
        // console.log(student)
        const match = await bcrypt.compare(pass, student.password);
        if (match) {
            req.session.name = student.name;
            req.session.email = student.email;
            req.session.logged = true;
            req.session.save();
            console.log(req.session);
            res.redirect('/profile');
        }
    });
};

exports.store = async (req, res, next) => {
    // Hash Configuration
    const saltRounds = 10;
    // console.log(req.body);
    hashedPass = await bcrypt.hash(req.body.password, saltRounds);
    let user = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
    };
    // console.log(user);
    student.create(user, (err, student) => {
        if (err) res.send(err + student);
        req.session.name = student.name;
        req.session.email = student.email;
        req.session.logged = true;
        req.session.save();
        res.redirect('/profile')
    });
};

exports.logout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}