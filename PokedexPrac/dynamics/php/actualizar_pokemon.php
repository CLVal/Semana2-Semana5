<?php

require "config.php";

$con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema); 
    
$id = $_POST['id'];
    

$nombre = (isset($_POST["nombreN"]) && $_POST["nombreN"]!= "")?$_POST["nombreN"]:false;
$altura = (isset($_POST["alturaN"]) && $_POST["alturaN"]!= "")?$_POST["alturaN"]:false;
$peso = (isset($_POST["pesoN"]) && $_POST["pesoN"]!= "")?$_POST["pesoN"]:false;
$exp_base = (isset($_POST["exp_baseN"]) && $_POST["exp_baseN"]!= "")?$_POST["exp_baseN"]:false;
$tipo = (isset($_POST["tipoN"]) && $_POST["tipoN"]!= "")?$_POST["tipo"]:false;

$sql ="UPDATE pokemon SET pok_name='$nombre', pok_height='$altura', pok_weight='$peso', pok_base_experience='$exp_base' WHERE  pok_id='$id'";
$res = mysqli_query($con, $sql);

if($res == false){
    $respuesta = array("ok"=>false, "texto" => "No se pudo actualizar");
    echo json_encode($respuesta);
}
else{
    $id = mysqli_insert_id($con);

    $sql = "UPDATE pokemon_types SET type_id='$tipo' WHERE pok_id='$id'";
    mysqli_query($con, $sql);

    $respuesta = array("ok"=> true, "texto" => "Se pudo ingresar");
    echo json_encode($respuesta);
}