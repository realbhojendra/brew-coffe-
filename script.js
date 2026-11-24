var form = document.getElementById("contactForm");

form.onsubmit = function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "" || email == "" || message == "") {
    alert("Please fill in all fields.");
  } else {
    alert("Thank you, " + name + "! We will reply soon.");
    form.reset();
  }
  return false;
};
