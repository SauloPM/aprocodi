$( window ).on( 'load', function() {

    // WOW JS inicialization
    new WOW( { mobile: false } ).init();
    
    // ParticlesJS inicialization
    particlesJS.load( 'cuerpo', 'particles.json', function() {
        console.log( 'callback - particles.js config loaded' );
    });

    // ─────────────── //
    //     COOKIES     //
    // ─────────────── //

    // $( document ).on( 'click', '.cookies .enlace', function() {

    //     $( '.cookies' ).fadeOut( 250 );
    // });

    // ────────────── //
    //     SCROLL     //
    // ────────────── //

    mostrarRaya();

    $( document ).scroll(function() {
        mostrarRaya();
    });

    // Function in charge of highlighting the current navigation bar item
    function mostrarRaya() {

        let alturaViewport = window.innerHeight;

        if ( ( $( this ).scrollTop() + ( alturaViewport / 2 ) ) >= $( '#contacto' ).position().top ) {
            $( '#contacto .raya' ).css( 'transform', 'scaleX(1)' );
        }

        if ( ( $( this ).scrollTop() + ( alturaViewport / 2 ) ) >= $( '#testimonios' ).position().top ) {
            $( '#testimonios .raya' ).css( 'transform', 'scaleX(1)' );
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

    // ─────────────── //
    //     COOKIES     //
    // ─────────────── //

    showCookiesPopup();

    $( document ).on( 'click', '.cookies .enlace', function() {

        cerrarPopupCookies( true );
    });

    function showCookiesPopup() {

        if ( !Cookies.get( 'aceptar-cookies' ) ) {
            abrirPopupCookies();
        } else {
            cerrarPopupCookies();
        }
    }

    function abrirPopupCookies() {

        var cookiesPopup = $( '.cookies' );

        cookiesPopup.css( 'display', 'flex' );
        
        setTimeout(() => {
            cookiesPopup.css( 'opacity', '1' );
        }, 1);
    }

    function cerrarPopupCookies( crearCookie = false ) {

        var cookiesPopup = $( '.cookies' );

        cookiesPopup.css( 'opacity', '' );

        setTimeout(() => {
            cookiesPopup.css( 'display', '' );
        }, 500);

        if ( crearCookie ) {
            Cookies.set( 'aceptar-cookies', '1' )
        }
    }

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
        max: 2,
        speed: 2000
    });

    $( document ).on( 'focus', '.entrada', function() {

    });

    // ─────────────────── //
    //     TESTIMONIOS     //
    // ─────────────────── //

    $( '#testimonios .carrusel' ).owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        nav: false, // Flechas
        dots: false, // Puntos
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1.5
            },
            600: {
                items: 2
            },
            850: {
                items: 3.5
            },
            1200: {
                items: 4
            },
            1500: {
                items: 5
            },
            1800: {
                items: 5.5
            }
        }
    })

});