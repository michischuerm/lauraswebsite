/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openDropdown(element){
	let dropDown = element.getElementsByClassName("dropdown-content");
	dropDown[0].classList.toggle("dropDownOpen");
}




let imageArray = [
"pictures/purenews/wallpaper_1.jpg",
"pictures/purenews/wallpaper_2.jpg",
"pictures/purenews/wallpaper_3.jpg",
"pictures/purenews/wallpaper_4.jpg",
"pictures/purenews/wallpaper_5.jpg",
"pictures/purenews/wallpaper_6.jpg",
"pictures/purenews/wallpaper_7.jpg",
"pictures/purenews/erdofan_0.jpg",
"pictures/purenews/erdofan1.jpg",
"pictures/purenews/erdofan2.jpg",
"pictures/purenews/erdofan3.jpg",
"pictures/purenews/erdofan4.jpg",
"pictures/purenews/erdofan5.jpg",
"pictures/purenews/erdofan6.jpg",
"pictures/purenews/poison_1.jpg",
"pictures/purenews/poison_2.jpg",
"pictures/purenews/poison_3.jpg",

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


