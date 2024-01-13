
const nodemailer = require("nodemailer");

// dfx

transporter = nodemailer.createTransport({
	host: "smtp.office365.com",
	Service: "Office365",
	auth: {
		user: "upamulapati@mitresources.com",
		// user: "<>upamulapati@mitresources.com",
		pass: "Mit@dev123"
	}
});

// var transporter = nodemailer.createTransport({
// 	service: 'gmail',
// 	host: 'smtp.gmail.com',
// 	//port: 587,
// 	//secure: false,
// 	auth: {
// 		user: 'mithr.mitresource@gmail.com',
// 		pass: 'orbbdnlrhboccoua'
// 	}
// });


const expDateMail = async function (mailData, callback) {//returns token

	var response = transporter.sendMail({

		from: mailData.from_email,
		to: mailData.to_email,
		cc: mailData.cc,
		subject: mailData.subject,                // Subject line
		text: mailData.text,                      // plaintext version
		html: mailData.html, // html version
	},
		(error, info) => {
			console.log(error, info)
			transporter.close();
			if (error) {
				;
				callback({ success: false });
				return 'error'
			} else {

				callback({ success: true });

				return 'success'
			}

		});
	return 'response';
}
module.exports.expDateMail = expDateMail;