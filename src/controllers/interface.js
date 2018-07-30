
import path from 'path'
import fs from 'fs'
import validator from '../tool/validator'

export let interfaceInfo = (ctx) => {
  let requestData=ctx.request.body;

  console.log('interfacesInfo');
  let interfacesInfo=[{
    'id':'0',
    'moduleId':'1',
    'name':'测试登录接口',
    'type':'0',
    'address':'test/user.test.login',
    'isEdit':'1',
    'createTime':'2018-07-20 10:00:00',
    'updateTime':'2018-07-20 10:00:00',
    'status':'1'},
    {
    'id':'1',
      'moduleId':'1',
      'name':'测试登出接口',
      'type':'0',
      'address':'test/user.test.logout',
      'isEdit':'1',
      'createTime':'2018-07-20 10:00:00',
      'updateTime':'2018-07-20 10:00:00',
      'status':'1'}];

  ctx.body = {
    result: '100',
    msg: '获取成功',
    dto:interfacesInfo,
  }
}
