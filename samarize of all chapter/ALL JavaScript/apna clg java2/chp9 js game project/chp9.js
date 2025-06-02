let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice = () => {
// Rock ,Paper , Scissors
let options = ["rock" , "paper" , "scissor"];
const randomidx = Math.floor(Math.random() * 3);
return options[randomidx];
};

const drawgame = () => {
    // console.log(" Game Was Draw.");
       msg.innerText ="Game Was Draw.Play Again!";
        msg.style.backgroundColor = "#081b31";
};
const showwinner = (userwin , userchoice , compchoice) =>{
if(userwin) {
    userscore++;
     userscorepara.innerText = userscore;

    console.log("You Win!");
    msg.innerText =`You Win! Your ${userchoice} Beats ${compchoice}`;
    msg.style.backgroundColor = "green";
} else {   
     compscore++;
     compscorepara.innerText = compscore;

    console.log("You Loss");
    msg.innerText =`You Loss! ${compchoice} Beats Your ${userchoice}`;
     msg.style.backgroundColor = "red";
}
}
const playgame = ( userchoice) => {
console.log("user choice = " , userchoice);
//generate computer choice -> modular
 const compchoice = gencompchoice();
 console.log("comp choice = " , compchoice);

 if(userchoice === compchoice) {
    //Draw Game 
    drawgame();
 } else{
let userwin = true;
if(userchoice === "rock"){
    // scissor , paper
   userwin = compchoice === "paper" ? false : true;
} else if (
    userchoice ==="paper"){
//rock, scissor
 userwin = compchoice === "scissors" ? false : true;
    }  else {
// Rock , Paper 
 userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin , userchoice , compchoice);
 }
 
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
     });
});
