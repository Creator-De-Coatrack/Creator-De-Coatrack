var slideTimer = setInterval(slideIt, 3000);
document.getElementById("radio1").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image1"));
}
document.getElementById("radio2").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image2"));
}
document.getElementById("radio3").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image3"));
}
document.getElementById("radio4").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image4"));
}
document.getElementById("radio5").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image5"));
}
document.getElementById("radio6").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image6"));
}
document.getElementById("radio7").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image7"));
}
document.getElementById("radio8").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image8"));
}
document.getElementById("radio9").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image9"));
}
document.getElementById("radio10").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image10"));
}
document.getElementById("radio11").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image11"));
}
document.getElementById("radio12").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image12"));
}
document.getElementById("radio3").onclick = function(){
    clearInterval(slideTimer);
    slideTimer = setInterval(slideIt, 3000);
    changeImage(getElementById("image13"));
}
function slideIt() {
    if (document.getElementById('radio1').checked == true) {
            document.getElementById('radio2').click();
            changeImage(getElementById("image2"));
      }
        else if (document.getElementById('radio2').checked == true) {
            document.getElementById('radio3').click();
            changeImage(getElementById("image3"));
      } 
        else if (document.getElementById('radio3').checked == true) {
            document.getElementById('radio4').click();
            changeImage(getElementById("image4"));
    } 
        else if (document.getElementById('radio4').checked == true) {
            document.getElementById('radio5').click();
            changeImage(getElementById("image5"));
    } 
        else if (document.getElementById('radio5').checked == true) {
            document.getElementById('radio6').click();
            changeImage(getElementById("image6"));
    }
    else if (document.getElementById('radio6').checked == true) {
        document.getElementById('radio7').click();
        changeImage(getElementById("image7"));
  } 
    else if (document.getElementById('radio7').checked == true) {
        document.getElementById('radio8').click();
        changeImage(getElementById("image8"));
} 
    else if (document.getElementById('radio8').checked == true) {
        document.getElementById('radio9').click();
        changeImage(getElementById("image9"));
} 
    else if (document.getElementById('radio9').checked == true) {
        document.getElementById('radio10').click();
        changeImage(getElementById("image10"));
}
    else if (document.getElementById('radio10').checked == true) {
        document.getElementById('radio11').click();
        changeImage(getElementById("image11"));
    } 
    else if (document.getElementById('radio11').checked == true) {
        document.getElementById('radio12').click();
        changeImage(getElementById("image12"));
    } 
    else if (document.getElementById('radio12').checked == true) {
        document.getElementById('radio13').click();
        changeImage(getElementById("image13"));
    } 
    else if (document.getElementById('radio13').checked == true) {
        document.getElementById('radio1').click();
        changeImage(getElementById("image1"));
    } 
        else {
          //do nothing
        }
}
function prev(){
    if (document.getElementById('radio13').checked == true) {
        document.getElementById('radio12').click();
        changeImage(getElementById("image12"));
  }
    else if (document.getElementById('radio12').checked == true) {
        document.getElementById('radio11').click();
        changeImage(getElementById("image11"));
  } 
    else if (document.getElementById('radio11').checked == true) {
        document.getElementById('radio10').click();
        changeImage(getElementById("image10"));
} 
    else if (document.getElementById('radio10').checked == true) {
        document.getElementById('radio9').click();
        changeImage(getElementById("image9"));
} 
    else if (document.getElementById('radio9').checked == true) {
        document.getElementById('radio8').click();
        changeImage(getElementById("image8"));
}
else if (document.getElementById('radio8').checked == true) {
    document.getElementById('radio7').click();
    changeImage(getElementById("image7"));
} 
else if (document.getElementById('radio7').checked == true) {
    document.getElementById('radio6').click();
    changeImage(getElementById("image6"));
} 
else if (document.getElementById('radio6').checked == true) {
    document.getElementById('radio5').click();
    changeImage(getElementById("image5"));
} 
else if (document.getElementById('radio5').checked == true) {
    document.getElementById('radio4').click();
    changeImage(getElementById("image4"));
}
else if (document.getElementById('radio4').checked == true) {
    document.getElementById('radio3').click();
    changeImage(getElementById("image3"));
} 
else if (document.getElementById('radio3').checked == true) {
    document.getElementById('radio2').click();
    changeImage(getElementById("image2"));
} 
else if (document.getElementById('radio2').checked == true) {
    document.getElementById('radio1').click();
    changeImage(getElementById("image1"));
} 
else if (document.getElementById('radio1').checked == true) {
    document.getElementById('radio13').click();
    changeImage(getElementById("image13"));
} 
    else {
      //do nothing
    }
}
function next() {
    if (document.getElementById('radio1').checked == true) {
            document.getElementById('radio2').click();
            changeImage(getElementById("image2"));
      }
        else if (document.getElementById('radio2').checked == true) {
            document.getElementById('radio3').click();
            changeImage(getElementById("image3"));
      } 
        else if (document.getElementById('radio3').checked == true) {
            document.getElementById('radio4').click();
            changeImage(getElementById("image4"));
    } 
        else if (document.getElementById('radio4').checked == true) {
            document.getElementById('radio5').click();
            changeImage(getElementById("image5"));
    } 
        else if (document.getElementById('radio5').checked == true) {
            document.getElementById('radio6').click();
            changeImage(getElementById("image6"));
    }
    else if (document.getElementById('radio6').checked == true) {
        document.getElementById('radio7').click();
        changeImage(getElementById("image7"));
  } 
    else if (document.getElementById('radio7').checked == true) {
        document.getElementById('radio8').click();
        changeImage(getElementById("image8"));
} 
    else if (document.getElementById('radio8').checked == true) {
        document.getElementById('radio9').click();
        changeImage(getElementById("image9"));
} 
    else if (document.getElementById('radio9').checked == true) {
        document.getElementById('radio10').click();
        changeImage(getElementById("image10"));
}
    else if (document.getElementById('radio10').checked == true) {
        document.getElementById('radio11').click();
        changeImage(getElementById("image11"));
    } 
    else if (document.getElementById('radio11').checked == true) {
        document.getElementById('radio12').click();
        changeImage(getElementById("image12"));
    } 
    else if (document.getElementById('radio12').checked == true) {
        document.getElementById('radio13').click();
        changeImage(getElementById("image13"));
    } 
    else if (document.getElementById('radio13').checked == true) {
        document.getElementById('radio1').click();
        changeImage(getElementById("image1"));
    } 
        else {
          //do nothing
        }
}