//Clase Humanos
class humanos{
    
    constructor(arg){
        for(let [id, value] of Object.entries(arg)){
            this[id] = value;
        }
    }
    caminar(){
        return `Clase yo puedo caminar con mis ${this.pies} pies`;
    }
}

//Set de datos 1
let dataClase = {
    cabello: "Morado",
    altura: 170, 
    ojos: 23,
    manos: 25,
    dedos: 58,
    pies: 2
};

//Set de datos 2
let dataClase2 = {
    cabello: "Morado",
    altura: 52, 
    ojos: 23,
    manos: 25,
    dedos: 58,
    pies: 4
};

//Instanciar clase humanosset de datos 1
console.log(`Impresión por clases`);
const inst = new humanos(dataClase);
console.log(inst.caminar(),`Soy humano y mi altura es: ${dataClase.altura} cm`);
//Instanciar clase humanosset de datos 2
const inst2 = new humanos(dataClase2);
console.log(inst2.caminar(),`Soy animal y mi altura es: ${dataClase2.altura} cm`);


console.warn("Clase", inst2);


//Objetos
const humanosObjetosMetodos = {
    caminar : function(){
        return `Objeto yo puedo caminar con mis ${this.pies} pies`;
    },
    //Funcion como constructor
    constructorHumanos: function(arg){
        for(let [id, value] of Object.entries(arg)){
            this[id] = value;
        }
    }
}
let dataObjeto = {
    cabello: undefined,
    altura: undefined, 
    ojos: undefined,
    manos: undefined,
    dedos: undefined,
    pies: undefined
}

//Llamado constructor por objetos con inicialización de datos
console.log(`Impresión por objetos`);
const humanosObjetos = Object.setPrototypeOf(dataObjeto,humanosObjetosMetodos);
humanosObjetos.constructorHumanos({pies: 2});
console.log(humanosObjetos.caminar(),`Soy humano y mi altura es: ${dataObjeto.altura=170} cm`);
//Llamado constructor por objetos con inicialización de datos 2
humanosObjetos.constructorHumanos({pies: 4});
console.log(humanosObjetos.caminar(),`Soy animal y mi altura es: ${dataObjeto.altura=47} cm`);


console.warn("Objetos", humanosObjetos);













//Declaración y funcionamiento de this
// let obj = {
//     id: "hola",
//     saludar : function(){
//         return this.data();
//     }
    
// }
// console.log(obj.saludar());