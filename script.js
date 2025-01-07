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
		companyDropdownClose();
	} else {
		featureDropdownClose();
	}
}

const companyArrow = document.querySelector('#company-arrow');
const companyDropdownBtn = document.querySelector('#company-dropdown-btn');
const companyDropdown = document.querySelector('#company-dropdown');
const companyDropdownList = document.querySelectorAll(
	'#company-dropdown ul li a'
);

companyDropdownBtn.addEventListener('click', handleCompanyBtn);
companyDropdownList.forEach((company) => {
	company.addEventListener('click', companyDropdownClose);
});

let companyBtnSelected = false;

function companyDropdownOpen() {
	companyBtnSelected = true;
	companyArrow.classList.add('rotate-arrow');
	companyDropdown.classList.add('company-dropdown');
	companyDropdown.style.display = 'block';

	setTimeout(() => {
		companyDropdown.classList.add('company-dropdown-open');
	}, 10);
}

function companyDropdownClose() {
	companyBtnSelected = false;
	companyArrow.classList.remove('rotate-arrow');
	companyDropdown.classList.remove('company-dropdown');
	companyDropdown.style.display = 'none';
	companyDropdown.classList.remove('company-dropdown-open');
}

function handleCompanyBtn() {
	if (companyBtnSelected == false) {
		companyDropdownOpen();
		featureDropdownClose();
	} else {
		companyDropdownClose();
	}
}
