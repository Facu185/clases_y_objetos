class Board {
    constructor (largo, alto, peso, material, tipo, posicion){
        this.largo = largo;
        this.alto = alto;
        this.peso = peso;
        this.material = material;
        this.tipo = tipo;
        this.posicion = posicion;
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
}
const pizarron1 = new Board (100 , 100, 50, "caoba", "sylvapen", "horizontal");
pizarron1.esCuadrado();