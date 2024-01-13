const express = require('express');
const router = express.Router();
const validateToken = require('../middleware/validateToken');

const HospitalController = require('../controllers/Hospital.controller');

//Hospitals Project Routes//

router.post('/user', HospitalController.addUser);

router.post('/login', HospitalController.loginUser);

router.put('/user/:id', HospitalController.updateUser);

router.get('/regusers', HospitalController.getAllRegUsers)

//---patient routes-----//
router.post('/patientRecords', HospitalController.addPatientInfo);

router.get('/patientRecords/:id', HospitalController.getPatientHealthData);

router.put('/patientRecords/:id', HospitalController.editandUpdatePatientForm);

router.delete('/patientRecords/:id', HospitalController.deletePatientRecord);

router.get('/patientRecordsUser', HospitalController.getPatientInfo); //all recordwith user//

//one  recordwith user//
router.get(
  '/patientRecordsUser/:id',
  HospitalController.getPatientSingleCardInfo
);

//update assign doctor id to patient
router.put(
  '/updateDoctorIdtoPatient/:id',
  HospitalController.updateDoctorIdtoPatient
);

router.get('/doctors', HospitalController.getAllDoctors);

router.get('/getSelectedPatients/:id', HospitalController.getSelectedPatients);

router.put(
  '/updatePatientRecordByDoctor/:iid',
  HospitalController.updatePatientRecordByDoctor
);

router.get('/editPatientRecord/:id', HospitalController.editPatientRecord);

router.put('/updatePatientRecord/:id', HospitalController.updatePatientRecord);

/*total ---------*/
router.get('/nurses', HospitalController.totalNurses);

router.get('/allusers', HospitalController.totalUsers);

router.get('/totalcases', HospitalController.totalcases);

module.exports = router;
