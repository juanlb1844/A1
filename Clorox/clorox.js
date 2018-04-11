$(document).ready(
		function() { 

		class initBeer {
			constructor(nameSpace) {
				this.nameSpace = nameSpace; 
			}
			get getName() {
				return this.nameSpace; 
			}
		}

		//functions.. && 

		const clorox = new initBeer('clorox'); 
		console.log(clorox.getName); 

		var stylesDie = {
			dimensions : function (width, height) {
				var cad = "#"+(clorox.getName); 
				$(cad).css('border', '10px solid black').css('height', '300').css('width', '70%').css('margin', 'auto'); 
			}
		}
		stylesDie.dimensions(); 


});