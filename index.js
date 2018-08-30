/*
CONVERTING ENTIRE SCRIPT TO OBJECT CLASSES
*/

var counter = 1; // counter used to create unique ids
var items = []; // blank array, to keep item objects

function Tableitem (x, y, w, h, unid, imageLink) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.unid = unid;
  this.imageLink = imageLink;
}

function newItem (w, h, imageLink) {
  var uniqueId = "item" + counter;
  var tableitem = new Tableitem(0, 0, w, h, uniqueId, imageLink); // create object

  items.push(tableitem); // add object to array of items
  var div = document.createElement("div"); // add physical div to document
  div.style.backgroundImage = "url('./images/" + imageLink + "')";
  div.setAttribute("onClick", "makeActive($(this).attr('id'))");
  div.setAttribute("id", uniqueId);
  div.setAttribute("class", "fork");
  div.setAttribute("onmousedown", "dragElement(document.getElementById($(this).attr('id')));");

  document.getElementById("canvas").appendChild(div); // add inside canvas
  counter += 1; // increase counter to ensure unique id
  console.log(items[0]);
}


function testing() {
  console.log("test");
}


  function makeActive(x) {
    $('.active').removeClass('active')
    $('#' + x).addClass('active');
  }

  function grow() {
    if (!document.querySelector('.active')){
      console.log('Error: no item has been selected.');
      alert('You must first select an item from the table to increase it\'s size');
    }
    else{
      var x = document.querySelector('.active').id
      var currentWidth = document.getElementById(x).offsetWidth;
      currentWidth *= 1.1;
      document.getElementById(x).style.width = currentWidth + "px";
      var currentHeight = document.getElementById(x).offsetHeight;
      currentHeight *= 1.1;
      document.getElementById(x).style.height = currentHeight + "px";
    }
  }

  function shrink() {
    if (!document.querySelector('.active')){
      console.log('Error: no item has been selected.');
      alert('You must first select an item from the table to decrease it\'s size');
    }
      else{
      var x = document.querySelector('.active').id
      var currentWidth = document.getElementById(x).offsetWidth;
      currentWidth /= 1.1;
      document.getElementById(x).style.width = currentWidth + "px";
      var currentHeight = document.getElementById(x).offsetHeight;
      currentHeight /= 1.1;
      document.getElementById(x).style.height = currentHeight + "px";
    }

  }

  function clearSelection(x) {
    $('.active').removeClass('active')
  }

  function remove() {
    if (!document.querySelector('.active')){
      console.log('No items are selected.');
      alert('You must first select an item from the table to be removed.');
    }

    else{
      var x = document.querySelector('.active').id;
      document.getElementById(x).remove();
      $('.active').removeClass('active')
    }
  }

  function upLayer() {
    var x = $('.active').css('z-index');
    x = Number(x);

    if (x >= 10){
      console.log('You are on the top layer.');
      alert('You are on the top layer');
      x = 10;
    }
    else{
      x = x + 1;
      y = document.querySelector('.active').id;
      document.getElementById(y).style.zIndex = x.toString();
    }
  }


  function downLayer() {
    var x = $('.active').css('z-index');
    x = Number(x);

    if (x <= 1){
      console.log('You are on the bottom layer.');
      alert('You are on the bottom layer');
      x = 1;
    }
    else{
      x = x - 1;
      y = document.querySelector('.active').id;
      document.getElementById(y).style.zIndex = x.toString();
      console.log('Layer has been decreased to ' + x);
    }
  }

  var degrees = 0;
  function rotate() {
    degrees = (degrees + 90) % 360;
    $(".active").css({
      transform: "rotate(" + degrees + "deg)"
    });
  }


//Make the DIV element draggagle:

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;



  function dragMouseDown(e) {
    console.log("drag mouse Down");
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
