const HTTPError = require('../utils/errors/HTTPError');

const schemaValidation = (schema) => (req, res, next) => {
    try{
        const data = req.body;
        // eslint-disable-next-line no-unused-vars
        const {value, error} = schema.validate(data);
        if(error){
            throw new HTTPError(error.message, 400);
        }
        next();
    }
    catch(err){
        if(err instanceof HTTPError){
            res.status(err.code).send(err.message);
        }
        else{
            res.status(500).send(err.message);
        }
    }
};

module.exports = schemaValidation; 