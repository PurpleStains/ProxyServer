export const validate = (schema) => (req, res, next) => {
    const { error } = req.method === "POST" ? schema.validate(req.body) : schema.validate(req.query)
    if (error) {
        next(new Error(error.stack))
    } 
    next();
}