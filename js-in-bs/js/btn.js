// <!--It’s a simple div-container and two controls with id. There elements will be accessible in code automatically. If you don’t write id you don’t take this elements in code. As for code it consist of defining “load” event handler:-->

window.addEventListener("load", init, false);

 

// <!--This element will be occurred after than page is loaded. init it’s a simple function, you can find it below:-->

function init () {

   clicks = 0;

   test.addEventListener("click", action, false);

}

 

// In this code we bind listener (handler) action for event click on button:

function action () {

   clicks++;

   result.innerHTML = "Button was clicked " + clicks + " times";

}

 

// Easy and elegantly :)
