// Copyright 2012 Bryce Miller
// Licensed under the MIT license (see LICENSE)

var Projx = {

    init: function() {
        "use strict";
        var wonkle = document.querySelector('input[type="submit"]');
        wonkle.addEventListener('click', Projx.storeData, false);

        Projx.evtNameEl = document.querySelector('input[name="evtname"]');
        Projx.startDateEl = document.querySelector('input[name="startdate"]');
        Projx.endDateEl = document.querySelector('input[name="enddate"]');

        Projx.counter = 0;

        console.log('Init completed');
    },
    data: [],
    storeData: function(event) {
        "use strict";
        Projx.data[Projx.counter]= {
            'evtName': Projx.evtNameEl.value,
            '(start)Date': Projx.startDateEl.value
        };
        if (Projx.endDateEl.value && Projx.endDateEl.value !== '') {
            Projx.data[Projx.counter].endDate = Projx.endDateEl.value;
        }
        Projx.counter += 1;
        console.log("Data stored");
        event.preventDefault();
    }
};

Projx.init();