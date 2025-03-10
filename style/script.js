function greetUser() {
    const now = new Date().getHours();
    if (now > 0 && now < 12) {
        document.getElementById("greeting").innerText = "Good Morning!";
    } else if (now >= 12 && now < 17) {
        document.getElementById("greeting").innerText = "Good Afternoon!";
    } else {
        document.getElementById("greeting").innerText = "Good Evening!";
    }
}

// Quiz Questions
const quizQuestions = [
    {
        question: "Who is the coolest?",
        answers: [
            { text: "A. Me", correct: true },
            { text: "B. Billy Mays", correct: false },
            { text: "C. You", correct: false },
            { text: "D. Not Me", correct: false },
        ]
    },
    {
        question: "What shape is the earth?",
        answers: [
            { text: "A. Sphere", correct: false },
            { text: "B. Pizza Shaped", correct: false },
            { text: "C. Flat", correct: true },
            { text: "D. Corgi Shaped", correct: false },
        ]
    },
    {
        question: "What is my favorite color?",
        answers: [
            { text: "A. Blue", correct: false },
            { text: "B. Yellow", correct: false },
            { text: "C. Chartreuse", correct: false },
            { text: "D. Cerulean", correct: true },
        ]
    },
    {
        question: "What does Cerulean blue represent?",
        answers: [
            { text: "A. Millions of dollars", correct: false },
            { text: "B. Countless Jobs", correct: false },
            { text: "C. Your perceived choice in outfit", correct: false },
            { text: "D. All of the Above", correct: true },
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuiz() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answerButton");
    const nextButton = document.getElementById("next");

    answerButtons.innerHTML = "";
    nextButton.style.display = "none"; 

    const currentQ = quizQuestions[currentQuestionIndex]; 
    questionElement.innerText = currentQ.question;

    currentQ.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.onclick = () => checkAnswer(answer.correct); 
        answerButtons.appendChild(button);
    });
}

function checkAnswer(isCorrect) {
    alert(isCorrect ? "YUP!" : "NOPE!");
    if (isCorrect === true){
        score++;
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuiz();
    } else {
        document.getElementById("question").innerText = "Quiz Complete! Your score is: " + score + "/" + quizQuestions.length;
        document.getElementById("answerButton").innerHTML = "";
    }
}


const tasks = [];

function manageToList() {
    const itemInput = document.getElementById("taskIn");
    if (itemInput.value.trim() === "") return; 
    tasks.push(itemInput.value);
    itemInput.value = ""; 
    updateList();
}

function updateList() { 
   const toDoList = document.getElementById("2doList");
   toDoList.innerHTML = "";
   tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerText = task;
        toDoList.appendChild(li);
   });
}

function clearList() {
    tasks.length = 0; // ✅ Clears the array
    updateList();
}

document.getElementById("addTask").addEventListener("click", manageToList);
document.getElementById("clearList").addEventListener("click", clearList);

window.onload = function() {
    greetUser();
    showQuiz();
};
