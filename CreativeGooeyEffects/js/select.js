$(document).ready(function(){


var itemsNum = $('.selection-content .selection-item').length;



	var $highlights=$(".selection-highlights");

			
	

	for (var i = 0; i < itemsNum; i++) {
		var id="selection-check-"+i;
		var $checkbox=$("<input/>")
			.addClass("selection-checkbox")
			.attr("type","checkbox")
			.attr("id",id)
			.appendTo($highlights)
		;
		var $highlight=$("<div/>")
			.addClass("selection-highlight")
			.appendTo($highlights)
		;

		var $label=$("<label/>")
			.addClass("selection-item")
			.attr("for",id)
			

		var $imgContainer=$("<span/>")
			.addClass("selection-item-container")
			.appendTo($label)
		;

		var $img=$("<i/>")
			.addClass("fa fa-fw fa-image")
			.appendTo($imgContainer)

	};

	var toggleCheckboxHandler=function(event){
		var $checkbox=$(this);
		var $label=$("label[for='"+$checkbox.attr("id")+"']");
		$label.attr("data-checked",$checkbox.prop("checked"));

	}
	$(".selection-checkbox").change(toggleCheckboxHandler);

})