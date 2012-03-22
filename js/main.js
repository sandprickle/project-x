// Copyright 2012 Bryce Miller
// Licensed under the MIT license (see LICENSE)

var Projx = {

    // Timeline stuff here... for now. Move to external file/webStorage prob
    timeline: [
        {
                type: 'text',
                x: 25,
                y: 15,
                text: '2011',
                'font-size': 16
            },
            {
                type: 'text',
                x: 10,
                y: 292,
                text: 'May'
            },
            {
                type: 'text',
                x: 110,
                y: 292,
                text: 'June'
            },
            {
                type: 'text',
                x: 210,
                y: 292,
                text: 'July'
            },
            {
                type: 'text',
                x: 310,
                y: 292,
                text: 'August'
            },
            {
                type: 'text',
                x: 410,
                y: 292,
                text: 'September'
            },
            {
                type: 'text',
                x: 510,
                y: 292,
                text: 'October'
            },
            {
                type: 'text',
                x: 610,
                y: 292,
                text: 'November'
            },
            {
                type: 'text',
                x: 710,
                y: 292,
                text: 'December' 
            },
            {
                type: 'path',
                pathString: 'M30,292L30,280',
                stroke: '#222222'
            }
    ],
    init: function() {
        // add event listener to submit button,
        // store input fields in variables,

        "use strict";
        
        // tag input init
        var wonkle = document.querySelector('input[type="submit"]');                    // submit button
        wonkle.addEventListener('click', Projx.grabData, false);
        Projx.sDateEl = document.querySelector('input[name="sdate"]');                  // (start) Date
        Projx.eDateEl = document.querySelector('input[name="edate"]');                  // end date
        Projx.tagNameEl = document.querySelector('input[name="tagname"]');              // tag name
        Projx.descEl = document.querySelector('[name="desc"]');                         // description
        console.log('Tag input initialized');

        // timeline init
        var container = document.querySelector('body>div:nth-of-type(2)');
        Projx.p = window.Raphael(container, 800, 300);
        console.log('Timeline initialized');
    },
    data: {
        tags: []
    },
    dataOut: {},
    c: 0,
    grabData: function(event) {
        "use strict";
        var c = Projx.data.tags.length;
        Projx.data.tags[c] = {
            "name": Projx.tagNameEl.value,
            "desc": Projx.descEl.value,
            "sdate": Projx.sDateEl.value,
            "edate": Projx.eDateEl.value
        };
        Projx.c += 1;

        console.log("Data grabbed");
        Projx.storeData();

        event.preventDefault();
    },
    storeData: function() {
        "use strict";
        var dataStr = JSON.stringify(Projx.data);
        localStorage.setItem('data', dataStr);
        console.log('Data stored');        
    },
    retrieveData: function() {
        "use strict";
        Projx.dataOut = JSON.parse(localStorage.getItem('data'));
        console.log('Retrieved data is in Projx.dataOut');
    },
    buildTimeline: function() {
        "use strict";
        var paper = Projx.p;
        paper.add(Projx.timeline);
    }
};

Projx.init();
Projx.buildTimeline();







// == Old code ==============================
// 
// Projx.storeData = function() {
    // if (Projx.fs) {
    //    // store data
    //     Projx.fs.root.getFile('tags.json', {create: true}, function(fileEntry) {
    //         fileEntry.createWriter(function(fileWriter) {
    //             fileWriter.onwriteend = function(e) {
    //                 console.log('Data stored');
    //             };

    //             var builder = new window.WebKitBlobBuilder();
    //             var d = JSON.stringify(Projx.data);
    //             builder.append(d);
    //             fileWriter.write(builder.getBlob('application/json'));
    //         });
    //     });
    // }
    // else {
    //     console.log('We need to initialize the FileSystem.');
    //     Projx.fileSystemInit();
// }
//
//
// Projx.fileSystemInit = function() {
    //     "use strict";

    //     var reqFS = window.requestFileSystem || window.webkitRequestFileSystem;
    //     window.webkitStorageInfo.requestQuota(PERSISTENT, 5*1024*1024, function(b){
    //         reqFS(window.PERSISTENT, b, Projx.fsInitOkHandler);
    //     }, function(error) {
    //         console.log('Oops: ' . error);
    //     });

    // };
    // Projx.fsInitOkHandler = function(fs) {
    //     "use strict";
    //     Projx.fs = fs;
    //     console.log('FileSystem Init successful!');
    //     Projx.storeData();
//     };
//
//
// Projx.retrieveData = function() {
        // Projx.fs.root.getFile('tags.json', {}, function(fileEntry) {
        //     fileEntry.file(function(file) {
        
        //         var fr = new FileReader();

        //         fr.onloadend = function(e) {
        //             var data = this.result;
        //             Projx.dataOut = JSON.parse(data);
        //         };

        //         fr.readAsText(file);
        //     });
        // });
//     };