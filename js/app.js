const BASETIME = 900;

let topBtn = document.getElementById('topBtn'); // the "Back to Top" button

function toggleLinkUnderline(elem, id) {
	let linkClass = id;
	elem.classList.toggle(linkClass);
} // toggleLinkUnderline()

function scrollToSection(target){
	let elem = document.getElementById(target);
	let diff;
	if(window.innerWidth > 992) { // desktop
		diff = 120;
	}
	else { // mobile
		diff = 470;
	}

	let targetPos =  (elem.offsetTop - elem.scrollTop + elem.clientTop) - diff;
	$('html, body').stop().animate({
			scrollTop: targetPos
	}, BASETIME, 'swing');
} // scrollTo()

function toggleTopButton() {
	let scroll = document.scrollingElement.scrollTop;
	if (scroll < 1100)
	{
		topBtn.style.display = "none";
	}
	else
	{
		topBtn.style.display = "block";
  }
} // toggleTopButton()

window.onscroll = function() {toggleTopButton()};