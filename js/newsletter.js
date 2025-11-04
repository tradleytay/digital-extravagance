// Newsletter Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('mc-form');
    const subscribeMessage = document.querySelector('.subscribe-message');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('mce-EMAIL').value;
            const submitButton = newsletterForm.querySelector('input[type="submit"]');
            
            // Disable submit button during processing
            submitButton.value = 'Subscribing...';
            submitButton.disabled = true;

            // Here you would typically make an API call to your newsletter service
            // For demonstration, we'll simulate a successful subscription
            setTimeout(() => {
                // Success message
                subscribeMessage.textContent = 'Thank you for subscribing!';
                subscribeMessage.style.color = '#00ff00';
                
                // Reset form
                newsletterForm.reset();
                submitButton.value = 'Subscribe';
                submitButton.disabled = false;

                // Clear message after 3 seconds
                setTimeout(() => {
                    subscribeMessage.textContent = '';
                }, 3000);
            }, 1000);
        });
    }
});