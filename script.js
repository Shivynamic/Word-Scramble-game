const msg = document.querySelector('.msg');
const guess= document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords="";
let randWords="";
let sWords = [
"United States","Canada","Mexico","Brazil","Argentina","Colombia","Peru","Venezuela","Chile","Ecuador","Bolivia","Paraguay","Uruguay","South Africa","Nigeria",
"Egypt","Algeria","Morocco","Tanzania","Kenya","Angola","Python","Java","JavaScript","Ruby","PHP","Swift",
"Kotlin","Rust","Dart","Perl","MATLAB","SQL","Prolog","Haskell","Scheme"   ]

for(k=0;k<sWords.length;k++){
    sWords[k] = sWords[k].toLowerCase();
}





const createNewWords= () =>{
    let ranNum = Math.floor(Math.random()* sWords.length);

    let newTempSwords = sWords[ranNum];
    return newTempSwords;
}

const scrambleWords = (arr)=>{
    for(let i = arr.length-1;i>0;i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1))
        arr[i]= arr[j];
        arr[j]= temp;

    }
    return arr;
}


btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML ="Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess the Word: ${randWords}`;

    }
    else{
        let tempWord = guess.value;
        if(tempWord==newWords){
            play = false;
            msg.innerHTML= `Awesome! It's Correct. It is ${newWords}`;
            btn.innerHTML= "Start Again";
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else{
            msg.innerHTML= `Oops! That's  Incorrect. Please try again: ${randWords}`;

        }
    }
})