const express = require("express");
const router = express.Router();
// const student = require("../controllers/student")
const page = require("../controllers/page")
const auth = require("../controllers/auth")

// Get Page
router.route('/').get(page.index);

router.route('/index').get(page.index);

router.route('/about').get(page.about);

router.route('/blog').get(page.blog);

router.route('/contact').get(page.contact);

router.route('/course').get(page.course);

router.route('/login').get(auth.login);

router.route('/register').get(auth.signup);

router.route('/login').post(auth.authenticate);

router.route('/register').post(auth.store);

router.route('/logout').post(auth.logout)
// router.route('/profile').get(student.show);

// router.route('/register').post(student.store);

// router.route('/login').post(student.authenticate);

// router.route('/updateProfile').post(student.update);

router.route('/profile').get((req, res) => {
    res.render('profile')
});

module.exports = router;