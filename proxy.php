<?php
// Permitir CORS desde cualquier origen (o restringe con tu dominio)
// Permitir CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Si es una solicitud OPTIONS, finaliza aquí
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}



// Obtener los datos enviados por POST
$data = $_POST;


// Validar que hay datos
if (empty($data)) {
    http_response_code(400);
    echo json_encode(['error' => 'No data received']);
    exit;
}

// Preparar la URL de destino
$url = 'https://cxpay.transactiongateway.com/api/transact.php';

// Crear la cadena de consulta
$query = http_build_query($data);


// Inicializar cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Ejecutar la solicitud
$response = curl_exec($ch);

// Manejar errores
if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode(['error' => curl_error($ch)]);
    curl_close($ch);
    exit;
}

curl_close($ch);

// Enviar la respuesta al frontend
echo json_encode(['response' => $response]);
