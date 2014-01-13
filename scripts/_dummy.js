(function() {
    'use strict';

    function dummy() {
        return true;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = dummy;
    } else {
        window.dummy = dummy;
    }
})();