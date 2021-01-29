//1

let h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
    h1.setAttribute('class','text-blue');
});

//2

document.querySelector('h3').addEventListener('dblclick', () => {
    document.querySelector('h3').setAttribute('class','text-error');
});

//3

let p = document.querySelector('p');
console.log(p.getAttribute('class'));

p.addEventListener('click', () => {
    if (p.getAttribute('class') == "text-style") {
        p.removeAttribute('class');
    } else {
        p.setAttribute('class','text-style');
    }
});

//4

let span = document.querySelectorAll('p')[1].querySelectorAll('span');


span[0].addEventListener('click', () => {
    span[0].setAttribute('class','bolder');
});

span[1].addEventListener('click', () => {
    span[1].setAttribute('class','bolder');
});

span[2].addEventListener('click', () => {
    span[2].setAttribute('class','bolder');
});

//5

let span2 = document.querySelectorAll('p')[2].querySelectorAll('span');

let spanito = span2[0].addEventListener('click', () => {
    span2[0].setAttribute('class','bolder');
    if (!spanito1 == true && !spanito2 == true) {
        span2[1].removeAttribute('class');
        span2[2].removeAttribute('class');
    } else if (!spanito1 == false && !spanito2 == true) {
        span2[1].removeAttribute('class');
    } else if (!spanito1 == true && !spanito2 == false) {
        span2[2].removeAttribute('class');
    }
});

let spanito1 = span2[1].addEventListener('click', () => {
    span2[1].setAttribute('class','bolder');
    if (!spanito == true && !spanito2 == true) {
        span2[0].removeAttribute('class');
        span2[2].removeAttribute('class');
    } else if (!spanito == false && !spanito2 == true) {
        span2[0].removeAttribute('class');
    } else if (!spanito == true && !spanito2 == false) {
        span2[2].removeAttribute('class');
    }
});

let spanito2 = span2[2].addEventListener('click', () => {
    span2[2].setAttribute('class','bolder');
    if (!spanito == true && !spanito1 == true) {
        span2[0].removeAttribute('class');
        span2[1].removeAttribute('class');
    } else if (!spanito == false && !spanito1 == true) {
        span2[0].removeAttribute('class');
    } else if (!spanito == true && !spanito1 == false) {
        span2[1].removeAttribute('class');
    }
});

console.log(!spanito);
