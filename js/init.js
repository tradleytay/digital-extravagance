// init.js
// Moves 'no-js' -> 'js' so CSS can target when JS is available
(function(){
    try {
        var docEl = document.documentElement;
        docEl.classList.remove('no-js');
        docEl.classList.add('js');
    } catch (e) {
        // fail silently
        console.warn('init.js error', e);
    }
})();
