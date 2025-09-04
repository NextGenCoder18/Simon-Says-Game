let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started=true;

        levelUp();
    }
})

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },200);
}

function flashBtnUser(btn){
    btn.classList.add("flash-user");
    setTimeout(function(){
        btn.classList.remove("flash-user")
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=(`Level ${level}`);
    let randmIndex=Math.floor(Math.random()*3);
    let randColor=btns[randmIndex];
    let colorClass=document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);

    // console.log(randmIndex);
    // console.log(randColor);
    // console.log(colorClass);
    flashBtn(colorClass);
}

function checkAns(idx){
    // console.log("current level is : ",level)
    // let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }else{
        h3.innerHTML=`Game Over , Press any Key to Restart the Game. <br> Your Score : ${level} `;
        reset();
        alert();
    }
}

function Keypress(){
    console.log(this);
    let btn=this;
    flashBtnUser(btn);

    userColor= btn.getAttribute("id");
    console.log(userColor)

    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".colors");
for(let btn of allBtns){
      btn.addEventListener("click",Keypress);    
}

function alert(){
    let body=document.querySelector("body");
    body.style.backgroundColor="#de3838";
    setTimeout(function(){
        body.style.backgroundColor="white";
    },150)
}

function reset(){
    userSeq=[];
    gameSeq=[];
    started=false;
    level=0;
}