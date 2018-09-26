
import path from 'path'
import jsonwebtoken from 'jsonwebtoken'
import fs from 'fs'
import validator from '../tool/validator'
import userServices from '../services/userService'
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

export let userInfoByToken = async(ctx) => {
  let result = await userServices.queryUserInfo({
    loginAccount:ctx.request.body.account,
  })
  if(result.loginAccount){
    ctx.body = {
      code: '200',
      msg: '获取成功',
      dto:result,
    }
  }else{
    ctx.body = result;
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
  if(result.code == '200'){
    let infoResult = await userServices.addUserInfo(result.newUser)
  }
  delete result.newUser;
  ctx.body = result;
}
