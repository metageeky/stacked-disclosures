window.onload = function() {
	let stacks = document.querySelectorAll('.stacked-disclosure');
	for(stack of stacks) {
		// add aria-expanded click event to toggles
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
		// open all panels
		stack.querySelector('button.open-all').addEventListener('click', function(evt) {
			for(tog of stack.querySelectorAll('button.toggle')) {
				tog.setAttribute('aria-expanded', 'true');
				tog.parentElement.setAttribute('data-disclosure-expanded', 'true');
			}
		});
		// closeall panels
		stack.querySelector('button.close-all').addEventListener('click', function(evt) {
			for(tog of stack.querySelectorAll('button.toggle')) {
				tog.setAttribute('aria-expanded', 'false');
				tog.parentElement.setAttribute('data-disclosure-expanded', 'false');
			}
		});
		
	}
	
	
}