let homePag = document.getElementById('principal');
let sobrePag = document.querySelector("#sobre");
let projetosPag = document.querySelector("#projetos");
let orcamentoPag = document.getElementById('orcamento');



function scroll() {
    window.scroll({
        top: document.querySelector("#orcamento")
        .getBoundingClientRect().top,
        left:0,
        behavior: 'smooth'
    })
}

homePag.addEventListener(`click`);
sobrePag.addEventListener(`click`);
projetosPag.addEventListener(`click`);
orcamentoPag.addEventListener(`click`);

