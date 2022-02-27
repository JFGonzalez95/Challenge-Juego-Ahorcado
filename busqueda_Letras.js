function busquedaLetras(letra,PaisAdivivar,coordX,coordY){
    //var coordX = 400;
    //var coordY = 740;
    //var ejex = 700;
    //var ejey = 400;
    upperlopp:
    for (i in PaisAdivivar){
        var posicion = PaisAdivivar[i];
            for (i in letra){
                var letraEscrita = letra[i];   
                if (posicion == letraEscrita){  
                    caracter(letraEscrita, coordX , coordY, "black");
                    coordX = coordX + 80;
                    //continue;
                    //coordY = coordY + 80;
                }
                else{
                    coordX = coordX + 80;
                    
                    /*
                    caracter(letraEscrita, ejex, ejey, "red");
                    ejex = ejex + 30;
                    coordX = coordX + 80;
                    */
                    //break upperlopp;
                    
                    //coordY = coordY + 80; 
                    
                }
                

            }
        
    }
    
}   
