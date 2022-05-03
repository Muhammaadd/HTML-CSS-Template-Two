var arrow = document.getElementById("arrow");
arrow.onclick = function(){
document.body.classList.toggle("display");
}

var closeads =document.getElementById("closeads");
closeads.onclick = function(){
    document.body.classList.toggle("width");
    if(document.body.classList.contains("width")){
    document.getElementById("closeads").innerHTML = 'close';
    }else {
        document.getElementById("closeads").innerHTML = 'show';
    }
}
var closechat =document.getElementById("closechat");
closechat.onclick = function(){
    document.body.classList.toggle("online-show");
    if(document.body.classList.contains("online-show")){
    document.getElementById("closechat").innerHTML = 'Close Chat';
    }else {
        document.getElementById("closechat").innerHTML = 'Show Chat';
    }
}
var close = document.getElementById("close");
close.onclick = function(){
document.body.classList.toggle("display");
}
var profile = document.getElementById("profile");
profile.onclick = function(){
document.body.classList.toggle("display-block");
}
var menuicon = document.getElementById("menuicon");
menuicon.onclick = function(){
document.body.classList.toggle("display-none");
}   
var loadmore = document.getElementById("loadmore");
loadmore.onclick = function(){
document.body.classList.toggle("load-more");
if(document.body.classList.contains("load-more")){
    document.getElementById("loadmore").innerHTML = 'View Less';
    }else {
        document.getElementById("loadmore").innerHTML = 'View More';
    }
}
var btn = document.getElementById("btn");
btn.onclick = function(){
document.body.classList.toggle("dark-theme");
if(document.body.classList.contains("dark-theme")){
btn.src="images/sun.png";
}else {
btn.src="images/moon.png";
}
}