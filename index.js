class Board {
    constructor (largo, alto, peso, material, tipo, posicion, texto_escrito){
        texto_escrito = texto_escrito ?? "";
        this.largo = largo;
        this.alto = alto;
        this.peso = peso;
        this.material = material;
        this.tipo = tipo;
        this.posicion = posicion;
        this.texto_escrito = texto_escrito;
    }
    esCuadrado (){
        if (this.largo === this.alto){
            console.log("es cuadrado");
            return true;
        }else {
            console.log("no es cuadrado");
            return false;
        }
    }
    escribirTexto(texto){
        this.texto_escrito = texto;
        console.log("Escribiste: ",texto);
        return texto;
    }
    borrarTexto(){
        if(this.texto_escrito.length > 0 ){
            this.texto_escrito = "";
            console.log("Texto borrado");
            return true;
        }else{
            console.log("No hay nada escrito");
            return false;
        }
    }
    mostrarTextoEscrito(){
        console.log(this.texto_escrito);
        return this.texto_escrito;
    }
}

const pizarron1 = new Board (100 , 100, 50, "caoba", "sylvapen", "horizontal");
pizarron1.esCuadrado();
pizarron1.escribirTexto("Estas escribiendo");
pizarron1.mostrarTextoEscrito();
pizarron1.borrarTexto();
pizarron1.mostrarTextoEscrito();