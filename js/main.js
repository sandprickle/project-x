// Copyright 2012 Bryce Miller
// Licensed under the MIT license (see LICENSE)

var Projx = {

    init: function() {
        // add event listener to submit button,
        // store input fields in variables,
        // counter init

        "use strict";
        
        var wonkle = document.querySelector('input[type="submit"]');
        wonkle.addEventListener('click', Projx.grabData, false);
        
        Projx.sDateEl = document.querySelector('input[name="sdate"]');
        Projx.eDateEl = document.querySelector('input[name="edate"]');
        Projx.tagNameEl = document.querySelector('input[name="tagname"]');
        Projx.descEl = document.querySelector('[name="desc"]');

        console.log('Init completed');
    },
    data: {
        tags: []
    },
    dataOut: {},
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

        event.preventDefault();
    },

   fileSystemInit: function() {
        "use strict";

        var reqFS = window.requestFileSystem || window.webkitRequestFileSystem;
        window.webkitStorageInfo.requestQuota(PERSISTENT, 5*1024*1024, function(b){
            reqFS(window.PERSISTENT, b, Projx.fsInitOkHandler);
        }, function(error) {
            console.log('Oops: ' . error);
        });

    },
    fsInitOkHandler: function(fs) {
        "use strict";
        Projx.fs = fs;
        console.log('FileSystem Init successful!');
        Projx.storeData();
    },

    storeData: function() {
        "use strict";
        if (Projx.fs) {
           // store data

            Projx.fs.root.getFile('tags.json', {create: true}, function(fileEntry) {
                fileEntry.createWriter(function(fileWriter) {
                    fileWriter.onwriteend = function(e) {
                        console.log('Data stored');
                    };

                    var builder = new window.WebKitBlobBuilder();
                    var d = JSON.stringify(Projx.data);
                    builder.append(d);
                    fileWriter.write(builder.getBlob('application/json'));
                });
            });
        }
        else {
            console.log('We need to initialize the FileSystem.');
            Projx.fileSystemInit();
        }
    },
    retrieveData: function() {
        "use strict";
        Projx.fs.root.getFile('tags.json', {}, function(fileEntry) {
            fileEntry.file(function(file) {
        
                var fr = new FileReader();

                fr.onloadend = function(e) {
                    var data = this.result;
                    Projx.dataOut = JSON.parse(data);
                };

                fr.readAsText(file);
            });
        });
    }
};

Projx.init();