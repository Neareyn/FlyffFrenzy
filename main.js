let randomNumberArray = [];
let amount = "owo"
let RightNumber = "owo"
let phase = 1;
let maxtimerAmount = 800;
let timerAmount = 800;
let isAllowed = true;
let isTimerAllowed = true;
let guessTime = 0;
let DeleteThis = 0;
let o = 0;

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
                document.getElementById("SkillIcon").style.backgroundImage = "url(./img/colored/" + skillData[variableValue].icon + ")"
                document.getElementById("ID").innerText = "ID: " + variableValue

            }
        }
        if(i === 1){
            document.getElementById("SkillName" + i).innerText = "B: " + skillData[variableValue].name.en
            if(i === RightNumber){
                document.getElementById("SkillIcon").style.backgroundImage = "url(./img/colored/" + skillData[variableValue].icon + ")"
                document.getElementById("ID").innerText = "ID: " + variableValue
            }
        }
        if(i === 2){
            document.getElementById("SkillName" + i).innerText = "C: " + skillData[variableValue].name.en
            if(i === RightNumber){
                document.getElementById("SkillIcon").style.backgroundImage = "url(./img/colored/" + skillData[variableValue].icon + ")"
                document.getElementById("ID").innerText = "ID: " + variableValue
            }
        }
        if(i === 3){
            document.getElementById("SkillName" + i).innerText = "D: " + skillData[variableValue].name.en
            if(i === RightNumber){
                document.getElementById("SkillIcon").style.backgroundImage = "url(./img/colored/" + skillData[variableValue].icon + ")"
                document.getElementById("ID").innerText = "ID: " + variableValue
            }
        }
        console.log(variableName + ": " + variableValue);
    }
    console.log(RightNumber)
}

function getRandomNumber(amount){
    RightNumber = Math.floor(Math.random() * amount);
}

function ShowHide(){
    document.getElementById("StartUp").style.display = "none";
    document.getElementById("gameWindow").style.display = "flex";
}

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
let missedResults = 0;

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
    await delay(700);
    console.log("Restarting in:");
    await delay(700);
    console.log("3...");
    await delay(700);
    console.log("2...");
    await delay(700);
    console.log("1...");
    await delay(700);
    document.getElementById("SkillName" + 0).style.backgroundColor = "";
    document.getElementById("SkillName" + 1).style.backgroundColor = "";
    document.getElementById("SkillName" + 2).style.backgroundColor = "";
    document.getElementById("SkillName" + 3).style.backgroundColor = "";
    
    timerAmount = 800;
    isTimerAllowed = true;
    isAllowed = true;
    getTriviaSkill()
}

async function startTimer(){
    for(let i = 0; i < 256; i++){
        if(!isTimerAllowed){
            break; 
        }
        document.getElementById("Timer").style.backgroundColor = "rgb(" + i + ", " + 255 + ", 0)"
        timerAmount--
        document.getElementById("Timer").style.width = 100/maxtimerAmount*timerAmount + "%";
        console.log(timerAmount)
        if(!isTimerAllowed){
            break; 
        }
        await delay(guessTime);
    } 
    if(i = 255)
        for(let o = 255; o > -1; o--){
            if(!isTimerAllowed){
                break; 
            }
            document.getElementById("Timer").style.backgroundColor = "rgb(" + 255 + ", " + o + ", 0)"
            timerAmount--
            document.getElementById("Timer").style.width = 100/maxtimerAmount*timerAmount + "%";
            console.log(o)
            if(!isTimerAllowed){
                break; 
            }
            await delay(guessTime);           
    }   
    if(o <= 0){
        for(let e = maxtimerAmount; e > -1; e--){
            if(!isTimerAllowed){
                break; 
            }
            timerAmount--
            document.getElementById("Timer").style.width = 100/maxtimerAmount*timerAmount + "%";
            console.log(timerAmount)
            if(!isTimerAllowed){
                break; 
            }
            if(timerAmount <= 0){
                missedResults++;
                document.getElementById("missedResults").innerText = missedResults;
                isAllowed = false;
                console.log("end")
                isTimerAllowed = false;
                restartGame()
            }
            await delay(guessTime);           
        }   
    }
}

