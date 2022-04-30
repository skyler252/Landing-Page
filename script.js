const mobileButton = document.querySelector(".mobile-icon");
const navbarLinks = document.querySelector(".navbar ul");

mobileButton.addEventListener("click", function () {
	navbarLinks.classList.toggle("active");
	mobileButton.classList.toggle("toggled");
});
