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

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        /* if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }; */
    });
}; 

window.addEventListener('scroll', scrollActive);

function scrollHeader() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
		nav.classList.add('scroll-header');
    } else {
		nav.classList.remove('scroll-header');
	};
};

window.addEventListener('scroll', scrollHeader);

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 560) {
		scrollUp.classList.add('show-scroll');
    } else {
		scrollUp.classList.remove('show-scroll');
    };
};

window.addEventListener('scroll', scrollUp);

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

// Regex Search
$(document).ready(function () {
	var wordsArray = wordsData;
	
	$("[name='theme']").keyup(function () {
		var words = $(this).val().replace(/_/g, '.');
		
		console.log(words);

		try {
			var searchWord = words.toLowerCase()
			var regex = new RegExp(searchWord);

			$("#result").html('');

			for (var index = 0; index < wordsArray.length; index++) {
				var value = wordsArray[index];
				var eachWord = value.toLowerCase();
			
				if (regex.test(eachWord)) {
					var i;

					if (searchWord.length != eachWord.length) {
						continue;
					};

					for (i = 0; i < searchWord.length; i++) {
						if (searchWord[i] == '.') {
							continue;
						};

						if (searchWord[i] != eachWord[i]) {
							break;
						};
					};
					
					if (i == searchWord.length) {
						$("#result").append('<p title="Select to copy to clipboard">' + '<a class="a_word" href="#form">' + value + '</a>' + '<br>');	
					};

				};
			};
		} catch (error) {
			console.log(error);
		};
	});

	
	$("#result a").on("click", function() {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($(this).text()).select();
		document.execCommand('copy');
		$temp.remove();
	});
});



var count = document.getElementById("count");
var input = document.getElementById("input");

if(input) {
    input.addEventListener("input", function(event){
  	count.innerHTML = event.target.value.length;
  });
}

// Email
function emailEnter() {
	document.getElementById("email__icon").style.setProperty('color', '#8fa2ff');
	document.getElementById("emai__link").style.setProperty('color', '#f1f2f3');
};
function emailLeave() {
	document.getElementById("email__icon").style.setProperty('color', '#576ee0');
	document.getElementById("emai__link").style.setProperty('color', '#75798a');
};


// LinkedIn
function linkedinEnter() {
	document.getElementById("linkedin__icon").style.setProperty('color', '#8fa2ff');
	document.getElementById("linkedin__link").style.setProperty('color', '#f1f2f3');
};
function linkedinLeave() {
	document.getElementById("linkedin__icon").style.setProperty('color', '#576ee0');
	document.getElementById("linkedin__link").style.setProperty('color', '#75798a');
};


// Github
function githubEnter() {
	document.getElementById("github__icon").style.setProperty('color', '#8fa2ff');
	document.getElementById("github__link").style.setProperty('color', '#f1f2f3');
};
function githubLeave() {
	document.getElementById("github__icon").style.setProperty('color', '#576ee0');
	document.getElementById("github__link").style.setProperty('color', '#75798a');
};


// YouTube
function youtubeEnter() {
	document.getElementById("youtube__icon").style.setProperty('color', '#8fa2ff');
	document.getElementById("youtube__link").style.setProperty('color', '#f1f2f3');
};
function youtubeLeave() {
	document.getElementById("youtube__icon").style.setProperty('color', '#576ee0');
	document.getElementById("youtube__link").style.setProperty('color', '#75798a');
};


// Dynamic Favicon (for future update)
/*
$(window).focus(function() {
	var link = document.createElement('link');
	   link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = 'https://www.gtbsolver.com/assets/img/favicon1.ico';
	document.getElementsByTagName('head')[0].appendChild(link);
});

$(window).blur(function() {
	var link = document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = 'https://www.gtbsolver.com/assets/img/favicon2.ico';
	document.getElementsByTagName('head')[0].appendChild(link);
});
*/