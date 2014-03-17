(function ( $ ) {
	$(window).ready(function(){
		var $container = $('#isotope-container');

		$container.imagesLoaded( function(){
		  $container.isotope({
		  	resizeable: 'true',
		  	resizesContainer: 'true'
		  });
		});
			
	});

}( jQuery ));