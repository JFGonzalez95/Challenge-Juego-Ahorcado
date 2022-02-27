function ingresoNumeros(texto,mensaje){
    console.log(texto);
    var resultado = texto;
    var numeros = ["0","1","2","3","4","5","6","7","8","9"];
    var TextInput = [];

    OUTERLOPP: for(i = 0; i < texto.length; i++){
                    var letra = texto[i];
                    TextInput.push(letra);
                    for (j = 0; j < numeros.length; j++){
                        var digito = numeros[j];
                        if (letra == digito){
                            alert(mensaje)
                            resultado ="";
                            break OUTERLOPP;
                        }
                    }
                }
                return resultado;


}