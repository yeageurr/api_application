document.querySelector('#show_register').addEventListener('click', ()=> {
  document.getElementById('formwrapper').style.transform = 'translateX(-100%)';
});

document.querySelector('#show_login').addEventListener('click', ()=> {
  document.getElementById('formwrapper').style.transform = 'translateX(0)';
});

var user_input = document.getElementById('login_username');
var pass_input = document.getElementById('login_password');

var user = 'admin123';
var password = 'root1234';

function validate() {
  if (user_input.value.length == 0 || pass_input.value.length == 0) {
    alert('Input fields cannot be empty.')
    return false;
  } 
  else if (user_input.value != user || pass_input.value != password) 
  {
    alert('Incorrect Username or Password');
    return false;
  } 
  else {
    window.location.href = 'index.html';
  }
};

function validate_info() {
  var new_user = document.getElementById('new_username').value;
  var new_pass = document.getElementById('new_password').value;
  var confirm_pass = document.getElementById('confirm_password').value;

  if (confirm_pass != new_pass) {
    alert('Password does not match. Please try again.');
    return false;
  };
  alert(new_user);
  alert(new_pass);
  return true;
}