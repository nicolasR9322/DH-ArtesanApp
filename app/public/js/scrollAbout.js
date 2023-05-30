const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

let contenedores = qsa(".content_s");
let primero = qs("#uno")

window.addEventListener("scroll", () => 
{
    let posicion = 0;
        for (let i = 0; i < contenedores.length; i++) {
            const e = contenedores[i];
            e.classList.toggle("clase", window.scrollY > posicion);
            posicion += 100;
        }



    //primero.classList.toggle("clase" , window.scrollY > 0);

})



