let stringDisplay = prompt('Input text here (MAX char is 10 & MIN char is 5) ');

const isEmpty = (str) => {
    if(str === "" || str.match(/^ *$/) || str.length <= 5){
        return true;
    }
    return false;
}

if(isEmpty(stringDisplay)){
    stringDisplay = "HelloWorld."
};

const body = document.querySelector('body')
const stringToArray = (str) => [...str];
const stringValue = stringToArray(stringDisplay.slice(0,11));

const createDiv = document.createElement('div')
createDiv.classList.add('container');

const createH5 = document.createElement('h5');
createH5.style.marginBottom = "2rem";

const createP = document.createElement('p');
createP.style.marginBottom = "3rem";

createP.innerText = "Animating each character of a string";
createH5.innerText = "Refresh or press f5 to input new text"

body.appendChild(createH5);
body.appendChild(createP);
body.appendChild(createDiv);

const container = document.querySelector('.container');
container.style.display = "flex";

stringValue.forEach(result => {
    let addSpan = document.createElement('h1');
    createDiv.appendChild(addSpan);
    addSpan.innerHTML = result;
    addSpan.classList.add("styling");
});

let someValue = -1;

setInterval(()=>{
    someValue++;
    if(someValue >= createDiv.children.length){
        someValue = 0;
    }
    createDiv.children[someValue].classList.toggle('animate');
}, 100);