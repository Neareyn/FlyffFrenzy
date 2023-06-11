let randomNumberArray = [];
let amount = "owo"
let RightNumber = "owo"
let phase = 1;
let timerAmount = 510;
let isAllowed = true;
let isTimerAllowed = true;

function generateNumbers(amount){
    for (let i = 1; i <= amount; i++) {
        let variableName = "randomNumber" + (i - 1);
        let randomValue = Math.floor(Math.random() * skillData.length);
        randomNumberArray.push({ [variableName]: randomValue });
    }
    for (let i = 0; i < randomNumberArray.length; i++) {
        let variable = randomNumberArray[i];
        let variableName = Object.keys(variable)[0];
        let variableValue = variable[variableName];
        if(i === 0){
            document.getElementById("SkillName" + i).innerText = "A: " + skillData[variableValue].name.en
            if(i === RightNumber){
                document.getElementById("SkillIcon").style.backgroundImage = "url(FlyffFrenzy/img/colored/" + skillData[variableValue].icon + ")"
            }
        }
        if(i === 1){
            document.getElementById("SkillName" + i).innerText = "B: " + skillData[variableValue].name.en
            if(i === RightNumber){
                document.getElementById("SkillIcon").style.backgroundImage = "url(FlyffFrenzy/img/colored/" + skillData[variableValue].icon + ")"
            }
        }
        if(i === 2){
            document.getElementById("SkillName" + i).innerText = "C: " + skillData[variableValue].name.en
            if(i === RightNumber){
                document.getElementById("SkillIcon").style.backgroundImage = "url(FlyffFrenzy/img/colored/" + skillData[variableValue].icon + ")"
            }
        }
        if(i === 3){
            document.getElementById("SkillName" + i).innerText = "D: " + skillData[variableValue].name.en
            if(i === RightNumber){
                document.getElementById("SkillIcon").style.backgroundImage = "url(FlyffFrenzy/img/colored/" + skillData[variableValue].icon + ")"
            }
        }
        console.log(variableName + ": " + variableValue);
    }
    console.log(RightNumber)
}

function getRandomNumber(amount){
    RightNumber = Math.floor(Math.random() * amount);
}

getTriviaSkill()
async function getTriviaSkill(){
    randomNumberArray = [];
    amount = 4;
    getRandomNumber(amount);
    generateNumbers(amount);
    document.getElementById("Timer").style.backgroundColor = "green"
    startTimer();
}





let correctResults = 0;
let falseResults = 0;

function Answer(guess){
    if(isAllowed){
        if(guess != RightNumber){
            isTimerAllowed = false;
            isAllowed = false;
            document.getElementById("SkillName" + guess).style.backgroundColor = "#230000";
            document.getElementById("SkillName" + RightNumber).style.backgroundColor = "#002300";
            falseResults++;
            document.getElementById("falseResults").innerText = falseResults;
            console.log("Wrong")
            restartGame()
        }
        else if(guess == RightNumber){
            isTimerAllowed = false;
            isAllowed = false;
            document.getElementById("SkillName" + guess).style.backgroundColor = "#002300";
            correctResults++;
            document.getElementById("correctResults").innerText = correctResults;
            console.log("Correct")
            restartGame()
        }
    }
    
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function restartGame(){
    console.log("Game Done");
    await delay(1000);
    console.log("Restarting in:");
    await delay(1000);
    console.log("3...");
    await delay(1000);
    console.log("2...");
    await delay(1000);
    console.log("1...");
    await delay(1000);
    document.getElementById("SkillName" + 0).style.backgroundColor = "";
    document.getElementById("SkillName" + 1).style.backgroundColor = "";
    document.getElementById("SkillName" + 2).style.backgroundColor = "";
    document.getElementById("SkillName" + 3).style.backgroundColor = "";
    
    timerAmount = 510;
    isTimerAllowed = true;
    isAllowed = true;
    getTriviaSkill()
}

async function startTimer(){

    console.log("owo")

    
    for(let i = 0; i < 256; i++){
        if(!isTimerAllowed){
            break; 
        }
        document.getElementById("Timer").style.backgroundColor = "rgb(" + i + ", " + 255 + ", 0)"
        timerAmount--
        document.getElementById("Timer").style.width = 100/510*timerAmount + "%";
        console.log(1)
        console.log(isTimerAllowed)
        if(!isTimerAllowed){
            break; 
        }
        await delay(2);
        

    } 
    if(i = 255)
        for(let o = 255; o > -1; o--){
            if(!isTimerAllowed){
                break; 
            }
            document.getElementById("Timer").style.backgroundColor = "rgb(" + 255 + ", " + o + ", 0)"
            timerAmount--
            document.getElementById("Timer").style.width = 100/510*timerAmount + "%";
            console.log(2)
            console.log(isTimerAllowed)
            if(!isTimerAllowed){
                break; 
            }
            if(o < 1){
                isAllowed = false;
                console.log("end")
                isTimerAllowed = false;
                restartGame()
            }
            await delay(2); 
                
    } 
    
    
}

