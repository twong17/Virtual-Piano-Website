// Sets up canvas and context to draw on
var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var player = null;

var x = 50;
var y = 50;

//declare image for user reference
var sheetMusicImage = new Image();
sheetMusicImage.src = "Images/BLANKSHEET.jpeg";

//jquery code to hide the image of sheet music with notes on it
$(document).ready(function(){
  $("#hide").click(function(){
    $("#SheetMusic").toggle();
  });
});


//class for the sheet music
function SheetMusic(x, y)
{
    this.x = x;
    this.y = y;
    

    this.draw = function()
    {
       ctx.drawImage(sheetMusicImage, x, y, 1028,128);
    }  
}

//class for the music notes on the sheet music
function MusicNote(x,y, radius)
{
    this.x = x;
    this.y = y;
    this.radius = radius;
    
    this.draw = function()
    {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.lineWidth = 0;
      ctx.strokeStyle = '#003300';
      ctx.stroke();
        
      ctx.beginPath();
      ctx.moveTo(x+radius,y);
      ctx.lineTo(x+radius,y-50);
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    
    this.checkValue = function()
    {
        if(y == 77)
        {
            return 'highF';
        }
        else if(y == 85)
        {
            return 'highE';
        }
        else if(y == 93)
        {
            return 'D';
        }
        else if(y == 101)
        {
            return 'C';
        }
        else if(y == 109)
        {
            return 'B';
        }
        else if(y == 117)
        {
            return 'A';
        }
        else if(y == 125)
        {
            return 'G';
        }
        else if(y == 133)
        {
            return 'lowF';
        }
        else if(y == 141)
        {
            return 'lowE';
        }
    }
}

//random number function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//shows message when the user presses submit button on sidebar
function showMessage()
{
    document.getElementById('sidebarMessage').innerHTML = 'Thank you for your feedback';
}



var sheet = new SheetMusic(x,y);
//get random integers
var randomInt1 = getRndInteger(0,9);
var randomInt2 = getRndInteger(0,9);
var randomInt3 = getRndInteger(0,9);
var randomInt4 = getRndInteger(0,9);
var randomInt5 = getRndInteger(0,9);
var randomInt6 = getRndInteger(0,9);
//get the possible positions on the sheet music
var pos = 77 + (randomInt1 * 8);
var pos2 = 77 + (randomInt2 * 8);
var pos3 = 77 + (randomInt3 * 8);
var pos4 = 77 + (randomInt4 * 8);
var pos5 = 77 + (randomInt5 * 8);
var pos6 = 77 + (randomInt6 * 8);

//create notes based on the positions given by random function
var note = new MusicNote(200,pos,8);
var note2 = new MusicNote(300,pos2,8);
var note3 = new MusicNote(400,pos3,8);
var note4 = new MusicNote(500,pos4,8);
var note5 = new MusicNote(600,pos5,8);
var note6 = new MusicNote(700,pos6,8);


//function to check the answer
function checkAnswer()
{
    var q1 = document.getElementById('questionOne').value;
    var q2 = document.getElementById('questionTwo').value;
    var q3 = document.getElementById('questionThree').value;
    var q4 = document.getElementById('questionFour').value;
    var q5 = document.getElementById('questionFive').value;
    var q6 = document.getElementById('questionSix').value;
    
    if(q1==note.checkValue())
    {
        document.getElementById("q1").innerHTML = "Question 1 is correct!";
    }
    else
    {
        document.getElementById("q1").innerHTML = "Question 1 is incorrect";
    }
    
    if(q2==note2.checkValue())
    {
        document.getElementById("q2").innerHTML = "Question 2 is correct!";
    }
    else
    {
        document.getElementById("q2").innerHTML = "Question 2 is incorrect";
    }
    
    if(q3==note3.checkValue())
    {
        document.getElementById("q3").innerHTML = "Question 3 is correct!";
    }
    else
    {
        document.getElementById("q3").innerHTML = "Question 3 is incorrect";
    }
    
    if(q4==note4.checkValue())
    {
        document.getElementById("q4").innerHTML = "Question 4 is correct!";
    }
    else
    {
        document.getElementById("q4").innerHTML = "Question 4 is incorrect";
    }
    
    if(q5==note5.checkValue())
    {
        document.getElementById("q5").innerHTML = "Question 5 is correct!";
    }
    else
    {
        document.getElementById("q5").innerHTML = "Question 5 is incorrect";
    }
    
    if(q6==note6.checkValue())
    {
        document.getElementById("q6").innerHTML = "Question 6 is correct!";
    }
    else
    {
        document.getElementById("q6").innerHTML = "Question 6 is incorrect";
    }
}

//update function
function update()
{
    
    sheet.draw();
    note.draw();
    note2.draw();
    note3.draw();
    note4.draw();
    note5.draw();
    note6.draw();
}
setInterval(update, 10);

//jquery ui function for the slider
$(document).ready(function(){
    $("#exercises-font-slider").slider({
        min: 0,
        max: 5,
        value: 0,
        slide: function(event, ui){
            if(ui.value==0){
                $("#exercises-font").text("0");
            }else if(ui.value==1){
                $("#exercises-font").text("1");
            }else if(ui.value==2){
                $("#exercises-font").text("2");
            }else if(ui.value==3){
                $("#exercises-font").text("3");
            }else if(ui.value==4){
                $("#exercises-font").text("4");
            }else{
                $("#exercises-font").text("5");
            }
        }
    });
});


