import projectsModel from "../models/projectsModel"
import apiDataModel from "../models/apiDataModel";
let shareService = {
  shareInfo: async(project,api) => {
    try{
      console.log("shareInfo")
      let projectInfo = {};
      let apiList = {};
      let apiDetail = {};
      if(project){
        projectInfo = await projectsModel.find({where:{$or:[{id:project}]}});
        apiList = await apiDataModel.findAll({where:{$or:[{projectId:project}]}});
      }
      if(api){
        apiDetail = await apiDataModel.find({where:{$or:[{id:api}]}});
      }
      return {
        code: '200',
        msg: 'success',
        projectInfo: projectInfo,
        apiList:apiList,
        apiDetail:apiDetail,
      }
    }catch (err){
      console.log(err)
      throw new Error(err);
    }
  },
};
export default shareService;
