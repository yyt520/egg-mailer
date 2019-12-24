'use strict';
// 引入nodemailer包
const nodemailer = require('nodemailer');

class Mail {
  constructor(app) {
    this.app = app;
    this.config = app.config;
    this.app.mailer = nodemailer.createTransport(this.config.mailer); // 利用nodemailer的createTransport方法创建绑定发送者对象，参数应该由引用处提供
    this.app.mailer.send = this.sendMailMethod; // 使用创建的transport对象定义发送方法
  }
  async sendMailMethod(data, callback) {
    if (!this.app.mailer) {
      console.log('发送者对象创建失败');
      return;
    }
    // 指定发送内容中的from
    const maildata = Object.assign({}, {
      from: this.config.mailer.auth.user,

    }, data); // 利用Object.assign()把data中的数据赋值给maildata，并指定from为config中的user


    if (typeof callback === 'function') {
      this.app.mailer.sendMail(maildata, callback);
      return;
    }
    // 在Promise对象中定义sendMail方法
    return new Promise((resolve, reject) => {
      this.app.mailer.sendMail(maildata, function(err, info) {
        if (err) {
          reject(err);
        }
        resolve(info);
      });
    });
  }
}

module.exports = Mail;
