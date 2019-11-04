(function() {
	'use strict';

	const init = _ => {
		const formBlock = document.querySelector('#formBlock');
		const btn = document.querySelector('#btn');
		const form = document.querySelector('#signUpForm');
		const email = document.querySelector('[type=email]');
		const alert = document.querySelector('#alert');
		const check = document.querySelector('#check');

		email.value = '';

		function showAlert() {
			alert.focus();
			alert.style.visibility = 'visible';
			alert.style.display = 'block';
			alert.classList.add('pop-in');
		}

		function showConfirmation() {
			check.focus();
			check.style.visibility = 'visible';
			check.classList.add('pop-in');
			check.style.top = 0;
		}

		function hideForm() {
			email.style.display = 'none';
			btn.style.display = 'none';
			formBlock.style.opacity = 0;
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

		if (!form) return;
		form.setAttribute('novalidate', true);

		email.addEventListener(
			'input',
			function() {
				alert.classList.remove('pop-in');
			},
			false
		);

		form.addEventListener('submit', handleSubmit, false);
	};

	init();
})();
