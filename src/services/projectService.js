import projectsModel from "../models/projectsModel"
let projectService = {
  projectList: async(ownerId) => {
    try{
      let projects = await projectsModel.find({where:{$or:[{ownerId:ownerId}]}})
      if(!projects){ //如果没有则创建默认一级项目
        projects = await projectsModel.create({
          ownerId:ownerId,
          name:'一级项目',
          type:'0',
          descript:'默认一级项目'
        })
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
};
export default projectService;
