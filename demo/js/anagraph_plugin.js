
;(function( $ ) {
    $.fn.anaGraph = function(params) {
		
		// Default Parameters
		var defs = {
			Depth3D: '24px'
		};
		var config = $.extend({}, defs, params);
		
		$(this).wrapInner("<div class='anaGraph-wrapper'></div>");
		
		$(this).find('img').each(function(){
			$(this).wrap("<div></div>");
				
			var src = 'url(./' + $(this).attr('src') + ')';
			var width = $(this).css('width');
			var height = $(this).css('height');
			$(this).parent().css("background-image",src);
			$(this).parent().css("background-size","cover");
			$(this).parent().css("width",width);
			$(this).parent().css("height",height);
				
			$(this).css("display","none");
		});
						
		$(".anaGraph-wrapper").wrapInner("<div class='anaGraph-bg'></div>");
		$(".anaGraph-bg").clone().insertAfter(".anaGraph-bg").addClass('anaGraph-r').removeClass('anaGraph-bg');
		
		// Anagraph Left Eyes (Red)
		$('.anaGraph-r *').each(function(){
				
				var bgImage = $(this).css("background-image");
				if (bgImage !== 'none'){
					// Use backgtound-blend-mode with setting R channel filter 
					$(this).css({'background-color':'rgba(255,0,0,1)','background-blend-mode': 'lighten'});
				}

				// No Background Imange -> need to calculate RGB (R:+255, G:+0, B:+0)
				if ($(this).attr("background-color")){
					var bgColor = $(this).css("background-color");
					bgColor = bgColor.replace("rgba(","");
					bgColor = bgColor.replace("rgb(","");
					bgColor = bgColor.replace(")","");
					bgColor = bgColor.split(",");
					bgColor[0] = Math.min(255, parseInt(bgColor[0]) + 255);
					bgColor[1] = Math.min(255, parseInt(bgColor[1]) + 0);
					bgColor[2] = Math.min(255, parseInt(bgColor[2]) + 0);
					var bgColorVal = "rgba(" + bgColor[0] + "," + bgColor[1] + "," + bgColor[2] + ",1)";
					$(this).css({'background-color':bgColorVal});
				}
			
				// Font Color Change
				var fontColor = $(this).css("color");
				fontColor = fontColor.replace("rgba(","");
				fontColor = fontColor.replace("rgb(","");
				fontColor = fontColor.replace(")","");
				fontColor = fontColor.split(",");
				fontColor[0] = Math.min(255, parseInt(fontColor[0]) + 255);
				fontColor[1] = Math.min(255, parseInt(fontColor[1]) + 0);
				fontColor[2] = Math.min(255, parseInt(fontColor[2]) + 0);
				var fontColorVal = "rgba(" + fontColor[0] + "," + fontColor[1] + "," + fontColor[2] + ",1)";
				$(this).css({'color':fontColorVal});
			});
			
			// Anagraph Right Eyes (Green/Blue)
			$('.anaGraph-bg *').each(function(){
					
				var bgImage = $(this).css("background-image");
				if (bgImage !== 'none'){ // Use backgtound-blend-mode with setting BG channel filter 
					$(this).css({'background-color':'rgba(0,255,255,1)','background-blend-mode': 'lighten'});
				}
				
				// No Background Imange -> need to calculate RGB (R:+0, G:+255, B:+255)
				if ($(this).attr("background-color")){
					var bgColor = $(this).css("background-color");
					bgColor = bgColor.replace("rgba(","");
					bgColor = bgColor.replace("rgb(","");
					bgColor = bgColor.replace(")","");
					bgColor = bgColor.split(",");
					bgColor[0] = Math.min(255, parseInt(bgColor[0]) + 0);
					bgColor[1] = Math.min(255, parseInt(bgColor[1]) + 255);
					bgColor[2] = Math.min(255, parseInt(bgColor[2]) + 255);
					var bgColorVal = "rgba(" + bgColor[0] + "," + bgColor[1] + "," + bgColor[2] + ",1)";
					$(this).css({'background-color':bgColorVal});
				}
				
				// Font Color Change
				var fontColor = $(this).css("color");
				fontColor = fontColor.replace("rgba(","");
				fontColor = fontColor.replace("rgb(","");
				fontColor = fontColor.replace(")","");
				fontColor = fontColor.split(",");
				fontColor[0] = Math.min(255, parseInt(fontColor[0]) + 0);
				fontColor[1] = Math.min(255, parseInt(fontColor[1]) + 255);
				fontColor[2] = Math.min(255, parseInt(fontColor[2]) + 255);
				var fontColorVal = "rgba(" + fontColor[0] + "," + fontColor[1] + "," + fontColor[2] + ",1)";
				$(this).css({'color':fontColorVal});
				
				$(this).css({'border-color':'transparent'});
			});
		
			// Layout
			// Mapping R Dimension and BG Dimension
		
			var wrapperHeight = $(".anaGraph-bg").css("height");
			var wrapperWidth = (parseInt($(".anaGraph-bg").css("width"),10) + parseInt(config.Depth3D,10)) + "px";

			$(".anaGraph-wrapper").css({'height':wrapperHeight, 'width':wrapperWidth, 'position':'relative'});
			$(".anaGraph-bg").css({'position':'absolute'});
			$(".anaGraph-r").css({'position':'absolute'});

			$('.anaGraph-r').css({"top":'0px',"left":'0px',"opacity":'0.5'});
			$('.anaGraph-bg').css({"top":'0px',"left":config.Depth3D,"opacity":'1'});		

		// thisを返す
        return this;
    };
})( jQuery );

