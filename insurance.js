document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('insurance-application-form');
    const incomeInput = document.getElementById('annual-income');
    const eligibilityMessage = document.getElementById('eligibility-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";

        // Get the annual income value from the input field
        const annualIncome = parseFloat(incomeInput.value);

        // Check if annual income is greater than $120,000
        if (annualIncome > 120000) {
            eligibilityMessage.textContent = 'Sorry, you are not eligible for free health insurance.Your annual income should be less than 120000';
            eligibilityMessage.style.color = 'red';
        } else {
            eligibilityMessage.textContent = 'You are eligible for free health insurance.';
            eligibilityMessage.style.color = 'green';

            // Here, you can proceed with form submission or other processing
        }
    });
});
