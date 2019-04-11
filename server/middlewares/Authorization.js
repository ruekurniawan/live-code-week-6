module.exports = {
  Authorize : function (req, res, next) {
    if(req.user) {
      next()
    } else {
      res.status(404).json({
        msg: 'Unauthorize this page'
      })
    }
  }
}