jQuery.fn.truncate = function(maxCharacters) {
  return this.each(function(){
	  
	  var len = $(this).text().length;
	  if (len > maxCharacters) {
		  var first = $(this).text().substring(0, maxCharacters);
		  var truncated = $(this).text().substring(maxCharacters, len);
		  $(this).html(first);
		  $(this).append("<span id=\"truncate\" style=\"display:none\"><\/span>");
		  $("#truncate").html(truncated);	
		  $(this).after("<br><a id=\"toggle\" href=\"#\">more<\/a>");
	  }
	  $("#toggle").click(function(event) {
		  event.preventDefault();
		  if ($(this).html() == "more") {
			  $("#truncate").show();
			  $(this).html("hide");
		  } else {
			  $("#truncate").hide();
			  $(this).html("more");
		  }
	  });

  });
  
};
