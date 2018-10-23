import shareService from '../services/shareService'
export let shareInfo = async(ctx) => {
  let body = ctx.request.body;
  let result = await shareService.shareInfo(body.project,body.api);
  ctx.body = result
}
