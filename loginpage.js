var user_input = document.getElementById('login_username');
var pass_input = document.getElementById('login_password');

const user = 'admin123';
const password = 'root1234';


document.querySelector('#show_register').addEventListener('click', ()=> {
  document.getElementById('formwrapper').style.transform = 'translateX(-100%)';
});

document.querySelector('#show_login').addEventListener('click', ()=> {
  document.getElementById('formwrapper').style.transform = 'translateX(0)';
});


function validate() {
  if(user_input.value === user && pass_input.value === password) {
    window.location.href = 'index.html';
  } else if ((user_input.value).length == 0 || (pass_input.value).length == 0) {
    alert('Input fields cannot be empty!');
  } else {
    alert('Invalid Input!');
  };
};


function validate_info() {
  var new_user = document.getElementById('new_username');
  var new_pass = document.getElementById('new_password');
  var confirm_pass = document.getElementById('confirm_password');

  if (confirm_pass.value != new_pass.value) {
    alert('Password does not match. Please try again.');
    return false;
  };
  alert(new_user);
  alert(new_pass);
  return true;
}