$(document).ready(function(){

	function clorox(cloroConf, selector, proportions) {
		this.config = cloroConf; 
		this.selector = selector; 
		this.proportions = proportions; 
		this.initView = function() {
				for(i in this.config) {
						console.log($(this.selector).html()); 
						$(this.selector).css('width', this.config.width)
										.css('border', this.config.border)
										.css('min-height', this.config.minHeight)
										.css('position', 'absolute'); 
				}
		}; 
		this.create = function() {
			for( i = 0; i < this.proportions; i++) {
					element = $('<div>'); 
					element.append('<h1>&nbsp;</h1>');
					element.css('float', 'left').css('width', '2.2%').
					css('background-color', 'black')
					.css('border-radius', '4px')
					.css('margin', '4px')
					.css('height', '20px'); 
					$(element).addClass('pixel');  
					$(element).addClass('pixel'+i); 
					$(this.selector).append(element); 
			}
		} 
		this.effect = function() {
			var i = 0; 
			var j = 0; 
			var e = 0;  
			var x = this.proportions; 
			setInterval(function() {
					//$('.pixel').css('background-color', 'black'); 
					$('.pixel'+i).css('background-color', 'rgba('+ (Math.floor(Math.random() * 255) + 1 )+','+(Math.floor(Math.random() * 255) + 1)+','+(Math.floor(Math.random() * 255) + 1  )); 
					i++; 
					if(i == x ) i = 0; 
			}, 40);

			setInterval(function() {
					$('.pixel'+j).css('background-color', 'rgba('+ (Math.floor(Math.random() * 255) + 1 )+','+(Math.floor(Math.random() * 255) + 1)+','+(Math.floor(Math.random() * 255) + 1  )); 
					j++; 
					if(j == x ) j = 0; 
			}, 50);

			setInterval(function() {
					//$('.pixel').css('background-color', 'black'); 
					$('.pixel'+e).css('background-color', 'black');  
					e++; 
					if(e == x ) e = 0; 
			}, 60);

		}
	}

	var cloroConf_1 = {
		'width' : '80%', 
		'minHeight' : '400px', 
		'position' : 'absolute', 
		'border'   : '10px solid black'
	}
	var A1 = new clorox(cloroConf_1, "#clorox", 544); 
	A1.initView(); 
	A1.create(); 
	A1.effect(); 


}); 