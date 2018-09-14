
import path from 'path'
import jsonwebtoken from 'jsonwebtoken'
import fs from 'fs'
import validator from '../tool/validator'
import userServices from '../services/userServices'
import {webToken} from '../lib/webToken'
export let login = async(ctx) => {
  let {account,password} = ctx.request.body;
  let result =  await userServices.login(account,password)
  ctx.body = result
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
    code: '200',
    msg: '获取成功',
    dto:userInfo,
  }
}

export let register = async (ctx) => {
  let userInfo = ctx.request.body;
  validator(userInfo,
    {
      account:'account',
      email:'email',
      //mobile:'allphpneCanNull', 前期先不做要求吧
      //gender:'gender',放到用户信息里面去 默认空
      //age:'ageCanNull',放到用户信息里面去 默认空
      password:'password'
    }
  );
  let result = await userServices.addUser({
    loginAccount:userInfo.account,
    email:userInfo.email,
    password:userInfo.password,
    mobile:userInfo.mobile?userInfo.mobile:'-',
  })
  ctx.body = result;
}
