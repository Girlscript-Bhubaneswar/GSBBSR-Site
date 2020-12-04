'use strict';

let header = $(`
<nav class="navbar navbar-expand-lg fixed-top" id="navbar">
  <a class="navbar-brand" href="index.html"><img src="assets/Images/logo/logo1.png" id="logo" alt="Girl Script Chennai Chapter Logo" aria-label="Girl Script Chennai Chapter Logo"></a>
  <div id="myNav" class="fullScreen-navigation">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="navigation-content" id="smallnav">
		  <a class="active home" href="./index.html">HOME</a>
		  <a href="#aboutSection">ABOUT US</a>
          <a href="#eventsSection">ANNOUNCEMENTS</a>
          <a href="#team">OUR TEAM</a>
		  
		  <a href="#footer">CONTACT US</a>
		  <div id="themeChangeButtonSmallScreen">
		  </div>
        </div>
  </div>

	  <span class="navbar-toggler-icon navbar-toggler" onclick="openNav()"></span>
	<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
	  <ul class="navbar-nav ml-5">
		<li class="nav-item">
		  <a class="nav-link active home"  href="./index.html"><span>HOME</span></a>
		</li>
		<li class="nav-item">
		  <a class="nav-link" href="#aboutSection"><span>ABOUT US</span></a>
	    </li>
		<li class="nav-item">
		  <a class="nav-link" href="#eventsSection"><span>ANNOUNCEMENTS</span></a>
		</li>
		<li class="nav-item">
		  <a class="nav-link" href="#team"><span>OUR TEAM</span></a>
		</li>
		  
		<li class="nav-item">
			<a class="nav-link" href="#footer"><span>CONTACT US</span></a>
		</li>

	  </ul>
	<div id="themeChangeButtonBigScreen">
		<label class="switch" id="themeChangeButton">		
		<input type="checkbox" name="theme" id="theme" onchange="changeTheme()">		
		<span class="slider round"></span>	
		<div class="stars"><span></span><span></span><span></span><span></span><span></span></div>
		</label>
	</div>				
	 </div>	 
	</nav>`);

let footer = $(`
<footer id="footer">
<div class="container">
  <div class="row">
	<div class="col-lg-6 col-md-4 footer-logo"> 
		<img data-src="assets/Images/logo/logo.png" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Girl Script Chennai Chapter Logo" class="logo" aria-label="Girl Script Chennai Chapter Logo">
	</div>
	<div class="col-lg-6 col-md-8 mb-5" id="footer-c">		
	  <br> 
	  <h3 class="footer-h">Join Our Newsletter</h3>
	  <div class="border"></div>
	  <p class="footer-p">Enter Your Email to get our news and updates.</p>
	  <form class="newsletter-form" for="email"  onsubmit="subscribeToNewsletter(event)">
	  <input type="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="email" class="txtb mr-2 mb-2 mt-4" placeholder="Enter Your Email" required >		   
	  <button class="btn btn-spl" type="submit">Send</button>
	  </form>
	  <p class="success-message hide" id="success-message">Thank you for subscribing</p>
	</div>
  </div>
   <center>

		<div class="social-media">
		  <a class="fa fa-twitter"  href="https://twitter.com/girlscriptbbsr?s=08"></a>
		  <a class="fa fa-instagram" href="https://instagram.com/girlscriptbbsr?igshid=13fw6wglzormd"></a>
		  <a class="fa fa-github" href="https://github.com/Girlscript-Bhubaneswar"></a>
		  <a class="fa fa-linkedin" href="https://www.linkedin.com/company/girlscriptbbsr"></a>
		</div>
		  <h6 class="footer-h3">Made with <i class="fa fa-heart" style="color:red;"></i></h6>
	</center>
</div>		
</footer>
<a onclick="topBtnClick()" class="gotopbtn clr-wt" id="topBtn"> <i class="fa fa-chevron-up clr-wt"></i> </a>
`);

const subscribeToNewsletter = event => {
	event.preventDefault();
	const userEmail = document.getElementById('email').value;
	axios
		.post('https://desolate-waters-45820.herokuapp.com/newsletter', {
			email: userEmail
		})
		.then(function (response) {
			const status = response.data.status;

			if (status === 'success') {
				const successMessage = document.getElementById('success-message');
				if (successMessage) {
					successMessage.classList.remove('hide');
					setTimeout(() => {
						successMessage.classList.remove('hide');
						location.reload();
					}, 1200);
				}
			}
			document.getElementById('email').value = '';
		})
		.catch(function (error) {
			const successMessage = document.getElementById('success-message');
			if (successMessage) {
				successMessage.classList.remove('hide');
				if (error.response.data.message === 'The user is already subscribed') {
					successMessage.innerHTML = 'You are already subscribed ❤️';
				} else {
					successMessage.innerHTML = 'Something is wrong. Try again later!';
				}
				setTimeout(() => {
					successMessage.remove();
					location.reload();
				}, 1200);
			}

			document.getElementById('email').value = '';
		});
};

let goToTopbutton = $(`#topBtn`);

function scrollFunction() {
	let navBar = document.getElementById('navbar'),
		logo = document.getElementById('logo');
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		navBar.style.padding = '2px 16px';
		logo.width = '160px';
	}
	let goTopBtn = document.getElementById('topBtn');
	if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
		goTopBtn.style.opacity = 1;
		goTopBtn.style.visibility = 'visible';
	} else {
		goTopBtn.style.opacity = 0;
		goTopBtn.style.visibility = 'hidden';
	}
}

function activeTab() {
	let navBar = $('#navbarNav');
	let navItems = navBar[0].children[0].children;
	let pageName = window.location.pathname.toLowerCase();
	for (let i = 0; i < navItems.length; i++) {
		let childHref = navItems[i].children[0].pathname.toLowerCase();
		if ((childHref === pageName || childHref.includes(pageName)) && window.location.pathname !== '/') {
			navItems[i].children[0].classList.add('active');
			navItems[0].children[0].classList.remove('home');
		} else navItems[i].children[0].classList.remove('active');
	}
}

function activeSmallTab() {
	let navBar = $('#smallnav');
	let navItems = navBar[0].children;
	let pageName = window.location.pathname.toLowerCase();
	for (let i = 0; i < navItems.length; i++) {
		if (navItems[i].pathname) {
			let childHref = navItems[i].pathname.toLowerCase();
			if ((childHref === pageName || childHref.includes(pageName)) && window.location.pathname !== '/') {
				navItems[i].classList.add('active');
				navItems[0].classList.remove('home');
			} else navItems[i].classList.remove('active');
		}
	}
}

function changeTheme(value) {
	let docElement = document.documentElement;
	let checkElement = $('#theme')[0];

	docElement.classList.add('transition');
	window.setTimeout(() => {
		docElement.classList.remove('transition');
	}, 1000);
	if (value === 'dark' || checkElement.checked == true) {
		checkElement.checked = true;
		docElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('mode', 'dark');
	} else {
		checkElement.checked = false;
		docElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('mode', 'light');
	}
}

// Window Loads
$(function () {
	let bodyElement = $(`body`);
	$('.loader-box').fadeOut(500, function () {
		$('.loader-box').remove();
	});
	bodyElement.prepend(header);
	bodyElement.append(footer);
	bodyElement.append(goToTopbutton);
	activeTab();
	activeSmallTab();
	if (sessionStorage['mode']) {
		changeTheme(sessionStorage['mode']);
	}
});

window.onscroll = function () {
	scrollFunction();
};

//Single Declartion of changed theme button

function openNav() {
	document.getElementById('myNav').style.display = 'block';
	let toggleThemeButton = document.getElementById('themeChangeButton');
	toggleThemeButton.remove();
	let positionOfToggleButtonForSmallScreen = document.getElementById('themeChangeButtonSmallScreen');
	positionOfToggleButtonForSmallScreen.appendChild(toggleThemeButton);
}

function closeNav() {
	document.getElementById('myNav').style.display = 'none';
	let toggleThemeButton = document.getElementById('themeChangeButton');
	toggleThemeButton.remove();
	let positionOfToggleButtonForBigScreen = document.getElementById('themeChangeButtonBigScreen');
	positionOfToggleButtonForBigScreen.appendChild(toggleThemeButton);
}

function topBtnClick() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function init() {
	let imgDefer = document.getElementsByTagName('img');
	for (let i = 0; i < imgDefer.length; i++) {
		if (imgDefer[i].getAttribute('data-src')) {
			imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
		}
	}
}

window.onload = init;
