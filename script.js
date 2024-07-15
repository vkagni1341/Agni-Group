function validateAgniForm() {
  let firstName = document.getElementById("fName");
  let lastName = document.getElementById("lName");
  let motherName = document.getElementById("motherName");
  let fatherName = document.getElementById("fatherName");
  let mobileNumber = document.getElementById("mobileNumber");
  let email = document.getElementById("mail_Id");
  let adhaarNumber = document.getElementById("adhaarNumber");
  if (!isValidFirstName(firstName.value)) {
    alert("Enter First Name!,Name must be between(2-18) Character.");
    return false;
  }
  if (!isValidLastName(lastName.value)) {
    alert("Enter Last Name!,Name must be between(2-18) Character.");
    return false;
  }
  if (!isValidMotherName(motherName.value)) {
    alert("Enter Mother Name!,Name must be between(6-24) Character.");
    return false;
  }
  if (!isValidFatherName(fatherName.value)) {
    alert("Enter Father Name!,Name must be between(6-24) Character.");
    return false;
  }
  if (!isValidMobileNumber(mobileNumber.value)) {
    alert(
      "Enter Mobile_Number!,Number must be 10 Digit only,Number Start with (6-9)."
    );
    return false;
  }
  if (!isvalidEmailId(mail_Id.value)) {
    alert("Enter valid Email ID!.");
    return false;
  }
  if (!isvalidEmailId(mail_Id.value)) {
    alert("Enter valid Adhaar Number!.");
    return false;
  }
  return true ;
}

function isValidFirstName(fName) {
  if (fName.length >= 2 && fName.length <= 18) return true;
  else return false;
}
function isValidLastName(lName) {
  if (lName.length >= 2 && lName.length <= 18) return true;
  else return false;
}
function isValidMotherName(motherName) {
  if (motherName.length >= 6 && motherName.length <= 24) return true;
  else return false;
}
function isValidFatherName(fatherName) {
  if (fatherName.length >= 6 && fatherName.length <= 24) return true;
  else return false;
}
function isValidMobileNumber(mobileNumber) {
  let pattern = /^[6-9]\{9}$/;
  if (pattern.test(mobileNumber)) return true;
  else return false;
}
function isvalidEmailId(mail_Id) {
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (pattern.test(mail_Id)) {
    return true;
  } else {
    return false;
  }
}
function isValidAdhaarNumber(adhaarNumber) {
  if (adhaarNumber.length == 12) return true;
  else return false;
}
