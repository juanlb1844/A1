$(document).ready(
		function() { 

		class initBeer {
			constructor(nameSpace, pixels) {
				this.nameSpace = nameSpace; 
				this.pixels = pixels; 
			}
			get getName() {
				return this.nameSpace; 
			}

		}

		//functions.. && 

		const clorox = new initBeer('clorox', 20);  

		var stylesDie = {
			dimensions : function (width, height) {
							var cad = "#"+(clorox.getName); 
							$(cad).css('order', '10px solid black')
							.css('height', 'auto')
							.css('width', '70%')
							.css('margin', 'auto')
							.css('position', 'absolute');

							for(var i = 0; i < 40; i++) {
									$(cad).append('<div style="background-color: black; float:left; width:9%; margin:2px; border:1px solid green;" class="pixel'+i+'"><h1>X</h1></div>'); 
							}
			}
		}
		stylesDie.dimensions(); 


});