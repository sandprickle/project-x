// Copyright 2012 Bryce Miller 
// Licensed under the MIT license (see LICENSE)

var Projx = {

    init: function() {
    "use strict";
        var wonkle = document.querySelector('input[type="submit"]');
        wonkle.addEventListener('submit', Projx.storeData, false);

        Projx.evtNameEl = document.querySelector('input[name="evtname"]');
        Projx.startDateEl = document.querySelector('input[name="startdate"]');
        Projx.endDateEl = document.querySelector('input[name="enddate"]');

        console.log('Init completed');
    },
    storeData: function(event) {

        "use strict";
        
    }
};

Projx.init();