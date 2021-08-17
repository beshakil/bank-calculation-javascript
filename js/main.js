document.getElementById('login-submit').addEventListener('click', function () {
    console.log('Clicked this Button');

    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //check mail and password
    if (userEmail == 'andor@gmail.com' && userPassword == '1234') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('invalid user');
    }
})





