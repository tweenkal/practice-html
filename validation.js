function validate() {
  var name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("name").style.borderColor = "Red";
    return false;
  }

  var contact = document.getElementById("contact").value;
  var pattern = /^\d{10}$/;

  if (!contact.match(pattern)) {
    document.getElementById("err1").innerHTML = "Invalid contact no";
    //return false;
  }

  var pwd = document.getElementById("pwd").value;
  if (pwd.length < 6) {
    document.getElementById("pwderr").innerHTML = "Password must be atleast 6";
    return false;
  }

  var cpwd = document.getElementById("cpwd").value;
  if (pwd != cpwd) {
    document.getElementById("cpwderr").innerHTML =
      "Password & cpass must be same";
    return false;
  }
}
