const sets = ["She found it strange that people use their cellphones to actually talk to one another",
"His mind was blown that there was nothing in space except space itself",
 "They desperately needed another drummer since the current one only knew how to play bongos",
 
 "It was a slippery slope and he was willing to slide all the way to the deepest depths",
 "As the years pass by, we all know owners look more and more like their dogs",
 "Everyone says they love nature until they realize how dangerous she can be"
];
const msg = document.getElementById("msg");
const typewords = document.getElementById("mywords")
const btn = document.getElementById("btn")
let statTime ,endTime;
typewords.disabled = true;


const playGame = () => {
    let randomNumber = Math.floor(Math.random()*sets.length);
    // console.log(randomNumber)
    msg.innerText = sets[randomNumber]
    let date = new Date();
    statTime = date.getTime();
    btn.innerText = "Done" 
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-statTime)/1000);
    // console.log(totalTime)
    let totalStr = typewords.value;
    console.log(totalStr)
    let words = wordCounter(totalStr)
    console.log(words);
    let speed = Math.round((words /totalTime) * 60 )
    let final = "Your total speed is : " + speed + " WPM ";
    final += compare(msg.innerText , totalStr);
    msg.innerText = final
    
}

const wordCounter = (str) =>{
    if(str == null || str == ""){
        return 0;
    }
    let response =  str.split(" ").length;
   return response;
}

const compare =  (str1,str2) =>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function(item,index)  {
        if(item == words2[index]) {
            cnt++
        }
        
    });
    let accuracy = (cnt/words1.length)*100;
    return ("\n" +cnt + " correct out of " + words1.length + "\nYour accuracy rate : " + accuracy +"% " );

}

btn.addEventListener("click", function(){
    // console.log(this);
    if(this.innerText == 'Start'){
        // console.log("gg")
        typewords.disabled = false ;
        typewords.value = "";
        playGame();
    }
    else if (this.innerText == "Done"){
        typewords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})