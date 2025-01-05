// controllers/file.controller.js
const { File } = require('../config/db')
const AWS = require('aws-sdk')

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY
})

const uploadFile = async (req, res) => {
  const { session_id, type } = req.body
  const file = req.file

  try {
    const s3Response = await s3.upload({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${type}/${Date.now()}-${file.originalname}`,
      Body: file.buffer
    }).promise()

    const fileRecord = await File.create({
      session_id,
      type,
      url: s3Response.Location
    })

    return res.status(201).json({ file: fileRecord })
  } catch (error) {
    errorServer(res, error)
  }
}

const getSessionFiles = async (req, res) => {
  const { session_id } = req.params
  try {
    const files = await File.findAll({ where: { session_id } })
    return res.status(200).json({ files })
  } catch (error) {
    errorServer(res, error)
  }
}

const errorServer = (res, error) => {
  return res.status(500).json({ error: error.message })
}

module.exports = {
  uploadFile,
  getSessionFiles
}