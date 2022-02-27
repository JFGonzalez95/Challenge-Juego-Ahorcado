var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");


function baseHorca(){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(200,710);
    pincel.lineTo(100,750);
    pincel.lineTo(300,750);
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.moveTo(200,720);
    pincel.lineTo(130,745);
    pincel.lineTo(270,745);
    pincel.fill();
}

function guionesPalabra(palabra){
    var largoPalabra = palabra.length;
    var x1 = 400;
    var x2 = 450;
    var y1 = 750;
    var y2 =750;
    for (i = 0; i <largoPalabra; i++){
        var raya = lineas(x1, x2, y1, y2);
        var x1 = x1 + 80;
        var x2 = x2 + 80;
    }   
}

function lineas(x1  , x2, y1, y2){
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.lineWidth =6;
    pincel.moveTo(x1,y1);
    pincel.lineTo(x2,y2);
    pincel.stroke();
}

function circulo(){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(550,400,50,0,2*3.14);
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(550,400,45,0,2*3.14);
    pincel.fill();
}

function caracter(letra, x , y, color){
    pincel.fillStyle = color;
    pincel.font = "bold 45px cambria";
    var prueba = pincel.fillText(letra,x,y);    
    return prueba;

}

function interEspaciado(ejex,intentos){
    var result = 0;
    if (intentos == 0){
        result = ejex;
    }
    else if(intentos == 1){
        result = ejex + 45;
    }
    else if(intentos == 2){
        result = ejex + 90;
    }
    else if(intentos == 3){
        result = ejex + 130;
    }
    else if(intentos == 4){
        result = ejex + 170;
    }
    else if(intentos == 5){
        result = ejex + 210;
    }
    else if(intentos == 6){
        result = ejex + 250;
    }
    else if(intentos == 7){
        result = ejex + 290;
    }
    else if(intentos == 8){
        result = ejex + 330;
    }
    else if(intentos == 9){
        result = ejex + 370;
    }
    return result;
}

function dibujoAhorcado(parametro){
    var resultado = "";
    if (parametro == "a"){
        resultado = lineas(200,200,720,300); //vertical
    }
    else if (parametro == "b"){
        resultado = lineas(200,550,300,300); //horizontal
    }
    else if (parametro == "c"){
        resultado =  lineas(550,550,300,350); //segmentHoriz
    }
    else if (parametro == "d"){
        resultado =  circulo(); //caraAhorcado
    }
    else if (parametro == "e"){
        resultado =  lineas(550,550,450,610); //cuerpoAhorcado
    }
    else if (parametro == "f"){
        resultado =  lineas(550,620,610,690); //pieDerecho
    }
    else if (parametro == "g"){
        resultado =  lineas(550,480,610,690); //pieIzquiero
    }
    else if (parametro == "h"){
        resultado =  lineas(550,480,520,450); //brazoDerecho
    }
    else if (parametro == "i"){
        resultado =  lineas(550,620,520,450); //brazoIzquierdo
    }   
    return resultado;
}
