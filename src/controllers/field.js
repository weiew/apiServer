
import path from 'path'
import fs from 'fs'
import validator from '../tool/validator'

export let fieldInfo = (ctx) => {
  let requestData=ctx.request.body;

  console.log('fieldsInfo');
  let fieldsInfo=[{
    'id':'0',
    'interfaceId':'0',
    'parentId':'',
    'name':'account',
    'type':'string',
    'isNeed':'1',
    'example':'admin',
    'instruction':'登录名',
    'operatorId':'0',
    'createTime':'2018-07-20 10:00:00',
    'updateTime':'2018-07-20 10:00:00',
    },
    {
      'id':'1',
      'interfaceId':'0',
      'parentId':'',
      'name':'password',
      'type':'string',
      'isNeed':'1',
      'example':'6~16,字母数字下划线',
      'instruction':'登录密码',
      'operatorId':'0',
      'createTime':'2018-07-20 10:00:00',
      'updateTime':'2018-07-20 10:00:00',},
    {
      'id':'2',
      'interfaceId':'0',
      'parentId':'',
      'name':'testData',
      'type':'object',
      'isNeed':'1',
      'example':'',
      'instruction':'测试信息',
      'operatorId':'0',
      'createTime':'2018-07-20 10:00:00',
      'updateTime':'2018-07-20 10:00:00',},
    {
      'id':'3',
      'interfaceId':'0',
      'parentId':'2',
      'name':'testMsg',
      'type':'string',
      'isNeed':'1',
      'example':'asdfasdf',
      'instruction':'测试信息-msg',
      'operatorId':'0',
      'createTime':'2018-07-20 10:00:00',
      'updateTime':'2018-07-20 10:00:00',}];

  ctx.body = {
    result: '100',
    msg: '获取成功',
    dto:fieldsInfo,
  }
}
