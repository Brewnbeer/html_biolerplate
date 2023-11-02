import Scrollbar from 'smooth-scrollbar';

document.addEventListener('DOMContentLoaded', function() {
    const scrollbar = Scrollbar.init(document.querySelector('.smooth-scroll-container'), {
        alwaysShowTracks: true // Customize options as needed
    });
    
    // Optional: Adjust the scroll speed
    scrollbar.setPosition(0, 0, 300); // This will scroll to the top over 300ms
});
