<?php

// Almacenamos los datos del formulario en variables
$to      = "info@aprocodi.com";
$name    = trim( $_POST['nombre' ] );
$from    = trim( $_POST['email'  ] );
$subject = trim( $_POST['asunto' ] );
$message = trim( $_POST['mensaje'] );

// Validaciones

if ( strlen( $to ) == 0 || strlen( $to ) == 0 || strlen( $to ) == 0 || strlen( $to ) == 0 || strlen( $to ) == 0 ) {
	echo "Campos obligatorios vacíos. Volver a la <a href='index.html' title='Página de inicio'>página de inicio</a></p>";
}

// Formato del mensaje
$message = "
<html>
	<head>
		<title>Aprocodi</title>
	</head>
	<body>
		<header>
			<p>Mensaje enviado por " . $name . "</p>
		</header>
		<hr>
		<p>" . $message . "</p>
		<hr>
		<footer>
			<p>Este mensaje ha sido enviado desde el formulario de contacto de la página web oficial de <i>Aprocodi</i></p>
		</footer>
	</body>
</html>
";

// Cabecera para el envío de mensajes en formato HTML
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Cabeceras adicionales
$headers .= 'From: <' . $from . '>' . "\r\n";

// Enviamos el mensaje
$envio = mail( $to, $subject, $message, $headers );

if ( $envio ) {

	// header( 'Location: https://' . $_SERVER['HTTP_HOST'] . '/email_enviado.html' );
	header( 'Location: email_enviado.html' );
	exit;
	// echo "<p>Operación completada con éxito. Volver a la <a href='index.html' title='Página de inicio'>página de inicio</a></p>";
}
else {

	// header( 'Location: https://' . $_SERVER['HTTP_HOST'] . '/error_email.html' );
	header( 'Location: error_email.html' );
	exit;
	// echo "Se ha producido un error. Por favor, vuelva a intentarlo más tarde. Volver a la <a href='index.html' title='Página de inicio'>página de inicio</a></p>";
}

?>