/*
	The disclosure panels are open by default for progressive enhancement. 
	Use a mutation observer to close them all (by setting attributes) if
	mutation observers are available
*/
const StackedDisclosure = { observer: undefined };
if('MutationObserver' in window) {
	// Create the observer that looks for added button.toggle elements
	StackedDisclosure.observer = new MutationObserver(function(mutationsList, observer) {
		// Use traditional 'for loops' for IE 11
		for(const mutation of mutationsList) {
			if (mutation.type === 'childList') {
				for(e of mutation.addedNodes) {
					if(e.nodeName == 'BUTTON' && e.classList.contains('toggle')) {
						e.setAttribute('aria-expanded','false');
						e.parentElement.setAttribute('data-disclosure-expanded','false');
					}
				}
			}
		}
	});
	// Start observing document for any loaded toggle buttons
	StackedDisclosure.observer.observe(window.document.documentElement, { childList: true, subtree: true });
}

/* 
	Set up the events for the stacked disclosure. Close the panels in case 
	they have not been closed 
*/
window.onload = function() {
	let stacks = document.querySelectorAll('.stacked-disclosure');
	for(stack of stacks) {
		// turn off the MutationObserver if used or close the disclosure panels
		if('MutationObserver' in window && StackedDisclosure.observer !== undefined) {
			StackedDisclosure.observer.disconnect();
			StackedDisclosure.observer = undefined;
		}
		else {
			for(e of document.querySelectorAll('[aria-expanded="true"]')) {
				e.setAttribute('aria-expanded', 'false');
				e.parentElement.setAttribute('data-disclosure-expanded', 'false');
			}
		}
				
		// add aria-expanded and data-disclosure-expanded click event to toggles
		let toggles = stack.querySelectorAll('button.toggle');
		for(tog of toggles) {
			tog.addEventListener('click', function(evt) {
				// open panel
				if(evt.target.getAttribute('aria-expanded') == 'false') {
					evt.target.setAttribute('aria-expanded', 'true');
					evt.target.parentElement.setAttribute('data-disclosure-expanded', 'true');
				}
				// close panel
				else {
					evt.target.setAttribute('aria-expanded', 'false');
					evt.target.parentElement.setAttribute('data-disclosure-expanded', 'false');
				}
			});
		}
		
		// click event for open all panels (set expanded attributes to true)
		stack.querySelector('button.open-all').addEventListener('click', function(evt) {
			for(tog of stack.querySelectorAll('button.toggle')) {
				tog.setAttribute('aria-expanded', 'true');
				tog.parentElement.setAttribute('data-disclosure-expanded', 'true');
			}
		});
		
		// click event for close all panels (set expanded attributes to false)
		stack.querySelector('button.close-all').addEventListener('click', function(evt) {
			for(tog of stack.querySelectorAll('button.toggle')) {
				tog.setAttribute('aria-expanded', 'false');
				tog.parentElement.setAttribute('data-disclosure-expanded', 'false');
			}
		});
	}
}




