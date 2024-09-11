// Dynamic favicon
window.onload = function () {
	const favicon = document.getElementById('favicon')
  
	document.addEventListener('visibilitychange', function (e) {
	  const isPageActive = !document.hidden
	  toggle(isPageActive)
	})
  
	function toggle(isPageActive) {
	  if (isPageActive) {
		favicon.href = '../assets/images/logo.png'
	  } else {
		favicon.href = '../assets/images/logo-away.png'
	  }
	}
}