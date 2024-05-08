const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ status: false, message: "Unauthorized user", result: [] });
        } else {
            token = token.split(' ')[1];
            let user = jwt.verify(token, 'test');
            req.userId = user.id;
        }

        next();
    } catch (err) {
        return res.status(401).json({ status: false, message: "Unauthorized user", result: [] });
    }
}

module.exports = auth;
