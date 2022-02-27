var paises =["COLOMBIA","ARGENTINA","BRASIL","CHILE","PERU","PARAGUAY",
"URUGUAY","BOLIVIA","ECUADOR","VENEZUELA","PANAMA","NICARAGUA",
"PORTUGAL","RUSIA","AUSTRIA","AUSTRALIA","NIGERIA","CAMERUN",
"RUMANIA","INGLATERRA","ESCOCIA","HUNGRIA","TAYIKISTAN","AFGANISTAN",
"AZERBAIYAN","CATAR","GEORIGIA","KUWAIT","MONGOLIA"];


function consulPais(lista, pais){
    var inclGuion1 = pais.replaceAll(" ","-");
    var resulConsulta = lista.includes(inclGuion1);
    console.log(resulConsulta);
    if (resulConsulta == true){
        alert("El pais ya se encuentra, ! Por favor ingrese uno diferente ¡");
    }
    else{
        var valEspacios = pais.includes(" ");
        var inclGuion2 = pais.replaceAll(" ","-");
        var ingresar = paises.push(inclGuion2);
        alert("Pais ingresado correctamente al juego");
    }
}

function sortPais(lista){
    var indiceAleatorio = Math.floor(Math.random()*lista.length);
    var paisAdivinar = lista[indiceAleatorio];
    return paisAdivinar;

}