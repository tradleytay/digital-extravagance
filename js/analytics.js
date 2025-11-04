// analytics.js
// Lightweight analytics loader. Configure MEASUREMENT_ID or replace with your provider snippet.
// Example: for GA4 set window.ANALYTICS_MEASUREMENT_ID = 'G-XXXXXXXXXX' before this script runs.

(function(){
	var id = window.ANALYTICS_MEASUREMENT_ID || '';
	if (!id) {
		// No ID configured — keep a console message but don't block.
		console.info('analytics.js: no measurement id configured. Add window.ANALYTICS_MEASUREMENT_ID = "G-XXXX" to enable GA4.');
		return;
	}

	// Load gtag.js for GA4
	var s = document.createElement('script');
	s.async = true;
	s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
	document.head.appendChild(s);

	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}    
	gtag('js', new Date());
	gtag('config', id, { 'anonymize_ip': true });
	window.gtag = gtag;
})();
