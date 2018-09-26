import projectService from '../services/projectService'
export let list = async(ctx) => {
  let body = ctx.request.body;
  let result = await projectService.projectList(body.ownerId);
  ctx.body = result
}
export let info = async(ctx) => {
  let body = ctx.request.body;
  let result = await projectService.projectList(body.ownerId);
  ctx.body = result
}
