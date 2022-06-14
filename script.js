//***Variables***//
const fondo = document.getElementById("cuerpo_principal");
const ola = document.getElementById("path");
const colorFondo = document.getElementById("colorFondo");
const letraColor = document.getElementById("letraColor");
const titulo = document.getElementById("titulo");
const tipoLetra = document.getElementById("tipoLetra");
const boton_actualizar = document.getElementById("boton_actualizar");
const boton_juego = document.getElementById("boton_juego");
const num = document.getElementById("num");
const probar =document.getElementById("probar");
let intentos=[];



//--Cambiar Color de Fondo--//
colorFondo.addEventListener("click", (e)=>{
    ola.style.fill = e.target.value;
	fondo.style.background = e.target.value;

}) 
//--Cambiar Color de Letra--//
letraColor.addEventListener("input", (e)=>{
	fondo.style.color = e.target.value;
	titulo.style.color = e.target.value;
}); 
//--Cambiar tipo de Letra--//
tipoLetra.addEventListener("change", (e)=>{
	let seleccion = document.getElementById("seleccionado");
	let valor = seleccion.options[seleccion.selectedIndex].value;

	if ( valor == "1"){
		fondo.style.fontFamily = "Roboto", "sans-serif";
	}

	if ( valor == "2"){
		fondo.style.fontFamily = "Indie Flower", "cursive";
	}

 	else if (valor == "3"){
 		fondo.style.fontFamily = "Fascinate Inline", "cursive";
 	}
 	else if (valor == "4"){
 		fondo.style.fontFamily = "Lobster Two", "cursive";
 	}
 })
//--Cambiar Tamaño de Letra--//
tamañoLetra.addEventListener("click", (e)=>{
	fondo.style.fontSize = e.target.value;
})
//--Restablecer--//
boton_actualizar.addEventListener("click", ()=>{
	location.reload(true);
})

//--Juego--//

/*Comenzar Juego*/
boton_juego.addEventListener("click", ()=>{
	/*Habilitar y Deshabilñitar Elemento de la fila 5*/
	let numRamdon = parseInt(Math.random()*100);
	console.log(numRamdon);
	cambiarBotones();
	/*Variables del Div Respuesta, mensaje y arreglo que guarda intentos*/
		let respuesta = document.getElementById("respuesta_juego");
		let mensaje="";
		/*Evento con el boton Adivinar*/	
		probar.addEventListener("click", (e)=>{
			e.preventDefault();
			let valor = num.value;
			/*Validacion*/
			if(valor < 0 || valor > 99){
				mensaje = "Escriba un Número del 0 al 99";
			}
			else {
				if(valor < numRamdon){
					mensaje=`El Numero es más alto que ${valor}`;
					intentos.push(valor);
				}
				else if(valor > numRamdon){
					mensaje=`El Número es más bajo que ${valor}`;
					intentos.push(valor);
				}
				else{
					cantidad = intentos.length;
					mensaje=`¡Felicitaciones! Adivinaste el N° ${numRamdon} en ${cantidad} intento/s`;
					reiniciar_juego();
				}
			}
			respuesta.innerHTML=mensaje;
			console.log(intentos)			
		})
})

/*Funcion para estilos de Botones Iniciado el Juego*/
function cambiarBotones(){
	boton_juego.disabled=true;
	num.disabled =false;
	boton_juego.classList.add("boton_off");
	boton_juego.classList.remove("estilosBoton");
	probar.disabled = false;
	probar.classList.remove("boton_off");
	probar.classList.add("estilosBoton");
}

/*Funcion de Reiniciar el Juego y limpiar Campos*/
function reiniciar_juego(){
	boton_juego.disabled=false;
	boton_juego.classList.remove("boton_off");
	boton_juego.classList.add("estilosBoton");
	intentos = [];
	probar.disabled=true;
	probar.classList.remove("boton_off");
	probar.classList.add("estilosBoton");
}










