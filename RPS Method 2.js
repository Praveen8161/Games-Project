
let computerInput = ["rock","paper","scissor","r","p","s"];
let round = 1;
let restart = true;
function player(playerAns){
    let computerAns = computerInput[Math.floor(Math.random()*3)];
    if (computerAns === playerAns){
        alert(`computer= ${computerAns}\n
                Player= ${playerAns}\n
                Result= Tie`);
        }else if(computerAns === "rock" && playerAns === "paper"){
            alert(`computer= ${computerAns}\n
                Player= ${playerAns}\n
                Result= you win`);
        }else if(computerAns === "rock" && playerAns === "scissor"){
            alert(`computer= ${computerAns}\n
                Player= ${playerAns}\n
                Result= Computer win`);
        }else if (computerAns === "paper" && playerAns === "scissor"){
            alert(`computer= ${computerAns}\n
                Player= ${playerAns}\n
                Result= you win`);
        }else if (computerAns === "paper" && playerAns === "rock"){
            alert(`computer= ${computerAns}\n
                Player= ${playerAns}\n
                Result= Computer win`);
        }
        round++;               
}

function start(){
    let ans;
    if(round === 1){
        ans = confirm("Hi Player, Shall we play Rock,Paper,Scissor");
    }else if(round > 1){
        ans = confirm(`Play Again?`);
    }
    if(ans === true){
        let playerAns = prompt(
            "Enter your Input [ R-Rock, S-Scissor, P-Paper ]");
        if(playerAns){
            playerAns = playerAns.toLowerCase();
            if(computerInput.includes(playerAns)){
                if(playerAns === "r"){
                    playerAns = "rock";
                }else if(playerAns === "s"){
                    playerAns = "scissor";
                }else if(playerAns === "p"){
                    playerAns = "paper";
                }
                player(playerAns);
            }else{
                alert(`it sees like it was wrong input please \n
                enter your answer from below details \n
                [ R-Rock, S-Scissor, P-Paper ]`);
                round++;
            }
        }else{
            restart = false;
            playerAns == "" ? alert(`You didn't enter anything`) : alert(`it looks like you changed you mind \n 
                may be next time`);
        }
    }else{
        restart = false;
        alert("Ok, Have a Great day");
    }
}

while(restart){
    start();
}