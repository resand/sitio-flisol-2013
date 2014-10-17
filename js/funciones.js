function nuevoAjax(){ 
	var xmlhttp=false;
 	try {
 		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
 	} catch (e) {
 		try {
 			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 		} catch (E) {
 			xmlhttp = false;
 		}
  	}

	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
 		xmlhttp = new XMLHttpRequest();
	} 
	return xmlhttp;
}


$(function(){
$("#txt_fecha").datepicker({dateFormat: 'yy-mm-dd', changeMonth: true, changeYear: true, yearRange: '-100:+0'});
$("#txt_fecha2").datepicker({dateFormat: 'yy-mm-dd', changeMonth: true, changeYear: true, yearRange: '-100:+0'});
$("#txt_fecha3").datepicker({dateFormat: 'yy-mm-dd', changeMonth: true, changeYear: true, yearRange: '-100:+0'});
});

$(function () {
    var austDay = new Date();
    date_end1 = new Date(2013, 5 - 1, 25, 8, 0, 0);
    $('#defaultCountdown').countdown({until: date_end1});
                



    $(".select").click(function(){
        //alert("d"+this.id);
	$(".otherArticle").hide();
        $("#d"+this.id).fadeIn(500);
        });
    
    $("#btn_cancelar1").click(function(){
        $("#div_registro_gimp").slideUp("slow");
	$("#registro1").fadeIn("slow");
    });
    
     $("#btn_cancelar2").click(function(){
        $("#div_registro_django").slideUp("slow");
	$("#registro2").fadeIn("slow");
    });
     
      $("#btn_cancelar3").click(function(){
        $("#div_registro_android").slideUp("slow");
	$("#registro3").fadeIn("slow");
    });

    $("#aviso_firefox").delay(5000).fadeOut("slow");



var latlng = new google.maps.LatLng(19.842170,-90.508398);
            var myOptions = {
                zoom: 17,
                center: latlng,
                mapTypeControl: true,
                mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
                navigationControl: true,
                navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                scaleControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            mapa = new google.maps.Map(document.getElementById("map"), myOptions);
            var marker = new google.maps.Marker({
                position: latlng,
                title:"FLISOL 2013",
                icon: 'img/ico.png'
            });
            marker.setMap(mapa);
	    
	    var html_infoWindow = '<div>'+
                                    '<div>'+
				    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="img/cabecera.png" style="width:210px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="img/logo_ites.png" style="width:80px;">'+
                                    '</div>'+
                                    '<div>'+
                                        '<span class="info">Festival Latinoamericano de Instalaci&oacute;n de Software Libre</span><br>'+
                                        '<a href="http://www.itesrenedescartes.edu.mx/" target="_blank">Instituto Tecnol&oacute;gico y de Estudios Superiores Ren&eacute; Descartes</a>'+
				    '<div/>'+
                                  '</div>';
				  
	    /**
            *  Ventana de informacion del Punto
            */
            var infowindow = new google.maps.InfoWindow({
                content: html_infoWindow
            });
            
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(mapa, marker);
            });

	    
	    
	    //Facebook
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';

if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);}
    }(document,"script","twitter-wjs");

});



function inserta_gimp(){
	
	
	var nombre = document.getElementById('txt_nombre').value;
	var email = document.getElementById('txt_email').value;
	var tel = document.getElementById('txt_tel').value;
	var fecha = document.getElementById('txt_fecha').value;
	var id_taller = document.getElementById('txt_taller').value;
    



	if(nombre == '' || email == '' || tel == '' || fecha == '')
	{  
	    
	    $("#span_alerta_insert").show("fadeIn");
	    $(".aviso_privacidad").fadeOut("slow");
	    
	    
	    //alert("Para continuar debes rellenar todos los campos" );
	    
	}else{
	    
		var sUrl="querys.php?opcion=inserta_asistente&nombre="+nombre+"&email="+email+"&tel="+tel+"&fecha="+fecha+"&id_taller="+id_taller;
			

			
			//alert(sUrl);
			ajax=nuevoAjax();
			ajax.open("POST",sUrl,false);
			ajax.onreadystatechange=function()
			{
				if (ajax.readyState==4)
				{
					//alert(ajax.responseText);
					contar_asistentes();
					document.getElementById('div_registro_gimp').innerHTML='<p class="asistencia_registrada">Felicidades!, has apartado tu lugar al taller de Gimp.</p>';
					$("#partc_reg").css("display","none");
					
					
					
					                                       
					
				}
			}
			ajax.send(null);
		
		
	}
}


function contar_asistentes()
{	//alert("Estas en el modulo alumno");
	var asistentes='tbl_asistentes';
	var sUrl="querys.php?opcion=contar_asistentes&bd="+asistentes;

	ajax=nuevoAjax();
	ajax.open("POST",sUrl,false);	  
	ajax.onreadystatechange=function()
	{       
		if (ajax.readyState==4) 
		 {
                    
			
			//var numero =ajax.responseText;
			//document.getElementById('partc_reg').innerHTML='Participantes Registrados: '+ ajax.responseText;
			document.getElementById('partc_reg').innerHTML='Participantes Registrados: '+'<span id="num">'+ajax.responseText+'</span>';

			if (ajax.responseText >=20){
			
			$("#registro1").css("display","none");
			$("#partc_reg").css("display","none");
			document.getElementById('cupo_agotado1').innerHTML='<div class="div_agotado">'+
				    
				    '<h1>CUPO AGOTADO FLISOL 2013 CAMPECHE</h1>'+
				    '<span> El evento se encuentra completo, pero puedes asistir a las charlas.</span><br>'+
				   
				  '</div>';
			
			}else{
			
			
			
			//alert(ajax.responseText);
			 $("#registro1").click(function(){
			   
				if (ajax.responseText >= 20){
				    //alert("no hay cupo");
				    document.getElementById('cupo_agotado1').innerHTML='<div class="div_agotado">'+
				    
				    '<h1>CUPO AGOTADO FLISOL 2013 CAMPECHE</h1>'+
				    '<span> El evento se encuentra completo, pero puedes asistir a las charlas.</span><br>'+
				   
				  '</div>';
					$("#registro1").css("display","none");
					$("#partc_reg").css("display","none");
				    }else{
				    //alert("Si hay cupo");
				    $("#registro1").fadeOut("slow");
				    $("#div_registro_gimp").slideDown("slow");
				    $(".aviso_privacidad").css("display","block");
				    $("#span_alerta_insert").css("display","none");
				    
				}
			});
			}
			
		    
		  
			
		  }
                  
	}
	ajax.send(null);
	//Matamos Ajax
	
}


function inserta_django(){
	
	
	var nombre = document.getElementById('txt_nombre2').value;
	var email = document.getElementById('txt_email2').value;
	var tel = document.getElementById('txt_tel2').value;
	var fecha = document.getElementById('txt_fecha2').value;
	var id_taller = document.getElementById('txt_taller2').value;
    



	if(nombre == '' || email == '' || tel == '' || fecha == '')
	{  
	    
	    $("#span_alerta_insert2").show("fadeIn");
	    $(".aviso_privacidad2").fadeOut("slow");
	    
	    
	    //alert("Para continuar debes rellenar todos los campos" );
	    
	}else{
	    
		var sUrl="querys.php?opcion=inserta_asistente&nombre="+nombre+"&email="+email+"&tel="+tel+"&fecha="+fecha+"&id_taller="+id_taller;
			

			
			//alert(sUrl);
			ajax=nuevoAjax();
			ajax.open("POST",sUrl,false);
			ajax.onreadystatechange=function()
			{
				if (ajax.readyState==4)
				{
					//alert(ajax.responseText);
					contar_asistentes2();
					document.getElementById('div_registro_django').innerHTML='<p class="asistencia_registrada">Felicidades!, has apartado tu lugar al taller de Django.</p>';
					$("#partc_reg2").css("display","none");
					
					
					
					                                       
					
				}
			}
			ajax.send(null);
		
		
	}
}

function contar_asistentes2()
{	//alert("Estas en el modulo alumno");
	var asistentes='tbl_asistentes';
	var sUrl="querys.php?opcion=contar_asistentes2&bd="+asistentes;

	ajax=nuevoAjax();
	ajax.open("POST",sUrl,false);	  
	ajax.onreadystatechange=function()
	{       
		if (ajax.readyState==4) 
		 {
                    
			
			//var numero =ajax.responseText;
			//document.getElementById('partc_reg').innerHTML='Participantes Registrados: '+ ajax.responseText;
			document.getElementById('partc_reg2').innerHTML='Participantes Registrados: '+'<span id="num">'+ajax.responseText+'</span>';

			if (ajax.responseText >=20){
			
			$("#registro2").css("display","none");
			$("#partc_reg2").css("display","none");
			document.getElementById('cupo_agotado2').innerHTML='<div class="div_agotado">'+
				    
				    '<h1>CUPO AGOTADO FLISOL 2013 CAMPECHE</h1>'+
				    '<span> El evento se encuentra completo, pero puedes asistir a las charlas.</span><br>'+
				   
				  '</div>';
			
			}else{
			
			
			
			//alert(ajax.responseText);
			 $("#registro2").click(function(){
			   
				if (ajax.responseText >= 20){
				    //alert("no hay cupo");
				    document.getElementById('cupo_agotado2').innerHTML='<div class="div_agotado">'+
				    
				    '<h1>CUPO AGOTADO FLISOL 2013 CAMPECHE</h1>'+
				    '<span> El evento se encuentra completo, pero puedes asistir a las charlas.</span><br>'+
				   
				  '</div>';
					$("#registro2").css("display","none");
					$("#partc_reg2").css("display","none");
				    }else{
				    //alert("Si hay cupo");
				    $("#registro2").fadeOut("slow");
				    $("#div_registro_django").slideDown("slow");
				    $(".aviso_privacidad2").css("display","block");
				    $("#span_alerta_insert2").css("display","none");
				   
				}
			});
			}
			
		    
			
			    
			
		  }
                  
	}
	ajax.send(null);
	//Matamos Ajax
	
}



function inserta_android(){
	
	
	var nombre = document.getElementById('txt_nombre3').value;
	var email = document.getElementById('txt_email3').value;
	var tel = document.getElementById('txt_tel3').value;
	var fecha = document.getElementById('txt_fecha3').value;
	var id_taller = document.getElementById('txt_taller3').value;
    



	if(nombre == '' || email == '' || tel == '' || fecha == '')
	{  
	    
	    $("#span_alerta_insert3").show("fadeIn");
	    $(".aviso_privacidad3").fadeOut("slow");
	    
	    
	    //alert("Para continuar debes rellenar todos los campos" );
	    
	}else{
	    
		var sUrl="querys.php?opcion=inserta_asistente&nombre="+nombre+"&email="+email+"&tel="+tel+"&fecha="+fecha+"&id_taller="+id_taller;
			

			
			//alert(sUrl);
			ajax=nuevoAjax();
			ajax.open("POST",sUrl,false);
			ajax.onreadystatechange=function()
			{
				if (ajax.readyState==4)
				{
					//alert(ajax.responseText);
					contar_asistentes3();
					document.getElementById('div_registro_android').innerHTML='<p class="asistencia_registrada">Felicidades!, has apartado tu lugar al taller de Android.</p>';
					$("#partc_reg3").css("display","none");
					
				                                 
					
				}
			}
			ajax.send(null);
		
		
	}
}


function contar_asistentes3()
{	//alert("Estas en el modulo alumno");
	var asistentes='tbl_asistentes';
	var sUrl="querys.php?opcion=contar_asistentes3&bd="+asistentes;

	ajax=nuevoAjax();
	ajax.open("POST",sUrl,false);	  
	ajax.onreadystatechange=function()
	{       
		if (ajax.readyState==4) 
		 {
                    
			
			//var numero =ajax.responseText;
			//document.getElementById('partc_reg').innerHTML='Participantes Registrados: '+ ajax.responseText;
			document.getElementById('partc_reg3').innerHTML='Participantes Registrados: '+'<span id="num">'+ajax.responseText+'</span>';

			if (ajax.responseText >=20){
			
			$("#registro3").css("display","none");
			$("#partc_reg3").css("display","none");
			document.getElementById('cupo_agotado3').innerHTML='<div class="div_agotado">'+
				    
				    '<h1>CUPO AGOTADO FLISOL 2013 CAMPECHE</h1>'+
				    '<span> El evento se encuentra completo, pero puedes asistir a las charlas.</span><br>'+
				   
				  '</div>';
			
			}else{
			
			
			
			//alert(ajax.responseText);
			 $("#registro3").click(function(){
			   
				if (ajax.responseText >= 20){
				    //alert("no hay cupo");
				    document.getElementById('cupo_agotado3').innerHTML='<div class="div_agotado">'+
				    
				    '<h1>CUPO AGOTADO FLISOL 2013 CAMPECHE</h1>'+
				    '<span> El evento se encuentra completo, pero puedes asistir a las charlas.</span><br>'+
				   
				  '</div>';
					$("#registro3").css("display","none");
					$("#partc_reg3").css("display","none");
				    }else{
				    //alert("Si hay cupo");
				    $("#registro3").fadeOut("slow");
				    $("#div_registro_android").slideDown("slow");
				    $(".aviso_privacidad3").css("display","block");
				    $("#span_alerta_insert3").css("display","none");
				    
				}
			});
			}
			
		    
			
			    
			
		  }
                  
	}
	ajax.send(null);
	//Matamos Ajax
	
}





