var persona = {
    nombre: "Carlos",
    email: "carlos@gmail.com",
    twitter: "carlosES",
    saludar: function(){
        return "Hola, mundo"
    }
}

var dato = "";

for (dato in persona){
    console.log(dato, persona[dato]);
}