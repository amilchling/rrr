Meteor.startup(function(){
	console.log("meteor startup");
	
}); 

Template.main.rendered = function(){

	$('#orbiter-row').slick({
		autoplay: true,
		dots: true
	});
}

Template.services.rendered = function(){
	var hash = document.location.hash.substr(1);
	console.log(hash);
	if(hash==="emergency-service"||hash==="inspection-service"){
		window.scroll(0, 1000);
	}
	else if(hash==="gutter-service"){
		window.scroll(0, 650);
	}
	else if(hash==="repair-service"){
		window.scroll(0, 100);
	}
}

Template.header.events = {

	'click .submitInspection' : function(event){
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();
		var vals = [];
		var inputs = [];
		
		vals[0] = $("#name-input").val();
		vals[1] = $("#email-input").val();
		vals[2] = $("#email-input").val();
		vals[3] = $("#zip-input").val();
		vals[4] = $("#phone-input").val();

		var $button = $(this);

		//$button.prop('disabled', true);

		Meteor.apply("sendEmail", vals, function(result, error){
			if(error){
				console.log(error);
				alert('Error sending email. Please try again');
			}
			else{
				setTimeout(function(){
					/*inputs.each(function(indx){
						$(this).prop('disabled', false);
						$(this).val('');
					});*/
					//$button.prop('disabled', false);
					
				}, 1000);
			}
		});
	}
}	