// controllers/admin.controller.js
const { Admin } = require('../config/db')
const { errorServer } = require('../helpers/ErrorMessage')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const createAdmin = async (req, res) => {
  const { username, password, adminPassword } = req.body;
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.status(400).json({ message: 'Invalid admin password' });
  }

  try {
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(password, salt);
    const admin = await Admin.create({
      username,
      password: hashedPassword
    });
    delete admin.dataValues.password;
    return res.status(201).json({ admin });
  } catch (error) {
    errorServer(res, error);
  }
};

const loginAdmin = async (req, res) => {
  const { username, password } = req.body
  try {
    const admin = await Admin.findOne({ where: { username } })
    if (!admin) return res.status(400).json({ message: 'Invalid credentials' })
    const validPassword = bcrypt.compareSync(password, admin.password)
    if (!validPassword) return res.status(400).json({ message: 'Wrong password' })
    
    const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '8h' })
    return res.status(200).json({ token })
  } catch (error) {
    errorServer(res, error)
  }
}

module.exports = {
  createAdmin,
  loginAdmin
}