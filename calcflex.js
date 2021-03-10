/**
 * JS - Flex Fuel Calculator
 * @author Carlos Pinho
 * 
 */

//Declaring variables (var name created only for interactivity with the user throughout alerts)

/*OBS:
in JavaScript, variables are not typed, once the deduction of the type is authomatic based on the inputs and attributions
*/
var name, ethanol, gasoline;

//prompt - text box that once fullfilled and submitted links var name's value to the content received

name = prompt("What is your name?");

//Showing initial alert message to user concatenated with its name

alert("Welcome, Mr. " + name + ". Let's begin your Program!");

/*function created in order to receive form's input textbox values from index.html,
  attribute them to "ethanol" and "gasoline" vars and change the image according
  to its specific condition analysis - (Studies showed that in order for ethanol to
  have more proportional cost-bennefice compared to gasoline, since it lasts less
  mileage comparatively, its liter must be at least 30% cheaper than gasoline's)
*/

function calculate(){

	/*The following parseFloat was used in order to convert auto-defined String values to float.
	  This happens mainly because JS supposes all content written in forms' textboxes
	  are String-typed*/

	ethanol = parseFloat(formFlex.priceEthanol.value.replace(",","."));

	/*.replace(",",".") was used in these var attributions as a prevention, supposing a scenario
	  in which the user types "," as a decimal separator, which is actually a quite
	  common situation. If .replace was not used, it is easily verified at the browser's inspection
	  mode at its console section that the decimal places would be crush into the nearest integer 
	  value (Floor or Ceiling), or middle (0,5)
	*/
	gasoline = parseFloat(formFlex.priceGasoline.value.replace(",","."));

	if (ethanol < 0.7 * gasoline) {

		/*using the knowledge of DOM (Document Object Model) to access the image node
		  tagged with the specified id "status". Subsequently, this image's src is
		  modified to another image's according to which conditional scope the command
		  is in
		*/

		document.getElementById("status").src = "Imgs/ethanol.png";
	
	}

	else if (ethanol == 0.7*gasoline) {

		/*if this condition is satisfied, it means the user have reached
		  a situation of even cost-bennefice between ethanol and gasoline.
		  In this case, an alert with the custom name of the user will appear
		  at the browser and interactively explain him this conclusion, 
		  obtained by the JS calculate() function's internal algorythm
		*/

		document.getElementById("status").src = "Imgs/neutral.png";

		alert("Both Fuel Types have the same Cost-Bennefice for your Car, Mr. " + name + "!");

	}

	else{

		document.getElementById("status").src = "Imgs/gasoline.png";

	}

}

/* resetImg() function will be used in the formFlex clear button at index.hmtl
   in order to ensure that the calculator image will reset along with the 
   text inputs. This makes the calculator tool more dynamic and intuitive

 */

function resetImg() {

	document.getElementById("status").src = "Imgs/neutral.png";
}
















































































































