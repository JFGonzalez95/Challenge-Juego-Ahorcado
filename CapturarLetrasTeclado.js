function teclasOprimidas(event,intentos){
    if(intentos <= 8 && event.key!="" && event.key!="," && event.key!="." && event.key!="-" &&
    event.key!="'" && event.key!="¿" && event.key!="´" && event.key!="+" && event.key!="{" && event.key!="}" &&
    event.key!="<" && event.key!="|"){
        console.log("se oprimio una tecla");
        var i = event.key;
        i = i.toUpperCase();
    }
    else{
        i ="";
    }
    return i;
}