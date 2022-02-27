var botonAgregar = document.querySelector("#nueva-palabra");
var inputAgregar = document.querySelector("#input-nueva-palabra");
var botonIniciar = document.querySelector("#iniciar-juego");
var canvas = document.querySelector("#pantalla");


inputAgregar.addEventListener("input",function(event){
    inputAgregar.value = elimAcentos_ConvMayus(inputAgregar.value);
    inputAgregar.value = ingresoNumeros(inputAgregar.value,"No es posible ingresar Numeros, ! Por favor ingrese el nombre de un pais ¡");
})
 

botonAgregar.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hicieron click");
    var textoIngresado = inputAgregar.value;
    var x = consulPais(paises,textoIngresado);
    inputAgregar.focus();
    console.log(paises); 
})       

botonIniciar.addEventListener("click",function(event){
    event.preventDefault();
    console.log("hicieron click")
    var palabraAdivinar = sortPais(paises);
    console.log(palabraAdivinar);
    desplazarScroll();
    var dibujo = baseHorca();
    var guiones = guionesPalabra(palabraAdivinar);
    var Numletras = palabraAdivinar.length
    var intentos = 0;
    var bolsa = [];   
    canvas.addEventListener("keypress",function(event){
        var tecla = teclasOprimidas(event,intentos);
        var tecla = elimAcentos_ConvMayus(tecla);
        var tecla = ingresoNumeros(tecla,"No es posible ingresar Numeros o caracteres especiales ! Por favor ingrese solo letras¡");
        console.log(tecla);
        var Reiterada = LetrasReiteradas(bolsa,tecla,intentos);
        console.log(bolsa);
        console.log(Reiterada);
            //INICIO BUSQUEDA LETRAS
            var coordX = 400;
            var coordY = 740;
            var ejex = interEspaciado(700,intentos);
            var ejey = 400;
            var intFallido = ["a","b","c","d","e","f","g","h","i"];
            if(palabraAdivinar.includes(tecla) && intentos<=8 && Reiterada!=1){
                busquedaLetras(tecla,palabraAdivinar,coordX,coordY); 
                MensajeGanador(palabraAdivinar, bolsa,Numletras);
            }
            else if (!palabraAdivinar.includes(tecla) && intentos<=8 && Reiterada!=1){
                caracter(tecla, ejex, ejey, "red");
                dibujoAhorcado(intFallido[intentos]);
                canvas = ++intentos
                console.log(ejex)
                console.log(intentos)          
            }

            if(intentos >= 9){
                caracter("!Fuiste Ahorcado, Intentos Terminados ¡",250,250,"red")
                caracter("!La palabra era " + palabraAdivinar + "¡",600,550,"green")
            }
    })
})
