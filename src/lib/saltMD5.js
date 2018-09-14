const key="api.weiew.net";
import crypto from 'crypto'
let saltMD5 = {
  md5AddSalt:function(password){
    let salt=Math.floor(Math.random()*100);
    let decipher = crypto.createHash('md5',key);
    let md5Password=decipher.update(password+""+salt).digest("hex");
    return {
      salt:salt,
      md5Password:md5Password
    };
  },
  md5:function(password){
    let md5Password = crypto.createHash('md5').update(password).digest("hex");
    return md5Password
  },
  md5Salt:function(password,salt){
    if(salt == null){
      salt = '';
    }
    let decipher = crypto.createHash('md5',key);
    return decipher.update(password+salt).digest("hex");
  }
}
export default saltMD5
