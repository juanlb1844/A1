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
					element.append('<h1>X</h1>'); 
					element.css('float', 'left').css('width', '9.2%').css('background-color', 'black')
					.css('margin', '4px'); 
					$(element).addClass('pixel'+i); 
					$(this.selector).append(element); 
			}
		} 
	}

	var cloroConf_1 = {
		'width' : '80%', 
		'minHeight' : '400px', 
		'position' : 'absolute', 
		'border'   : '10px solid black'
	}
	var A1 = new clorox(cloroConf_1, "#clorox", 60); 
	A1.initView(); 
	A1.create();

	var cloroConf_2 = {
		'width' : '80%', 
		'minHeight' : '400px', 
		'position' : 'absolute', 
		'border'   : '10px solid black'
	}
	var A2 = new clorox(cloroConf_2, "#clorox2", 60); 
	A2.initView(); 
	A2.create();  



}); 