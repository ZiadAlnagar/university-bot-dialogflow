const path = require('path');

exports.index = (req, res, next) => {
    res.render('index')
};

exports.about = (req, res, next) => {
    res.render('about')
};

exports.blog = (req, res, next) => {
    res.render('blog')
};

exports.contact = (req, res, next) => {
    res.render('contact')
};

exports.course = (req, res, next) => {
    res.render('course')
};