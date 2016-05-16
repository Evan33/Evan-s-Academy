$(function(){
	$("#slider1").slider();
	$("#button-1, #button-2, #button-3, #button-4").button();

	$("#opener").click(function(){
		$("#dialog-1").dialog("open");
	});
		$("#dialog-1").dialog({
			autoOpen: false,
			buttons:{
				OK: function(){
					$(this).dialog("close");
				}
			}
		});	




		$("#accordion-1").accordion({

			active: false,

			collapsible:true

		});




		$("#datepicker-1").datepicker();


		

		var searchString = [
		"San Francisco",
			"Oakland",
			"San Carlos",
			"Richmond",
			"San Jose",
			"Redwood City",
		];
		$("#autocomplete-1").autocomplete({
			source: searchString
		});
	

	  $("#menu-1").menu();





});