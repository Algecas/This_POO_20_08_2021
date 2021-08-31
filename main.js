
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


let dataClase = {
    cabello: "Morado",
    altura: 100, 
    ojos: 23,
    manos: 25,
    dedos: 58,
    pies: 2
};

let dataClase2 = {
    cabello: "Morado",
    altura: 100, 
    ojos: 23,
    manos: 25,
    dedos: 58,
    pies: 4
};

//Instanciar clase humanos
const inst = new humanos(dataClase);
console.log(inst.caminar());
const inst2 = new humanos(dataClase2);
console.log(inst2.caminar());


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
const humanosObjetos = Object.setPrototypeOf(dataObjeto,humanosObjetosMetodos);
humanosObjetos.constructorHumanos({pies: 2});
console.log(humanosObjetos.caminar());
humanosObjetos.constructorHumanos({pies: 4});
console.log(humanosObjetos.caminar());


console.warn("Objetos", humanosObjetos);













//Declaración y funcionamiento de this
// let obj = {
//     id: "hola",
//     saludar : function(){
//         return this.data();
//     }
    
// }
// console.log(obj.saludar());