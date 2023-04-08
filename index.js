var rannum = Math.floor(Math.random()*6)+1;
var diceimage = "dice"+rannum+".png";
var rantarget = "images/"+diceimage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",rantarget);
var rannum1 = Math.floor(Math.random()*6)+1;
var diceimage1 = "dice"+rannum1+".png";
var rantarget1 = "images/"+diceimage1;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",rantarget1);
if(rannum > rannum1)
{
    document.querySelector("h1").innerHTML = "Player1 is wins!!";
}
else if (rannum < rannum1)
{
    document.querySelector("h1").innerHTML = "Player2 is wins!!";
}
else
{
    document.querySelector("h1").innerHTML = "Both are tie!!";
}