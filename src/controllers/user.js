
import path from 'path'
import jsonwebtoken from 'jsonwebtoken'
import fs from 'fs'
import validator from '../tool/validator'

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
        data: ctx.request.body.account,
        exp: Math.floor(Date.now() / 1000) + (60 * 60) // 设置 token 过期时间 60 seconds * 60 minutes = 1 hour
      }, publicKey)
  ctx.body = {
    result: '100',
    msg: '登录成功',
    dto:{
      token: token,
    },
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

export let userInfoByToken = (ctx) => {
  console.log('userInfo');
  let userInfo={
    'id':'0',
    'loginAccount':'admin00001',
    'name':'魏艳吉',
    'mobile':'18515007527',
    'email':'zms-bd@163.com',
    'gender':'1',
    'age':'26',
    'profilePicture':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530164926316&di=51729718de1ef37beba19363e07a552a&imgtype=0&src=http%3A%2F%2Fbig5.xinhuanet.com%2Fgate%2Fbig5%2Fwww.xinhuanet.com%2Fsports%2Ftitlepic%2F12769%2F127693029_1429075944904_title0h.jpg',
    'address':'北京市昌平区回龙观',
    'personalitySign':'做一个有逼格没逼事的二逼',
    'status':'1'};
  ctx.body = {
    result: '100',
    msg: '获取成功',
    dto:userInfo,
  }
}

export let register = (ctx) => {
  console.log('register');
  let userInfo=ctx.request.body;

  validator(userInfo,
    {
      name:'name',
      email:'email',
      mobile:'allphpneCanNull',
      gender:'gender',
      age:'ageCanNull',
    }
  );

  ctx.body = {
    result: '100',
    msg: '注册成功',
  }
}
