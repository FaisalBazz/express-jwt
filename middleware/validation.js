const joi = require('@hapi/joi');

const validation = data => {
    const schema = joi.object({
        username: joi.string().min(6).required(),
        password: joi.string().min(6).required(),
        email: joi.string().min(6).required(),
    })

    return schema.validate(data)
}

module.exports.validation = validation

