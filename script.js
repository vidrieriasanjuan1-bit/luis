/*=========================================
      VIDRIERÍA SAN JUAN
=========================================*/

//=========== MENÚ RESPONSIVE ===========//

const menu = document.querySelector(".menu");
const nav = document.querySelector("#nav");

if(menu){
    menu.addEventListener("click",()=>{
        nav.classList.toggle("activo");
    });
}

// Cerrar menú al seleccionar una opción
document.querySelectorAll("#nav a").forEach(link=>{
    link.addEventListener("click",()=>{
        nav.classList.remove("activo");
    });
});


//=========== CARRUSEL ===========//

window.addEventListener("load",()=>{

    if(window.Flickity){

        document.querySelectorAll(".js-flickity").forEach(slider=>{

            new Flickity(slider,{
                wrapAround:true,
                autoPlay:3500,
                pageDots:true,
                prevNextButtons:false,
                pauseAutoPlayOnHover:false,
                selectedAttraction:0.02,
                friction:0.28
            });

        });

    }

});


//=========== ANIMACIÓN AL HACER SCROLL ===========//

const elementos = document.querySelectorAll(
".card, .servicio, .cliente, .info, .formulario, .mapa");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("mostrar");
        }

    });

},{
    threshold:0.15
});

elementos.forEach(el=>observer.observe(el));


//=========== GALERÍA LIGHTBOX ===========//

const imagenes = document.querySelectorAll(".imagenes img");

imagenes.forEach(img=>{

    img.addEventListener("click",()=>{

        const fondo = document.createElement("div");
        fondo.className="lightbox";

        const imagen = document.createElement("img");
        imagen.src = img.src;

        fondo.appendChild(imagen);

        document.body.appendChild(fondo);

        fondo.addEventListener("click",()=>{
            fondo.remove();
        });

    });

});


//=========== FORMULARIO ===========//

const formulario = document.querySelector("#presupuesto-form");

if(formulario){

    formulario.addEventListener("submit",(e)=>{

        e.preventDefault();

        const nombre = formulario.querySelector("input").value;

        if(nombre===""){
            alert("Ingrese su nombre.");
            return;
        }

        alert("¡Gracias! Su presupuesto fue enviado correctamente.");

        formulario.reset();

    });

}


//=========== BOTÓN VOLVER ARRIBA ===========//

const arriba = document.createElement("button");

arriba.innerHTML = '<i class="fas fa-arrow-up"></i>';

arriba.className="btn-arriba";

document.body.appendChild(arriba);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){
        arriba.classList.add("visible");
    }else{
        arriba.classList.remove("visible");
    }

});

arriba.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


//=========== EFECTO HEADER ===========//

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){
        header.style.padding="5px 0";
        header.style.background="rgba(15,94,168,.98)";
    }else{
        header.style.padding="0";
        header.style.background="rgba(15,94,168,.95)";
    }

});


//=========== WHATSAPP ===========//

const whatsapp = document.querySelector(".float");

window.addEventListener("scroll",()=>{

    if(window.scrollY>250){
        whatsapp.style.opacity="1";
        whatsapp.style.transform="scale(1)";
    }else{
        whatsapp.style.opacity=".85";
    }

});