const mustBeLoggedIn = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send('You must be logged in')
    }
    next()
}

const selfOnly = action => (req, res, next) => {
    if (req.params.id !== req.user.id) {
        return res.status(403).send(`You can only ${action} yourself.`)
    }
    next()
}

const assertAdmin = (req, res, next) => {
    if (!req.user) throwError(401, 'unauthorized')
    if (!req.user.admin) throwError(403, 'forbidden')
    next()
}

function throwError(status, message) {
    let err = new Error(message)
    err.status
    throw err
}

const forbidden = message => (req, res) => {
    res.status(403).send(message)
}

module.exports = {
    mustBeLoggedIn,
    assertAdmin,
    throwError,
    forbidden,
    selfOnly
}