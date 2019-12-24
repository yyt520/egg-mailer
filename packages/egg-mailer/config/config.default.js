'use strict';

/**
 * egg-email default config
 * @member Config#mailer
 * @property {String} SOME_KEY - some description
 */
exports.mailer = {
  host: 'smtp.ethereal.email',
  port: 465,
  secureConnection: true,
  auth: {
    user: null, // example-user
    pass: null, // example-pass
  },
};
