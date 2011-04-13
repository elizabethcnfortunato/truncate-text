jQuery.fn.truncate = function(maxCharacters) {
  return this.each(function(){
	  
	  var origin = $(this);
	  
	  var len = $(this).text().length;
	  if (len > maxCharacters) {
		  var truncated = $(this).text().substring(0, maxCharacters);
		  truncated = truncated.replace(/\w+$/, '');
		  $(this).after("<span id=\"truncate\" style=\"display:none\"><\/span>");
		  $(this).hide();
		  $("#truncate").html(truncated);	
		  $("#truncate").after("<br><a id=\"toggle\" href=\"#\">more<\/a>");
		  $("#truncate").show();		  
	  }
	  $("#toggle").click(function(event) {
		  event.preventDefault();
		  if ($(this).html() == "hide") {
			  $(origin).hide();
			  $("#truncate").show();
			  $(this).html("more");
		  } else {
			  $("#truncate").hide();
			  $(origin).show();
			  $(this).html("hide");
		  }
	  });

  });
  
};
