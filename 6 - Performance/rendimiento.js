console.time('revisión')

var animales = ["perro", "gato", "pez"];
var pruebaContador = 10000;

for (var i = 0; i < pruebaContador; i++){
    animales[i] = i;
};

console.timeEnd('revisión')
