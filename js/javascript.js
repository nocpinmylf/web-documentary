const postItem = document.getElementsByClassName('item');
const subList = document.getElementsByClassName('sub');
const results = document.querySelectorAll('.result');
const tryBTN = document.querySelectorAll('#try .btn');
const posts = document.getElementsByClassName('post');
const body = document.querySelector('.body');
const menu = document.querySelector('.menu');
const listStatus = {};
const collapseBTN = document.getElementById('collapse-btn');
let navItems = document.querySelectorAll('[target="main"]');
let dWidth = window.innerWidth;

function hideSubItem (element, bool) {
	if(bool) element.style.display = 'none';
	else element.style.removeProperty('display');
}
// them trang thai vao list status
for (let i = 0; i < subList.length; i++) {
	listStatus[i] = true;
	hideSubItem(subList[i], listStatus[i]);
}

for (let i = 0; i < postItem.length; i++) {
	postItem[i].addEventListener('click', (e) => {
		e.preventDefault();
		listStatus[i] = !listStatus[i];
		hideSubItem(subList[i], listStatus[i]);
	});
}

// show result
function show(element) {
	element.classList.toggle('visible');
}

for (let i = 0; i < tryBTN.length; i++) {
	tryBTN[i].addEventListener('click', () => {
		show(results[i]);
	})
}

// get time
function getTime() {
	let date = new Date();
	let string = "Ngày Hôm Nay: " +
									date.getDate() + "/" +
									(date.getMonth() + 1) + "/" +
									date.getFullYear() +
								" || Thời gian: " +
									date.getHours() + ":" +
									date.getMinutes() + ":" +
									date.getSeconds();
	document.getElementById('time').textContent = string;
}

//pre loading
function completeLoading(e) {
	e.classList.remove('loading');
}

for (let i = 0; i < posts.length; i++) {
	posts[i].addEventListener('load', completeLoading(posts[i]));
}

// Nav bar

function toggleClass() {
	collapseBTN.classList.toggle('change');
	body.classList.toggle('hide');
	menu.classList.toggle('hide');
}

collapseBTN.addEventListener('click', toggleClass, false);

if (dWidth <= 768) { // hide navbar when device width <= 768px
	toggleClass();
	for (let i = 0; i < navItems.length; i++) { // hide navbar onclick
		console.log(navItems[i])
		navItems[i].addEventListener('click', () => {
			toggleClass();
			activeLink(navItems[i]);
		});
	}
}

// activate link in navbar
function activateLink(item) {
	navItems = document.querySelectorAll('[target="main"]');
	if(item != document.getElementsByClassName('logo')[0]) {
		let actived = document.getElementsByClassName('active')[0];
		item.classList.toggle('active');
		actived.classList.toggle('active');
	}
}

for (let i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener('click', () => {
		activateLink(navItems[i]);
	});
}
