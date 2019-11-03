(function() {
	'use strict';

	const container = document.querySelector('#container');
	const btn = document.querySelector('#btn');
	const form = document.querySelector('#signup');
	const email = document.querySelector('[type=email]');
	const alert = document.querySelector('#alert');
	const check = document.querySelector('#check');

	if (!form) return;
	form.setAttribute('novalidate', true);

	email.addEventListener(
		'input',
		function() {
			alert.classList.remove('pop-in');
		},
		false
	);

	form.addEventListener(
		'submit',
		function(event) {
			event.preventDefault();
			if (!email.validity.valid) {
				alert.focus();
				email.style.outline = 'none';
				alert.style.visibility = 'visible';
				alert.style.display = 'block';
				alert.classList.add('pop-in');
				return;
			}

			email.value = '';
			email.style.display = 'none';
			btn.style.display = 'none';
			container.style.opacity = 0;
			check.focus();
			check.style.outline = 'none';
			check.style.visibility = 'visible';
			check.style.top = 0;
			check.classList.add('pop-in');
		},
		false
	);
})();
