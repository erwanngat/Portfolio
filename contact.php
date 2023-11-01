<?php

require_once(__DIR__ . '/vendor/autoload.php');
use \Mailjet\Resources;

define('API_PUBLIC_KEY', 'a618d263e81ffd5055a69bbee6ab75cf');
define('API_PRIVATE_KEY', '4e92211fca94be19a4b1b11d09c8e5bf');
$mj = new \Mailjet\Client(API_PUBLIC_KEY, API_PRIVATE_KEY, true, ['version' => 'v3.1']);

if (!empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['message'])) {
    $name = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $body = [
            'Messages' => [
                [
                    'From' => [
                        'Email' => "erwann.gatinel@gmail.com",
                        'Name' => 'Mail portfolio'
                    ],
                    'To' => [
                        [
                            'Email' => 'erwann.gatinel@gmail.com',
                            'Name' => 'Mail portfolio'
                        ]
                    ],
                    'Subject' => 'Mail portfolio',
                    'TextPart' => "l'utilisateur: $name ($email), vous envoie ce message: $message",
                ]
            ]
        ];
        try {
            $response = $mj->post(Resources::$Email, ['body' => $body]);
            if ($response->success()) {
                echo "Email envoyé avec succès !";
            } else {
                echo "Erreur lors de l'envoi de l'e-mail : " . $response->getStatus();
            }
        } catch (Exception $e) {
            echo "Erreur : " . $e->getMessage();
        }
    } else {
        echo "Email non valide";
    }
    header('Location: index.html');
    die();
} else {
    header('Location: index.html');
    die();
}
