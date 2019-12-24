# egg-egg-mailer

此插件是使用egg-plugin框架开发，内部基于nodemailer实现的一个邮件小插件，详情可阅读nodemailer文档 https://github.com/nodemailer/nodemailer 
和egg开发插件说明书 https://eggjs.org/zh-cn/advanced/plugin.html


## Install

```bash
$ npm i egg-mailer --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mailer = {
  enable: true,
  package: 'egg-mailer',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.mailer = {
  host: "smtp.ethereal.email",
  port: 465,
  secureConnection: true,
  auth: {
    user: testAccount.user//example-user
    pass: testAccount.pass,

  }

```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
```js
//app/controller/home.js
class HomeController extends Controller {

  async index() {
    const { ctx, app } = this;
    app.mailer.send({
      from: 'testAccount.user',
      to: 'testAccount1.user',
      subject: 'hello',
      text: 'hello ustack',
      html: "<div>hello this is ustack</div>",

    },function (err,info){
      if (err) {
        throw err;
      }
      console.log(info);

    });
    ctx.body = 'this is mailer base on egg-plugin';
  }
}






```


## Questions & Suggestions

Please open an issue [here](https://jira.ustack.com/browse/UOSP).

## License

[Apache](LICENSE)
