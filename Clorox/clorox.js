$(document).ready(function(){

	function clorox(cloroConf, selector, proportions, cloroFunctions) {
		this.config = cloroConf; 
		this.selector = selector; 
		this.proportions = proportions;
		this.functions = cloroFunctions; 
		this.widthClorox = 

		this.initView = function() {
			$(this.selector).css(this.config.container); 
			this.widthClorox = $(this.selector).css('width'); 
		};

		this.cloroFill = function() {
			var pixelWidth = this.config.content.width;
			pixelWidth = pixelWidth.substr(0, pixelWidth.length - 1); 
			var widthClorox = this.widthClorox; 
			widthClorox = widthClorox.substr(0, widthClorox.length - 2) 
			var heightPixel = ( (widthClorox * pixelWidth) / 100 );
			this.config.content.height = heightPixel; 
			for( j = 0; j < this.proportions.rows; j++) {
				for( i = 0; i < this.proportions.cols; i++) {
						element = $('<div>'); 
						element.append('<h1></h1>');
						element.css(this.config.content);  
						$(element).addClass('pixel');  
						$(element).addClass('pixel'+(i+j));
						$(this.selector).append(element); 
				}
			}
		}

	this.effect = this.functions.testFunction; 

   }
	var cloroConf_1 = {
		container : {
			'width' : '70%', 
			'position' : 'absolute', 
			'border'   : '10px solid black', 
			'position' : 'absolute', 
			'margin-left': '12%', 
			'margin-top' : '100px'
		}, 
		content : {
			'float' : 'left', 
			'width' : '5%', 
			'background-color' : 'white',  
			'border-radius' : '4px', 
			'margin' : '4px', 
			'height' : '50px' 
		}
	}

	var cloroFunctions = {
		testFunction : function() {
			var i = 0; 
			var j = 0; 
			var e = 0;  
			var x = this.proportions.cols; 
			setInterval(function() {
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
					$('.pixel'+e).css('background-color', 'white');  
					e++; 
					if(e == x ) e = 0; 
			}, 60);

		   }
	}; 
	var proportions = {
		cols : '17', 
		rows : '6'
	}; 

	var A1 = new clorox(cloroConf_1, "#clorox", proportions, cloroFunctions); 
	A1.initView(); 
	A1.cloroFill(); 
	A1.effect(); 

}); 