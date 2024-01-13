
const { JSON } = require("sequelize");
const logo = require("./fonts/Logo");
// const x = require('../views/images')



function docDefinition() {

    var docDefinition = {
        background: function (currentPage, pageSize) {
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
            margin: [30, 20, 0, 0],
            alignment: 'center',
            image: '../views/images/tnc.png',


            height: 20,
            columns: [{

                with: 'auto',
                alignment: 'left',
                text: 'Terms and Conditions'
            }

            ],



        },

        pageSize: 'A4',
        // pageMargins: [18, 20, 20, 24],
        styles: {

            subheader: {
                fontSize: 13,
                bold: false,
                alignment: 'center',
                marginBottom: 2,
                color: '#545352'
            },
            header: {
                fontSize: 15,
                bold: true,
                alignment: 'center',
                marginBottom: 2

            },
            header2: {
                fontSize: 8,
                bold: false,
                alignment: 'center',
                marginBottom: 2

            },
            tableExample: {
                margin: [-25, 5, 0, 15]
            },
            tableHeader: {
                bold: true,
                fontSize: 12,
                color: 'black'
            },
            tableheader: {
                fontSize: 9,
                color: '#2E2E2E',
                bold: false,
            },
            tableHead: {
                bold: true,
                fontSize: 12,
                color: 'black'
            },
            MixDesHead: {
                bold: true,
                fontSize: 12,
                color: 'black',
                alignment: 'center',
            },
            secondtableHead: {
                bold: true,
                fontSize: 10,
                color: 'black',
                alignment: 'center',
            },
            secondtableheader: {
                fontSize: 9,
                color: '#2E2E2E',
                alignment: 'center',
            },
            noteData: {
                fontSize: 9,
                color: '#2E2E2E',
                alignment: 'justify',

            },
            bankDetailsClass: {
                fontSize: 9,
                color: '#2E2E2E',
                alignment: 'center',
            },
            conditionClass: {
                fontSize: 9,
                color: '#2E2E2E',
            },
            bodySubData: {
                fontSize: 9,
                bold: false,
                alignment: 'center',
                color: '#2E2E2E'
            },
            notestyle: {
                bold: false,
                fontSize: 9,
            }
        },
        defaultStyle: {
            columnGap: 20
        }
    }
    return docDefinition;
}
module.exports.docDefinition = docDefinition;


