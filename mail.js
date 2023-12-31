const firebaseConfig = {
    apiKey: "AIzaSyACVHPGhc3nMBf-o81ghhbiEpOINtmQ6gc",
    authDomain: "niii-b1fc8.firebaseapp.com",
    databaseURL: "https://niii-b1fc8-default-rtdb.firebaseio.com",
    projectId: "niii-b1fc8",
    storageBucket: "niii-b1fc8.appspot.com",
    messagingSenderId: "1010091445965",
    appId: "1:1010091445965:web:6157b9a7b976e33a8b6384"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };