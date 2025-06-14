<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';


class PHPMailer_sender {

    private $email;
    private $name;
    private $lastname;
    private $body;
    private $subject;
    private $pharmacy_name;
    private $address;

    private static $servidor_imap = '{imap.gmail.com:993/imap/ssl/novalidate-cert}INBOX';
    private static $usuario = 'arucare1@gmail.com';
    private static $contrasena = 'riasfzafmgxphcqo';

    public function __construct($email,$name,$lastname,$body,$subject,$pharmacy_name,$address)
    {   
        $this->email = $email;
        $this->name = $name;
        $this->lastname = $lastname;
        $this->body = $body;
        $this->subject = $subject;
        $this->pharmacy_name = $pharmacy_name;
        $this->address = $address;

        header('Content-Type: application/json;');
    }
    public function send_email(){

        $mail = new PHPMailer(true);

        // echo $this->email;

        // ijuktfjbkfvyaeip


        try {
            //Server settings
            $mail->SMTPDebug = 0;
            $mail->isSMTP(); 
            $mail->SMTPAuth   = true;
            $mail->Host       = 'smtp.gmail.com';
            $mail->Username   = 'arucare1@gmail.com'; 
            $mail->Password   = 'ijuktfjbkfvyaeip';    
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  
            $mail->Port       = 587;                              
            $mail->addAddress($this->email,  $this->name .' '.$this->lastname);    
            $mail->setFrom('information@arucare.com', 'Arucare Health Care');

            //Content
            $mail->isHTML(true);                           
            $mail->Subject = $this->subject;
            $mail->Body    = $this->body;

            $result = $mail->send();

            return json_encode(array("status" => $result, "error" => null));
            // echo 'console.log(Message has been sent)';
        } catch (Exception $e) {
            echo json_encode(array("status" => false ,"error" => $mail->ErrorInfo));
            exit;
        }
    }
    public static function get_emails(){
        // Conexión IMAP
        $inbox = imap_open(self::$servidor_imap ,self::$usuario, self::$contrasena) or die(json_encode(['error' => 'Can not be connected: ' . imap_last_error()]));
    
        function obtenerCorreos($carpeta,$critero = 'ALL') {
            // Buscar todos los correos en la carpeta especificada
            $correos = imap_search($carpeta, $critero); // Cambiar el criterio si es necesario
            $resultado = [];
    
            if ($correos) {
                foreach ($correos as $correo_id) {
                    // Obtener el resumen del correo
                    $correo = imap_fetch_overview($carpeta, $correo_id, 0);
    
                    // Obtener el asunto y decodificarlo
                    $asunto = $correo[0]->subject;
                    $asunto_decodificado = imap_utf8($asunto);  // Para el asunto que está en UTF-8
                    $resultado[] = [
                        'asunto' => $asunto_decodificado,
                        'de' => $correo[0]->from,
                        'fecha' => $correo[0]->date,
                    ];
                }
            }
    
            return $resultado;
        }
    
        // Obtener correos de la carpeta
        $correos_recibidos = obtenerCorreos($inbox);
    
        // Cerrar conexión IMAP
        imap_close($inbox);
    
        // Retornar los correos en un formato adecuado para el frontend (por ejemplo, JSON)
        header('Content-Type: application/json;');
        echo json_encode([
            'recibidos' => $correos_recibidos,
        ]);
        exit;
    }
    

}
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    PHPMailer_sender::get_emails();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $body = $_POST['body'];
    $subject = $_POST['subject'];
    $pharmacy_name = $_POST['pharmacy_name'];
    $address = $_POST['address'];

    $mailer = new PHPMailer_sender($email, $name, $lastname, $body, $subject, $pharmacy_name, $address);
    $result = $mailer->send_email();
    
    // Retornar la respuesta
    echo $result;
    exit;
}

