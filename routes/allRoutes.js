var express = require('express');

var authController = require('../controllers/auth');
var userController = require('../controllers/user');
var doctorController = require('../controllers/doctor');
var pharmacistController = require('../controllers/pharmacist');
var patientController = require('../controllers/patient');
var prescriptionController = require('../controllers/prescription');
var requestController = require('../controllers/request');
var loginController = require("../controllers/login");

var router = express.Router();

//Get Patient Pending Requests
router
    .route("/doctorPatientRequest")
    .post(authController.isAuthenticated, requestController.doctorPatientRequest);
//Get Patient Pending Requests
router
    .route("/pharmacistPatientRequest")
    .post(authController.isAuthenticated, requestController.pharmacistPatientRequest);
//Get Patient Pending Requests
router
    .route("/patientRequests")
    .post(authController.isAuthenticated, requestController.patientRequests);
//Get Patient Prescriptions
router
    .route("/patientPrescriptions")
    .post(authController.isAuthenticated, prescriptionController.patientPrescriptions);
//Login
router
    .route("/login")
    .post(authController.isAuthenticated, loginController.login);

//create endpoint handlers for /users
router
    .route("/users")
    .get(authController.isAuthenticated, userController.getUsers)
    .post(authController.isAuthenticated, userController.postUsers);
//Create endpoint handlers for /users/:user_id
router
    .route("/users/:user_id")
    .get(authController.isAuthenticated, userController.getUser)
    .delete(authController.isAuthenticated, userController.deleteUser);

//create endpoint handlers for /doctors
router
    .route("/doctors")
    .get(authController.isAuthenticated, doctorController.getDoctors)
    .post(authController.isAuthenticated, doctorController.postDoctors);
//Create endpoint handlers for /doctors/:doctor_id
router
    .route("/doctors/:doctor_id")
    .get(authController.isAuthenticated, doctorController.getDoctor)
    .put(authController.isAuthenticated, doctorController.putDoctor)
    .delete(authController.isAuthenticated, doctorController.deleteDoctor);

//create endpoint handlers for /pharmacists
router
    .route("/pharmacists")
    .get(authController.isAuthenticated, pharmacistController.getPharmacists)
    .post(authController.isAuthenticated, pharmacistController.postPharmacists);
//Create endpoint handlers for /pharmacists/:pharmacist_id
router
    .route("/pharmacists/:pharmacist_id")
    .get(authController.isAuthenticated, pharmacistController.getPharmacist)
    .put(authController.isAuthenticated, pharmacistController.putPharmacist)
    .delete(authController.isAuthenticated, pharmacistController.deletePharmacist);

//create endpoint handlers for /patients
router
    .route("/patients")
    .get(authController.isAuthenticated, patientController.getPatients)
    .post(authController.isAuthenticated, patientController.postPatients);
//Create endpoint handlers for /patients/:patient_id
router
    .route("/patients/:patient_id")
    .get(authController.isAuthenticated, patientController.getPatient)
    .put(authController.isAuthenticated, patientController.putPatient)
    .delete(authController.isAuthenticated, patientController.deletePatient);

//create endpoint handlers for /prescriptions
router
    .route("/prescriptions")
    .get(authController.isAuthenticated, prescriptionController.getPrescriptions)
    .post(authController.isAuthenticated, prescriptionController.postPrescriptions);
//Create endpoint handlers for /prescriptions/:prescription_id
router
    .route("/prescriptions/:prescription_id")
    .get(authController.isAuthenticated, prescriptionController.getPrescription)
    .put(authController.isAuthenticated, prescriptionController.putPrescription)
    .delete(authController.isAuthenticated, prescriptionController.deletePrescription);

//create endpoint handlers for /requests
router
    .route("/requests")
    .get(authController.isAuthenticated, requestController.getRequests)
    .post(authController.isAuthenticated, requestController.postRequests);
//Create endpoint handlers for /requests/:request_id
router
    .route("/requests/:request_id")
    .get(authController.isAuthenticated, requestController.getRequest)
    .put(authController.isAuthenticated, requestController.putRequest)
    .delete(authController.isAuthenticated, requestController.deleteRequest);

module.exports = router;