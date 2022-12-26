
    let num1 =getrandomnumber();
    let num2 = getrandomnumber();
    let cards = [num1, num2];
    let sum =num1 + num2;
    let hasBlackJack = false;
    let isAlive = true;
    let message = "";
    let messageEl = document.getElementById("message_el");
    let sumEl = document.querySelector("#sum_el");
    let cardEl = document.querySelector("#cards_el");
    let player= {
        name:"Fatima",
        cheps :200
    }
    let playerEl = document.getElementById("player_el");
    playerEl.textContent = player.name + ":$ "+ player.cheps;
    function getrandomnumber(){
        let randomNumber=  Math.floor(Math.random() * 13 ) +1;
        if(randomNumber > 10){
            return 10
        }
        else if(randomNumber ===1) {
            return 11;
        }
        return randomNumber;
    }


    function startgame(){
        rendergame();
    }

    function rendergame(){
        cardEl.textContent = "cards: "
        for (let i=0; i<cards.length ; i++){
        cardEl.textContent  += cards[i] +"  ";
        }
        sumEl.textContent = "sum: " + sum;
        if(sum <=20){
            message ="Do you want to draw a cart?";
        }
        else if(sum === 21){
            message="Wohoo! you are the winer:";
            hasBlackJack = true;
        }
        else {
            message = "you are out of the game :(";
            isAlive = false;
        }
        messageEl.textContent = message;
    
}
function newgame(){
    if(isAlive==true && hasBlackJack==false){
        let card = getrandomnumber();
        sum += card;
        cards.push(card);
        rendergame();
    }
}