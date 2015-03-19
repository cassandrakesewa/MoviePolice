Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  },
});

// Meteor.startup(function () {
//   process.env.MAIL_URL = 'smtp://moviepolicer@gmail.com:standardss@smtp.gmail.com:465';
// });