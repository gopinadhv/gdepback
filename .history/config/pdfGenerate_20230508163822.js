
const { JSON } = require("sequelize");
const logo = require("./fonts/Logo");

function tncListData(data) {
    var body = [];
    data.forEach(function (row, index) {
        var dataRow = [];
        var i = index + 1;
        dataRow.push({ text: i + '. ' + row.clintName + '\n', style: 'notestyle' });
        body.push(dataRow);
    });
    return body
}

function docDefinition(client, name) {
    var docDefinition = {
        background: function () {
            return [
                {
                    canvas: [
                        { type: 'line', x1: 15, y1: 15, x2: 575, y2: 15, lineWidth: 1 }, //Up line
                        { type: 'line', x1: 15, y1: 15, x2: 15, y2: 820, lineWidth: 1 }, //Left line
                        { type: 'line', x1: 15, y1: 820, x2: 575, y2: 820, lineWidth: 1 }, //Bottom line
                        { type: 'line', x1: 575, y1: 15, x2: 575, y2: 820, lineWidth: 1 }, //Rigth line
                    ]

                }
            ]
        },



        header: {
            height: 70,

            style: 'header1',
            columns: [
                {
                    image: logo.TNC_LOGO,
                    width: 100,
                    height: 50,
                    style: 'logo'
                },


                {
                    text: 'Terms and Conditions',
                    style: 'header',
                },





            ],
            columnGap: 20,


        },



        content: [
            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },


            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: '' },

            tncListData(client),


            { text: `${name}` },





        ],


        pageSize: 'A4',
        // pageMargins: [18, 20, 20, 24],
        styles: {



            header: {
                fontSize: 15,
                bold: true,
                alignment: 'center',
                marginBottom: 40,
                borderBottom: '1 solid black'

            },

            logo: {

                marginLeft: 40,
                marginBottom: 20
            },
            header1: {
                margin: [0, 20, 0, 80],
                positon: 'rela'

                // marginTop: 20,
                // marginBottom: 40,
                // padding: 40,
                // height: 70
            },

            con: {
                marginTop: 30
            }

        }
    }
    return docDefinition;
}
module.exports.docDefinition = docDefinition;




function TncList(name) {

    var TncList = {
        background: function () {
            return [
                {
                    canvas: [
                        { type: 'line', x1: 15, y1: 15, x2: 575, y2: 15, lineWidth: 1 }, //Up line
                        { type: 'line', x1: 15, y1: 15, x2: 15, y2: 820, lineWidth: 1 }, //Left line
                        { type: 'line', x1: 15, y1: 820, x2: 575, y2: 820, lineWidth: 1 }, //Bottom line
                        { type: 'line', x1: 575, y1: 15, x2: 575, y2: 820, lineWidth: 1 }, //Rigth line
                    ]

                }
            ]
        },




        header: {

            height: 30,
            columns: [{
                margin: [0, 20, 0, 0],
                border: [false, false, false, true],
                with: 'auto',
                alignment: 'center',
                text: 'Terms and Conditions',
                image: 'tnc.png',
                style: 'header',

            }

            ],

        },


        content: [

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },


            { text: 'This Privacy Notice confirms how the Zedra Group looks after your personal data and your rights as a data subject. We promise to protect the privacy of your personal data, not to sell your personal data and to implement procedures to enable you to exercise your rights as a data subject under the Law. The Zedra Group protects your personal data with up-to-date storage and security techniques.' },

            { text: '' },

            { text: `${name}` }


        ],


        pageSize: 'A4',
        // pageMargins: [18, 20, 20, 24],
        styles: {



            header: {
                fontSize: 15,
                bold: true,
                alignment: 'center',
                marginBottom: 2,
                borderBottom: '1 solid black'

            },

        }
    }
    return TncList;
}
module.exports.TncList = TncList;


