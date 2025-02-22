// middlewares/validateToken.js
const jwt = require('jsonwebtoken')

const validateAdminToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied' })
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    req.admin = verified
    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' })
  }
}

module.exports = { validateAdminToken }
