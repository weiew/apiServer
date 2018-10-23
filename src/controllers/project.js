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
export let selection = async(ctx) => {
  let body = ctx.request.body;
  let result = await projectService.userTopLevelProject(body.ownerId);
  ctx.body = result
}

export let addProject = async(ctx) => {
  let body = ctx.request.body;
  let result = await projectService.addProject(body);
  ctx.body = result
}

export let editProject = async(ctx) => {
  let body = ctx.request.body;
  let result = await projectService.editProject(body);
  ctx.body = result
}

export let projectInfo = async(ctx) => {
  let body = ctx.request.body;
  let result = await projectService.projectInfo(body.projectId);
  ctx.body = result
}
