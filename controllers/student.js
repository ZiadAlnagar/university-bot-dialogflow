// create read update delete crud

// Returns profile
exports.show = (req, res, next) => { //show profile, send = get
    res.sendFile(path.join(__dirname, '../pages/index'));
};

// Returns signup
exports.create = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../pages/index'));
};

// Authenticate User
exports.authenticate = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../pages/index'));
};

// Returns login
exports.login = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../pages/index'));
};

// Stores in DB
exports.store = (req, res, next) => {
    res.post(path.join(__dirname, '../pages/index'));
};

// Returns userEdit
exports.edit = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../pages/index'));
};

// Updates DB Entry
exports.update = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../pages/index'));
};

// Deletes DB Entry
exports.delete = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../pages/index'));
};