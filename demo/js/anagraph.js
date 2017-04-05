
// JavaScript Document
$(window).load(function(){
	
	$('#2d3dswitch').change(function(){
		
		if($(this).is(':checked')){
//			toggle Switch
			$('p.switch-text').text("3D");

			// anaGraph Plugin Demo - Depth:36px
			$('main').anaGraph({Depth3D:'36px'});
		} else {
//			alert("2Dになります。");
			location.reload();
		}
	});
});
