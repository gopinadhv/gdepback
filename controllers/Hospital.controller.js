const { Users, Patients } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

const addUser = async function (req, res) {
  var bodyData = {};
  bodyData = req.body;
  console.log(bodyData, 'data');

  let checkdata;
  [err, checkdata] = await to(
    Users.findAll({
      where: {
        phoneNumber: bodyData.phoneNumber,
      },
    })
  );

  var jsondata = JSON.parse(JSON.stringify(checkdata));

  if (checkdata.length === 0) {
    //hash password

    const saltRounds = 10;
    const hashpassword = bcrypt.hashSync(bodyData.password, saltRounds);

    bodyData['phoneNumber'] = bodyData.phoneNumber;
    bodyData['password'] = hashpassword;
    bodyData['userType'] = bodyData.userType;

    // bodyData["code"] = newcode;
    //   console.log(body, "body");

    let activeData;
    [err, activeData] = await to(Users.create(bodyData));

    if (err) TE(err.message);

    return ReS(res, { status: true, activeData: activeData });
  } else {
    return ReS(res, {
      success: false,
      status: false,
      message: 'Already exist user',
    });
  }
};
module.exports.addUser = addUser;

/*---login------*/
const loginUser = async function (req, res) {
  var bodyData = {};
  bodyData = req.body;
  console.log(bodyData);
  bodyData['phoneNumber'] = bodyData.phoneNumber;
  bodyData['password'] = bodyData.password;

  var checkdata;
  [err, checkdata] = await to(
    Users.findOne({
      where: {
        phoneNumber: bodyData.phoneNumber,
      },
    })
  );
  var jsondata = JSON.parse(JSON.stringify(checkdata));

  if (checkdata) {
    console.log(jsondata);
    let jsonpassword = jsondata.password;
    let password = bodyData.password;
    console.log(jsonpassword, 'jp');
    console.log(password, 'pp');
    let checkpassword = bcrypt.compareSync(password, jsonpassword);
    if (checkpassword === true) {
      const token = jwt.sign({ userId: checkdata.id }, config.secret, {
        expiresIn: '5m',
      });
      return ReS(res, { status: true, activeData: checkdata, jwtoken: token });
    } else {
      return ReS(res, {
        status: false,
        message: 'Please Check Your Password!!!',
      });
    }
  } else {
    return ReS(res, {
      status: false,
      message: 'Please Check PhoneNumber & Password!!!',
    });
  }
};

module.exports.loginUser = loginUser;

const updateUser = async function (req, res) {
  var bodyData = {};
  bodyData = req.body;
  console.log(bodyData, 'updata');
  const id = req.params.id;
  console.log(bodyData);
  console.log('id', id);
  let activeData;

  [err, activeData] = await to(
    Users.update(
      {
        firstName: bodyData.firstName,
        lastName: bodyData.lastName,
        email: bodyData.email,
        adress: bodyData.city,
        dob: bodyData.date,
        marriedStatus: bodyData.marriedStatus,
        password: bodyData.password,
        phoneNumber: bodyData.phoneNumber,
        doctorType: bodyData.doctorType,
      },
      {
        where: {
          id: id,
        },
      }
    )
  );

  if (activeData) {
    return ReS(res, { status: true, activeData: activeData });
  } else {
    return ReS(res, {
      success: false,
      status: false,
      message: 'Not updated data in to  user',
    });
  }
};
module.exports.updateUser = updateUser;

//----------patients Controller-------//

const addPatientInfo = async function (req, res) {
  let err, patientData;
  console.log(req.body);
  let patientHealthData = req.body;

  [err, data] = await to(Patients.create(patientHealthData));

  if (err) {
    return ReE(res, {
      status: false,
      data: data,
      message: 'failed to add Health data',
    });
  } else {
    return ReS(res, {
      success: true,
      status: true,
      message: 'Patient information added succesfully',
    });
  }
};
module.exports.addPatientInfo = addPatientInfo;

const getPatientHealthData = async function (req, res) {
  let jwtToken;
  let authHeader = req.headers['authorization'];
  console.log(authHeader, 'ATH');
  let id = req.params.id;
  console.log(id);
  let err, activeData;

  [err, activeData] = await to(Patients.findAll({ where: { userId: id } }));

  if (activeData) {
    return ReS(res, {
      data: activeData,
      success: true,
      status: true,
      message: 'Single Patient information Get succesfully',
    });
  } else {
    return ReE(res, {
      status: false,
      data: activeData,
      message: 'failed to get Health data',
    });
  }
};
module.exports.getPatientHealthData = getPatientHealthData;

/*----All Patients controller-----------*/

const getAllPatientHealthRecords = async function (req, res) {
  var activeData;
  console.log('gpoi');

  [err, activeData] = await to(
    Users.findAll({
      attributes: ['id'],
    })
  );

  let x = JSON.stringify(JSON.parse(activeData));
  console.log(x, 'x');

  return ReS(res, {
    activeData: activeData,
    success: true,
    status: true,
    message: 'All Patients and Health Records get successfully',
  });
};

module.exports.getAllPatientHealthRecords = getAllPatientHealthRecords;

const getPatientInfo = async function (req, res) {
  let activeData;
  [err, activeData] = await to(
    Patients.findAll({
      include: [
        {
          model: Users,
          as: 'users',
        },
      ],
    })
  );
  console.log(err);
  return ReS(res, { activeData: activeData });
};
module.exports.getPatientInfo = getPatientInfo;

/*-----------------*/

const getPatientSingleCardInfo = async function (req, res) {
  let cardId = req.params.id;

  let cardData;
  [err, cardData] = await to(
    Patients.findOne({
      where: { id: cardId },
      include: {
        model: Users,
        as: 'users',
      },
    })
  );
  return ReS(res, { activeData: cardData });
};

module.exports.getPatientSingleCardInfo = getPatientSingleCardInfo;

const updateDoctorIdtoPatient = async function (req, res) {
  let data = {};
  data = req.body;
  console.log(data, 'ddd');
  let id = req.params.id;
  console.log(req.params, 'para');
  let updatedData;
  [err, updatedData] = await to(
    Patients.update(
      {
        doctorId: data.doctorId,
        status: data.status,
      },
      { where: { id: id } }
    )
  );

  if (updatedData) {
    return ReS(res, { status: true, message: 'Doctor Assigned Sucessfully' });
  } else {
    return ReS(res, {
      success: false,
      status: false,
      message: 'Doctor Not assigned to patient',
    });
  }
};
module.exports.updateDoctorIdtoPatient = updateDoctorIdtoPatient;

const getAllDoctors = async function (req, res) {
  let allDoctors;
  [err, allDoctors] = await to(
    Users.findAll({ where: { userType: 'doctor' } })
  );
  return ReS(res, { activeData: allDoctors });
};
module.exports.getAllDoctors = getAllDoctors;

const getSelectedPatients = async function (req, res) {
  console.log(req.params.id);

  let doctorsId = req.params.id;

  [err, activeData] = await to(
    Patients.findAll({
      where: { doctorId: doctorsId },
      include: {
        model: Users,
        as: 'users',
      },
    })
  );
  return ReS(res, { status: true, activeData: activeData });
};
module.exports.getSelectedPatients = getSelectedPatients;

const updatePatientRecordByDoctor = async function (req, res) {
  let bid = req.params.iid;
  console.log(bid, 'bid');
  console.log(req.body, 'updt');
  let newData;
  newData = req.body;

  [err, activeData] = await to(
    Patients.update(
      {
        description: newData.description,
        status: newData.status,
      },
      {
        where: {
          id: bid,
        },
      }
    )
  );

  if (activeData) {
    return ReS(res, { status: true, activeData: activeData });
  }
  return ReS(res, { status: false, message: 'Something went wrong' });
};
module.exports.updatePatientRecordByDoctor = updatePatientRecordByDoctor;

const editPatientRecord = async function (req, res) {
  [err, activeData] = await to(
    Patients.findOne({ where: { id: req.params.id } })
  );
  return ReS(res, { status: true, activeData: activeData });
};
module.exports.editPatientRecord = editPatientRecord;

const updatePatientRecord = async function (req, res) {
  [err, activeData] = await to(
    Patients.update({ where: { id: req.params.id } })
  );
  return ReS(res, { status: true, activeData: activeData });
};
module.exports.updatePatientRecord = updatePatientRecord;

const deletePatientRecord = async (req, res) => {
  [err, activeData] = await to(
    Patients.destroy({ where: { id: req.params.id } })
  );
  return ReS(res, { status: true, activeData: activeData });
};
module.exports.deletePatientRecord = deletePatientRecord;

const editandUpdatePatientForm = async function (req, res) {
  let bodydata = {};
  bodydata = req.body;
  console.log(bodydata);
  console.log(req.params, 'ppp');
  let pid = req.params.id;
  [err, updateData] = await to(
    Patients.update(
      {
        healthCardNo: bodydata.healthCardNo,
        problem: bodydata.problem,
        sugar: bodydata.sugar,
        bp: bodydata.bp,
        fever: bodydata.fever,
        bloodGroup: bodydata.bloodGroup,
        symptoms: bodydata.symptoms,
      },
      { where: { id: pid } }
    )
  );
  return ReS(res, { status: true, activeData: updateData });
};
module.exports.editandUpdatePatientForm = editandUpdatePatientForm;

/*-------total nurse------------*/

const totalNurses = async function (req, res) {
  [err, activeData] = await to(Users.findAll({ where: { userType: 'nurse' } }));

  return ReS(res, { status: true, activeData: activeData });
};
module.exports.totalNurses = totalNurses;

const totalUsers = async function (req, res) {
  [err, activeData] = await to(
    Users.findAll({ where: { userType: 'patient' } })
  );

  return ReS(res, { status: true, activeData: activeData });
};
module.exports.totalUsers = totalUsers;

const totalcases = async function (req, res) {
  [err, activeData] = await to(Patients.findAll({ where: { status: 2 } }));

  return ReS(res, { status: true, activeData: activeData });
};
module.exports.totalcases = totalcases;

const getAllRegUsers = async (req, res) => {
  [err, activeData] = await to(Users.findAll());

  return ReS(res, { status: true, activeData: activeData });
};
module.exports.getAllRegUsers = getAllRegUsers;
