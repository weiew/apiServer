import apiModel from "../models/apiDataModel"
let apiDataService = {
  addApi: async(data)=>{
    try{
      let newInfo = {
        projectId: data.projectId,
        editor: data.editor,
        name: data.name,
        type: data.type,
        address: data.address,
        paramIn: data.paramIn,
        paramOut: data.paramOut,
        version: "1",
        status: '0'
      };
      let newApi = await apiModel.create(newInfo);
      return {
        code: '200',
        msg: 'success',
        dto: newApi
      }
    }catch (err){
      console.error(err);
      //  t.rollback();
      throw new Error(err);
    }
  },
  editApi: async(data)=>{
    try{
      let apiById = await apiModel.find({where:{$or:[{id:data.id}]}});
      console.log(apiById)
      data.name && (apiById.name = data.name);
      data.type && (apiById.type = data.type);
      data.paramIn && (apiById.paramIn = data.paramIn);
      data.paramOut && (apiById.paramOut = data.paramOut);
      data.paramMaxIdIn && (apiById.paramMaxIdIn = data.paramMaxIdIn);
      data.paramMaxIdOut && (apiById.paramMaxIdOut = data.paramMaxIdOut);
      data.address && (apiById.address = data.address);
      data.editor && (apiById.editor = data.editor);
      data.status && (apiById.status = data.status);
      data.descriptionMD && (apiById.descriptionMD = data.descriptionMD);
      apiById.updateTime = Date.now();
      apiById.version ++;
      apiById.save();
      return {
        code: '200',
        msg: 'success',
        dto: apiById
      }
    }catch (err){
      console.error(err);
      //  t.rollback();
      throw new Error(err);
    }
  },
  apiDetail: async(id)=>{
    try{
      let detail = await apiModel.find({where:{$or:[{id:id}]}});
      if(!detail){
        return {
          code: '300',
          msg: '查无此接口'
        }
      }else{
        return {
          code: '200',
          msg: 'success',
          dto: detail
        }
      }
    }catch (err){
      console.error(err);
      //  t.rollback();
      throw new Error(err);
    }
  },
};
export default apiDataService;
