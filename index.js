var randomNumber1 = Math.floor(Math.random()*6+1);

var address1 = "images/dice" + randomNumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", address1);

var randomNumber2 = Math.floor(Math.random()*6+1);

var address2 = "images/dice" + randomNumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", address2);


var text;
if(randomNumber1>randomNumber2)
{
    text = "Player 1 wins!";
}
else if (randomNumber1==randomNumber2)
{
    text = "Draw";
}
else
{
     text = "Player 2 wins!";
}

 var temp = document.querySelectorAll("h1")[0];
temp.innerHTML = text;







