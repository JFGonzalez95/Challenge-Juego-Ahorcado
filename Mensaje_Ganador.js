function MensajeGanador(palabraAdivinar, bolsa,Numletras){
    cadenaGanadora = 0;
    for (i in palabraAdivinar){
        var indice = palabraAdivinar[i];
        if (bolsa.includes(indice)){
            cadenaGanadora = cadenaGanadora + 1;
        }
    }
    
    if (cadenaGanadora == Numletras){
        var msn = caracter("!Felicidades, Ganaste ¡",400,250,"red")
    }
    return msn;
}