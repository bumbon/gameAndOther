
// Then we create calcFib() function <head> section of a page:

// <script>

    function calcFib() {

        var fibNum = parseInt(document.getElementById("fibNum").value);

        console.time('Fibonacci calculation');

        var fibDesired;

        try {

            if (isNaN(fibNum))

                throw new Error("You have entered incorrect value!");

            if (fibNum < 3)

                throw new Error('Please enter value more then 2');

            var fibPrev = 1,

                fibCurr = 1;

            for (var i = 0; i < fibNum - 2; i++) {

                fibDesired = fibCurr + fibPrev;

                fibPrev = fibCurr;

                fibCurr = fibDesired;

            }

            console.log('Fibonacci number %i is %i', fibNum, fibDesired);

        } catch (err) {

            console.error('Error detected: %s', err.message);

        } finally {

            console.timeEnd('Fibonacci calculation');

        }       

    }

// </script>

// Comments to the calcFib() function. The function reads value entered by user into input field with id fibNum, and then converts it into integer variable fibNum:

// var fibNum = parseInt(document.getElementById("fibNum").value);

 

// // If user enter incorrect value, then fibNum will be equal to NaN, so we need to start a try block and check it:

// if (isNaN(fibNum))

//   throw new Error("You have entered incorrect value!");

 

// // Also we check if number is not less than 3 and raise error if it is:

// if (fibNum < 3)

//                 throw new Error('Please enter value more then 2');

 

// Errors caught by catch section, we write errors to console with formatted output

// } catch (err) {

//     console.error('Error detected: %s', err.message);

// }

// In addition, we measure time of execution using these functions:

// console.time('Fibonacci calculation');

// console.timeEnd('Fibonacci calculation');

// To ensure that timer will end, we enclose timeEnd() call into finally section:

// } finally {

//     console.timeEnd('Fibonacci calculation');

// }        

// Last modified: Monday, 16 May 2016, 2:58 PM