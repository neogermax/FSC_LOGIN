//Javascript para modulo de nuevo login por parte de MG GROUP Ltda.
//Autor: German Rodriguez
//Fecha Inicio: 11/11/2014


$(document).ready(function() {

    $(".Ccombo").chosen({ 
		width: "95%", 
		search_contains: true 
	});
	Login_onclick();

});

//funcion desde el login buttom html
function Login_onclick() {

	$("#client").change(function() {

		    var client = $(this).val(); 
	 
			switch (client) {
		
				case "FSC":
				window.location = "http://fsc.fscelvira.org/";
				break;

				case "FSC_ADM":
				window.location = "http://fscadm.fscelvira.org/";
				break;

			}
	});
}

