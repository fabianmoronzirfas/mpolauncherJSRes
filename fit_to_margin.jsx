﻿(function marginfitting(thisObj){      var sel = app.activeDocument.selection;   if(sel.length < 1) {       alert("no selection");       return;       }   var page = sel[0].parentPage;   var margPrefs = page.marginPreferences;   var columns = margPrefs.columnsPositions;//~     alert( columns[1] + margPrefs.left  - columns[0]);   var mwidth = columns[1] - columns[0] ;//  62.333 ;   fit_to_margins (sel,mwidth);      function fit_to_margins(sel,newwidth){    for(var i =0;i < sel.length;i++){            var curbnds = sel[i].geometricBounds;                        sel[i].geometricBounds = [curbnds[0],curbnds[1],curbnds[2], curbnds[1] + newwidth];        }        }    })(this);