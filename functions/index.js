const functions = require('firebase-functions');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'appbaseapp@gmail.com',
    pass: '123HELLO123DHAKA'
  }
});

var mailOptions = {
  from: 'appbaseapp@gmail.com',
  to: 'kipi@utooemail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//


exports.helloWorld = functions.https.onRequest((request, response) => {
		transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    console.log(error);
		    response.send(error);
		  } else {
		    console.log('Email sent: ' + info.response);
		     response.send(info.response);
		  }
		});
});
