let Router = require('koa-router')
let router = new Router()
router.get('/', (ctx, next) => {
        ctx.body = 'Hello - World!';
    })
    .get('/user', (ctx, next) => {
        ctx.body = 'user info';
    })
   .post('/users', (ctx, next) => {
        // ...
    })
    .put('/users/:id', (ctx, next) => {
        // ...
    })
    .del('/users/:id', (ctx, next) => {
        // ...
    })
    .all('/users/:id', (ctx, next) => {
        // ...
    })
module.exports = router