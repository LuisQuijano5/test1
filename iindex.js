let dice1, dice2, dice, adice=0;
const button=document.getElementById("tirar");
const button2=document.getElementById("segunda");
const win=document.getElementById("win");
const lose=document.getElementById("lose");
const d1=document.getElementById("1");
const d2=document.getElementById("2");
const d3=document.getElementById("3");
const d4=document.getElementById("4");
const d5=document.getElementById("5");
const d6=document.getElementById("6");
const cd1=document.getElementById("c1");
const cd2=document.getElementById("c2");
const cd3=document.getElementById("c3");
const cd4=document.getElementById("c4");
const cd5=document.getElementById("c5");
const cd6=document.getElementById("c6");
const win1=document.getElementById("win1");
const win2=document.getElementById("win2");
const lose1=document.getElementById("lose1");
const lose2=document.getElementById("lose2");



first();
next();


function first(){
    button.onclick = function(){
        dice1=Math.ceil((Math.random()*6));
        dice2=Math.ceil((Math.random()*6));
        appear();
        dice=dice1+dice2;
        adice=dice;
        console.log(dice1);
        button.style.display='none';
        if(dice==7 || dice==11){
            win.style.display='inline-block';
            win1.style.display='block';
            win2.style.display='block';
        }
        else if(dice==8 || dice==12){
            lose.style.display='inline-block';
            lose1.style.display='block';
            lose2.style.display='block';
        }
        else{
            button2.style.display='inline-block'
        }
    }
}

function next(){
    button2.onclick = function(){
        disappear();
        dice1=Math.ceil((Math.random()*6));
        dice2=Math.ceil((Math.random()*6));
        appear();
        dice=dice1+dice2;
        console.log(dice1);
        if(dice==7 || dice==11){
            lose.style.display='inline-block';
            button2.style.display='none';
            lose1.style.display='block';
            lose2.style.display='block';
        }
        else if(dice==adice){
            win.style.display='inline-block' 
            button2.style.display='none';
            win1.style.display='block';
            win2.style.display='block';
        }
    }
}


function appear(){
    switch(dice1){
        case 1: d1.style.display='inline-block';
                break;
        case 2: d2.style.display='inline-block';
                break;
        case 3: d3.style.display='inline-block';
                break;
        case 4: d4.style.display='inline-block';
                break;
        case 5: d5.style.display='inline-block';
                break;
        case 6: d6.style.display='inline-block';
                break;
    }

    switch(dice2){
        case 1: cd1.style.display='inline-block';
                break;
        case 2: cd2.style.display='inline-block';
                break;
        case 3: cd3.style.display='inline-block';
                break;
        case 4: cd4.style.display='inline-block';
                break;
        case 5: cd5.style.display='inline-block';
                break;
        case 6: cd6.style.display='inline-block';
                break;
    }
}

function disappear(){
    d1.style.display='none';
    d2.style.display='none';
    d3.style.display='none';
    d4.style.display='none';
    d5.style.display='none';
    d6.style.display='none';
    cd1.style.display='none';
    cd2.style.display='none';
    cd3.style.display='none';
    cd4.style.display='none';
    cd5.style.display='none';
    cd6.style.display='none';
}