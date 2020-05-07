const postItem = document.getElementsByClassName('item');
const subList = document.getElementsByClassName('sub');
const results = document.querySelectorAll('.result');
const tryBTN = document.querySelectorAll('#try .btn');
const listStatus = {};

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

// Nav bar
const body = document.querySelector('.body');
const menu = document.querySelector('.menu');
const collapseBTN = document.getElementById('collapse-btn');

collapseBTN.addEventListener('click', () => {
	collapseBTN.classList.toggle('change');
	body.classList.toggle('hide');
	menu.classList.toggle('hide');
});

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
	document.getElementById('time').innerHTML = string;
}
//TODO: liên kết link 
