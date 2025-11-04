// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const messageSuccess = document.querySelector('.message-success');
    const messageError = document.querySelector('.message-error');
    const jobFields = document.getElementById('jobApplicationFields');
    const subjectSelect = document.getElementById('contactSubject');

    // Show/hide job application fields based on subject selection
    if (subjectSelect) {
        subjectSelect.addEventListener('change', function() {
            if (this.value === 'Job Application') {
                jobFields.style.display = 'block';
            } else {
                jobFields.style.display = 'none';
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form fields
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            // Get job application fields if visible
            let jobDetails = '';
            if (subject === 'Job Application') {
                const position = document.getElementById('position').value;
                const portfolio = document.getElementById('portfolio').value;
                const resume = document.getElementById('resume').value;
                jobDetails = `\n\nPosition: ${position}\nPortfolio: ${portfolio}\nResume: ${resume}`;
            }
            const submitButton = contactForm.querySelector('button[type="submit"]');

            // Basic validation
            if (!name || !email || !subject || !message) {
                showMessage(messageError, 'Please fill in all required fields.');
                return;
            }

            if (!isValidEmail(email)) {
                showMessage(messageError, 'Please enter a valid email address.');
                return;
            }

            // Disable submit button during processing
            submitButton.disabled = true;
            submitButton.textContent = 'Preparing email...';

            // Build mailto link (static, opens user's email client)
            try {
                const to = 'info@digitalextravagance.com';
                const mailSubject = `${subject} - ${name}`;
                const mailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
                const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(mailSubject)}&body=${mailBody}`;

                // Open the user's email client (this will not send automatically)
                window.location.href = mailto;

                // Provide UX feedback
                showMessage(messageSuccess, 'Your email client should open shortly. Please review and send the message.');
                contactForm.reset();
            } catch (err) {
                showMessage(messageError, 'Unable to open email client. Please copy the message manually.');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            }
        });
    }

    // Helper function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to show messages
    function showMessage(element, message) {
        if (element) {
            element.textContent = message;
            element.style.display = 'block';

            // Hide message after 5 seconds
            setTimeout(() => {
                element.style.display = 'none';
            }, 5000);
        }
    }
});