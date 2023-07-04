const formUSerHTML = document.querySelector("#formUser");
const contenedorHTML = document.querySelector(".contenedor");
const cierre = document.querySelector(".icono");
let html = ""

// console.log(formUSerHTML);

// const activar = () => submit.preventDefault();
// formUSerHTML.addEventListener("sumit",activar);
// console.log();

function printAlert (texto = "null"){
document.querySelector("#textoALerta").textContent = texto;
contenedorHTML.classList.toggle("contenedor_icon")
}
formUSerHTML.addEventListener("submit", function(evento){
    evento.preventDefault()

    const user =evento.target.user.value.trim().toLowerCase();
    const email=evento.target.email.value.trim().toLowerCase();
    const pass1=evento.target.pass1.value.trim();
    const pass2=evento.target.pass2.value.trim();

    if (!user || !email || !pass1 || !pass2) 
    return printAlert ("All fields are required")


    if (pass1 !== pass2) 
    return printAlert ("Passwords are not the same") ;

    html = `
    <div class="user">
    <p> ${user} </p>
    <p> ${email} </p>
    <p> ${pass1} </p>
</div>`;

document.querySelector(".users").innerHTML += html;

})
// console.log(modalErrorHTML);

cierre.addEventListener("click", function(){
    contenedorHTML.classList.remove("contenedor_icon");
});