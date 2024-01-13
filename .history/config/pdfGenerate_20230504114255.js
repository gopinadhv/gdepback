
const { JSON } = require("sequelize");
const logo = require("../views/images/tc.png");



function buildTableBody(data, columns) {
    var body = [];
    body.push(columns);
    data.forEach(function (row) {
        var dataRow = [];
        columns.forEach(function (column) {
            dataRow.push({ text: row[column].toString(), style: 'bodySubData' });
        })
        body.push(dataRow);
    });
    return body;
}

function tableData(data, columns) {
    // console.log(data, 'data', columns);
    return {
        style: 'tableExample',
        table: {
            widths: [30, 53, 57, 53, 54, 51, 69, 120],//this are widths for header Names
            headerRows: 1,
            body: buildTableBody(data, columns),

        }
    };
}
function qcData(data) {
    var body = [];
    data.forEach(function (row, index) {
        var dataRow = [];
        var i = index + 1;
        dataRow.push({ text: i + '. ' + row['note'] + '\n', style: 'notestyle' });
        body.push(dataRow);
    });
    return body
}
function getSelectdDate(date) {
    var today = new Date(date);
    var data = '';
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    data = monthNames[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear()
    if (data) {
        return data;
    } else {
        return data;
    }
}
function docDefinition(data, pdfData) {

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
        content: [
            {
                columns: [
                    {
                        image: logo,
                        width: 90,
                        height: 60
                    },


                    {
                        columns: [
                            [
                                {
                                    text: 'SARVANI INDUSTRIES PRIVATE LIMITED\n',
                                    style: 'header',
                                },
                                {
                                    text: 'AN ISO 9001: 2015 CERTIFIED COMPANY\n',
                                    style: 'header2',
                                },
                            ]
                        ]
                    },

                ],
                // optional space between columns
                columnGap: 2
            },
            {
                style: 'tableExample',
                color: '#444',
                table: {
                    widths: [270, 271],
                    body: [
                        [{ text: 'QUOTATION', style: 'tableHead', colSpan: 2, alignment: 'center' }, {},],

                        [
                            {
                                text: [
                                    'Name: ', { text: data.customerData.customerName, fontStyle: 'normal', bold: false, fontSize: 9, },
                                    { text: '\n' },
                                    'Address: ', { text: data.customerData.address + ',' + data.customerData.city + ',' + data.customerData.pincode, fontStyle: 'normal', bold: false, fontSize: 9, }, { text: '\n' },
                                    'State: ', { text: 'Andhra Pradesh\n', fontStyle: 'normal', bold: false, fontSize: 9, },
                                    // { text: '\n' },
                                    'Phone No: ', { text: data.customerData.primaryPhoneNo, fontStyle: 'normal', bold: false, fontSize: 9, }
                                ], fontSize: 10, bold: true, color: '#2E2E2E',
                            },
                            {
                                text: ['SARVANI INDUSTRIES PVT. LTD.\n',
                                    'Branch Name: ', { text: data.branchData.branchName, fontStyle: 'normal', bold: false, fontSize: 9, },
                                    { text: '\n' },
                                    'Address: ', { text: data.branchData.branchAddress + ',' + data.branchData.branchCity + ',' + data.branchData.branchMandal + ',' + data.branchData.branchDistrict + ',' + data.branchData.branchPincode, fontStyle: 'normal', bold: false, fontSize: 9, },
                                    { text: '\n' },
                                    'Email: ', { text: data.branchData.branchEmail, fontStyle: 'normal', bold: false, fontSize: 9, },

                                ], fontSize: 10, bold: true, color: '#2E2E2E',
                            },
                        ],

                        [
                            {
                                text: [
                                    'Contact: ', { text: data.siteContactPersonData ? data.siteContactPersonData.siteContactPerson : '', fontStyle: 'normal', bold: false, fontSize: 9, }
                                ], fontSize: 10, bold: true, color: '#2E2E2E',
                            },
                            {
                                text: [
                                    'Contact: ', { text: data.userDetails.userName, fontStyle: 'normal', bold: false, fontSize: 9, }
                                ], fontSize: 10, bold: true, color: '#2E2E2E',
                            },
                        ],
                        [
                            {
                                text: [
                                    'Tel No: ', { text: data.siteContactPersonData ? data.siteContactPersonData.Phone : '', fontStyle: 'normal', bold: false, fontSize: 9, }
                                ], fontSize: 10, bold: true, color: '#2E2E2E',
                            },
                            {
                                text: [
                                    'Contact No: ', { text: data.userDetails.phone, fontStyle: 'normal', bold: false, fontSize: 9, }
                                ], fontSize: 10, bold: true, color: '#2E2E2E',
                            },

                        ],
                        [

                            {
                                text: [
                                    'Email: ', { text: data.siteContactPersonData ? data.siteContactPersonData.email : '', fontStyle: 'normal', bold: false, fontSize: 9, }
                                ], fontSize: 10, bold: true, color: '#2E2E2E',
                            },
                            {
                                text: [
                                    'Email: ', { text: data.userDetails.email, fontStyle: 'normal', bold: false, fontSize: 9, }
                                ], fontSize: 10, bold: true, color: '#2E2E2E',
                            },
                        ],
                        [

                            {
                                text: [
                                    'Quotation Number: ', { text: data.quotationNumber, fontStyle: 'normal', bold: false, fontSize: 9, }
                                ], fontSize: 10, bold: true, color: '#2E2E2E',
                            },
                            {
                                text: [
                                    'Our Reference: ', { text: '11-06-2021', fontStyle: 'normal', bold: false, fontSize: 9 },
                                    'Dated: ', { text: getSelectdDate(data.quotationDate), fontStyle: 'normal', bold: false, fontSize: 9, }

                                ], fontSize: 10, padding: 5, bold: true, color: '#2E2E2E',

                            },
                        ],
                        [{ text: 'Dear Sir, Greatins from Sarvani Concerete ! \n      We reciprocate your trade enquiry thankfully. The team at SARVANI CONCRETE would strive to live up to your expectations. Appended is the apparently reasonable quotation for the given Qty.to your site at: ' + data.customerData.city, style: 'tableheader', colSpan: 2, },],

                    ]

                }
            },

            { text: 'Mix Description\n', style: 'MixDesHead' },
            // { text: '\n' },
            tableData(pdfData, ['S_No', 'Mix_Code', 'MinCC', 'Max_W_C', 'MSA', 'Cement', 'Slump_MM', 'Total_Per_Cube_M3',]),
            // { text: '\n\n' },
            { text: 'Note:\n', bold: true, },
            qcData(data.quotationNotes),

            // { text: '\n\n' },
            {
                style: 'tableExample',
                table: {
                    widths: [270, 271],
                    body: [
                        // 	['Column 1', 'Column 2', 'Column 3'],
                        [
                            { text: [{ text: '\nBank Details\n\n', alignment: 'center', style: 'bankDetailsClass' }, { text: 'A/C NO: 630651001267\nIFSC: ICIC0006306\n ICICI BANK,VIJAYAWADA', style: 'bankDetailsClass' }] },
                            { text: [{ text: 'CONDITIONS\n', alignment: 'center', style: 'conditionClass' }, { text: 'This Quotation is made on and is subject to the Conditions of Sale overleaf which form part of all contracts.\n\n', style: 'conditionClass' }, { text: 'Signed:\n', alignment: 'center', style: 'conditionClass' }, { text: 'Your orders will have our most careful attention.', style: 'conditionClass' }] },
                        ],

                    ]
                }
            },
            { text: 'QUOTATION CLAUSES\n\n', pageBreak: 'before', style: 'subheader', bold: "true", color: 'black', },
            {
                ul: [
                    // { text: 'This quotation is based on the mixes requested, no written specification having been received.\n\n', style: 'noteData' },
                    { text: 'Design mixes quoted are based on the design principles of Sarvani Concrete. and as per relevant Indian Standards.\n\n', style: 'noteData' },
                    { text: 'Standard Deviation for design the purposes is based on the Standard Deviation of the Production Plant and not individual mixes.\n\n', style: 'noteData' },


                    // { text: 'Please note that there will be an additional charge if Temperature controlled concrete is required.\n\n', style: 'noteData' },
                    // { text: 'We have taken the opportunity to offer mixes containing a plasticiser where we can see benefits to the customer.\n\n', style: 'noteData' },
                    { text: 'This Quotation does not include the site testing of concrete and/or constituent materials. However, to test the compressive strength of concrete we shall be taking cubes at your site as per frequency indicated in IS 4926:2003 and the testing the same at our Central Lab.\n\n', style: 'noteData' },

                    { text: 'We are responsible for 7 and 28 days compressive strength results of cubes made and tested by SIPL’s Technicians the customer.\n\n', style: 'noteData' },
                    { text: 'Where existing Indian Standards do not provide for ready-mixed concrete or its constituent materials in sufficient depth or are out of date then we have made reference to the appropriate British or International Standards. If you require any further clarification please do not hesitate to contact our Technical Department.\n\n', style: 'noteData' },
                    { text: 'These prices are based upon a full load being delivered. For every cubic meter, or part thereof, below the capacity of the vehicle an additional part load charge of 200 Rupees per Cubic Meter will be levied to the customer.\n\n', style: 'noteData' },

                    { text: 'Additional waiting charges of 200 Rupees per 5 minutes,or part of,will be charged if the Transit Mixer is detained beyond 2 hours at your permises.\n\n', style: 'noteData' },
                    // { text: 'In the event of non-availability of PFA, we reserve the right to provide concrete with only OPC 53 and is such a case the rates shall have to be worked out accordingly.\n\n', style: 'noteData' },
                    // { text: 'Due to overlapping restriction we may regulate the full load quantity from time to time.\n\n', style: 'noteData' },

                    // { text: 'All manual grades of concrete shall have slump of 75 mm.\n\n', style: 'noteData' },
                    { text: 'The quoted prices are not firm and may vary as per the raw material prices prevailing on the day of delivery.\n\n', style: 'noteData' },
                    { text: 'All RTO problems regarding entry permissions of trucks to reach your site to be managed from your end.\n\n', style: 'noteData' },

                    { text: 'Any increase in the statutory levies shall be reimbursed to Sarvani Concrete. at actuals.\n\n', style: 'noteData' },

                    { text: 'Please warn concrete users that, to avoid any risk of serious skin injury, they should minimize contact with wet cement and wet concrete (e.g.: wear suitable protective clothing) and where contact occurs,should without delay wash thoroughly\n\n', style: 'noteData' },

                ]
            },
            // { text: '\n\n\n' },
            // { text: 'Payment Terms :-\n', bold: true, },
            // { text: 'For pumping concrete beyond 20 mtrs vertical height, additional pumping charges are applicable over the above mentioned prices:- 21 to 35 Mtrs Rs.150/cum, 35 to 50 Mtrs Rs.225/cum, 51 to 65 mtrs Rs.375/cum, 66 to 80 mtrs Rs.450/cum, 81-100 mtrs Rs.550/cum', style: 'noteData' },

            // { text: '\n\n\n' },
            // { text: 'SIGNED :\n', bold: true, },

            // { text: '\n\n\n' },
            // { text: 'R.MURALI KRISHNA', bold: true },
            // { text: 'DESIGNATION: BUSINESS HEAD\n', style: 'noteData' },
            // {
            //     text: 'www.sarvaniconcrete.com,email: sales.vja@sarvaniindustries.com  CIN: U45309AP2020PTC114841 , GST: 37ABDCS8620H1Z6,',
            //     style: 'header2',
            // },
        ],

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


