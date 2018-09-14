
import path from 'path'
import fs from 'fs'
import validator from '../tool/validator'

export let moduleInfo = (ctx) => {
  let requestData=ctx.request.body;
  console.log('modulesInfo');
  let modulesInfo=[{
      'id':'0',
      'projectId':'1',
      'name':'模块一',
      'descript':'这是第一个模块',
      'prefixion':'http://test.api.com'
    },{
      'id':'1',
      'projectId':'1',
      'name':'模块二',
      'descript':'这是第二个模块',
      'prefixion':'http://test.api.com'
    }];
  ctx.body = {
    result: '100',
    msg: '获取成功',
    dto:modulesInfo,
  }
}
