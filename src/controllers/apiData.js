import apiDataService from '../services/apiDataService'
export let apiList = async(ctx) => {
  let body = ctx.request.body;
  let result = await apiDataService.apiList(body.projectId);
  ctx.body = result
}
export let addApi = async(ctx) => {
  let body = ctx.request.body;
  let result = await apiDataService.addApi(body);
  ctx.body = result
}

export let editApi = async(ctx) => {
  let body = ctx.request.body;
  let result = await apiDataService.editApi(body);
  ctx.body = result
}
export let apiDetail = async(ctx) => {
  let body = ctx.request.body;
  let result = await apiDataService.apiDetail(body.id);
  ctx.body = result
}

