var bet = 5;
var money = 100;

function coinFlip(){
    let coin = document.getElementById("coin");
    if(money < 200){
        if(Math.random() > 0.5){
            coin.src = "img/tails.png";
            coin.alt = "tail";
            money += bet;
        }else{
            coin.src = "img/head.png";
            coin.alt = "heads";
            money -= bet;
        }
        initValues();
    }

    if(money >= 200){
        document.getElementById("win").innerHTML = "HAI VINTO";
    }
    if(money < 1){
        document.getElementById("win").innerHTML = "HAI PERSO";
    }

}

function initValues(){
    document.getElementById("money").innerHTML = money;
    document.getElementById("bet").innerHTML = bet;
}

function betMoney(num){
    bet = num;
    initValues();
}