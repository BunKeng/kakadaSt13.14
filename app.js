


const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const OptionContainer = document.querySelector(".options-container");
// input the cicle
// const answerindicatorContainer = document.querySelector(".answer-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswer = 0;
let attempt = 0;
// let userName;
// let Grade;
// push the question into availableQuestions Array
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0 ; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
    // console.log(availableQuestions)
}

    

// set question number and question and options
function getNewQuestion(){
    questionNumber.innerHTML ="Question " + (questionCounter + 1 ) + " of " + quiz.length;

    // set question
    // get radom question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    // get the position of 'questionidex' from the available Question Array
    const index1= availableQuestions.indexOf(questionIndex);
    // remove the 'questionidex' from the available Question Array, so that the question does not
    availableQuestions.splice(index1,1);

    // set options 
    // get the length of Options
    // const optionLen = currentQuestion.options.length
    const optionLen = currentQuestion.Options.length
    for(let i=0; i<optionLen; i++){
        availableOptions.push(i)
    }
    OptionContainer.innerHTML = '';
    let animationDelay = 0.15;
    //create options in html
    for(let i=0;i<optionLen; i++){
        // random Option
        const optionIndex = availableOptions[Math.floor(Math.random()* availableOptions.length)];
        // get the position of 'optionIndex' from the availableOptins
        const index2 = availableOptions.indexOf(optionIndex);
        // remove the 'optionIndex' from the availableOptins , so that the option  does not repeat
        availableOptions.splice(index2,1);
        
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.Options[i];
        option.id = i;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        OptionContainer.appendChild(option)
        option.setAttribute("onclick","getResult(this)");

    }
    // console.log(availableOptions)
    questionCounter++
}
// get the result of current attempt question
function getResult(element){
    const id = parseInt(element.id);
    // get the answer by comparing the id of clicked option
    if (id === currentQuestion.answer){
        // set the green color to the correct Option or answer
        element.classList.add("correct");
        // add the indicator to correct mark

        // updateAnswerIndicator("correct");
        correctAnswer++;
        // console.log("correct:"+correctAnswer)
    }
    else{
        // set the green color to the incorrect Option or answer
        element.classList.add("wrong");
        // add the indicator to wrong mark

        // updateAnswerIndicator("wrong");

        // if the answer is incorrect the show the correct option by addind green color the correct the correct option
        const optionLen = OptionContainer.children.length;
        for(let i=0; i<optionLen; i++){
            if(parseInt(OptionContainer.children[i].id) === currentQuestion.answer){
                OptionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();
}
// make all the options unclickable once the user select a option 
function unclickableOptions(){
    const optionLen = OptionContainer.children.length;
    for(let i=0 ; i<optionLen ; i++){
        OptionContainer.children[i].classList.add("already-answered");
    }
}
function next(){
    if(questionCounter === quiz.length){
        // console.log("quiz over");
        quizOver();
    }
    else{
        getNewQuestion();
    }
}
function quizOver(){
    // hide quiz quizbox
    quizBox.classList.add("hide");
    // show result box
    resultBox.classList.remove("hide");
    quizResult();
}
// get the quiz Result
function quizResult(){
    resultBox.querySelector(".total-question").innerHTML = quiz.length;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswer;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswer;
    const Percentage = (correctAnswer/quiz.length)*100;
    resultBox.querySelector(".total-Percentage").innerHTML = Percentage.toFixed() + "%";
    resultBox.querySelector(".total-Grade").innerHTML = Grade;
    Grade = Percentage
    if ( Percentage >= 90){
        document.getElementById("Grade").innerHTML="A";
    }
    else if ( Grade >= 80)
    {
        document.getElementById("Grade").innerHTML="B";
    }
    else if ( Grade >= 70)
    {
        document.getElementById("Grade").innerHTML="C";
    }
    else if ( Grade >= 60)
    {
        document.getElementById("Grade").innerHTML="D";
    }
    else{
            document.getElementById("Grade").innerHTML="E";
    }
    resultBox.querySelector(".total-Score").innerHTML = correctAnswer +" / " + quiz.length;
    
    // document.getElementById('Username').innerHTML = 'username';
    // document.getElementById('Group').innerHTML = 'group';
}
function resetQuiz(){
    questionCounter = 0;
    correctAnswer = 0;
    attempt = 0;
}
function gotohome(){
    //hide result Box
    resultBox.classList.add("hide");
    // show home box
    homeBox.classList.remove("hide");
}
function tryAgainQuiz(){
    
    //hide the resultBox
    resultBox.classList.add("hide");
    // show the quizBox
    quizBox.classList.remove("hide");
    resetQuiz();
    StartQuiz();
}
function StartQuiz(){
    var username = document.getElementById("username").value;
    var group = document.getElementById("group").value;
    console.log(username);
    console.log(group);
    // hide home box
    homeBox.classList.add("hide");
    // show quiz box
    quizBox.classList.remove("hide");
    // first we will set all questions in availableQuestions Array
    setAvailableQuestions();
    // second we will call getNewQuestion(); function
    getNewQuestion();
}
window.onload = function()
{
    homeBox.querySelector(".total-question").innerHTML = quiz.length;
}