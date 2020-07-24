$( window ).on( 'load', function() {

    // WOW JS inicialization
    new WOW( { mobile: false } ).init();
    
    // ParticlesJS inicialization
    particlesJS.load( 'cuerpo', 'particles.json', function() {
        console.log( 'callback - particles.js config loaded' );
    });

    // ────────────── //
    //     SCROLL     //
    // ────────────── //

    highlightNavbar();

    $(document).scroll(function() {
        highlightNavbar();
    });

    // Function in charge of highlighting the current navigation bar item
    function highlightNavbar() {

        let alturaViewport = window.innerHeight;

        console.log( 'Altura del viewport » ' + window.innerHeight );
        console.log( 'Coordenadas verticales del formulario de contacto » ' + $( '#contacto' ).position().top );
        console.log( 'Distancia con respecto al top de la página » ' + $( this ).scrollTop() );
        console.log( '──────────────────────────────────────────────' )

        if ( ( $( this ).scrollTop() + ( alturaViewport / 2 ) ) >= $( '#contacto' ).position().top ) {
            $( '#contacto .raya' ).css( 'transform', 'scaleX(1)' );
        }
    }

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

    VanillaTilt.init( document.querySelectorAll( '#about .item' ), {
      	max: 5,
		speed: 2000
    });
      
    // ──────────────── //
    //     CONTACTO     //
    // ──────────────── //

    VanillaTilt.init( document.querySelectorAll( '#contacto .formulario' ), {
            max: 5,
        speed: 2000
    });

    $( document ).on( 'focus', '.entrada', function() {

    });

});