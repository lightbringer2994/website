Accounts.emailTemplates.siteName = 'GoDunk';
Accounts.emailTemplates.from     = 'GoDunk <admin@godunk.com>';

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return '[GoDunk] Verify Your Email Address';
  },

  text(user, url) {
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = url.replace('#/', ''),
        supportEmail   = 'support@godunk.com',
        emailBody      = `To verify your email address (${emailAddress}) visit the following link:

${urlWithoutHash}

 If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  },
};
