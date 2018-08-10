# pharmEasy
URL of the webapp:https://pharme.herokuapp.com
GitHub Repository: https://github.com/pranavlpin/pharmEasy/

## Flow of the App:
First page of the app (<url>/ or <url>/index.html) is a login form for all the users, i.e. patients, doctors and pharmacists. Here user will login will be taken to their respective pages. Login details are there in the home page only.

### Patient Page:
Here when user comes, he has the option to view all pending requests, and he can approve them as he likes.

  
### Doctor Page:
Here when doctor logins, he has an option to first view all patients.

When the doctor clicks on View Prescription, if the user has already approved his existing request, then he will be able to view the prescription. Else he will get the message that user has not approved you request, and the doctor will have a button to send new request to the user.
 
 

## Models: 
Models used along with their properties of each model are following:
### User:
1.	username: unique username of user
2.	password: password of the user
3.	access: access to identify if he is Doctor, patient or pharmacist
### Patient:
1.	userId: For authentication, linked to User model
2.	name
3.	email
4.	phone
5.	address
6.	age
7.	gender
### Doctor:
1.	userId: For authentication, linked to User model
2.	name
3.	email
4.	phone
5.	address
6.	age
7.	gender
### Pharmacist:
1.	userId : For authentication, linked to User model
2.	name
3.	email
4.	phone
5.	address
6.	age
7.	gender
### Prescription:
1.	PatientId: ID of the patient
2.	Medicines: Name of medicines
3.	Doses: Dose of medicine
### Request:
1.	patientDetail: ID of the patient
2.	doctorDetail: ID of the doctor
3.	pharmacistDetail: ID of the pharmacist
4.	requestApproved: Binary: true if patient has approved request



## API Endpoints:

__"<URL>/login":__ API to login into APP

__"<URL>/users":__ To Get all users and Post new user

__"<URL>/users/:user_id":__ To Get, Put, Post a particular user

__"<URL>/doctors":__ To Get all doctors and Post new doctor

__"<URL>/doctors/:doctor_id":__ Get, Put, Post a particular Doctor

__"<URL>/pharmacists":__ To Get all pharmacists and Post new Pharmacist

__"<URL>/pharmacists/:pharmacist_id":__ Get, Put, Post a particular Pharmacist

__"<URL>/patients":__ To Get all Patients and Post new Patient

__"<URL>/patients/:patient_id":__ Get, Put, Post a particular Patient

__"<URL>/prescriptions":__ To Get all Prescriptions and Post new Prescription

__"<URL>/prescriptions/:prescription_id":__ Get, Put, Post a particular prescription

__"<URL>/requests":__ Get all Requests and Post new Request

__"<URL>/requests/:request_id":__ Get, Put, Post a particular Approval request

__"<URL>/doctorPatientRequest":__ Post request to get requests from a particular doctor to the particular patient
  
__"<URL>/pharmacistPatientRequest":__ Post request to get requests from a particular pharmacist to the particular patient
  
__"<URL>/patientRequests":__ Post request to get all approval requests sent to the particular patient 

__"<URL>/patientPrescriptions":__ Post request to get prescriptions of the particular patient
