const featuresArrow = document.querySelector('#features-arrow');
const featuresDropdownBtn = document.querySelector('#features-dropdown-btn');
const featuresDropdown = document.querySelector('#features-dropdown');
const featuresDropdownList = document.querySelectorAll(
	'#features-dropdown ul li a'
);

featuresDropdownBtn.addEventListener('click', handleFeaturesBtn);
featuresDropdownList.forEach((feature) => {
	feature.addEventListener('click', featureDropdownClose);
});
/* document.body.addEventListener('click', featureDropdownClose); */

let featuresBtnSelected = false;

function featureDropdownOpen() {
	featuresBtnSelected = true;
	featuresArrow.classList.add('rotate-arrow');
	featuresDropdown.classList.add('features-dropdown');
	featuresDropdown.style.display = 'block';

	setTimeout(() => {
		featuresDropdown.classList.add('features-dropdown-open');
	}, 10);
}

function featureDropdownClose() {
	featuresBtnSelected = false;
	featuresArrow.classList.remove('rotate-arrow');
	featuresDropdown.classList.remove('features-dropdown');
	featuresDropdown.style.display = 'none';
	featuresDropdown.classList.remove('features-dropdown-open');
}

function handleFeaturesBtn() {
	if (featuresBtnSelected == false) {
		featureDropdownOpen();
	} else {
		featureDropdownClose();
	}
}
