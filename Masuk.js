document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.querySelector('.form-group img');

    eyeIcon.addEventListener('click', function() {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            eyeIcon.src = 'eye-off.png';
        } else {
            passwordField.type = 'password';
            eyeIcon.src = 'eye-off.png';
        }
    });
});
function goToRegistration() {
    // Ganti URL berikut dengan URL halaman pendaftaran Anda
    window.location.href = 'signup.html';
}     

