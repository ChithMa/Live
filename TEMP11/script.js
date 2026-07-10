document.addEventListener('DOMContentLoaded', () => {

    // Index page logic
    const getStartedBtn = document.querySelector('.btn-get-started');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const robotCheck = document.getElementById('robot-check');
            const isRobotChecked = robotCheck && robotCheck.checked;

            if (!isRobotChecked) {
                alert("Please verify that you are not a robot.");
                return;
            }

            // Redirect to application page Instead of alert
            window.location.href = 'application.html';
        });
    }

    // Application page logic
    const btnContinue = document.getElementById('btn-continue');

    // Dynamic logic for document selection
    const nicRadio = document.getElementById('nic-radio');
    const passportRadio = document.getElementById('passport-radio');
    const nicCard = document.getElementById('nic-card');
    const passportCard = document.getElementById('passport-card');
    const docInputLabel = document.getElementById('doc-input-label');
    const docNumberInput = document.getElementById('doc-number-input');

    function updateDocumentSelection() {
        if (!nicRadio || !passportRadio) return; // Prevent errors on index page

        if (nicRadio.checked) {
            nicCard.classList.add('active');
            passportCard.classList.remove('active');
            docInputLabel.innerHTML = 'Please Enter Your National Identity Card Number<span class="asterisk">*</span>';
            docNumberInput.placeholder = '';
        } else if (passportRadio.checked) {
            passportCard.classList.add('active');
            nicCard.classList.remove('active');
            docInputLabel.innerHTML = 'Please Enter Your Passport Number<span class="asterisk">*</span>';
            docNumberInput.placeholder = '';
        }
    }

    // Initialize state if elements exist
    updateDocumentSelection();

    // Listeners for changes
    if (nicRadio) nicRadio.addEventListener('change', updateDocumentSelection);
    if (passportRadio) passportRadio.addEventListener('change', updateDocumentSelection);

    if (btnContinue) {
        btnContinue.addEventListener('click', (e) => {
            e.preventDefault();
            const docType = document.querySelector('input[name="document_type"]:checked').value;
            const docNumber = docNumberInput ? docNumberInput.value : '';
            console.log(`Proceeding with document type: ${docType}, Number: ${docNumber}`);

            if (docNumber.trim() === '') {
                alert(`Please enter your ${docType.toUpperCase()} number.`);
                return;
            }

            // Redirect to the form page
            window.location.href = 'form.html';
        });
    }
});
