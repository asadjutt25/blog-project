let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
const options = ["rock","paper","scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
}
const drawGame = () => {
    console.log("game was draw.");
     msg.innerText = " Game was Dran. Play again.";
      msg.style.backgroundColor = "black";
}
const showWinner = (userwin  , userchoice , compchoice)=>{
    if (userwin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = ` You win ! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose ");
         msg.innerText = ` You lost ! ${compchoice} beats your ${userchoice}`;
          msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) =>{
    // generate computer choice -> modular
console.log("user choice =", userchoice);
  const compchoice = genCompChoice();
   console.log("comp choice = ", compchoice);
     if(userchoice === compchoice) {
        //draw game
        drawGame();
     } else {
        let userwin = true;
       if (userchoice === "rock") {
        // scissors,paper
        userwin = compchoice === "paper" ? false:true;
       } else if (userchoice === "paper"){
        // rock , scissorss
        userwin= compchoice === "scissors" ? false : true;    
       } 
     else {
        //Rock , Paper
        userwin= compchoice === "rock" ? false : true; 
     }
     
    showWinner(userwin , userchoice , compchoice);
 }
 
};
choices.forEach((choice) => { 
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
    //  console.log("Choice was clicked", userchoice );
     playGame(userchoice)
    });
});
