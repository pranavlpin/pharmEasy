# pharmEasy
#<URL of the webapp>:https://pharme.herokuapp.com
#GitHub Repository:https://github.com/pranavlpin/pharmEasy/

#Flow of the App:
First page of the app (<url>/ or <url>/index.html) is a login form for all the users, i.e. patients, doctors and pharmacists. Here user will login will be taken to their respective pages. Login details are there in the home page only.

#User Page:
Here when user comes, he has the option to view all pending requests, and he can approve them as he likes.

 
Doctor Page:
Here when doctor logins, he has an option to first view all patients.
 
When the doctor clicks on View Prescription, if the user has already approved his existing request, then he will be able to view the prescription. Else he will get the message that user has not approved you request, and the doctor will have a button to send new request to the user.
 
 

Models: 
Models used along with their properties of each model are following:
User:
1.	username: unique username of user
2.	password: password of the user
3.	access: access to identify if he is Doctor, patient or pharmacist
Patient:
4.	userId: For authentication, linked to User model
5.	name
6.	email
7.	phone
8.	address
9.	age
10.	gender
Doctor:
1.	userId: For authentication, linked to User model
2.	name
3.	email
4.	phone
5.	address
6.	age
7.	gender
Pharmacist:
1.	userId : For authentication, linked to User model
2.	name
3.	email
4.	phone
5.	address
6.	age
7.	gender
Prescription:
1.	PatientId: ID of the patient
2.	Medicines: Name of medicines
3.	Doses: Dose of medicine
Request:
1.	patientDetail: ID of the patient
2.	doctorDetail: ID of the doctor
3.	pharmacistDetail: ID of the pharmacist
4.	requestApproved: Binary: true if patient has approved request



API Endpoints:
"<URL>/login": API to login into APP
"<URL>/users": To Get all users and Post new user
"<URL>/users/:user_id": To Get, Put, Post a particular user
"<URL>/doctors": To Get all doctors and Post new doctor
"<URL>/doctors/:doctor_id": Get, Put, Post a particular Doctor
"<URL>/pharmacists": To Get all pharmacists and Post new Pharmacist
"<URL>/pharmacists/:pharmacist_id": Get, Put, Post a particular Pharmacist
"<URL>/patients": To Get all Patients and Post new Patient
"<URL>/patients/:patient_id": Get, Put, Post a particular Patient
"<URL>/prescriptions": To Get all Prescriptions and Post new Prescription
"<URL>/prescriptions/:prescription_id": Get, Put, Post a particular prescription
"<URL>/requests": Get all Requests and Post new Request
"<URL>/requests/:request_id": Get, Put, Post a particular Approval request
"<URL>/doctorPatientRequest": Post request to get requests from a particular doctor to the particular patient
"<URL>/pharmacistPatientRequest": Post request to get requests from a particular pharmacist to the particular patient
"<URL>/patientRequests": Post request to get all approval requests sent to the particular patient
"<URL>/patientPrescriptions": Post request to get prescriptions of the particular patient
