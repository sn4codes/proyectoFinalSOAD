const ahora = document.getElementById("ahora");
//ARRAYS FUENTES Y COLORES
const fuentes = [
    //google
    "Playwrite AU VIC Guides", //indice 0
    "Noto Sans Armenian", //indice 1
    "Black Ops One", //2
    "Caveat", //3
    //nativa
    "Courier new" //4
];
const colores = [ //I ♡ Pinterest
    "rgb(183, 4, 4)",  
    "#800020", 
    "#5D3FD3",  
    "#05614B", 
    "#01DE82",
    "#49111C",
    "#ff0000"
];
//contador cambio fuentes inicializado
let indice = 0;

//función para el cambio de estilo y asociar
//fuente armenia a texto armenio exclusivamente
//(las tipografías smp van en orden 0-4)
function cambiarEstilo(){
    ahora.style.fontFamily = fuentes[indice];
    if(indice === 1){
        ahora.textContent = "ԱՀՈՐԱ";
    }
    else{
        ahora.textContent= "AHORA";
    }

    const colorAleatorio = colores[Math.floor(Math.random()*colores.length)];
    ahora.style.color = colorAleatorio;

    indice++;
    if(indice >= fuentes.length){
    indice = 0;
    }
};

//que se ejecute la function cada x (800) milisegundos
setInterval(cambiarEstilo, 800);







