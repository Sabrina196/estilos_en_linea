//***Variables***//
const fondo = document.getElementById("cuerpo_principal");
const ola = document.getElementById("path");
const colorFondo = document.getElementById("colorFondo");
const letraColor = document.getElementById("letraColor");
const titulo = document.getElementById("titulo");
const tipoLetra = document.getElementById("tipoLetra");
const boton_actualizar = document.getElementById("boton_actualizar");
const formJuego = document.getElementById("juego");
const boton_juego = document.getElementById("boton_juego");
let intentos=[];	
let valor="";
let valorInicial="";

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
//--RESTABLECER TODO--//
boton_actualizar.addEventListener("click", ()=>{
	location.reload(true);
})

/*Comenzar Juego*/
boton_juego.addEventListener("click", ()=>{
	/*Definicion de variables de los elementos input, boton "Adivinar"
	  Div Respuesta y Div de los intentos*/
	const num = document.getElementById("num");
	const probar =document.getElementById("probar");
	let respuesta = document.getElementById("respuesta_juego");
	let numRamdon = parseInt(Math.random()*100);
	/*Habilitar y Deshabilitar Elemento de la fila 5*/
	cambiarBotones();
	/*Escucha del evento Input*/
	num.addEventListener('input', (e)=> {
	valorInicial = e.target.value;
	})
	/*Evento con el boton Adivinar*/	
	probar.addEventListener("click", (e)=>{
		e.preventDefault();			
			/*Validacion*/
			if(valorInicial == ""){
				mensaje =`¡Escriba un Número!`;
			}
			else if(valorInicial == valor){
				mensaje =`Escriba un Número diferente a ${valor}`;
			}			
			else{
				valor = valorInicial;
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
						intentos.push(valor);
						cantidad = intentos.length;	
						mensaje=`¡Felicitaciones! Adivinaste el N° ${numRamdon} en ${cantidad} intento/s`;
						reiniciar_juego();
					}
				}
			/*Visibilidad de Intentos*/
			let cajaArray = document.getElementById("arreglo");
			num_intento = intentos.join("-" );
			cajaArray.innerHTML	=num_intento;	
			}	
			respuesta.innerHTML=mensaje;
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
	intentos = [];
	valor ="";
	probar.disabled=true;
	num.disabled=true;
	probar.classList.remove("estilosBoton");
	probar.classList.add("boton_off");
}
 


































