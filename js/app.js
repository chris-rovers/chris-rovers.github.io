const BASETIME = 420;

let badge = document.getElementById('badge');
let topBtn = document.getElementById('topBtn'); // the "Back to Top" button

function toggleBadgeLight() {
	let status = badge.getAttribute('class');
	console.log(status);
	if(status == "lightOff")
	{
		badge.setAttribute('class', 'lightOn');
	}
	else
	{
		badge.setAttribute('class', 'lightOff');
	}
} // toggleBadgeLight()

function ScrollTo(target){
	let elem = document.getElementById(target);
	let targetPos =  (elem.offsetTop - elem.scrollTop + elem.clientTop) - 80;
	$('html, body').stop().animate({
			scrollTop: targetPos
	}, BASETIME, 'swing');
} // ScrollTo()

function ToggleTopButton() {
	let scroll = document.scrollingElement.scrollTop;
	if (scroll < 1100)
	{
		topBtn.style.display = "none";
	}
	else
	{
		topBtn.style.display = "block";
  }
} // ToggleTopButton()

window.onscroll = function() {ToggleTopButton()};