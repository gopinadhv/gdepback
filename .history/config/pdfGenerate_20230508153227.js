
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


        header: function () {

            return [
                {
                    text: 'Terms and conditoions', alignment: 'center', fontSize: 16, bold: true, margin: [0, 20, 0, 0], height: 35
                },

                {
                    canvas: [{
                        type: 'rect',
                        x: 15,
                        y: -196,
                        w: 1000,
                        h: 197,
                        lineWidth: 1,

                    },]
                }
            ]
        },


        // header: {

        //     height: 30,
        //     margin: [0, 20, 0, 20],
        //     columns: [
        //         {
        //             image: logo.TNC_LOGO,
        //             width: 90,
        //             height: 50
        //         },


        //         {
        //             columns: [
        //                 [
        //                     {
        //                         text: 'Terms and Conditions',
        //                         style: 'header',
        //                     },

        //                 ]
        //             ]
        //         },

        //     ],
        //     // optional space between columns


        //     // columns: [{
        //     //     margin: [0, 20, 0, 0],
        //     //     with: 'auto',
        //     //     alignment: 'center',
        //     //     text: 'Terms and Conditions',
        //     //     image: logo.TNC_LOGO,
        //     //     style: 'header',

        //     // }

        //     // ],

        // },


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
                marginBottom: 2,
                borderBottom: '1 solid black'

            },

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


