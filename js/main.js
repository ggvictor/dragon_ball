const goku = document.getElementById("goku")
const gokuActive = document.getElementById("gokuActive")

const vegeta = document.getElementById("vegeta")
const vegetaActive = document.getElementById("vegetaActive")

const gohan = document.getElementById("gohan")
const gohanActive = document.getElementById("gohanActive")

const piccolo = document.getElementById("piccolo")
const piccoloActive = document.getElementById("piccoloActive")

const kuririn = document.getElementById("kuririn")
const kuririnActive = document.getElementById("kuririnActive")

const n18 = document.getElementById("n18")
const n18Active = document.getElementById("n18Active")

const bulma = document.getElementById("bulma")
const bulmaActive = document.getElementById("bulmaActive")

const freeza = document.getElementById("freeza")
const freezaActive = document.getElementById("freezaActive")

const cell = document.getElementById("cell")
const cellActive = document.getElementById("cellActive")

const boo = document.getElementById("boo")
const booActive = document.getElementById("booActive")

// funções
function gokuClick(){
    goku.style.display = 'none';
    gokuActive.style.display = 'flex';
}
function gokuActiveClick(){
    gokuActive.style.display = 'none';
    goku.style.display = 'flex';
}


function vegetaClick(){
    vegeta.style.display = 'none';
    vegetaActive.style.display = 'flex';
}
function vegetaActiveClick(){
    vegetaActive.style.display = 'none';
    vegeta.style.display = 'flex';
}

function gohanClick(){
    gohan.style.display = 'none';
    gohanActive.style.display = 'flex';
}
function gohanActiveClick(){
    gohanActive.style.display = 'none';
    gohan.style.display = 'flex';
}

function piccoloClick(){
    piccolo.style.display = 'none';
    piccoloActive.style.display = 'flex';
}
function piccoloActiveClick(){
    piccoloActive.style.display = 'none';
    piccolo.style.display = 'flex';
}

function kuririnClick(){
    kuririn.style.display = 'none';
    kuririnActive.style.display = 'flex';
}
function kuririnActiveClick(){
    kuririnActive.style.display = 'none';
    kuririn.style.display = 'flex';
}


function n18Click(){
    n18.style.display = 'none';
    n18Active.style.display = 'flex';
}
function n18ActiveClick(){
    n18Active.style.display = 'none';
    n18.style.display = 'flex';
}

function bulmaClick(){
    bulma.style.display = 'none';
    bulmaActive.style.display = 'flex';
}
function bulmaActiveClick(){
    bulmaActive.style.display = 'none';
    bulma.style.display = 'flex';
}


function freezaClick(){
    freeza.style.display = 'none';
    freezaActive.style.display = 'flex';
}
function freezaActiveClick(){
    freezaActive.style.display = 'none';
    freeza.style.display = 'flex';
}


function cellClick(){
    cell.style.display = 'none';
    cellActive.style.display = 'flex';
}
function cellActiveClick(){
    cellActive.style.display = 'none';
    cell.style.display = 'flex';
}

function booClick(){
    boo.style.display = 'none'
    booActive.style.display = 'flex';
}
function booActiveClick(){
    booActive.style.display = 'none';
    boo.style.display = 'flex';
}
// eventos
goku.addEventListener("click",()=>{
    gokuClick();
})
gokuActive.addEventListener("click",()=>{
    gokuActiveClick();
})


vegeta.addEventListener("click",()=>{
    vegetaClick();
})
vegetaActive.addEventListener("click",()=>{
    vegetaActiveClick();
})


gohan.addEventListener("click",()=>{
    gohanClick();
})
gohanActive.addEventListener("click",()=>{
    gohanActiveClick();
})


piccolo.addEventListener("click",()=>{
    piccoloClick();
})
piccoloActive.addEventListener("click",()=>{
    piccoloActiveClick();
})


kuririn.addEventListener("click",()=>{
    kuririnClick();
})
kuririnActive.addEventListener("click",()=>{
    kuririnActiveClick();
})

n18.addEventListener("click",()=>{
    n18Click();
})
n18Active.addEventListener("click",()=>{
    n18ActiveClick();
})

bulma.addEventListener("click",()=>{
    bulmaClick();
})
bulmaActive.addEventListener("click",()=>{
    bulmaActiveClick();
})

freeza.addEventListener("click",()=>{
    freezaClick();
})
freezaActive.addEventListener("click",()=>{
    freezaActiveClick();
})

cell.addEventListener("click",()=>{
    cellClick();
})
cellActive.addEventListener("click",()=>{
    cellActiveClick();
})

boo.addEventListener("click",()=>{
    booClick();
})
booActive.addEventListener("click",()=>{
    booActiveClick();
})