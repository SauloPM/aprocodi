$( window ).on( 'load', function() {
    
    // ParticlesJS inicialization
    particlesJS.load( 'cuerpo', 'particles.json', function() {
        console.log( 'callback - particles.js config loaded' );
    });

    // ─────────────── //
    //     SPINNER     //
    // ─────────────── //

    hideSpinner();

    // Spinner hidding
    function hideSpinner () {
        $( '.spinner' ).fadeOut( 250, function () {

            $( '.fondo' ).delay( 250 ).fadeOut( 250 );

            setTimeout( function () {
                $( 'body' ).css( 'overflow', 'visible' );
            }, 500);
        });
    }

    // ────────────────── //
    //     NAVEGACIÓN     //
    // ────────────────── //

    // Navegar a una sección
    $( '.raton' ).click( function( event ) {

        event.preventDefault();

        var target = $( this ).attr( 'href' );
        
        $( 'html, body' ).stop().animate({ scrollTop: $( target ).offset().top }, 1500, 'easeInOutExpo' );
    });

    // Navegar a una página
    $( document ).on( 'click', '.legal', function( event ) {

        event.preventDefault();

        var target = $( this ).attr( 'href' );

        $( '.fondo' ).fadeIn( 250 );

        setTimeout(() => {
            location.href = target;
        }, 500);
    });

    // ───────────── //
    //     ABOUT     //
    // ───────────── //

    VanillaTilt.init( document.querySelector( '#about .item:nth-child(1)' ), {
      	max: 5,
		speed: 2000
    });
      
	VanillaTilt.init( document.querySelector( '#about .item:nth-child(2)' ), {
      	max: 5,
		speed: 2000
    });

    // ──────────────── //
    //     CONTACTO     //
    // ──────────────── //

    $( document ).on( 'focus', '.entrada', function() {

    });

});