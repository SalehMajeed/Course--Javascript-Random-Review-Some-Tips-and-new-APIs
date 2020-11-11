<?php
var_dump($_FILES)
foreach($_FILES["myFiles"]["tmp_name"] as $key => $value) {
    // $target_file = "uploads/" . basename($_FILES["inpFile"]["name"]);
    // move_uploaded_file($_FILES["inpFile"]["tmp_name"], $target_path)
    $target_path = "uploads/" . basename($_FILES["myFiles"]['name'][$key]);
    move_uploaded_file($value, $target_path)
}
?> 