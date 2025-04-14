<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';
require '../PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // Datos del formulario
    $nombre = $_POST['name'];
    $correo = $_POST['email'];
    $mensaje = $_POST['message'];

    // Campos opcionales
    $telefono = isset($_POST['phone']) ? $_POST['phone'] : '';
    $asunto_contacto = isset($_POST['subject']) ? $_POST['subject'] : '';

    // Configuración del servidor SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'fernandobravo658@gmail.com'; // Tu Gmail
    $mail->Password = 'wfukbhavtxczqdmy'; // Tu contraseña de aplicación
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Remitente y destinatario
    $mail->setFrom('fernandobravo658@gmail.com', 'Postulación Web');
    $mail->addAddress('g3@servicioshll.com'); // Cambia por el destino real

    // Adjuntar CV si existe
    if (isset($_FILES['cv']) && $_FILES['cv']['error'] == 0) {
        $mail->addAttachment($_FILES['cv']['tmp_name'], $_FILES['cv']['name']);
    }

    // Contenido del correo
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';

    if (!empty($asunto_contacto)) {
        // Formulario de contacto
        $mail->Subject = "Nuevo mensaje de contacto: $asunto_contacto";
        $mail->Body = "
            <h3>Mensaje desde el formulario de contacto:</h3>
            <p><strong>Nombre:</strong> {$nombre}</p>
            <p><strong>Email:</strong> {$correo}</p>
            <p><strong>Asunto:</strong> {$asunto_contacto}</p>
            <p><strong>Mensaje:</strong><br>{$mensaje}</p>
        ";
    } else {
        // Formulario de postulación
        $mail->Subject = 'Nueva postulación desde el sitio web';
        $mail->Body = "
            <h3>Detalles del candidato:</h3>
            <p><strong>Nombre:</strong> {$nombre}</p>
            <p><strong>Email:</strong> {$correo}</p>
            <p><strong>Teléfono:</strong> {$telefono}</p>
            <p><strong>Mensaje:</strong><br>{$mensaje}</p>
        ";
    }

    $mail->send();

    // Redirigir al index con success
    echo "<script>window.location.href='../index.html?success=1';</script>";
} catch (Exception $e) {
    // Redirigir al index con error
    echo "<script>window.location.href='../index.html?error=1';</script>";
}
?>
