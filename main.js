let randomNumberArray = [];
let amount = "owo"
let RightNumber = "owo"
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
                document.getElementById("SkillIcon").style.backgroundImage = "url(/img/colored/" + skillData[variableValue].icon + ")"
            }
        }
        if(i === 1){
            document.getElementById("SkillName" + i).innerText = "B: " + skillData[variableValue].name.en
            if(i === RightNumber){
                document.getElementById("SkillIcon").style.backgroundImage = "url(/img/colored/" + skillData[variableValue].icon + ")"
            }
        }
        if(i === 2){
            document.getElementById("SkillName" + i).innerText = "C: " + skillData[variableValue].name.en
            if(i === RightNumber){
                document.getElementById("SkillIcon").style.backgroundImage = "url(/img/colored/" + skillData[variableValue].icon + ")"
            }
        }
        if(i === 3){
            document.getElementById("SkillName" + i).innerText = "D: " + skillData[variableValue].name.en
            if(i === RightNumber){
                document.getElementById("SkillIcon").style.backgroundImage = "url(/img/colored/" + skillData[variableValue].icon + ")"
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
function getTriviaSkill(){
    amount = 4;
    getRandomNumber(amount);
    generateNumbers(amount);
}

function Answer(val){
    if(val != RightNumber){
        document.getElementById("SkillName" + val).style.backgroundColor = "#230000";
        console.log("Wrong")
    }
    else if(val == RightNumber){
        document.getElementById("SkillName" + val).style.backgroundColor = "#002300";
        console.log("Correct")
    }
}

