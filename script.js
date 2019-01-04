function volume() {
  var canvas = document.getElementById("myCanvas");
  var volume;
  var radius = document.forms["getRadius"]["theRadius"].value;
  var info = document.getElementById('info');

  // Check if Radius value is positive
  if ( radius < 0 ) {
    info.innerHTML = "הרדיוס לא יכול להיות קטן מ-0"
    return false;
  } else if ( isNaN(parseInt(radius)) ) {
    info.style.background = "linear-gradient(to top, #e5373f 0%, #f9636a 100%)";
    info.style.borderBottom = "2px solid red";
    info.innerHTML = "<i class='fas fa-exclamation-triangle iconmar'></i>אנא הזן ערכים עם התווים 0-9 בלבד";
    return false;
  }
  
  else {
    draw();
  }
  
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  info.style.background = "linear-gradient(to right, rgb(0, 143, 19), #08c918)";
  info.style.borderBottom = "2px solid green";
  info.innerHTML = "במידה ורדיוס הוא: " + " " + radius + '<br/>' +  " נפח הכדור הינו: " + " " + volume;
  return false;
}

// Draw the cicle
function draw(r, canvas) {
    var info = document.getElementById('info');
    var radius = document.forms["getRadius"]["theRadius"].value;
    var canvas = document.getElementById("myCanvas");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var context = canvas.getContext("2d");

    if (radius > 213) {
        alert("ה-Canvas חורג מהגבולות.")
        return false;
    }

    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "white";
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
} 

// Clear the Canvas

function clearcanvas()
{
    var canvas = document.getElementById('myCanvas'),
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var info = document.getElementById('info');
    info.innerHTML = "";
    info.style.visibility = "none";
}

function bonusFun(radius, canvas) {
    var canvas = document.getElementById("myCanvas");
    var c = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    c.beginPath();
    c.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'yellow';
    c.stroke();
}


function bonus() { // This is the bonus.
    var canvas = document.getElementById("myCanvas");
    var count = 1; 
    function drawAlone() { 
        setTimeout(function () { 
            bonusFun(count, canvas);  
            count++;
            if (count < 213) { // Until the limits.
                drawAlone(); 
            } 
        }, 100)
    }
    drawAlone();
}
bonus(); // onPage Load.
