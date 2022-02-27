function elimAcentos_ConvMayus(texto) {
    var acento = texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    var ConverMayus = acento.toUpperCase();
    return ConverMayus;
}