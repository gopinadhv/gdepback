const { Tnc_Users, Tnc_UserEmails, Tnc_clients } = require("../models");
const { to, ReE, ReS } = require("../services/util.service");
const authService = require('../services/auth.service');
const CONFIG = require('../config/config');
const bcrypt = require('bcrypt');
var phantom = require('phantom');
var fs = require('fs');


var Sequelize = require("sequelize");
const { config } = require("dotenv");
const Op = Sequelize.Op;


const sendEmailUser = async function (req, res) {
    let activeData;
    [err, activeData] = await to(
        Tnc_Users.findAll({
            attributes: ["id", "firstName", 'lastName', 'email'],
            where: {
                isEmailSent: 0,
            },
        })
    );


    if (activeData && activeData.length) {
        var jsondata = JSON.parse(JSON.stringify(activeData));
        console.log(jsondata, "js")
        console.log(jsondata.length, "len")

        for (let x = 0; x < jsondata.length; x++) {
            const element = jsondata[x];
            console.log(element, "ele")
            const salts = 12; // Number of salt rounds for bcrypt
            var encriptedEmailBe = await bcrypt.hash(element.email, salts);

            var result = '<style><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></style>';
            var htmlTemplate = result + '<br/>'
            htmlTemplate = htmlTemplate + `<h5 style="color:black; font-family: Times New Roman">Hi ${element.firstName} ${element.lastName},</h5>`
            htmlTemplate = htmlTemplate + `<p style="color:black; font-size:15px; font-family: Times New Roman">Link : <a href="${CONFIG.url}tc.html?${encriptedEmailBe}">${CONFIG.url}tc.html?${encriptedEmailBe}</a></p>`;
            htmlTemplate = htmlTemplate + `<p style="color:black;font-size:15px; font-family: Times New Roman">Thanks & Regards,<br>DFX.<br> </p>`

            var mailData = {};

            mailData['to_email'] = `${element.email}`;
            mailData['cc'] = 'upamulapati@mitresources.com';
            mailData['html'] = htmlTemplate;
            mailData['subject'] = `Terms and Conditions`;

            authService.expDateMail(mailData, async function (data) {
                if (data.success == true) {
                    let bodyList = {};
                    bodyList['isEmailSent'] = 1;
                    await to(Tnc_Users.find({
                        where: {
                            id: element.id
                        }
                    }).then(tcLink => {
                        tcLink.updateAttributes(bodyList)
                    }))

                    var data = {}
                    data["userId"] = element.id;
                    data['emailSent'] = 1;
                    data["emailSentDateTime"] = new Date();
                    data["tcLink"] = encriptedEmailBe
                    data["linkStatus"] = 1;
                    console.log(data)
                    let attendanceData;
                    [err, attendanceData] = await to(Tnc_UserEmails.create(data));
                }
                else {
                    //error 
                    console.log("Error while sending mail")
                }
            })





        }
        // if (err) TE(err.message);
        return ReS(res, { activeData: activeData });
    } else {
        return res.status(200).json({ msg: false, err: 'No Data Found' });

    }
}
module.exports.sendEmailUser = sendEmailUser;



const sendPasswordandURLCheck = async function (req, res) {
    console.log(req.body, "api")
    var body = {};
    body = req.body;
    // console.log()

    if (body.encriptedEmail) {
        let activeData;
        [err, activeData] = await to(
            Tnc_Users.findOne({
                attributes: ["id", "firstName", 'lastName', 'email', 'clientType', 'isEmailSent'],
                include: [
                    {
                        model: Tnc_UserEmails,
                        as: "user",
                        attributes: ["id", "userId"],
                        where: {
                            tcLink: body.encriptedEmail,
                            linkStatus: 1
                        },
                    },

                ],
            })
        );
        console.log(activeData, "ac")

        if (activeData) {
            var jsondata = JSON.parse(JSON.stringify(activeData));
            if (jsondata && jsondata.email) {
                if (jsondata.isEmailSent == 1) {
                    bcrypt.compare(jsondata.email, body.encriptedEmail, async function (err, results) {
                        if (err) {
                            throw new Error(err)
                        }
                        if (results) {

                            const randomNumber = Math.floor(100000 + Math.random() * 900000);
                            var password = randomNumber.toString();

                            const saltRounds = 10; // the number of salt rounds to use for hashing
                            var hashedPassword = await bcrypt.hash(password, saltRounds);

                            if (hashedPassword) {
                                dateFormat = (date) => {
                                    var d = new Date(date);
                                    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                                }

                                let body = {};
                                body['passwordTC'] = hashedPassword;
                                body['passwordDateTime'] = new Date();
                                await to(Tnc_Users.find({
                                    where: {
                                        email: jsondata.email
                                    }
                                }).then(tcLink => {
                                    tcLink.updateAttributes(body)
                                }))

                                var result = '<style><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></style>';
                                var htmlTemplate = result + '<br/>'
                                htmlTemplate = htmlTemplate + `<h5 style="color:black; font-family: Times New Roman">Hi ${jsondata.firstName} ${jsondata.lastName},</h5>`
                                htmlTemplate = htmlTemplate + `<p style="color:black; font-size:15px; font-family: Times New Roman">Password : ${password}</p>`;

                                htmlTemplate = htmlTemplate + `<p style="color:black;font-size:15px; font-family: Times New Roman">Thanks & Regards,<br>DFX.<br> </p>`


                                var mailData = {};
                                mailData['to_email'] = `${jsondata.email}`;
                                mailData['cc'] = 'upamulapati@mitresources.com';
                                mailData['html'] = htmlTemplate;
                                mailData['subject'] = `Terms and Conditions Password`;

                                authService.expDateMail(mailData, async function (data) {
                                    console.log(data);
                                    if (data.success == true) {
                                        if (jsondata.id) {


                                            let bodyList = {};
                                            bodyList['isEmailSent'] = 2;
                                            await to(Tnc_Users.find({
                                                where: {
                                                    id: jsondata.id
                                                }
                                            }).then(tcLink => {
                                                tcLink.updateAttributes(bodyList)
                                            }))

                                        }

                                        // return res.status(200).json({ msg: true, email: jsondata.email, data: jsondata });
                                    }
                                })

                            }
                        } else {
                            return res.status(401).json({ msg: false, error: 'Link does not match' })
                        }
                    })
                }
                else if (jsondata.isEmailSent == 2) {
                    return res.status(200).json({ msg: true, data: jsondata })

                }



            }
            else {

                return res.status(200).json({ msg: false, error: 'Email not not available' })

            }
            res.status(200).json({ msg: true, email: jsondata.email, data: jsondata });

        } else {
            return res.status(200).json({ msg: false, error: 'Record not available' })

        }
        if (err) TE(err.message);

    }
}
module.exports.sendPasswordandURLCheck = sendPasswordandURLCheck;



const passwordCheck = async function (req, res) {
    var body = {};
    body = req.body;

    if (body.email) {
        let activeData;
        [err, activeData] = await to(
            Tnc_Users.findOne({
                attributes: ["id", "firstName", 'lastName', 'email', 'clientType', 'isEmailSent', 'passwordTC'],
                where: {
                    email: body.email,
                },
                include: [
                    {
                        model: Tnc_clients,
                        as: "clints",
                        attributes: ["id", "clintName"],

                    },
                    {
                        model: Tnc_UserEmails,
                        as: "user",
                    },

                ],
            })
        );
        if (activeData) {
            var jsondata = JSON.parse(JSON.stringify(activeData));

            if (jsondata && jsondata.passwordTC) {
                bcrypt.compare(body.tncPassword, jsondata.passwordTC, async function (err, results) {

                    if (err) {
                        throw new Error(err)
                    }
                    if (results) {

                        return res.status(200).json({ msg: true, clints: jsondata.clints ? jsondata.clints : '', uData: jsondata })
                    } else {
                        return res.status(200).json({ msg: false, error: 'Password does not match' })
                    }
                })
            }
            else {
                return res.status(200).json({ msg: false, error: 'Password not available' })
            }
        } else {
            return res.status(200).json({ msg: false, error: 'Record not available' })
        }
        if (err) TE(err.message);

    }

}
module.exports.passwordCheck = passwordCheck;


const savePdf = async function (req, res) {
    var body = {};
    body = req.body;
    console.log(body)

    if (body.id) {

        let bodyList = {};
        bodyList['tcAcceptorDeclineStatus'] = body.tcAcceptorDeclineStatus;
        bodyList['tcAcceptorDeclineDateTime'] = new Date()

        await to(Tnc_UserEmails.find({
            where: {
                userId: body.id
            }
        }).then(tcLink => {
            tcLink.updateAttributes(bodyList)
        }))


        let activeData;
        [err, activeData] = await to(
            Tnc_Users.findOne({
                where: {
                    id: body.id,
                },
                include: [
                    {
                        model: Tnc_clients,
                        as: "clints",
                    },
                    {
                        model: Tnc_UserEmails,
                        as: "user",
                    },

                ],
            })
        );
        if (activeData) {
            var jsonEmailData = JSON.stringify(activeData);
            var jsondata = JSON.parse(jsonEmailData);
            console.log(jsondata, "json")

            if (jsondata.clientType == 1) {

                var pdfData = ''

                var writeStream = fs.createWriteStream("./download/" + jsondata.firstName + '_' + jsondata.id + "tc.html");

                writeStream.write(`<div style="margin-top:5px;margin-bottom: 2px;font-family: Arial, Helvetica, sans-serif;">
            <div style="text-align:center"> Tearms and Conditions </div>
             <p>1.Users acknowledges that this service is available only within the service area where indicated SSID Free Airport Wi-Fi by NT.</p>
       <p> 2.To access the service,users must register fill out personal information via SSID specified in item 1.</p>
       <p>3.Users can use the service continuously for 1 hour. When the time limit expires,the system will disconnect if the user wishes to continue using. Can register </p>
       <p>4.Users acknowledges that this service is available only within the service area where indicated SSID Free Airport Wi-Fi by NT.</p>
       <p>5.To access the service,users must register fill out personal information via SSID specified in item 1.</p>
       <p>6.Users can use the service continuously for 1 hour. When the time limit expires,the system will disconnect if the user wishes to continue using. Can register </p>
       <p>7.Users can use the service continuously for 1 hour. When the time limit expires,the system will disconnect if the user wishes to continue using. Can register </p>
       <p>8.Users acknowledges that this service is available only within the service area where indicated SSID Free Airport Wi-Fi by NT.</p>
                                      
                        <ul>                `);


                jsondata.clints.forEach(element => {
                    pdfData = pdfData + `
            <li>${element.clintName}</li>
          `
                });

                pdfData = pdfData + `
          </ul>	
          </div>	
          
        `;

                pdfData = pdfData + ` ${jsondata.firstName}  ${jsondata.lastName} `;



                writeStream.write(pdfData);
                // writeStream.write("<div style='page-break-before: always;'>next page</div>");



                writeStream.end();
                phantom.create().then(function (ph) {
                    ph.createPage({ format: 'A4', orientation: 'portrait' }).then(function (page) {

                        page.property('paperSize', { format: 'A4', orientation: 'portrait', margin: '0.1cm' });
                        page.open("./download/" + jsondata.firstName + '_' + jsondata.id + "tc.html").then(function (err, status) {
                            page.render("./download/" + jsondata.firstName + '_' + jsondata.id + "tc.pdf").then(function () {
                                var temp = {};
                                temp.path_name = "./download/" + jsondata.firstName + '_' + jsondata.id + "tc.pdf";
                                temp.file_name = '' + jsondata.id + 'termsAndConditions.pdf';

                                res.json(temp);
                                ph.exit();
                            });
                        });
                    });
                });
            }
            else {
                var pdfData = ''

                var writeStream = fs.createWriteStream("./download/" + jsondata.id + "termsAndConditions.html");

                writeStream.write(`<div style="margin-top:5px;margin-bottom: 2px;font-family: Arial, Helvetica, sans-serif;">
            <div style="text-align:center"> Tearms and Conditions </div>
            <p>
              Terms and Conditions "Service" means the wireless internet access for public use from Internet Service Provider under the SSID Free Airport Wi-Fi by NT "Service Provider" means National Telecom Public Company Limited. (NT) and SKY ICT Public Company Limited "User" means a person both of Thai and foreigners who are eligible to access by registering with Wi-Fi of SSID provider.
            </p>
            <p>
              "Computer Data" means data, statements,or set of instructions contained in a computer system,the output of which may be processed by a computer system including electronic data,according to the Law of Electronic Transactions.
            </p>
                                      
                        </div>                `);




                pdfData = pdfData + ` ${jsondata.firstName}  ${jsondata.lastName} `;



                writeStream.write(pdfData);



                writeStream.end();
                phantom.create().then(function (ph) {
                    ph.createPage({ format: 'A4', orientation: 'portrait' }).then(function (page) {

                        page.property('paperSize', { format: 'A4', orientation: 'portrait', margin: '0.1cm' });
                        page.open("./download/" + jsondata.id + "termsAndConditions.html").then(function (err, status) {
                            page.render("./download/" + jsondata.id + "termsAndConditions.pdf").then(function () {
                                //delete file 

                                var temp = {};
                                temp.path_name = "./download/" + jsondata.id + "termsAndConditions.pdf";
                                // temp.file_name = '' + jsondata.id + 'termsAndConditions.pdf';

                                res.json(temp);
                                ph.exit();
                            });
                        });
                    });
                });
            }

            return res.status(200).json({ msg: true, clints: jsondata.clints ? jsondata.clints : '', uData: jsondata })

        } else {
            return res.status(200).json({ msg: false, error: 'Record not available' })

        }


        if (err) TE(err.message);



    }




}
module.exports.savePdf = savePdf;





