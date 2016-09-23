



// <!--This example include JavaScript file with simple code in procedure style. You can see it bellow:-->

// <!--It will be work if you update you HTML. Please insert next code instead comment <!-- Place for your controls -->:-->

// Second example you can find in folder “2 Bubbling and Capturing”.

// Update you HTML skeleton by inserting next elemets:

                  

 

// In JS-file we will listen events on this elements and inform user about phase and place where event now. For this activity we should wait when page will be loaded:

window.addEventListener("load", init, false);

 

// And after then we should to bind event listeners with elements:

function init () {  

   red.addEventListener("click", getHandler("red", "capturing"), true);

   green.addEventListener("click", getHandler("green", "capturing"), true);

   blue.addEventListener("click", getHandler("blue", "capturing"), true);

  

   red.addEventListener("click", getHandler("red", "bubbling"), false);

   green.addEventListener("click", getHandler("green", "bubbling"), false);

   blue.addEventListener("click", getHandler("blue", "bubbling"), false);

}

 
// 
// Pay attention that we use one listener for phase “capturing” and one for “bubbling”. As for listeners: we create only one listener action and for preventing of code duplicating we will use wrapper getHandler:

function action (el, phase) {

    var message = "[Phase: " + phase + "]\nEvent now in " + el + " element";

    alert(message);

}

 

function getHandler (el, phase) {

   return function () {

       action(el, phase);

   };

}

 

// With this wrapper we take a possibility pass parameters in our handler. It is important because by default first parameters of event handler is an event object.

 

// Bet example (from folder “3 Deafult behavior”) use it. This example is a further of previous example and I only show it code and difference will take a bold font.

window.addEventListener("load", init, false);

 

function init () {  

   red.addEventListener("click", getHandler("red", "capturing"), true);

   green.addEventListener("click", getHandler("green", "capturing"), true);

   blue.addEventListener("click", getHandler("blue", "capturing"), true);

  

   red.addEventListener("click", getHandler("red", "bubbling"), false);

   green.addEventListener("click", getHandler("green", "bubbling"), false);

   blue.addEventListener("click", getHandler("blue", "bubbling"), false);

}

 

function getHandler (el, phase) {

   return function (e) {

       action(el, phase, e);

   };

}

 

function action (el, phase, e) {

    var answer, message, stop = false;

      

       message = "[Phase: " + phase + "]\nEvent now in " + el + " element";

       answer = confirm(message);

      

       if(answer === stop) {

           e.stopPropagation();

       }

}

 

