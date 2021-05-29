var loggedIn = false;

function authenticate() {
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;

  
   var data = JSON.parse(localStorage.getItem('data'));

   var j = data.length;

   if(j > 0 ) {

    for(var i = 0; i<j; i+=8){

      if(password == data[(i+4)] && username == data[(i+2)]) {

        window.location.href = "../www/html/tabs.html";

      } else if (username == data[(i+2)] && password !== data[(i+4)]) {

        document.getElementById('pmsg').innerHTML = "**Incorrect password!";
      } else if(username !== data[(i+2)] && password == data[(i+4)]) {

        document.getElementById('umsg').innerHTML = "**Incorrect username!";
      } else {

        alert("Invalid credential")
      }
    }
   }

}


function check(password, username) {

  var data = JSON.parse(localStorage.getItem('data'));
  let pass = data.slice(4,5);
  let usr_nm = data.slice(2,3);


  if (username == usr_nm && password ==pass) {

    return true;
  }
  else {
    return false;
  }
}

function status() {
  if (loggedIn) {

    var url = "../www/html/tabs.html";
    window.open(url);
  }
  else {
    alert("Please enter the correct values!")
  }
}