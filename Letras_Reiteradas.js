function LetrasReiteradas( lista , letra,intentos){
    salida = 0;
    if (lista.includes(letra) && intentos<=8){
        alert("Letra repetida, ! No se tendra en cuenta ¡")
        salida = 1;
    } 
    else if (!lista.includes(letra) && intentos<=8 && letra!="" && letra!="," && letra!="." && letra!="-" &&
    letra!="'" && letra!="¿" && letra!="´" && letra!="+" && letra!="{" && letra!="}" &&
    letra!="<" && letra!="|"){
       lista.push(letra);
       salida = 2;
    }
    return salida;
}