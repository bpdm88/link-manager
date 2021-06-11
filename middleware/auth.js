const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  try {
    const token = req.cookies.token

    if (!token) return res.status(401).json({ errorMessage: 'unauthorised' })

    const validatedUser = jwt.verify(token, process.env.JWT_SECRET)

    req.user = validatedUser.id

    next()
  } catch (error) {
    return res.status(401).json({ errorMessage: 'unauthorised' })
  }
}

module.exports = auth
