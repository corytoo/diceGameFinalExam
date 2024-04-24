function updateDate(){
    const d = new Date();
    let month = d.getUTCDate();
    let day = d.getUTCDay();
    let year = d.getUTCFullYear();
    let hours = d.getHours();
    let minutes = d.getUTCMinutes();

    if(minutes<10){
        minutes = "0"+minutes;
    }
    if(hours < 10){
        hours = "0"+hours;
    }

    document.getElementById("day").innerHTML = day+"/"+month+"/"+year+" at "+hours+':'+minutes;
}
window.setInterval(updateDate(), 1000)


function rollDice(){
    let d1 = Math.floor(Math.random()*6)
    let d2 = Math.floor(Math.random()*6)

    let diceSum = (d1+1)+(d2+1);

    document.getElementById("total").innerHTML = diceSum;

    diceNum = ["dice-1.svg" , "dice-2.svg", "dice-3.svg", "dice-4.svg", "dice-5.svg", "dice-6.svg"]

    const d1Img = document.getElementById("dice1")
    const d2Img = document.getElementById("dice2")

    d1Img.src = diceNum[d1]
    d2Img.src = diceNum[d2]

    if(diceSum <= 8){
        document.getElementById('win').innerHTML = "You didn't win: Try Again!"
    }
    else{
        document.getElementById('win').innerHTML = "You win: Try Again!"
    }
}