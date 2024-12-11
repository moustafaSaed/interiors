// Select Elements
const questions = document.querySelectorAll("section.why .questions .line");
const answers = document.querySelectorAll("section.why .questions .line .a");

questions.forEach(q => {
	q.addEventListener("click", function (ev) {
		var currentAnswer = ev.target.parentElement.querySelector(".a");
		if (currentAnswer.classList.contains("active")) {
			currentAnswer.classList.remove("active");
		} else {
			answers.forEach(ans => {
				ans.classList.remove("active");
			});
			currentAnswer.classList.add("active")
		}
	})
});



var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});


