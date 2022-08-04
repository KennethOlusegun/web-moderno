module.exports = middleware => {
    return (req, res, next) => {
        console.log(req.body)
        if(req.body.admin) {
            middleware(req, res, next)
        } else {
            res.status(401).send('User is not admin')
        }
    }
}