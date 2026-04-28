let gameSeq=[];
let userSeq=[];
let started=false;
let lvl=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","blue","green"];

document.addEventListener("keypress",function() {
    if(started==false){
    console.log("game started") ;
    started=true;
    levelUp();
}
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    lvl++;
    h2.innerText=`level ${lvl}`;
    let randInd=Math.floor(Math.random()*3);
    let randColor= btns[randInd];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);   
}

function check (ind){
  if(userSeq[ind]==gameSeq[ind]){
    if(userSeq.length==gameSeq.length){
        setTimeout (levelUp,1000) ;
        } 
    } 
  else{
    h2.innerHTML=`Game Over! Your score was <b> ${lvl} </b> <br> Please press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout( function(){
               document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
       }
}

function btnPress() {
    let btn=this;                           //this btn has function scope
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor); 
    check(userFlash.length-1);
} 

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    lvl=0;
}