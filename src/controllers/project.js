
import path from 'path'
import fs from 'fs'
import validator from '../tool/validator'

export let projectInfo = (ctx) => {
  let requestData=ctx.request.body;

  console.log('projectsInfo');
  let projectsInfo=[{
    'id':'0',
    'ownerId':'admin00001',
    'name':'第一个项目',
    'type':'0',
    'descript':'这是一个日常项目',
    'createTime':'2018-07-20 10:00:00',
    'updateTime':'2018-07-20 10:00:00',
    'status':'1'},
    {
    'id':'1',
    'ownerId':'admin00001',
    'name':'第二个前端项目',
    'type':'1',
    'descript':'这是一个前端项目',
    'createTime':'2018-07-20 10:00:00',
    'updateTime':'2018-07-20 10:00:00',
    'status':'1'}];

  ctx.body = {
    result: '100',
    msg: '获取成功',
    dto:projectsInfo,
  }
}
