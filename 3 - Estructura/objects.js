function Persona(primerNombre, segundoNombre){
    this.primerNombre = primerNombre;
    this.segundoNombre = segundoNombre;
}

var persona = new Persona("Carlos", "Eduardo");

console.log(persona);
console.log(persona.primerNombre);
console.log(persona.segundoNombre);