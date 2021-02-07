import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";

export const jwtCheck = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://gambia-care.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://gambiacare.herokuapp.com/api',
    issuer: 'https://gambia-care.eu.auth0.com/',
    algorithms: ['RS256']
});

