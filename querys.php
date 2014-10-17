<?php

require_once("lib/conex.php");
utf8_decode();


switch($_REQUEST['opcion'])
{
	//CASE PARA EL MODULO ALUMNOS
	case "inserta_asistente":
		$nombre=$_REQUEST['nombre'];
		$email=$_REQUEST['email'];
		$tel=$_REQUEST['tel'];
		$fecha=$_REQUEST['fecha'];
		$id_taller=$_REQUEST['id_taller'];
                		
		inserta_asistente($nombre,$email,$tel,$fecha,$id_taller);
	break;
    
        case "contar_asistentes":
                $bd=$_REQUEST['bd'];
                
                contar_asistentes($bd);
        break;
    
        case "contar_asistentes2":
                $bd=$_REQUEST['bd'];
                
                contar_asistentes2($bd);
        break;
    
        case "contar_asistentes3":
                $bd=$_REQUEST['bd'];
                
                contar_asistentes3($bd);
        break;
    

}//End swicht




function inserta_asistente($nombre,$email,$tel,$fecha,$id_taller)
{
        conectar();
        //nos conectamos ala base de datos extrayendo la clase conectar

        $sql = "INSERT INTO tbl_asistentes (nombre,email,telefono,fecha_nac,id_taller,fecha_regis) VALUES ('$nombre','$email','$tel','$fecha','$id_taller',NOW())";
        $ejecutasql = mysql_query($sql) or die(mysql_error());
        //print ('Registro ingresado');
        //print("Se ha ingresado el alumno con Matricula ".$email." Exitosamente");
        

}

function contar_asistentes($bd)
{
	conectar();
	$regalumno = "SELECT count(*) matricula FROM $bd where id_taller=1";
	$ejecuta = mysql_query($regalumno) or die (mysql_error());
        if(mysql_num_rows($ejecuta) > 0){
		while(list($numero) = mysql_fetch_array($ejecuta)){
			print "$numero";
			}//End while
		}//End if
		else{
			print "No existen usuarios registrados en la base de datos";
                        
		}
}

function contar_asistentes2($bd)
{
	conectar();
	$regalumno = "SELECT count(*) matricula FROM $bd where id_taller=2";
	$ejecuta = mysql_query($regalumno) or die (mysql_error());
        if(mysql_num_rows($ejecuta) > 0){
		while(list($numero) = mysql_fetch_array($ejecuta)){
			print "$numero";
			}//End while
		}//End if
		else{
			print "No existen usuarios registrados en la base de datos";
                        
		}
}

function contar_asistentes3($bd)
{
	conectar();
	$regalumno = "SELECT count(*) matricula FROM $bd where id_taller=3";
	$ejecuta = mysql_query($regalumno) or die (mysql_error());
        if(mysql_num_rows($ejecuta) > 0){
		while(list($numero) = mysql_fetch_array($ejecuta)){
			print "$numero";
			}//End while
		}//End if
		else{
			print "No existen usuarios registrados en la base de datos";
                        
		}
}

?>
