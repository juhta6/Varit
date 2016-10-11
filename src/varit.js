var page = new tabris.Page({
  topLevel: true
});

var toolbar = tabris.ui.set("toolbarVisible", false);

var ra = 0;
var ga = 0;
var ba = 0;
var zero = 0;
var twofiftyfive = 255;
var times = 0;

var time = new tabris.TextView({
  layoutData: {bottom: 20, centerX: 0},
  font: "30px",
  textColor: "black",
  text: times 
}).appendTo(page);

var colors = new tabris.TextView({
  layoutData: {top: 20, centerX: 0},
  font: "30px",
  textColor: "black",
  text: ra+","+ga+","+ba 
}).appendTo(page);

var colors1 = new tabris.TextView({
  layoutData: {top: 50, centerX: 0},
  font: "20px",
  textColor: "red",
  text: ra+","+ga+","+ba 
}).appendTo(page);

page.open();

page.on("tap", function(widget, event) {
  	var r = Math.floor((Math.random() * 290) + 0);
	var g = Math.floor((Math.random() * 290) + 0);
	var b = Math.floor((Math.random() * 290) + 0);
  		ra = r
  		ga = g
  		ba = b
  page.set("background", "rgb("+r+","+g+","+b+")");
  colors.set("text", r+", "+g+", "+b)
  colors1.set("text", ra+", "+ga+", "+ba)
}).on("pan:down", function(widget, event) {
  page.set("background", "rgb("+ra+","+ga+","+ba+")");
  colors.set("text", (--ra)+", "+(--ga)+", "+(--ba))
  colors1.set("text", ra+", "+ga+", "+ba)
}).on("pan:up", function(widget, event) {
  page.set("background", "rgb("+ra+","+ga+","+ba+")");
  colors.set("text", (++ra)+", "+(++ga)+", "+(++ba))
  colors1.set("text", ra+", "+ga+", "+ba)
}).on("longpress", function(widget, event) {
  s(widget)
});

function s(widget){
 setInterval(ras, 10, widget)
 setInterval(gas, 10, widget)
 setInterval(bas, 10, widget)
}

function ras(widget){
	var r = Math.floor((Math.random() * 255) + 0);
	var g = Math.floor((Math.random() * 255) + 0);
	var b = Math.floor((Math.random() * 255) + 0);
  	time.set("text", (++times))
 	time.set("textColor", "rgb("+r+","+g+","+b+")")
    
     if (ra < 1) {
       ra = zero
      colors.set("text", zero+", "+ga+", "+ba)
	} else {
     if (ra > 254) {
       ra = twofiftyfive
       colors.set("textColor", "black")
       colors.set("text", twofiftyfive+", "+ga+", "+ba)
    }
 }
}
function gas(widget){
 	 if (ga < 1) {
       ga = zero
      colors.set("text", ra+", "+zero+", "+ba)
      colors.set("textColor", "white")
	} else {
     if (ga > 254) {
       ga = twofiftyfive
       colors.set("textColor", "black")
       colors.set("text", ra+", "+twofiftyfive+", "+ba)
    }
 }
}
function bas(widget){
 	 if (ba < 1) {
       ba = zero
      colors.set("text", ra+", "+ga+", "+zero)
      colors.set("textColor", "white")
	} else {
     if (ba > 254) {
       ba = twofiftyfive
       colors.set("textColor", "black")
       colors.set("text", ra+", "+ga+", "+twofiftyfive)
    }
 }
}
      
      