(function() {
	'use strict';

	const form = document.querySelector('#signup');
	const email = document.querySelector('[type=email]');
	const alert = document.querySelector('#alert');
	const check = document.querySelector('#check');

	if (!form) return;
	form.setAttribute('novalidate', true);

	email.addEventListener(
		'input',
		function() {
			alert.style.opacity = 0;
			alert.classList.remove('fade-slide-up');
		},
		false
	);

	form.addEventListener(
		'submit',
		function(event) {
			event.preventDefault();
			if (!email.validity.valid) {
				alert.style.visibility = 'visible';
				alert.classList.add('fade-slide-up');
				email.focus();
				return;
			}

			email.value = '';
			check.focus();
			check.style.outline = 'none';
			check.style.visibility = 'visible';
			check.classList.add('fade-slide-up');
			form.parentNode.removeChild(form);
		},
		false
	);
})();
