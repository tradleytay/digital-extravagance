// preloader.js
// Hides the preloader when the page has loaded. Includes a fallback timeout.
(function(){
    function hidePreloader() {
        var pre = document.getElementById('preloader');
        if (pre) pre.style.display = 'none';
    }

    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
        // Fallback: hide after 3s
        setTimeout(hidePreloader, 3000);
    }
})();
