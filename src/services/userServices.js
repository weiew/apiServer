import userModel from "../models/userModel"
import loginModel from "../models/loginModel"
import {email} from '../lib/mainUtil'
import saltMD5 from '../lib/saltMD5'
import {webToken} from "../lib/webToken";
let userService = {
  addUser: async(data)=>{
    try{
      let accountExists = await loginModel.find({where:{$or:[{loginAccount:data.loginAccount}]}});
      let emailExists = await loginModel.find({where:{$or:[{email:data.email}]}});
      if(accountExists){
        return {code:400,msg:'账号已存在'}
      }
      if(emailExists){
        return {code:400,msg:'邮箱已存在'}
      }
      const pwdMd5 = saltMD5.md5AddSalt(data.password)
      data.password = pwdMd5.md5Password;
      data.salt = pwdMd5.salt;
      console.log(data)
      let newUser = await loginModel.create(data)
      if(newUser.id){
        let e = await email.sendMail(newUser.email,'认证邮件', '你已经成功注册API')
      }
      // t.commit();
      return {code:"200",msg:"恭喜您注册成功，请前往邮箱验证"};
    }catch (err){
      console.error(err);
      //  t.rollback();
      throw new Error(err);
    }
  },
  login: async(loginAccount,password,email) => {
    try{
      let queryData = [
        {loginAccount:loginAccount}
      ];
      let User = await loginModel.find({where:{$or:queryData}})
      if(!User){
        return {code:300,msg:'用户不存在'}
      }else if(User.password != saltMD5.md5Salt(password,User.salt)){
        return {code:300,msg:'密码不正确'}
      }
      let success = {
        code: 200,
        dto:{
          token: webToken.create({
            id:loginAccount,
            password: password
          })
        },
        msg: '登录成功'
      }
      return success
    }catch (err){
      console.log(err)
      throw new Error(err);
    }
  }
};
/*userService.prototype.login = async(loginName,pw,userEmail) => {
  try{
    let queryData = [
      {userEmail:loginName},
      {loginName:loginName}
    ];
    let User = await userModel.find({where:{$or:queryData}})
    console.dir(User)
    console.log(User.password, saltMD5.md5Salt(pw,User.salt))
    if(!User){
      return {code:300,msg:'用户不存在'}
    }else if(User.password != saltMD5.md5Salt(pw,User.salt)){
      return {code:300,msg:'密码不正确'}
    }
    let token = await tokenUtil.getSession(User);
    return token
  }catch (err){
    console.log(err)
    throw new Error(err);
  }
}



userService.prototype.getStu = async(type,page = 1,pageno =10)=>{
  try {

    let sql = `SELECT
                     u.*, ug.name groupName
                    FROM
                        3m_user u
                    LEFT JOIN 3m_user_group ug ON ug.id = u.group_id`;
    let users = await userModel.findAll({where:type,offset: (page-1)*pageno, limit: pageno});
    let count = await userModel.count({where:type})
    let User = await sequelize.query(sql);
    return {users:users,count:count,page:page,pageno:pageno};
  } catch (error) {
    throw new Error(error);
  }
}

userService.prototype.resetPasswordByUserId = async(userId,pw) => {
  try{
    var t = await sequelize.transaction({  autocommit: true })
    let User = await userModel.findOne({where:{id:userId}})
    if(!User){
      t.rollback();
      return {code:0,msg:'用户不存在'}
    }
    let updateUser = await userModel.update({password:pw.md5Pass,salt:pw.salt},{where:{id:userId}});
    t.commit();
    return updateUser
  }catch (err){
    t.rollback();
    throw new Error(err);
  }
}

userService.prototype.updatePwByTelphone = async(tel,pw) => {
  try{
    var t = await sequelize.transaction({  autocommit: true })
    let User = await userModel.findOne({where:{userMobile:tel}})
    if(!User){
      t.rollback
      return {code:0,msg:'用户不存在'}
    }
    let updateUser = await userModel.update({password:pw.md5Pass,salt:pw.salt},{where:{userMobile:tel}});
    t.commit();
    return updateUser
  }catch (err){
    t.rollback();
    throw new Error(err);
  }
}

userService.prototype.updateUserByUserId = async(userId,data)=>{
  try {
    var t = await sequelize.transaction({  autocommit: true })
    let oldUser = await userModel.findAll({where:{id:userId}},{transaction: t});
    if(!oldUser[0]){
      t.rollback()
      return {msg:'用户不存在'}
    }
    if(data.loginName){
      let loginNameUser = await userModel.findAll({where:{loginName:data.loginName}},{transaction: t});
      if(loginNameUser[0]){
        t.rollback()
        return {code:1,msg:'用户名已存在'}
      }
    }
    let updateUser = await userModel.update(data,{where:{id:userId}},{transaction: t});
    let updateAfterUser = await userModel.find({where:{id:userId}},{transaction: t});
    await t.commit();
    delete updateAfterUser.password;
    delete updateAfterUser.salt
    return updateAfterUser
  } catch (error) {
    t.rollback();
    throw new Error(error);
  }
}

userService.prototype.delUserByUserId = async(userId) => {
  let t = await sequelize.transaction({  autocommit: true })
  try {
    let User = await userModel.find({where:{id:userId}},{transaction: t});
    if(!User){
      t.rollback()
      return {msg:'用户不存在'}
    }
    let delUser = await userModel.destroy({where:{id:userId}},{transaction: t});
    await t.commit();
    return delUser
  } catch (error) {
    t.rollback();
    throw new Error(error);
  }

}*/
export default userService;
