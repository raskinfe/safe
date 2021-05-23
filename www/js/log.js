var loggedIn = false;

function authenticate() {
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;

  
  loggedIn = check(password, username);
  status();

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