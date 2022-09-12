/**********************************************************************************************************************/
/*                                                     CHAMELEON                                                      */
/* ORIGINAL AUTHOR: King’ori Maina; see https://kingori.co/minutae/2013/04/shifting-colors/                           */
/* I made some tweaks to the original code, so any mistakes, problems, or unconventional style are probably mine.     */
/*                                                                                                                    */
/* Chameleon changes a class on the BODY element. The changing classes are specified in the site's CSS file, which    */
/* results in the shifting colors/rainbow effect. The original code only shifted the color of A elements (links), but */
/* I've set my CSS up so that the color will shift on anything with a generic chameleon class (or with monogram some  */
/* pre-defined IDs when the CSS property to change isn't "color." The generic chameleon class will always be a        */
/* decedent of the BODY element, which has a specific chameleon-colorX class, where X represents the number of the    */
/* color that is currently being used. The value of X shifts sequentially.                                            */
/**********************************************************************************************************************/

// Initialize an object called Chameleon
var Chameleon = {};

// These values should match what is used in the CSS
Chameleon.noOfColors = 13;
Chameleon.duration   = 5;

Chameleon.init = function() {
   // Find the first BODY element and store it in a property called bodyElement
   Chameleon.bodyElement = document.getElementsByTagName("body")[0];

   // Pick a random number to use as the starting color
   Chameleon.colorT = ~~(Math.random()*Chameleon.noOfColors);

   // Call the changeColor function (defined below)
   Chameleon.changeColor();
};

Chameleon.changeColor = function() {
   // Remove a class on the BODY element that is called chameleon-colorX, where X represents the current color number
   Chameleon.bodyElement.classList.remove('chameleon-color' + Chameleon.colorT % Chameleon.noOfColors);

   // Increase the value of colorT by one
   Chameleon.colorT++;

   // Add a class on the BODY element that is called chameleon-colorX, where X represents the current color number
   Chameleon.bodyElement.classList.add('chameleon-color' + Chameleon.colorT % Chameleon.noOfColors);

   // Call the changeColor function after waiting for the duration value in seconds
   setTimeout(Chameleon.changeColor, Chameleon.duration * 1000);
};

// Run the init function
Chameleon.init();
