const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            erro: "Token não fornecido"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        jwt.verify(token, process.env.JWT_SECRET);

        next();

    } catch (error) {

        return res.status(403).json({
            erro: "Token inválido"
        });

    }

}

module.exports = authMiddleware;