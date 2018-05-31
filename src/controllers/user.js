
import path from 'path'
import jsonwebtoken from 'jsonwebtoken'
import fs from 'fs'
const publicKey = fs.readFileSync(path.join(__dirname, '../../publicKey.pub'))
export let login = (ctx) => {
  if (ctx.request.header.authentication) {
    console.log('bbb')
    try {
      let verifyResult = jsonwebtoken.verify(ctx.request.header.authentication, publicKey)
      console.log(verifyResult)
    } catch (e) {
      console.log(e)
    }
  }
  // jsonwebtoken.sign({id:'userABC'},publicKey,{expiresIn:1*60/*24*60*60 1 days*/})
  let token = jsonwebtoken.sign({
        data: 'weiew',
        exp: Math.floor(Date.now() / 1000) + (60 * 60) // 设置 token 过期时间 60 seconds * 60 minutes = 1 hour
      }, publicKey)
  ctx.body = {
    result: 'login',
    token: token,
    name: ctx.params.name,
    para: ctx.request.body
  }
}

export let userInfo = (ctx) => {
  console.log('userInfo')
  ctx.body = {
    result: 'userInfo',
    userName: 'weiew',
    name: ctx.params.name,
    para: ctx.request.body
  }
}
