import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

import tokenKey from '../lib/webToken'

// 用户登录的时候返回token
// let token = jwt.sign({
//   userInfo: userInfo // 你要保存到token的数据
// }, publicKey, { expiresIn: '7d' })

/**
 * 检查授权是否合法
 */
export let CheckAuth = (ctx) => {
  console.log('check')
  let token = ctx.request.header.authorization
  try {
    let decoded = jwt.verify(token.substr(7), tokenKey)
    if (decoded.userInfo) {
      console.log("验证token成功.........")
      return {
        status: 1,
        result: decoded.userInfo
      }
    } else {
      return {
        status: 403,
        result: {
          errInfo: '没有授权'
        }
      }
    }
  } catch (err) {
    return {
      status: 503,
      result: {
        errInfo: '解密错误'
      }
    }
  }
}

export let Post = (ctx) => {
  console.log('Post U')
  switch (ctx.params.action) {
    case 'check':
      return CheckAuth(ctx).then(result => { ctx.body = result })
    default:
      return CheckAuth(ctx).then(result => { ctx.body = result })
  }
}
