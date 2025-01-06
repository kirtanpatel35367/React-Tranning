let questions = [
    {
        q: "Which of the following syntax correctly declares an Array?",
        options: ["int geeks", "array geeks[20]", "geeks{20}", "int geeks[20]"],
        ans: "int geeks[20]"
    },
    {
        q: "The size of the array should always be _____",
        options: ["Positive", "Negative", "whole Number", "Real Number"],
        ans: "Positive"
    },
    {
        q: "What is the correct way to initialize values in an array?",
        options: ["my_array [5] = (5,3,4,2,7)", "my_array [5] = {5;3;4;2;7}", "my_array [5] = {5,3,4,2,7,5,6,7,8}", "my_array [5] = {1,2,3,4,5}"],
        ans: "my_array [5] = {1,2,3,4,5}"
    },
    {
        q: "In an array int arr[3]={1,2,3}, what will happen if we try to access arr[4] in C/C++?",
        options: ["Run TIme error", "3", "0", "Garbage value"],
        ans: "Garbage value"
    },
    {
        q: "Which of these operators can be used to concatenate two or more String objects?",
        options: ["+", "+=", "&", "None of these"],
        ans: "+"
    },
    {
        q: "Which of these methods of class String is used to obtain the length of the String object?",
        options: ["get()", "Sizeof()", "lengthof()", "length()"],
        ans: "length()"
    },
]

let currentQuestion = 0;
let currentOption = 0;
let score = 0;
let flag = false; //To check Button is Click Programattically or Mannually

let questionBlock = document.getElementsByClassName('questionBlock')
let questionTitle = document.getElementById("questionTitle")
let optionA = document.getElementById('text_a')
let optionB = document.getElementById('text_b')
let optionC = document.getElementById('text_c')
let optionD = document.getElementById('text_d')
let answerElement = document.querySelectorAll('.answer')
let nextButton = document.getElementById('next_button')
let resultBox = document.getElementById('result')
let currentScore = document.getElementById('currentScore')
let questionNumber = document.getElementById('questionNumber')
let totalScore = document.getElementById('totalScore')
let reSet = document.getElementById("restart")
let time = document.getElementById("time")

//Timer Function
let startingTime = 5;

setInterval(countDown, 1000);
function countDown() {
    if (startingTime > -1) {
        time.textContent = startingTime;
        startingTime--;
    }
    else {
        flag = true
        nextButton.click()
        startingTime = 5;
    }
}




//For First Time When Start the Quiz
questionTitle.textContent = questions[currentQuestion].q
optionA.textContent = questions[currentQuestion].options[0]
optionB.textContent = questions[currentQuestion].options[1]
optionC.textContent = questions[currentQuestion].options[2]
optionD.textContent = questions[currentQuestion].options[3]

currentQuestion = 1; //For First Question


nextButton.addEventListener('click', () => {
    startingTime = 5;
    const checkAnswers = document.querySelector('input[type="radio"]:checked')
    if (checkAnswers || flag) {
        if (!flag) {
            if (checkAnswers.nextElementSibling.textContent === questions[currentOption].ans) {
                score++;
                checkAnswers.checked = false;
            }
        }
        currentOption++;


        if (currentQuestion < questions.length) {
            questionTitle.textContent = questions[currentQuestion].q
            optionA.textContent = questions[currentQuestion].options[0]
            optionB.textContent = questions[currentQuestion].options[1]
            optionC.textContent = questions[currentQuestion].options[2]
            optionD.textContent = questions[currentQuestion].options[3]
            questionNumber.textContent = currentQuestion + 1
            currentQuestion++;
            checkAnswers.checked = false;
        }
        else {
            totalScore.textContent = score
            questionBlock[0].style.display = "none"
            resultBox.style.display = "flex";
        }
        console.log(checkAnswers)
        flag = false;
    }
    else {
        alert("Please Select Answer First");
    }
})

reSet.addEventListener('click', () => {
    window.location.reload();
})




















