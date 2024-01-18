<?php

$token = "6532433628:AAHzDhi1Ub2OWAaWaSqbRGD0SSpW2ld3nd4";

$chat_id = "455497604";

if (isset($_POST)) {
    $name = ($_POST['name']);
    $phone = ($_POST['phone']);
    $tg = ($_POST['tg']);
    $toppings = ($_POST['toppings']);
    $message = ($_POST['message']);
}

$arr = array(
    'Имя:' => $name,
    'Телефон:' => $phone,
    'telegram' => $tg,
    'Сообщение' => $message,
);


foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram){
    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
}else{
    $message = 'Данные не отправлены';

}

$response = ['message' => $message];

header('Content-Type: application/json');

echo json_encode($response );
?>