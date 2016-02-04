"use strict";

//setup your IIFE (Immediately invoked function expression)
(function(){
    
    console.log("App Started.....");   
    //named function way
    
    function replaceFirstParagraph(){
        console.log("inside replaceFirstParagraph function");
        
    
    var firstparagraph;
    firstparagraph=document.getElementById("firstparagraph");
    firstparagraph.innerHTML="My new paragraph data";
    }
    //call the replaceParagrpah function
    replaceFirstParagraph();
})();