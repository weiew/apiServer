const Koa = require('koa')
const app = new Koa()
const http = require('http');
//const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const router = require('./routes')

const webpack = require("webpack");
const webpackConfig = require("./build/webpack.base.conf");
const devMiddleware = require("./build/devMiddleware");
const hotMiddleware = require('./build/hotMiddleware');
const compiler = webpack(webpackConfig);
app.use(devMiddleware(compiler));
app.use(hotMiddleware(compiler));
// error handler 错误处理
onerror(app)

// middlewares  方便获取 调用接口时post过来的数据，可以通过this.body直接去到相关数据
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});
// response
app.use(router.routes());

app.listen(3000,()=>{
    console.log("服务已启动，端口3000...")
});