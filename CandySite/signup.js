const UserData = [
  {
    fn: "Onis",
    ln: "S",
    email: "paaki2468@gmail.com",
    password: "123456",
  },
];

function signup() {
  const pas1 = document.getElementById("passOne").value;
  const pas2 = document.getElementById("passTwo").value;
  if (pas1.length >= 4 && pas1 === pas2) {
    console.log("passed");
    adduser(pas1);
  } else {
    alert("credential information is incorrect");
  }

  function adduser(password) {
    let fn = document.getElementById("firstname");
    let ln = document.getElementById("lastname");
    let email = document.getElementById("email");
    let newuser = { fn: fn, ln: ln, email: email, password: password };
    UserData.push(newuser);
  }
}
