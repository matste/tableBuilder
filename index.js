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

  document.getElementById("canvas").appendChild(div); // add inside canvas
  counter += 1; // increase counter to ensure unique id
  console.log(items[0]);
}





  function makeActive(x) {
    $('.active').removeClass('active')
    $('#' + x).addClass('active');
    console.log(x +' has been selected.');
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
      console.log(x + ' size has been increased.');
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
      console.log(x + ' size has been decreased.');
    }

  }

  function clearSelection(x) {
    $('.active').removeClass('active')
    console.log('All items have been de-selected.');
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
      console.log(x + ' has been removed from the table');
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
      console.log('Layer has been increased to ' + x);
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

  function changeGold(){
    document.getElementById("fork1").style.backgroundImage = "url('./images/goldcutlery.png')";}

  function changeSilver(){
    document.getElementById("fork1").style.backgroundImage = "url('./images/forkexample.png')";}
