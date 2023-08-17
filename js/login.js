document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    const userPasswordField =document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    console.log(userEmail, userPassword);
    if(userEmail === 'sazzad@gmail.com' && userPassword === '12345'){
        window.location.href = 'bank.html'
    } 
    else{
        alert("Please input valid information")
    }
  })