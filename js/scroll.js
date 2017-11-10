 // JavaScipt Document
 
		// ####################################################################################
		// Scrolling
		// ####################################################################################
		
	$(function(){
		$('a[href*=#]').stop().click(function(){
			if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
				var KA_HASH = this.hash;
				var KA_ZIEL = $(this.hash);
				if(KA_ZIEL.length){
					var KA_ABSTAND_TOP = KA_ZIEL.offset().top;
					console.log(KA_ABSTAND_TOP);		
					$('html,body').animate({scrollTop: KA_ABSTAND_TOP},1000,function(){
						window.location.hash = KA_HASH;
					});
					return false;
				}
			}	
		});
	});