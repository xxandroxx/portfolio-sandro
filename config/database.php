<?php
function conectarDB(): mysqli{
    $db = new mysqli('localhost','root','sandrito13291995','ospj_bd');

    if(!$db){
        echo "Fallo en la conexion puto!";
        exit;
    }

    return $db;
} 
php?>