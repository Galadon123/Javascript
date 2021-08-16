document.getElementById('login-submit').addEventListener('click',function()
{ 
    if(document.getElementById('user-email').value=='fazlul' && document.getElementById('user-password').value=='karim')
    {
       window.location.href='bankhomepage.html';
    }
})