import projectsModel from "../models/projectsModel"
import apiDataModel from "../models/apiDataModel";
let projectService = {
  projectList: async(ownerId) => {
    try{
      let projects = await projectsModel.findAll({where:{$or:[{ownerId:ownerId}]}})
      if(projects.length<1){ //如果没有返回默认共用的一级项目
        projects = await projectsModel.findAll({where:{$or:[{ownerId:'default'}]}})
      }
      return {
        code: '200',
        msg: 'success',
        dto: projects
      }
    }catch (err){
      console.log(err)
      throw new Error(err);
    }
  },
  userTopLevelProject: async(ownerId) => {
    try{
      let projects = [{value:'0',label:'无'}];
      let levelOne = await projectsModel.findAll({where:{$or:[{ownerId:ownerId,parentId:'0'}]}});
      levelOne.forEach(item =>{
        projects.push({value:item.id, label:item.name})
      })
      return {
        code: '200',
        msg: 'success',
        dto: projects
      }
    }catch (err){
      console.log(err)
      throw new Error(err);
    }
  },
  addProject: async(data) => {
    try{
      let newInfo = {
        ownerId:data.ownerId,
        name:data.name,
        parentId:data.parentId,
        descript:data.descript,
        type:'0',
        status:'0',
      }
      let newProjectInfo = await projectsModel.create(newInfo);
      return {
        code: '200',
        msg: 'success',
        dto: newProjectInfo
      }
    }catch (err){
      console.log(err)
      throw new Error(err);
    }
  },
  editProject: async(data) => {
    try{
      let projectById = await projectsModel.find({where:{$or:[{id:data.id}]}});
      data.name && (projectById.name = data.name);
      data.descript && (projectById.descript = data.descript);
      data.descriptionMD && (projectById.descriptionMD = data.descriptionMD);
      projectById.updateTime = Date.now();
      projectById.save();
      return {
        code: '200',
        msg: 'success',
        dto: projectById
      }
    }catch (err){
      console.log(err)
      throw new Error(err);
    }
  },
  projectInfo: async(projectId) => {
    try{
      let projectInfo = await projectsModel.find({where:{$or:[{id:projectId}]}});
      let apiList = await apiDataModel.findAll({where:{$or:[{projectId:projectId}]}});
      return {
        code: '200',
        msg: 'success',
        projectInfo: projectInfo,
        apiList:apiList
      }
    }catch (err){
      console.log(err)
      throw new Error(err);
    }
  },
};
export default projectService;
