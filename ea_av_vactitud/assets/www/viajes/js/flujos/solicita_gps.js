var currentPage={initialize:function(){this.bindEvents()},bindEvents:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},onDeviceReady:function(){currentPage.initComunication()},initComunication:function(){$(document).ready(function(){EA.startSession(),$("#backSpl").click(function(){navigator.app.exitApp(),navigator.startApp.start("com.appcode.ea",function(a){console.log(a)},function(a){console.log("Error: "+a)})}),$("#txtFecSalida_ass").datepicker({format:"dd/mm/yyyy",autoclose:!0,language:"es"}),$("#txtFecRegreso_ass").datepicker({format:"dd/mm/yyyy",autoclose:!0,language:"es"}),$("#txtFecOcurrencia_ass").datepicker({format:"dd/mm/yyyy",autoclose:!0,language:"es"});window.localStorage;$("#solicitar").click(function(){var a=$("#txtNombrePac_ass").val(),e=$("#txtRutPac_ass").val(),t=$("#txtFecSalida_ass").val(),o=$("#txtFecRegreso_ass").val(),c=$("#txtObservacion_ass").val(),s=$("#txtFecOcurrencia_ass").val(),r=$("#txtDireccion_ass").val(),n=$("#txtTelefono_ass").val(),i=$("#txtEmail_ass").val();EA.validate(a)&&EA.validate(e)&&EA.validate(t)&&EA.validate(o)&&EA.validate(c)&&EA.validate(s)&&EA.validate(r)&&EA.validate(n)&&EA.Rut(e)&&EA.validaEmail(i)?EA.solicitaAsistencia():(EA.validate(a)?$("#txtNombrePac_ass").css("background-color","#fff"):($("#txtNombrePac_ass").css("background-color","#ffebe5"),$("#txtNombrePac_ass").attr("placeholder","Debe ingresar Nombre Paciente")),EA.validate(e)?$("#txtRutPac_ass").css("background-color","#fff"):($("#txtRutPac_ass").css("background-color","#ffebe5"),$("#txtRutPac_ass").attr("placeholder","Debe ingresar Rut Paciente")),EA.validate(t)?$("#txtFecSalida_ass").css("background-color","#fff"):($("#txtFecSalida_ass").css("background-color","#ffebe5"),$("#txtFecSalida_ass").attr("placeholder","Debe seleccionar Fecha de salida de Chile")),EA.validate(o)?$("#txtFecRegreso_ass").css("background-color","#fff"):($("#txtFecRegreso_ass").css("background-color","#ffebe5"),$("#txtFecRegreso_ass").attr("placeholder","Debe seleccionar Fecha de regreso a Chile")),EA.validate(c)?$("#txtObservacion_ass").css("background-color","#fff"):($("#txtObservacion_ass").css("background-color","#ffebe5"),$("#txtObservacion_ass").attr("placeholder","Debe ingresar Observación/Sintomatía")),EA.validate(s)?$("#txtFecOcurrencia_ass").css("background-color","#fff"):($("#txtFecOcurrencia_ass").css("background-color","#ffebe5"),$("#txtFecOcurrencia_ass").attr("placeholder","Debe seleccionar Fecha de ocurrencia")),EA.validate(s)?$("#txtFecOcurrencia_ass").css("background-color","#fff"):($("#txtFecOcurrencia_ass").css("background-color","#ffebe5"),$("#txtFecOcurrencia_ass").attr("placeholder","Debe seleccionar Fecha de ocurrencia")),EA.validate(r)?$("#txtDireccion_ass").css("background-color","#fff"):($("#txtDireccion_ass").css("background-color","#ffebe5"),$("#txtDireccion_ass").attr("placeholder","Debe dirección donde se encuentra")),EA.validate(n)?$("#txtTelefono_ass").css("background-color","#fff"):($("#txtTelefono_ass").css("background-color","#ffebe5"),$("#txtTelefono_ass").attr("placeholder","Debe ingresar teléfono para contactarlo")),EA.validaEmail(i)?$("#txtEmail_ass").css("background-color","#fff"):($("#txtEmail_ass").css("background-color","#ffebe5"),$("#txtEmail_ass").attr("placeholder","Debe ingresar Email válido")))})})},gps:function(){var a=document.getElementById("map_canvas");map=plugin.google.maps.Map.getMap(a),map.setMyLocationEnabled(!0),map.setCompassEnabled(!0),map.setTrafficEnabled(!0),map.setAllGesturesEnabled(!0);var e=function(a){const e=new plugin.google.maps.LatLng(a.latLng.lat,a.latLng.lng);var t={position:e};plugin.google.maps.Geocoder.geocode(t,function(a){if(a.length){var e=a[0],t=e.position;if("undefined"==typeof e.subThoroughfare)var o="";else var o=e.subThoroughfare+", ";if("undefined"==typeof e.thoroughfare)var c="";else var c=e.thoroughfare+"";if("undefined"==typeof e.postalCode)var s="";else var s=e.postalCode+", ";var r=[o+c,e.locality||"",e.adminArea||"",s+e.country].join(", ");$("#txtDireccion_ass").val(r),map.addMarker({position:t,title:"Estas ubicado actualmente en: "+r},function(a){map.animateCamera({target:t,zoom:17},function(){a.showInfoWindow()}),map.addEventListener(plugin.google.maps.event.MAP_CLOSE,function(a){a.remove(),console.log("Borrando Markers")})})}else alert("No es posible encontrar dirección")})},t=function(a){alert("error: "+a)};map.getMyLocation(e,t),map.addEventListener(plugin.google.maps.event.MAP_CLOSE,function(){$("#map_canvas").html("")}),map.showDialog()}};currentPage.initComunication();