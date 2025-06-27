document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // You can add more interactive JavaScript here if needed in the future
    // For example, form validation, dynamic content loading, carousels, etc.
});
