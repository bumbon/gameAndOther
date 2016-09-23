
 

// As a script use can use next:

var pi = getPi();

 

window.addEventListener("load", init, false);

 

function init () {  

   test.addEventListener("click", action, true);  

}

 

function action () {

    var s, r, message;

   

       r = input.value;

      

       s = pi()*r*r;

      

       message = "Suare is " + s;

       output.innerHTML = message;

}

 

function getPi () {

    var value = 3.14;

   

       return function () {

            return value;

    };

}

 

// Let’s review it. We know what is

window.addEventListener("load", init, false);

 

function init () {  

   test.addEventListener("click", action, true);  

}

 

// Action a simple code too:

function action () {

    var s, r, message;

   

       r = input.value;

      

       s = pi()*r*r;

      

       message = "Suare is " + s;

       output.innerHTML = message;

}

 

// But what is pi()? It’s a result of work of getPi() function:

var pi = getPi();

 

// getPi function create a variable with value 3.14 and return some function that can return this value. Function (object) will not be destroyed because we save reference to it in pi variable. And variable with 3.14 value can’t be destroyed because it will be used in saved function. So, it’s a closure. Easy and fun :)

 

function getPi () {

    var value = 3.14;

   

       return function () {

            return value;

    };

}