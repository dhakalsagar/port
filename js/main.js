
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

const scrollTop = (e) => {
	const scrollBtn = document.createElement('button');
	scrollBtn.innerHTML = "&uarr;";
	scrollBtn.setAttribute("id", "scroll-btn");
	document.body.appendChild(scrollBtn);
	const scrollBtnDisplay = (e) => {
		window.scrollY > window.innerHeight 
		? scrollBtn.classList.add("show") 
		: scrollBtn.classList.remove("show");
	};
	window.addEventListener("scroll", scrollBtnDisplay);
	
	const scrollWindow = (e) => {
		if (window.scrollY != 0) {
			setTimeout((e) => {
				window.scrollTo(0, window.scrollY - 20);
				scrollWindow();
			}, 10);
		}
	};
	scrollBtn.addEventListener('click', scrollWindow);

};
scrollTop();


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.addEventListener('click', (e) =>{
	modal.style.display = "block";
});

span.addEventListener('click', (e) =>{
	modal.style.display = "none";
})
window.addEventListener('click', (e) =>{
	if(e.target == modal) {
		modal.style.display = "none";
	}
})


let test = document.querySelector('.media-icons');
test.addEventListener("mouseenter", (e) =>{
  e.target.style.backgroundColor = "transparent";
  e.target.style.paddingLeft = "50px";

  setTimeout(function() {

    e.target.style.backgroundColor = "";
	e.target.style.paddingLeft = "";
  }, 3000);
}, false);


const resume = document.querySelector('.buttons a');
resume.addEventListener('click', (e) =>{
	const span = document.querySelector(' a span');
	resume.style.paddingRight = '10px;';
	span.style.visibility = "visible";
	setTimeout(() =>{
		span.style.visibility = "hidden";
		resume.style.transition = "1s ease-in-out";
		resume.style.paddingRight = '3px';
	},3000);
},);

let locationCollege = document.querySelector('.location');
let locationMap = document.querySelector('.locationMap');
var span1 = document.getElementsByClassName("close")[1];
locationCollege.addEventListener("mouseenter", (e) =>{
	locationCollege.innerHTML = "click for Map";
	setTimeout(() =>{
		target.innerHTML = " Wakkanai Hokusei gakuen university";
	},0);
});
locationCollege.addEventListener("click", (e) =>{
	locationMap.style.display = 'block';
	locationMap.style.color = 'red;';
}, false)
span1.addEventListener('click', (e) =>{
	locationMap.style.display = "none";
})
window.addEventListener('click', (e) =>{
	if(e.target == locationMap) {
		locationMap.style.display = "none";
	}
})

function sendEmail(){
	Email.send({
		Host : "smtp.gmail.com",
		Username : "nangagang4444@gmail.com",
		Password : "mAgBw8[u",
		To : 'dhakalsagar444@gmail.com',
		From : document.getElementById('email').value,
		Subject : "new enquiry",
		Body : "And this is the body"
	}).then(
	  message => alert(message)
	);
}

function liquidAnim(){
	const animation = document.querySelectorAll(".backGround");
		animation.forEach((elem)=>{
			elem.animate(
			{
			borderRadius: [
				"50% 50% 50% 70%/50% 50% 70% 60%",
				"80% 30% 50% 50%/50%",
				"40% 40% 50% 40%/30% 50% 40% 80%"
			]
			},
			{
			iterations: Infinity,
			direction: "alternate",
			duration: 7000
			}
		);
		});
}
liquidAnim();


// const banner = document.getElementsByClassName('boy')[0];
// const blocks = document.getElementsByClassName('complete');
// for(var i = 1; i < 400; i ++){
// 	banner.innerHTML += "<div class='complete'></div>";
// 	const duration = Math.random() * 5;
// 	blocks[i].style.animationDuration = 2+duration+'s';
// 	blocks[i].style.animationDelay = duration+'s';
// };