var items = []; // array of objects of all tabletop items

function Tableitem(width, height, leftpos, toppos, rotate, image, active) {
  this.width = width;
  this.height = height;
  this.leftpos = leftpos;
  this.toppos = toppos;
  this.rotate = roatate;
  this.image = "./" + image;
  this.active = false;

  this.addItem = function addItem(width, height, leftpos, toppos, rotate, image, active) {
    items.push(new Tableitem(width, height, leftpos, toppos, rotate, image, active));
  }

  this.move = function move(left, top) {
    this.leftpos += left;
    this.toppos += top;
    console.log("The item has been moved by " + left ", " + top);
  }

  this.active = function active(der) {
    $('.active').removeClass('active');
    $('#' + der).addClass('active');
    console.log(x +)
  }

  this.rotate =

}




function makeActive(x) {
  $('.active').removeClass('active')
  $('#' + x).addClass('active');
  console.log(x +' has been selected.');
}
