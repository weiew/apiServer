import Hashids from 'Hashids'
import _uuid from 'uuid'
import nodemailer from 'nodemailer'
import nodemailerSmtpTransport from 'nodemailer-smtp-transport'
const length4db32=32;
export let uuid = {
    byLength:function(length){
      const hids=new Hashids(_uuid.v1(),length);
      return hids.encrypt(1);
    },
    db32:function(){
      let hids=new Hashids(_uuid.v1(),32);
      return hids.encode(1);
    },
    db36:function(){
      return _uuid.v1();
    }
}
/**
 *
 * @Description 邮件发送
 * 调用方法:sendMail('amor_zhang@qq.com','这是测试邮件', 'Hi Amor,这是一封测试邮件');
 *
 */
let smtpTransport = nodemailer.createTransport(nodemailerSmtpTransport({
  service: "QQ",
  auth: {
    user: "137685761@qq.com",
    pass: "mmylovpoznfmbhbh"
  }
}));
/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
export let email = {
  sendMail: async(recipient, subject, html) => {
    return  await smtpTransport.sendMail({
      from: "137685761@qq.com",
      to: recipient,
      subject: subject,
      html: html
    })
  }
}
