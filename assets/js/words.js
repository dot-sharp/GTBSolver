const modalViews = document.querySelectorAll('.help__modal');
const modalBtns = document.querySelectorAll('.help__button');
const modalCloses = document.querySelectorAll('.help__modal-close');


// Regex Search
$(document).ready(function () {
	var wordsArray = wordsData;
	
	$("[name='theme']").keyup(function () {
		var words = $(this).val().replace(/_/g, '.');
		
		console.log(words);

		try {
			var searchWord = words.toLowerCase()
			var regex = new RegExp(searchWord);

			$("#result").html('');

			for (var index = 0; index < wordsArray.length; index++) {
				var value = wordsArray[index];
				var eachWord = value.toLowerCase();

				if (regex.test(eachWord)) {
					var i;

					if (searchWord.length != eachWord.length) {
						continue;
					};

					for (i = 0; i < searchWord.length; i++) {
						if (searchWord[i] == '.') {
							continue;
						};

						if (searchWord[i] != eachWord[i]) {
							break;
						};
					};

					if (i == searchWord.length) {
						$("#result").append('<p title="Click to copy to clipboard">' + '<a class="a_word" href="#form">' + value + '</a>' + '<br>');
					};
				};
			};
		} catch (error) {
			console.log(error);
		};
	});
});

var count = document.getElementById("count");
var input = document.getElementById("input");

input.addEventListener("input", function(event){
	count.innerHTML = event.target.value.length;
});
