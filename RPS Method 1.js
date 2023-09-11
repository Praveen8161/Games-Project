
let computerInput = ["rock","paper","scissor","r","p","s"];
let round = 1;
function start(){
    let ans;
    if(round === 1){
        ans = confirm("Hi Player, Shall we play Rock,Paper,Scissor");
    }else if(round > 1){
        ans = confirm(`Play Again`);
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

                let computerAns = computerInput[Math.floor(Math.random()*3)];
                console.log(computerAns);

                if (computerAns === playerAns){
                    alert(`computer= ${computerAns}
                    Player= ${playerAns}
                    Result= Tie`);
                }else if(computerAns === "rock" && playerAns === "paper"){
                    alert(`computer= ${computerAns}
                    Player= ${playerAns}
                    Result= you win`);
                }else if(computerAns === "rock" && playerAns === "scissor"){
                    alert(`computer= ${computerAns}
                    Player= ${playerAns}
                    Result= Computer win`);
                }else if (computerAns === "paper" && playerAns === "scissor"){
                    alert(`computer= ${computerAns}
                    Player= ${playerAns}
                    Result= you win`);
                }else if (computerAns === "paper" && playerAns === "rock"){
                    alert(`computer= ${computerAns}
                    Player= ${playerAns}
                    Result= Computer win`);
                }
                round++;
                start();
            }else{
                alert(`it sees like it was wrong input hit the refresh button and enter your answer from below details
                [ R-Rock, S-Scissor, P-Paper ]`);
            }
        }else{
            alert("you didn't enter anything if you want to play again click on refresh button");
        }
    }else{
        alert("Ok, Have a Great day");
    }
}

start();






