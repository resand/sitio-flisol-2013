<?
//Files Para conectarse al servidor
$HOSTNAME = "localhost"; //SERVIDOR   
$USERNAME = "linuxcam_blog";	     //USUARIO
$PASSWORD = "LinuxCamBl06";	     //CONTRASENIA
$DATABASE = "linuxcam_wp";    //BASE DE DATOS
//
function conectar(){
  global $HOSTNAME, $USERNAME, $PASSWORD, $DATABASE;
  $idcnx = mysql_connect($HOSTNAME, $USERNAME, $PASSWORD) or
	DIE(mysql_error());
  mysql_select_db ($DATABASE, $idcnx);
  return $idcnx;
 }
 

?>
