const init = _ => {
	const formFragment = document.querySelector('#formFragment');
	const formElement = document.querySelector('#signUpForm');
	const email = document.querySelector('#email');
	const button = document.querySelector('#button');
	const alert = document.querySelector('#alert');
	const check = document.querySelector('#check');

	function showAlert() {
		alert.focus();
		alert.style.visibility = 'visible';
		alert.classList.add('pop-in');
		alert.style.display = 'block';
	}

	function showConfirmation() {
		check.focus();
		check.style.visibility = 'visible';
		check.classList.add('pop-in');
		check.style.top = 0;
	}

	function hideForm() {
		email.style.display = 'none';
		button.style.display = 'none';
		formFragment.style.opacity = 0;
	}

	function handleSubmit() {
		event.preventDefault();
		if (!email.validity.valid) {
			showAlert();
			return;
		}

		showConfirmation();
		hideForm();
	}

	if (!formElement) return;
	formElement.setAttribute('novalidate', true);

	email.value = null;

	email.addEventListener(
		'input',
		function() {
			alert.classList.remove('pop-in');
		},
		false
	);

	formElement.addEventListener('submit', handleSubmit, false);
};

init();
