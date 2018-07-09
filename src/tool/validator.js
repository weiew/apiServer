var Regexs = {
  email: (/^[0-9a-z][0-9a-z\-\_\.]+@([0-9a-z][0-9a-z\-]*\.)+[a-z]{2,}$/i),//邮箱
  phone: (/^0[0-9]{2,3}[2-9][0-9]{6,7}$/),//座机手机号码
  ydphpne: (/^((13[4-9])|(15[012789])|147|182|187|188)[0-9]{8}$/),//移动手机号码
  allphpne: (/^((13[0-9])|(15[0-9])|(18[0-9]))[0-9]{8}$/),//所有手机号码
  ltphpne: (/^((13[0-2])|(15[56])|(186)|(145))[0-9]{8}$/),//联通手机号码
  dxphpne: (/^((133)|(153)|(180)|(189))[0-9]{8}$/),//电信手机号码
  url: (/^http:\/\/([0-9a-z][0-9a-z\-]*\.)+[a-z]{2,}(:\d+)?\/[0-9a-z%\-_\/\.]+/i),//网址
  num: (/[^0-9]/),//数字
  cnum: (/[^0-9a-zA-Z_.-]/),
  photo: (/\.jpg$|\.jpeg$|\.gif$/i),//图片格式
  row: (/\n/ig),
  gender: (/^[01]{1}$/),//性别
  age: (/^([1-9]\d?|1\d{2})$/),//性别
  name: (/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/),//姓名：数字字母汉字下划线
  password:(/^[0-9a-zA-Z_]{6,16}$/),
};
var RegexsName = {
  email: '邮箱',//邮箱
  phone: '座机号码',//座机手机号码
  ydphpne: '移动手机号码',//移动手机号码
  allphpne: '手机号码',//所有手机号码
  ltphpne: '联通手机号码',//联通手机号码
  dxphpne: '电信手机号码',//电信手机号码
  url: '网址',//网址
  num: '数字',//数字
  cnum: '账号',
  photo: '图片',//图片格式
  row: '什么',
  gender: '性别',
  age: '年龄',
  name: '名称',
  password: '密码',
}
/**
 * @return 若符合对应的格式，返回true，否则返回false
 */
function chkFormat(str, ftype, canNull, localLabel) {
  var nReg = Regexs[ftype];
  if (str == null || str == "") {
    if (canNull) {
        return false;
    }else{
        return (localLabel?localLabel:RegexsName[ftype]) + '不能为空'; //输入为空，认为是验证通过
    }
  }

  if (nReg.test(str)) {
    return false;
  } else {
    return (localLabel?localLabel:RegexsName[ftype]) + '格式不正确';
  }
};
function chkChinese(s) {
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 255) return true;
  }
  return false;
};

module.exports = (data, checkList) => {
  let result=false;
  let dataKey="";
  Object.keys(checkList).forEach(function(key){
    let localLabel=false;
    let regexTarget=checkList[key];
    if(regexTarget.indexOf("$")>=0){
      localLabel=regexTarget.split("$")[1];
      regexTarget=regexTarget.split("$")[0];

    }
    let canNull = regexTarget.indexOf("CanNull")>=0;
    if(!result){
      result=chkFormat(data[key],regexTarget.replace("CanNull",""),canNull,localLabel);
      dataKey=key;
    }
  });
  if(result){
    throw {
      status:498,
      errorMsg:result,
      errorInfo:dataKey+'未通过校验',
    }
  }
};
