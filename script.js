function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var div = document.getElementById( 'colorchange' );
div.onmouseover = function() {
  this.style.color = getRandomColor();
  var h2s = this.getElementsByTagName( 'div' );
};
div.onmouseout = function() {
  this.style.color = 'black';
};