const errorServer = (res, error) => {
    console.log({
      message: error.message,
      sqlMessage: error?.parent?.sqlMessage || 'N/A',
    })
    return res.status(500).json({
      success: false,
      message: 'Please contact the Admin!!',
    })
  }
  
  module.exports = {
    errorServer,
  }
  