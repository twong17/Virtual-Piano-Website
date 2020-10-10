// Sets up canvas and context to draw on
var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var myCanvas = document.getElementById("myCanvas2");
var cxt = myCanvas.getContext("2d");
var player = null;

//declare variables
var x = 50;
var y = 50;
var whiteX = x;
var whiteY = y;
var blackX = x;
var blackY = y;
var pWidth = 700;
var pHeight = 200;

var whiteWidth= pWidth/14;
var whiteHeight = pWidth;

//sidebar function to show message when submit button is pressed
function showMessage()
{
    document.getElementById('sidebarMessage').innerHTML = 'Thank you for your feedback';
}

// Check Key presses
var Keys = {
        middleCPressed: false,
        middleDPressed: false,
        middleEPressed: false,
        middleFPressed: false,
        middleGPressed: false,
        middleAPressed: false,
        middleBPressed: false,
        highCPressed: false,
        highDPressed: false,
        highEPressed: false,
        highFPressed: false,
        highGPressed: false,
        highAPressed: false,
        highBPressed: false,
        midCSharpPressed: false, 
        midDSharpPressed:false,
        midFSharpPressed: false,
        midGSharpPressed: false,
        midASharpPressed: false, 
        highCSharpPressed: false,
        highDSharpPressed: false,
        highFSharpPressed: false,
        highGSharpPressed: false,
        highASharpPressed: false,
    };


window.onkeydown = function(e) {
    var kc = e.keyCode;
    e.preventDefault();

    if      (kc === 9) Keys.middleCPressed = true;  
    else if (kc === 81) Keys.middleDPressed = true;    
    else if (kc === 87) Keys.middleEPressed = true;
    else if (kc === 69) Keys.middleFPressed = true;
    else if (kc === 82) Keys.middleGPressed = true;    
    else if (kc === 84) Keys.middleAPressed = true;
    else if (kc === 89) Keys.middleBPressed = true;
    else if (kc === 85) Keys.highCPressed = true;    
    else if (kc === 73) Keys.highDPressed = true;
    else if (kc === 79) Keys.highEPressed = true;
    else if (kc === 80) Keys.highFPressed = true;    
    else if (kc === 219) Keys.highGPressed = true;
    else if (kc === 221) Keys.highAPressed = true;
    else if (kc === 220) Keys.highBPressed = true;
    else if (kc === 49) Keys.midCSharpPressed = true;
    else if (kc === 50) Keys.midDSharpPressed = true;
    else if (kc === 51) Keys.midFSharpPressed = true;
    else if (kc === 52) Keys.midGSharpPressed = true;
    else if (kc === 53) Keys.midASharpPressed = true;
    else if (kc === 54) Keys.highCSharpPressed = true;
    else if (kc === 55) Keys.highDSharpPressed = true;
    else if (kc === 56) Keys.highFSharpPressed = true;
    else if (kc === 57) Keys.highGSharpPressed = true;
    else if (kc === 48) Keys.highASharpPressed = true;
};

window.onkeyup = function(e) {
    var kc = e.keyCode;
    e.preventDefault();

    if      (kc === 9) Keys.middleCPressed = false;  
    else if (kc === 81) Keys.middleDPressed = false;    
    else if (kc === 87) Keys.middleEPressed = false;
    else if (kc === 69) Keys.middleFPressed = false;
    else if (kc === 82) Keys.middleGPressed = false;    
    else if (kc === 84) Keys.middleAPressed = false;
    else if (kc === 89) Keys.middleBPressed = false;
    else if (kc === 85) Keys.highCPressed = false;    
    else if (kc === 73) Keys.highDPressed = false;
    else if (kc === 79) Keys.highEPressed = false;
    else if (kc === 80) Keys.highFPressed = false;    
    else if (kc === 219) Keys.highGPressed = false;
    else if (kc === 221) Keys.highAPressed = false;
    else if (kc === 220) Keys.highBPressed = false;
    else if (kc === 49) Keys.midCSharpPressed = false;
    else if (kc === 50) Keys.midDSharpPressed = false;
    else if (kc === 51) Keys.midFSharpPressed = false;
    else if (kc === 52) Keys.midGSharpPressed = false;
    else if (kc === 53) Keys.midASharpPressed = false;
    else if (kc === 54) Keys.highCSharpPressed = false;
    else if (kc === 55) Keys.highDSharpPressed = false;
    else if (kc === 56) Keys.highFSharpPressed = false;
    else if (kc === 57) Keys.highGSharpPressed = false;
    else if (kc === 48) Keys.highASharpPressed = false;
};


//declares the white keys on the piano where the tutorial will be shown
function WhiteKeys(whiteX, whiteY, color)
{
    this.whiteX = whiteX;
    this.whiteY = whiteY;
    this.color = color;
    
    this.changeColor = function(newColor)
    {
        color = newColor;
    }
    
    this.draw = function()
    {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(whiteX,whiteY);
        ctx.lineTo(whiteX+50,whiteY);
        ctx.lineTo(whiteX+50,whiteY+200);
        ctx.lineTo(whiteX,whiteY+200);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }  
}


//declares the white keys on the bottom piano for the user to practice on
function WhiteKeys2(whiteX, whiteY, color)
{
    this.whiteX = whiteX;
    this.whiteY = whiteY;
    this.color = color;
    
    this.changeColor = function(newColor)
    {
        color = newColor;
    }
    
    this.draw = function()
    {
        cxt.fillStyle = color;
        cxt.beginPath();
        cxt.moveTo(whiteX,whiteY);
        cxt.lineTo(whiteX+50,whiteY);
        cxt.lineTo(whiteX+50,whiteY+200);
        cxt.lineTo(whiteX,whiteY+200);
        cxt.closePath();
        cxt.stroke();
        cxt.fill();
    }  
}

//declares the black keys on the piano where the tutorial is shown
function BlackKeys(blackX, blackY, color)
{
    this.blackX = blackX;
    this.blackY = blackY;
    this.color = color;
    
    this.changeColor = function(newColor)
    {
        color = newColor;
    }
    
    this.draw = function()
    {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(blackX,blackY);
        ctx.lineTo(blackX+30,blackY);
        ctx.lineTo(blackX+30,blackY+100);
        ctx.lineTo(blackX,blackY+100);
        
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }  
}
//declares the black keys on the bottom piano where the user can practice 
function BlackKeys2(blackX, blackY, color)
{
    this.blackX = blackX;
    this.blackY = blackY;
    this.color = color;
    
    this.changeColor = function(newColor)
    {
        color = newColor;
    }
    
    this.draw = function()
    {
        cxt.fillStyle = color;
        cxt.beginPath();
        cxt.moveTo(blackX,blackY);
        cxt.lineTo(blackX+30,blackY);
        cxt.lineTo(blackX+30,blackY+100);
        cxt.lineTo(blackX,blackY+100);
        
        cxt.closePath();
        cxt.stroke();
        cxt.fill();
    }  
}
//declare keys for the tutorial canvas
var middleC = new WhiteKeys(50,50,'white');
var middleD = new WhiteKeys(100,50,'white');
var middleE = new WhiteKeys(150,50,'white');
var middleF = new WhiteKeys(200,50,'white');
var middleG = new WhiteKeys(250,50,'white');
var middleA = new WhiteKeys(300,50,'white');
var middleB = new WhiteKeys(350,50,'white');
var highC = new WhiteKeys(400,50,'white');
var highD = new WhiteKeys(450,50,'white');
var highE = new WhiteKeys(500,50,'white');
var highF = new WhiteKeys(550,50,'white');
var highG = new WhiteKeys(600,50,'white');
var highA = new WhiteKeys(650,50,'white');
var highB = new WhiteKeys(700,50,'white');
var midCSharp = new BlackKeys(85,50,'black');
var midDSharp = new BlackKeys(135,50,'black');
var midFSharp = new BlackKeys(235,50,'black');
var midGSharp = new BlackKeys(285,50,'black');
var midASharp = new BlackKeys(335,50,'black');
var highCSharp = new BlackKeys(435,50,'black');
var highDSharp = new BlackKeys(485,50,'black');
var highFSharp = new BlackKeys(585,50,'black');
var highGSharp = new BlackKeys(635,50,'black');
var highASharp = new BlackKeys(685,50,'black');

//declare keys for the second canvas so the user can play on
var middleC2 = new WhiteKeys2(50,50,'white');
var middleD2 = new WhiteKeys2(100,50,'white');
var middleE2 = new WhiteKeys2(150,50,'white');
var middleF2 = new WhiteKeys2(200,50,'white');
var middleG2 = new WhiteKeys2(250,50,'white');
var middleA2 = new WhiteKeys2(300,50,'white');
var middleB2 = new WhiteKeys2(350,50,'white');
var highC2 = new WhiteKeys2(400,50,'white');
var highD2 = new WhiteKeys2(450,50,'white');
var highE2 = new WhiteKeys2(500,50,'white');
var highF2 = new WhiteKeys2(550,50,'white');
var highG2 = new WhiteKeys2(600,50,'white');
var highA2 = new WhiteKeys2(650,50,'white');
var highB2 = new WhiteKeys2(700,50,'white');

var midCSharp2 = new BlackKeys2(85,50,'black');
var midDSharp2 = new BlackKeys2(135,50,'black');
var midFSharp2 = new BlackKeys2(235,50,'black');
var midGSharp2 = new BlackKeys2(285,50,'black');
var midASharp2 = new BlackKeys2(335,50,'black');
var highCSharp2 = new BlackKeys2(435,50,'black');
var highDSharp2 = new BlackKeys2(485,50,'black');
var highFSharp2 = new BlackKeys2(585,50,'black');
var highGSharp2 = new BlackKeys2(635,50,'black');
var highASharp2 = new BlackKeys2(685,50,'black');

//declare the images of the keys 
var tabImage = new Image();
tabImage.src = "Images/TabKey.jpg";
var oneKeyImage = new Image();
oneKeyImage.src = "Images/1Key.png";
var qKeyImage = new Image();
qKeyImage.src = "Images/QKey.png";
var twoKeyImage = new Image();
twoKeyImage.src = "Images/2Key.png";
var threeKeyImage = new Image();
threeKeyImage.src = "Images/3Key.png";
var wKeyImage = new Image();
wKeyImage.src = "Images/WKey.png";
var eKeyImage = new Image();
eKeyImage.src = "Images/eKey.png";
var rKeyImage = new Image();
rKeyImage.src = "Images/RKey.png";
var fourKeyImage = new Image();
fourKeyImage.src = "Images/4Key.png";
var tKeyImage = new Image();
tKeyImage.src = "Images/TKey.png";
var fiveKeyImage = new Image();
fiveKeyImage.src = "Images/5Key.png";
var yKeyImage = new Image();
yKeyImage.src = "Images/YKey.jpg";
var uKeyImage = new Image();
uKeyImage.src = "Images/UKey.png";
var sixKeyImage = new Image();
sixKeyImage.src = "Images/6Key.png";
var iKeyImage = new Image();
iKeyImage.src = "Images/IKey.jpg";
var oKeyImage = new Image();
oKeyImage.src = "Images/OKey.png";
var pKeyImage = new Image();
pKeyImage.src = "Images/PKey.png";
var openBracketKeyImage = new Image();
openBracketKeyImage.src = "Images/OpenBracketKey.png";
var closeBracketKeyImage = new Image();
closeBracketKeyImage.src = "Images/CloseBracketKey.png";
var backSlashKeyImage = new Image();
backSlashKeyImage.src = "Images/BackslashKey.jpg";
var sevenKeyImage = new Image();
sevenKeyImage.src = "Images/7Key.png";
var eightKeyImage = new Image();
eightKeyImage.src = "Images/8Key.png";
var nineKeyImage = new Image();
nineKeyImage.src = "Images/9Key.png";
var zeroKeyImage = new Image();
zeroKeyImage.src = "Images/0Key.png";

    //draw the keys in their initial states
    middleC.draw();
    middleD.draw();
    middleE.draw();
    middleF.draw();
    middleG.draw();
    middleA.draw();
    middleB.draw();
    highC.draw();
    highD.draw();
    highE.draw();
    highF.draw();
    highG.draw();
    highA.draw();
    highB.draw();
    midCSharp.draw();
    midDSharp.draw();
    midFSharp.draw();
    midGSharp.draw();
    midASharp.draw();
    highCSharp.draw();
    highDSharp.draw();
    highFSharp.draw();
    highGSharp.draw();
    highASharp.draw();
//draw the keys
function drawAllKeys()
{
    middleC.draw();
    middleD.draw();
    middleE.draw();
    middleF.draw();
    middleG.draw();
    middleA.draw();
    middleB.draw();
    highC.draw();
    highD.draw();
    highE.draw();
    highF.draw();
    highG.draw();
    highA.draw();
    highB.draw();
    midCSharp.draw();
    midDSharp.draw();
    midFSharp.draw();
    midGSharp.draw();
    midASharp.draw();
    highCSharp.draw();
    highDSharp.draw();
    highFSharp.draw();
    highGSharp.draw();
    highASharp.draw();
}

//function to play the tutorial for Ode to Joy, will occur when the button is pressed
function playOdeToJoy()
{ 
    setTimeout(function(){document.getElementById('middleEAudio').play(); middleE.changeColor('blue'); drawAllKeys(); },500);
    setTimeout(function(){middleE.changeColor('white'); drawAllKeys(); },1000);
    setTimeout(function(){document.getElementById('middleEAudio').play(); middleE.changeColor('blue'); drawAllKeys(); },1500);
    setTimeout(function(){middleE.changeColor('white'); drawAllKeys(); },2000);
    setTimeout(function(){document.getElementById('middleFAudio').play(); middleF.changeColor('blue'); drawAllKeys(); },2500);
    setTimeout(function(){middleF.changeColor('white'); drawAllKeys(); },3000);
    setTimeout(function(){document.getElementById('middleGAudio').play(); middleG.changeColor('blue'); drawAllKeys(); },3500);
    setTimeout(function(){middleG.changeColor('white'); drawAllKeys(); },4000);
    setTimeout(function(){document.getElementById('middleGAudio').play(); middleG.changeColor('blue'); drawAllKeys(); },4500);
    setTimeout(function(){middleG.changeColor('white'); drawAllKeys(); },5000);
    setTimeout(function(){document.getElementById('middleFAudio').play(); middleF.changeColor('blue'); drawAllKeys(); },5500);
    setTimeout(function(){middleF.changeColor('white'); drawAllKeys(); },6000);
    setTimeout(function(){document.getElementById('middleEAudio').play(); middleE.changeColor('blue'); drawAllKeys(); },6500);
    setTimeout(function(){middleE.changeColor('white'); drawAllKeys(); },7000);
    setTimeout(function(){document.getElementById('middleDAudio').play(); middleD.changeColor('blue'); drawAllKeys(); },7500);
    setTimeout(function(){middleD.changeColor('white'); drawAllKeys(); },8000);
    setTimeout(function(){document.getElementById('middleCAudio').play(); middleC.changeColor('blue'); drawAllKeys(); },8500);
    setTimeout(function(){middleC.changeColor('white'); drawAllKeys(); },9000);
    setTimeout(function(){document.getElementById('middleCAudio').play(); middleC.changeColor('blue'); drawAllKeys(); },9500);
    setTimeout(function(){middleC.changeColor('white'); drawAllKeys(); },10000);
    setTimeout(function(){document.getElementById('middleDAudio').play(); middleD.changeColor('blue'); drawAllKeys(); },10500);
    setTimeout(function(){middleD.changeColor('white'); drawAllKeys(); },11000);
    setTimeout(function(){document.getElementById('middleEAudio').play(); middleE.changeColor('blue'); drawAllKeys(); },11500);
    setTimeout(function(){middleE.changeColor('white'); drawAllKeys(); },12000);
    setTimeout(function(){document.getElementById('middleEAudio').play(); middleE.changeColor('blue'); drawAllKeys(); },12500);
    setTimeout(function(){middleE.changeColor('white'); drawAllKeys(); },13000);
    setTimeout(function(){document.getElementById('middleDAudio').play(); middleD.changeColor('blue'); drawAllKeys(); },13500);
    setTimeout(function(){middleD.changeColor('white'); drawAllKeys(); },14000);
    setTimeout(function(){document.getElementById('middleDAudio').play(); middleD.changeColor('blue'); drawAllKeys(); },14500);
    setTimeout(function(){middleD.changeColor('white'); drawAllKeys(); },15000);
}

function update()
{
    
    //cxt.clearRect(0, 0, myCanvas.width, myCanvas.height);
    
    //draw all the piano keys
    //player = drawRect(pWidth, pHeight, "white", x, y);
    middleC2.draw();
    middleD2.draw();
    middleE2.draw();
    middleF2.draw();
    middleG2.draw();
    middleA2.draw();
    middleB2.draw();
    highC2.draw();
    highD2.draw();
    highE2.draw();
    highF2.draw();
    highG2.draw();
    highA2.draw();
    highB2.draw();
    midCSharp2.draw();
    midDSharp2.draw();
    midFSharp2.draw();
    midGSharp2.draw();
    midASharp2.draw();
    highCSharp2.draw();
    highDSharp2.draw();
    highFSharp2.draw();
    highGSharp2.draw();
    highASharp2.draw();
    
    cxt.drawImage(tabImage, 50, 270, 35, 35);
    cxt.drawImage(oneKeyImage, 85, 10, 35, 35);
    cxt.drawImage(qKeyImage, 100, 270, 35, 35);
    cxt.drawImage(twoKeyImage, 135, 10, 35, 35);
    cxt.drawImage(threeKeyImage, 235, 10, 35, 35);
    cxt.drawImage(wKeyImage, 150, 270, 35, 35);
    cxt.drawImage(eKeyImage, 200, 270, 35, 35);
    cxt.drawImage(rKeyImage, 250, 270, 35, 35);
    cxt.drawImage(fourKeyImage, 285, 10, 35, 35);
    cxt.drawImage(tKeyImage, 300, 270, 35, 35);
    cxt.drawImage(fiveKeyImage, 335, 10, 35, 35);
    cxt.drawImage(yKeyImage, 350, 270, 35, 35);
    cxt.drawImage(uKeyImage, 400, 270, 35, 35);
    cxt.drawImage(iKeyImage, 450, 270, 35, 35);
    cxt.drawImage(sixKeyImage, 435, 10, 35, 35);
    cxt.drawImage(oKeyImage, 500, 270, 35, 35);
    cxt.drawImage(pKeyImage, 550, 270, 35, 35);
    cxt.drawImage(openBracketKeyImage, 600, 270, 35, 35);
    cxt.drawImage(closeBracketKeyImage, 650, 270, 35, 35);
    cxt.drawImage(backSlashKeyImage, 700, 270, 35, 35);
    cxt.drawImage(sevenKeyImage, 485, 10, 35, 35);
    cxt.drawImage(eightKeyImage, 585, 10, 35, 35);
    cxt.drawImage(nineKeyImage, 635, 10, 35, 35);
    cxt.drawImage(zeroKeyImage, 685, 10, 35, 35);
    console.log(x, y);
    //change the color of the keys if the specified key is pressed
    if(Keys.middleCPressed)
        {
            document.getElementById('middleCAudio').play();
            middleC2.changeColor('blue');
            
        }
    else if(Keys.middleDPressed)
        {
            document.getElementById('middleDAudio').play();
            middleD2.changeColor('blue');
        }
    else if(Keys.middleEPressed)
        {
            document.getElementById('middleEAudio').play();
            middleE2.changeColor('blue');
        }
    else if(Keys.middleFPressed)
        {
            document.getElementById('middleFAudio').play();
            middleF2.changeColor('blue');
        }
    else if(Keys.middleGPressed)
        {
            document.getElementById('middleGAudio').play();
            middleG2.changeColor('blue');
        }
    else if(Keys.middleAPressed)
        {
            document.getElementById('middleAAudio').play();
            middleA2.changeColor('blue');
        }
    else if(Keys.middleBPressed)
        {
            document.getElementById('middleBAudio').play();
            middleB2.changeColor('blue');
        }
    else if(Keys.highCPressed)
        {
            document.getElementById('highCAudio').play();
            highC2.changeColor('blue');
        }
    else if(Keys.highDPressed)
        {
            document.getElementById('highDAudio').play();
            highD2.changeColor('blue');
        }
    else if(Keys.highEPressed)
        {
            document.getElementById('highEAudio').play();
            highE2.changeColor('blue');
        }
    else if(Keys.highFPressed)
        {
            document.getElementById('highFAudio').play();
            highF2.changeColor('blue');
        }
    else if(Keys.highGPressed)
        {
            document.getElementById('highGAudio').play();
            highG2.changeColor('blue');
        }
    else if(Keys.highAPressed)
        {
            document.getElementById('highAAudio').play();
            highA2.changeColor('blue');
        }
    else if(Keys.highBPressed)
        {
            document.getElementById('highBAudio').play();
            highB2.changeColor('blue');
        }
    else if(Keys.midCSharpPressed)
        {
            document.getElementById('middleCSharpAudio').play();
            midCSharp2.changeColor('blue');
        }
    else if(Keys.midDSharpPressed)
        {
            document.getElementById('middleDSharpAudio').play();
            midDSharp2.changeColor('blue');
        }
    else if(Keys.midFSharpPressed)
        {
            document.getElementById('middleFSharpAudio').play();
            midFSharp2.changeColor('blue');
        }
    else if(Keys.midGSharpPressed)
        {
            document.getElementById('middleGSharpAudio').play();
            midGSharp2.changeColor('blue');
        }
    else if(Keys.midASharpPressed)
        {
            document.getElementById('middleASharpAudio').play();
            midASharp2.changeColor('blue');
        }
    else if(Keys.highCSharpPressed)
        {
            document.getElementById('highCSharpAudio').play();
            highCSharp2.changeColor('blue');
        }
    else if(Keys.highDSharpPressed)
        {
            document.getElementById('highDSharpAudio').play();
            highDSharp2.changeColor('blue');
        }
    else if(Keys.highFSharpPressed)
        {
            document.getElementById('highFSharpAudio').play();
            highFSharp2.changeColor('blue');
        }
    else if(Keys.highGSharpPressed)
        {
            document.getElementById('highGSharpAudio').play();
            highGSharp2.changeColor('blue');
        }
    else if(Keys.highASharpPressed)
        {
            document.getElementById('highASharpAudio').play();
            highASharp2.changeColor('blue');
        }
   
   
    //change the color of the key back to the original after the key is released
    if(Keys.middleCPressed ==false)
        {
            middleC2.changeColor('white');
        }
    if(Keys.middleDPressed ==false)
        {
            middleD2.changeColor('white');
        }
    if(Keys.middleEPressed ==false)
        {
            middleE2.changeColor('white');
        }
    if(Keys.middleFPressed ==false)
        {
            middleF2.changeColor('white');
        }
    if(Keys.middleGPressed==false)
        {
            middleG2.changeColor('white');
        }
    if(Keys.middleAPressed ==false)
        {
            middleA2.changeColor('white');
        }
    if(Keys.middleBPressed ==false)
        {
            middleB2.changeColor('white');
        }
    if(Keys.highCPressed ==false)
        {
            highC2.changeColor('white');
        }
    if(Keys.highDPressed ==false)
        {
            highD2.changeColor('white');
        }
    if(Keys.highEPressed ==false)
        {
            highE2.changeColor('white');
        }
    if(Keys.highFPressed ==false)
        {
            highF2.changeColor('white');
        }
    if(Keys.highGPressed ==false)
        {
            highG2.changeColor('white');
        }
    if(Keys.highAPressed ==false)
        {
            highA2.changeColor('white');
        }
    if(Keys.highBPressed ==false)
        {
            highB2.changeColor('white');
        }
    if(Keys.midCSharpPressed ==false)
        {
            midCSharp2.changeColor('black');
        }
    if(Keys.midDSharpPressed ==false)
        {
            midDSharp2.changeColor('black');
        }
    if(Keys.midFSharpPressed ==false)
        {
            midFSharp2.changeColor('black');
        }
    if(Keys.midGSharpPressed ==false)
        {
            midGSharp2.changeColor('black');
        }
    if(Keys.midASharpPressed ==false)
        {
            midASharp2.changeColor('black');
        }
    if(Keys.highCSharpPressed ==false)
        {
            highCSharp2.changeColor('black');
        }
    if(Keys.highDSharpPressed ==false)
        {
            highDSharp2.changeColor('black');
        }
    if(Keys.highFSharpPressed ==false)
        {
            highFSharp2.changeColor('black');
        }
    if(Keys.highGSharpPressed ==false)
        {
            highGSharp2.changeColor('black');
        }
    if(Keys.highASharpPressed ==false)
        {
            highASharp2.changeColor('black');
        }
    
    
    
}
setInterval(update, 1);

//jqueryui function for the slider
$(document).ready(function(){
    $("#tutorial-font-slider").slider({
        min: 0,
        max: 5,
        value: 0,
        slide: function(event, ui){
            if(ui.value==0){
                $("#tutorial-font").text("0");
            }else if(ui.value==1){
                $("#tutorial-font").text("1");
            }else if(ui.value==2){
                $("#tutorial-font").text("2");
            }else if(ui.value==3){
                $("#tutorial-font").text("3");
            }else if(ui.value==4){
                $("#tutorial-font").text("4");
            }else{
                $("#tutorial-font").text("5");
            }
        }
    });
});
    


