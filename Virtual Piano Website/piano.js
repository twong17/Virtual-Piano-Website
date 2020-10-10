// Sets up canvas and context to draw on
var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var player = null;

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
        highASharpPressed: false
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

//function drawRect(width, height, color, x, y)
//{
//    this.width = width;
//    this.height = height;
//    this.x = x;
//    this.y = y;
//    ctx.fillStyle = color;
//    ctx.fillRect(this.x, this.y, this.width, this.height);
//    ctx.strokeStyle = "black";
//    ctx.stroke();
//}

//declare the white keys for the piano
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

//class for the black keys on the piano
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

//jquery function to display message 
function showMessage()
{
    document.getElementById('sidebarMessage').innerHTML = 'Thank you for your feedback';
}

//initalize the keys
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

//declare all the images of the keys to go above/below the piano
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

//update function
function update()
{
    
    //ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    
    //draw all the piano keys
    //player = drawRect(pWidth, pHeight, "white", x, y);
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
    
    ctx.drawImage(tabImage, 50, 270, 35, 35);
    ctx.drawImage(oneKeyImage, 85, 10, 35, 35);
    ctx.drawImage(qKeyImage, 100, 270, 35, 35);
    ctx.drawImage(twoKeyImage, 135, 10, 35, 35);
    ctx.drawImage(threeKeyImage, 235, 10, 35, 35);
    ctx.drawImage(wKeyImage, 150, 270, 35, 35);
    ctx.drawImage(eKeyImage, 200, 270, 35, 35);
    ctx.drawImage(rKeyImage, 250, 270, 35, 35);
    ctx.drawImage(fourKeyImage, 285, 10, 35, 35);
    ctx.drawImage(tKeyImage, 300, 270, 35, 35);
    ctx.drawImage(fiveKeyImage, 335, 10, 35, 35);
    ctx.drawImage(yKeyImage, 350, 270, 35, 35);
    ctx.drawImage(uKeyImage, 400, 270, 35, 35);
    ctx.drawImage(iKeyImage, 450, 270, 35, 35);
    ctx.drawImage(sixKeyImage, 435, 10, 35, 35);
    ctx.drawImage(oKeyImage, 500, 270, 35, 35);
    ctx.drawImage(pKeyImage, 550, 270, 35, 35);
    ctx.drawImage(openBracketKeyImage, 600, 270, 35, 35);
    ctx.drawImage(closeBracketKeyImage, 650, 270, 35, 35);
    ctx.drawImage(backSlashKeyImage, 700, 270, 35, 35);
    ctx.drawImage(sevenKeyImage, 485, 10, 35, 35);
    ctx.drawImage(eightKeyImage, 585, 10, 35, 35);
    ctx.drawImage(nineKeyImage, 635, 10, 35, 35);
    ctx.drawImage(zeroKeyImage, 685, 10, 35, 35);
    console.log(x, y);
    //change the color of the keys if the specified key is pressed
    if(Keys.middleCPressed)
        {
            document.getElementById('middleCAudio').play();
            middleC.changeColor('blue');
            
        }
    else if(Keys.middleDPressed)
        {
            document.getElementById('middleDAudio').play();
            middleD.changeColor('blue');
        }
    else if(Keys.middleEPressed)
        {
            document.getElementById('middleEAudio').play();
            middleE.changeColor('blue');
        }
    else if(Keys.middleFPressed)
        {
            document.getElementById('middleFAudio').play();
            middleF.changeColor('blue');
        }
    else if(Keys.middleGPressed)
        {
            document.getElementById('middleGAudio').play();
            middleG.changeColor('blue');
        }
    else if(Keys.middleAPressed)
        {
            document.getElementById('middleAAudio').play();
            middleA.changeColor('blue');
        }
    else if(Keys.middleBPressed)
        {
            document.getElementById('middleBAudio').play();
            middleB.changeColor('blue');
        }
    else if(Keys.highCPressed)
        {
            document.getElementById('highCAudio').play();
            highC.changeColor('blue');
        }
    else if(Keys.highDPressed)
        {
            document.getElementById('highDAudio').play();
            highD.changeColor('blue');
        }
    else if(Keys.highEPressed)
        {
            document.getElementById('highEAudio').play();
            highE.changeColor('blue');
        }
    else if(Keys.highFPressed)
        {
            document.getElementById('highFAudio').play();
            highF.changeColor('blue');
        }
    else if(Keys.highGPressed)
        {
            document.getElementById('highGAudio').play();
            highG.changeColor('blue');
        }
    else if(Keys.highAPressed)
        {
            document.getElementById('highAAudio').play();
            highA.changeColor('blue');
        }
    else if(Keys.highBPressed)
        {
            document.getElementById('highBAudio').play();
            highB.changeColor('blue');
        }
    else if(Keys.midCSharpPressed)
        {
            document.getElementById('middleCSharpAudio').play();
            midCSharp.changeColor('blue');
        }
    else if(Keys.midDSharpPressed)
        {
            document.getElementById('middleDSharpAudio').play();
            midDSharp.changeColor('blue');
        }
    else if(Keys.midFSharpPressed)
        {
            document.getElementById('middleFSharpAudio').play();
            midFSharp.changeColor('blue');
        }
    else if(Keys.midGSharpPressed)
        {
            document.getElementById('middleGSharpAudio').play();
            midGSharp.changeColor('blue');
        }
    else if(Keys.midASharpPressed)
        {
            document.getElementById('middleASharpAudio').play();
            midASharp.changeColor('blue');
        }
    else if(Keys.highCSharpPressed)
        {
            document.getElementById('highCSharpAudio').play();
            highCSharp.changeColor('blue');
        }
    else if(Keys.highDSharpPressed)
        {
            document.getElementById('highDSharpAudio').play();
            highDSharp.changeColor('blue');
        }
    else if(Keys.highFSharpPressed)
        {
            document.getElementById('highFSharpAudio').play();
            highFSharp.changeColor('blue');
        }
    else if(Keys.highGSharpPressed)
        {
            document.getElementById('highGSharpAudio').play();
            highGSharp.changeColor('blue');
        }
    else if(Keys.highASharpPressed)
        {
            document.getElementById('highASharpAudio').play();
            highASharp.changeColor('blue');
        }
   
   
    //change the color of the key back to the original after the key is released
    if(Keys.middleCPressed ==false)
        {
            middleC.changeColor('white');
        }
    if(Keys.middleDPressed ==false)
        {
            middleD.changeColor('white');
        }
    if(Keys.middleEPressed ==false)
        {
            middleE.changeColor('white');
        }
    if(Keys.middleFPressed ==false)
        {
            middleF.changeColor('white');
        }
    if(Keys.middleGPressed==false)
        {
            middleG.changeColor('white');
        }
    if(Keys.middleAPressed ==false)
        {
            middleA.changeColor('white');
        }
    if(Keys.middleBPressed ==false)
        {
            middleB.changeColor('white');
        }
    if(Keys.highCPressed ==false)
        {
            highC.changeColor('white');
        }
    if(Keys.highDPressed ==false)
        {
            highD.changeColor('white');
        }
    if(Keys.highEPressed ==false)
        {
            highE.changeColor('white');
        }
    if(Keys.highFPressed ==false)
        {
            highF.changeColor('white');
        }
    if(Keys.highGPressed ==false)
        {
            highG.changeColor('white');
        }
    if(Keys.highAPressed ==false)
        {
            highA.changeColor('white');
        }
    if(Keys.highBPressed ==false)
        {
            highB.changeColor('white');
        }
    if(Keys.midCSharpPressed ==false)
        {
            midCSharp.changeColor('black');
        }
    if(Keys.midDSharpPressed ==false)
        {
            midDSharp.changeColor('black');
        }
    if(Keys.midFSharpPressed ==false)
        {
            midFSharp.changeColor('black');
        }
    if(Keys.midGSharpPressed ==false)
        {
            midGSharp.changeColor('black');
        }
    if(Keys.midASharpPressed ==false)
        {
            midASharp.changeColor('black');
        }
    if(Keys.highCSharpPressed ==false)
        {
            highCSharp.changeColor('black');
        }
    if(Keys.highDSharpPressed ==false)
        {
            highDSharp.changeColor('black');
        }
    if(Keys.highFSharpPressed ==false)
        {
            highFSharp.changeColor('black');
        }
    if(Keys.highGSharpPressed ==false)
        {
            highGSharp.changeColor('black');
        }
    if(Keys.highASharpPressed ==false)
        {
            highASharp.changeColor('black');
        }
    
    
    
}
setInterval(update, 10);

//jquery ui function for the slider
$(document).ready(function(){
    $("#font-slider").slider({
        min: 0,
        max: 5,
        value: 0,
        slide: function(event, ui){
            if(ui.value==0){
                $("#font").text("0");
            }else if(ui.value==1){
                $("#font").text("1");
            }else if(ui.value==2){
                $("#font").text("2");
            }else if(ui.value==3){
                $("#font").text("3");
            }else if(ui.value==4){
                $("#font").text("4");
            }else{
                $("#font").text("5");
            }
        }
    });
});
