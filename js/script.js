window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

//Popup Windows
var curdate = new Date();
var curmonth = curdate.getMonth()+1;
//JANUARY
// Get the popup
var popupJan = document.getElementById("PopUpJan");

// Get the button that opens the popup
var btnJan = document.getElementById("openJan");

// Get the <span> element that closes the popup
var spanJan = (document.getElementsByClassName("closeJan"))[0];

// When the user clicks on the button, open the popup
btnJan.onclick = function() {
  if (curmonth >= 1)
  popupJan.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanJan.onclick = function() {
  popupJan.style.display = "none";
}
//--End of JANUARY
//FEBRUARY
// Get the popup
var popupFeb = document.getElementById("PopUpFeb");

// Get the button that opens the popup
var btnFeb = document.getElementById("openFeb");

// Get the <span> element that closes the popup
var spanFeb = document.getElementsByClassName("closeFeb")[0];

// When the user clicks on the button, open the popup
btnFeb.onclick = function() {
  if (curmonth >= 2)
  popupFeb.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanFeb.onclick = function() {
  popupFeb.style.display = "none";
}
//--End of FEBRUARY
//MARCH
// Get the popup
var popupMar = document.getElementById("PopUpMar");

// Get the button that opens the popup
var btnMar = document.getElementById("openMar");

// Get the <span> element that closes the popup
var spanMar = document.getElementsByClassName("closeMar")[0];

// When the user clicks on the button, open the popup
btnMar.onclick = function(){
  if (curmonth >= 3)
  popupMar.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanMar.onclick = function() {
  popupMar.style.display = "none";
}
//--End of MARCH
//APRIL
// Get the popup
var popupApr = document.getElementById("PopUpApr");

// Get the button that opens the popup
var btnApr = document.getElementById("openApr");

// Get the <span> element that closes the popup
var spanApr = document.getElementsByClassName("closeApr")[0];

// When the user clicks on the button, open the popup
btnApr.onclick = function() {
  if (curmonth >= 4)
  popupApr.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanApr.onclick = function() {
  popupApr.style.display = "none";
}
//--End of APRIL
//MAY
// Get the popup
var popupMay = document.getElementById("PopUpMay");

// Get the button that opens the popup
var btnMay = document.getElementById("openMay");

// Get the <span> element that closes the popup
var spanMay = document.getElementsByClassName("closeMay")[0];

// When the user clicks on the button, open the popup
btnMay.onclick = function() {
  if (curmonth >= 5)
  popupMay.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanMay.onclick = function() {
  popupMay.style.display = "none";
}
//--End of MAY
//JUNE
// Get the popup
var popupJun = document.getElementById("PopUpJun");

// Get the button that opens the popup
var btnJun = document.getElementById("openJun");

// Get the <span> element that closes the popup
var spanJun = document.getElementsByClassName("closeJun")[0];

// When the user clicks on the button, open the popup
btnJun.onclick = function() {
  if (curmonth >= 6)
  popupJun.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanJun.onclick = function() {
  popupJun.style.display = "none";
}
//--End of JUNE
//JULY
// Get the popup
var popupJul = document.getElementById("PopUpJul");

// Get the button that opens the popup
var btnJul = document.getElementById("openJul");

// Get the <span> element that closes the popup
var spanJul = document.getElementsByClassName("closeJul")[0];

// When the user clicks on the button, open the popup
btnJul.onclick = function() {
  if (curmonth >= 7)
  popupJul.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanJul.onclick = function() {
  popupJul.style.display = "none";
}
//--End of JULY
//AUGUST
// Get the popup
var popupAug = document.getElementById("PopUpAug");

// Get the button that opens the popup
var btnAug = document.getElementById("openAug");

// Get the <span> element that closes the popup
var spanAug = document.getElementsByClassName("closeAug")[0];

// When the user clicks on the button, open the popup
btnAug.onclick = function() {
  if (curmonth >= 8)
  popupAug.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanAug.onclick = function() {
  popupAug.style.display = "none";
}
//--End of AUGUST
//SEPTEMBER
// Get the popup
var popupSep = document.getElementById("PopUpSep");

// Get the button that opens the popup
var btnSep = document.getElementById("openSep");

// Get the <span> element that closes the popup
var spanSep = document.getElementsByClassName("closeSep")[0];

// When the user clicks on the button, open the popup
btnSep.onclick = function() {
  if (curmonth >= 9)
  popupSep.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanSep.onclick = function() {
  popupSep.style.display = "none";
}
//--End of SEPTEMBER
//OCTOBER
// Get the popup
var popupOct = document.getElementById("PopUpOct");

// Get the button that opens the popup
var btnOct = document.getElementById("openOct");

// Get the <span> element that closes the popup
var spanOct = document.getElementsByClassName("closeOct")[0];

// When the user clicks on the button, open the popup
btnOct.onclick = function() {
  if (curmonth >= 10)
  popupOct.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanOct.onclick = function() {
  popupOct.style.display = "none";
}
//--End of OCTOBER
//NOVEMBER
// Get the popup
var popupNov = document.getElementById("PopUpNov");

// Get the button that opens the popup
var btnNov = document.getElementById("openNov");

// Get the <span> element that closes the popup
var spanNov = document.getElementsByClassName("closeNov")[0];

// When the user clicks on the button, open the popup
btnNov.onclick = function() {
  if (curmonth >= 11)
  popupNov.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanNov.onclick = function() {
  popupNov.style.display = "none";
}
//--End of NOVEMBER
//DECEMBER
// Get the popup
var popupDec = document.getElementById("PopUpDec");

// Get the button that opens the popup
var btnDec = document.getElementById("openDec");

// Get the <span> element that closes the popup
var spanDec = document.getElementsByClassName("closeDec")[0];

// When the user clicks on the button, open the popup
btnDec.onclick = function() {
  if (curmonth >= 12)
  popupDec.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
spanDec.onclick = function() {
  popupDec.style.display = "none";
}
//--End of DECEMBER
//--End of Popup Windows


var door = document.getElementsByClassName("card_door");

openDoor.onmouseover = function() {
  door.style.perspective = "1000px";
  door.style.translateZ = "0px";
  door.style.translateX = "-70px";
  door.style.translateY = "0px";
  door.style.rotateY = "-100deg";
  door.style.boxShadow = "none";
  door.style.borderColor = "5px solid #363636";
}






