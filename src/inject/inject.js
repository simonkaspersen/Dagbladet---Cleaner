
var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		removeStuff()

		let lastKnownScrollPosition = 0;
		let ticking = false;

		document.addEventListener('scroll', function(e) {
		lastKnownScrollPosition = window.scrollY;

		if (!ticking) {
			window.requestAnimationFrame(function() {
				removeStuff()
				ticking = false;
			});

			ticking = true;
		}
		});
	}
	}, 10);
/* chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		removeStuff()

		let lastKnownScrollPosition = 0;
		let ticking = false;

		document.addEventListener('scroll', function(e) {
		lastKnownScrollPosition = window.scrollY;

		if (!ticking) {
			window.requestAnimationFrame(function() {
				removeStuff()
				ticking = false;
			});

			ticking = true;
		}
		});
	}
	}, 10);
}); */

const removeStuff = () => {
	var forbiddenClassnames=['.bg-red', '.bg-black', '.bg-yellow', '.breaking--just-now', '.breaking', '.just-now', '.breaking--pulsating-dots', '.pulsating-dots', '.breaking--pulse-kicker'];

	for(className of forbiddenClassnames) {
		var elements = document.querySelectorAll(className)
		//console.log(elements)
		for(element of elements){
			element.classList.remove(className.replace('.', ''))
		}
	}

	/* var allLinks = document.querySelectorAll('a')
	for (const link of allLinks) {
		var styles = window.getComputedStyle(link,':before').getPropertyValue('content')
		
	} */
}