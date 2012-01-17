var Projx = {

    init: function() {
        "use strict";
        var wonkle = document.querySelector('input[type="submit"]');
        wonkle.addEventListener('submit', Projx.storeData, false);
    },
    storeData: function() {
        "use strict";
        var evtNameEl = document.querySelector('input[name="evtname"]');
        var startDateEl = document.querySelector('input[name="startdate"]');
        var endDateEl = document.querySelector('input[name="enddate"]');
        
    }
};

Projx.init();