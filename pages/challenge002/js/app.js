;(function() {
	'use strict'

	const toggle = document.querySelector('#toggle')

	// check for saved 'darkMode' in localStorage */
	const darkMode = localStorage.getItem('darkMode')

	const enableDarkMode = () => {
		toggle.setAttribute('aria-pressed', 'true')
		toggle.classList.add('dark-mode')

		// add the class to the body
		document.body.classList.add('dark-scheme')
		// update darkMode in localStorage
		localStorage.setItem('darkMode', 'enabled')
	}

	const disableDarkMode = () => {
		toggle.setAttribute('aria-pressed', 'false')
		toggle.classList.remove('dark-mode')

		// remove the class to the body
		document.body.classList.remove('dark-scheme')
		// update darkMode in localStorage
		localStorage.setItem('darkMode', null)
	}

	// if the user already visited and enabled darkMode, start things off with it on
	if (darkMode === 'enabled') {
		enableDarkMode()
	}

	toggle.addEventListener(
		'click',
		() => {
			if (toggle.getAttribute('aria-pressed') === 'false') {
				enableDarkMode()
			} else {
				disableDarkMode()
			}
		},
		false
	)
})()
