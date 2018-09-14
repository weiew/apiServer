import KoaRouter from 'koa-router'
import controllers from '../controllers/index.js'

const router = new KoaRouter()

router
  .get('/public/get', function (ctx, next) {
    ctx.body = '禁止访问！'
  }) // 以/public开头则不用经过权限认证
  .all('/upload', controllers.upload.default)
  .get('/api/:name', controllers.api.Get)
  .post('/api/:name', controllers.api.Post)
  .put('/api/:name', controllers.api.Put)
  .del('/api/:name', controllers.api.Delete)
  .post('/auth/:action', controllers.auth.Post)
  // .post('/api/user/login', controllers.user.login)
  .get('/api/user/login', controllers.user.login)
  .post('/api/user/userInfo', controllers.user.userInfo)



  .post('/api/project/info', controllers.project.projectInfo)
  .post('/api/module/info', controllers.module.moduleInfo)
  .post('/api/interface/info', controllers.interface.interfaceInfo)
  .post('/api/field/info', controllers.field.fieldInfo)

  .post('/api/user/login', controllers.user.login)
  .post('/api/user/userInfoByToken', controllers.user.userInfoByToken)
  .post('/api/user/register', controllers.user.register);

module.exports = router
