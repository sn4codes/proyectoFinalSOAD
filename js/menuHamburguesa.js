//constantes
const hamburguesaBoton = document.getElementById("hamburguesaBoton");
const menuHamburguesa = document.getElementById("menuHamburguesa");
const hamburguesaBotonCierre = document.getElementById("hamburguesaBotonCierre");

//evento pa q cuando le de al botón del menú hamburguesa, este se abra 
hamburguesaBoton.addEventListener("click", () => {
    menuHamburguesa.style.display = "flex"; 
    //del css puedo quitar display: flex; con esto en js??
}
);

//evento pa q cuando le de al botón del aspa, el menú hamburguesa se oculte
hamburguesaBotonCierre.addEventListener("click", () => {
    menuHamburguesa.style.display = "none";
}
);