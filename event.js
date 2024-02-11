function makeRed(){
    document.body.style.backgroundColor='red';
}
// option 3
const makeblue=document.getElementById('make-blue');
makeblue.onclick=makeBlue;
function makeBlue() {
    document.body.style.backgroundColor='blue';
}
// option4
const makePurple=document.getElementById('make-purple');
makePurple.onclick=function makePurple() {
    document.body.style.backgroundColor='purple'
}
// option5
const makePink=document.getElementById('make-pink');
makePink.addEventListener('click', makePinka)

function makePinka() {
    document.body.style.backgroundColor='pink';
}
const makeGreen=document.getElementById('make-green');
makeGreen.addEventListener('click',function makeGreena() {
    document.body.style.backgroundColor='green';
})

// option 4 er final.
document.getElementById("golden-rod").addEventListener('click',function () {
 document.body.style.backgroundColor='goldenrod';   
})
