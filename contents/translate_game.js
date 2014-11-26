// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var lang_to		= "English";
	var lang_from		= "Spanish";
	var current_dict	= dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from

	$.each(current_dict, function(key, value){
		console.log(key)
	})
	console.log("current_dict", current_dict)
	console.log("keys", keys)


	$( "button" ).click(function(e){
		console.log("clicked!")
		var text = $("input").val()

		var row = $("<div>",{
			"class":"row"
		}).append(
			$("<div>",{
				"class":"left"
			}).html("hello"),

			$("<div>",{
				"class":"middle"
			}).html(text),

			$("<div>",{
				"class":"right"
			}).html("hello")
		)

		$("#table").append(row)
	})



});
