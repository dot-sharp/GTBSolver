// Window Height fix //
function resetHeight(){
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();


// Dynamic favicon //
window.onload = function () {
	const favicon = document.getElementById('favicon')
  
	document.addEventListener('visibilitychange', function (e) {
	  const isPageActive = !document.hidden
	  toggle(isPageActive)
	})
  
	function toggle(isPageActive) {
	  if (isPageActive) {
		favicon.href = '../assets/images/logo.png'
	  } else {
		favicon.href = '../assets/images/logo-away.png'
	  }
	}
}


// Mobile nav //
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	});
};

if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
};

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
		nav.classList.add('scroll-header');
    } else {
		nav.classList.remove('scroll-header');
	};
};

window.addEventListener('scroll', scrollHeader);

// Dark and light mode
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
};

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// Email
function emailEnter() {
	document.getElementById("email__icon").style.setProperty('color', '#8fa2ff');
	document.getElementById("emai__link").style.setProperty('color', '#8fa2ff');
};
function emailLeave() {
	document.getElementById("email__icon").style.setProperty('color', '#576ee0');
	document.getElementById("emai__link").style.setProperty('color', '#75798a');
};


// LinkedIn
function linkedinEnter() {
	document.getElementById("linkedin__icon").style.setProperty('color', '#8fa2ff');
	document.getElementById("linkedin__link").style.setProperty('color', '#8fa2ff');
};
function linkedinLeave() {
	document.getElementById("linkedin__icon").style.setProperty('color', '#576ee0');
	document.getElementById("linkedin__link").style.setProperty('color', '#75798a');
};


// Github
function githubEnter() {
	document.getElementById("github__icon").style.setProperty('color', '#8fa2ff');
	document.getElementById("github__link").style.setProperty('color', '#8fa2ff');
};
function githubLeave() {
	document.getElementById("github__icon").style.setProperty('color', '#576ee0');
	document.getElementById("github__link").style.setProperty('color', '#75798a');
};


// YouTube
function youtubeEnter() {
	document.getElementById("youtube__icon").style.setProperty('color', '#8fa2ff');
	document.getElementById("youtube__link").style.setProperty('color', '#8fa2ff');
};
function youtubeLeave() {
	document.getElementById("youtube__icon").style.setProperty('color', '#576ee0');
	document.getElementById("youtube__link").style.setProperty('color', '#75798a');
};