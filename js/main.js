/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openDropdown(element){
	let dropDown = element.parentNode.parentNode.getElementsByClassName("dropdown-content");
	dropDown[0].classList.toggle("dropDownOpen");
}




let imageArray = [
"pictures/KFZ/KFZ_1.jpg", 
"pictures/KFZ/KFZ_2.jpg",
"pictures/KFZ/KFZ_3.jpg",
"pictures/KFZ/KFZ_4.jpg",
"pictures/KFZ/KFZ_5.jpg",


];

let index = 0;




function changePicture() {

	index++;
	document.getElementById("picture").src=imageArray[index];
}

function changePicture() {



  index++;
  if(index >= imageArray.length) {
    index=0;
  }

  //console.log("index: "+ (index));
  //console.log("arrayLength: "+ imageArray.length);
  document.getElementById("picture").src=imageArray[index];

}


//---------------------------------------------

function show_position (event) {
  // X- und Y-Position des Mauscursors in Abhängigkeit des
  // Browsers ermitteln
  var x = document.all ? event.offsetX : event.pageX;
  var y = document.all ? event.offsetY : event.pageY;
  // Ausgabemeldung zusammenstellen
  var out = 'Mausposition: ' + x + ', ' + y;
  // Ausgabe im dafür vorgesehenen SPAN-Element
  document.getElementById ('info').firstChild.data = out;
}

// Event-Handler für das onMousemove-Event des Body-Tags
// festlegen
document.body.onmousemove = show_position;


