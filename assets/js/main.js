// create a function to update the date and time
function updateDateTime() {
// create a new `Date` object
const now = new Date();

// get the current date and time as a string
const currentDateTime = now.toLocaleString();

// update the `textContent` property of the `span` element with the `id` of `datetime`
document.querySelector('#datetime').textContent = currentDateTime;
}

// call the `updateDateTime` function every second
setInterval(updateDateTime, 1000);


//Demo: https://www.codehim.com/demo/zoom-image-on-mouseover-using-javascript/
let zoomer = function (){
  document.querySelector('#img-zoomer-box')
    .addEventListener('mousemove', function(e) {

    let original = document.querySelector('#img-1'),
        magnified = document.querySelector('#img-2'),
        style = magnified.style,
        x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop,
        imgWidth = original.offsetWidth,
        imgHeight = original.offsetHeight,
        xperc = ((x/imgWidth) * 100),
        yperc = ((y/imgHeight) * 100);

    //lets user scroll past right edge of image
    if(x > (.01 * imgWidth)) {
      xperc += (.15 * xperc);
    };

    //lets user scroll past bottom edge of image
    if(y >= (.01 * imgHeight)) {
      yperc += (.15 * yperc);
    };

    style.backgroundPositionX = (xperc - 9) + '%';
    style.backgroundPositionY = (yperc - 9) + '%';

    style.left = (x - 180) + 'px';
    style.top = (y - 180) + 'px';

  }, false);
}();