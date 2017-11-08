//JavaScript Document
var controller;
window.onload = function(){
	var train = document.getElementById("train");
    var teach = document.getElementById("teach");
    var encourage = document.getElementById("encourage");
    var mission = document.getElementById("mission");
    mission.onclick = function(){
        if ($(mission).hasClass('opened')){
            TweenMax.to(teach, 1, {y:"0px", ease:Power4.easeOut});
            TweenMax.to(train, 1, {x:"0px", y:"0px", ease:Power4.easeOut});
            TweenMax.to(encourage, 1, {x:"0px", y:"0px", ease:Power4.easeOut});
            TweenMax.to(mission, 1, {backgroundColor:"rgb(255,255,255,1)", borderColor:"rgba(0,0,0,1)", ease:Power4.easeOut});
            $(mission).removeClass('opened');
        }
        else{
            TweenMax.to(teach, 1, {y:"230px", ease:Power4.easeOut});
            TweenMax.to(train, 1, {x:"-250px", y:"-170px", ease:Power4.easeOut});
            TweenMax.to(encourage, 1, {x:"250px", y:"-170px", ease:Power4.easeOut});
            TweenMax.to(mission, 1, {backgroundColor:"rgb(255,255,255,0)", borderColor:"rgba(255,255,255,0)", ease:Power4.easeOut});
            $(mission).addClass('opened');
        }
    }
    TweenMax.to("#advantagegear", 5, {rotation:360, ease:Linear.easeNone, repeat:-1});
    TweenMax.to("#volunteergear", 5, {rotation:-360, ease:Linear.easeNone, repeat:-1});
    TweenMax.to("#diversitygear", 5, {rotation:-360, ease:Linear.easeNone, repeat:-1});
    TweenMax.to("#sponsorgear", 5, {rotation:360, ease:Linear.easeNone, repeat:-1});
}
$(document).ready(function($) {
    $(window).stellar();
	controller = new ScrollMagic();
 });
