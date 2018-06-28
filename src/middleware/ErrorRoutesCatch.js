module.exports = function () {
  return function (ctx, next) {
    return next().catch((err) => {
      switch (err.status) {
        case 401:
          ctx.status = 200
          ctx.body = {
            result: 401,
            msg: 'Authentication Error',
            msgInfo:'Protected resource, use Authorization header to get access.',
          }
          break
        case 498:
          ctx.status = 200
          ctx.body = {
            result: 498,
            msg: err.errorMsg,
            msgInfo:err.errorInfo,
          }
          break
        default:
          throw err
      }
    })
  }
}
