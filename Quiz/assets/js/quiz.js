const quizDetails = document.getElementById("quiz-detail");
const quizQuestion = document.getElementById("quiz-question");
const quizResult = document.getElementById("quiz-result");

const params = new URLSearchParams(window.location.search);
const quizID = Number(params.get("id"));

let quiz = null;

for (let i = 0; i < quizData.length; i++) {
    if(quizData[i].id === quizID && quizData[i].isActive) {
        quiz = quizData[i];
    }
}
if(!quiz) {
    window.location.href = "index.html";
}

const $ = (element) => {
    return document.getElementById(element);
}

const reviewAnswers = $("reviewAnswers");

let currentIndex = 0;
let userAsnwer = [];
let secondLeft = 0;
let timeIntervel = null;


function showDetails() {

    $("quiz-image").src = quiz.image;
    $("quiz-category").textContent = quiz.category;
    $("quiz-title").textContent = quiz.title;
    $("quiz-discription").textContent = quiz.description;
    $("total-question").textContent = quiz.totalQuestions;
    $("quiz-duration").textContent = quiz.duration;
    
}

showDetails();

const selectAnswer = (i) => {
    userAsnwer[currentIndex] = i;
}

const startTimer = () => {
    clearInterval(timeIntervel);

    let minutes = Math.floor(secondLeft / 60);
    let seconds = secondLeft % 60;

    $("timer").textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    timeIntervel = setInterval(() => {
        if(secondLeft > 0) {
            secondLeft--;

            let minutes = Math.floor(secondLeft / 60);
            let seconds = secondLeft % 60;

            $("timer").textContent =
                `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
        } else {
            clearInterval(timeIntervel);

            autoNextQuestion();
        }
    }, 1000);
}


const showquestion = () => {
    $("questionCount").textContent = `Question ${currentIndex + 1} of ${quiz.questions.length}`;
    $("progressBar").style.width = `${((currentIndex + 1) / quiz.questions.length) * 100}%`;
    $("questionQuizTitle").textContent = quiz.title;
    $("questionText").textContent = quiz.questions[currentIndex].question;
    $("optionsContainer").innerHTML = "";

    clearInterval(timeIntervel);
    secondLeft = quiz.questions[currentIndex].timeLimit;
    startTimer();

    for(let i = 0; i < quiz.questions[currentIndex].options.length; i++) {
        let button = document.createElement("button");
        let optionSynbol = document.createElement("span");
        optionSynbol.classList = "opt-letter";
        button.classList = "opt-btn";
        optionSynbol.textContent = `${String.fromCharCode(65 + i)}`;
        button.textContent = `${quiz.questions[currentIndex].options[i]}`;
        button.prepend(optionSynbol);
        $("optionsContainer").append(button);

        if(userAsnwer[currentIndex] === i) {
            button.classList.add("selected");
        }

        button.addEventListener("click", ()=>{
            selectAnswer(i);
            document.querySelectorAll(".opt-btn").forEach((btn) => {
                btn.classList = btn === button ? "opt-btn selected" : "opt-btn";
            });
        })
    }

    updateButton();

}

const submitQuiz = () => {

    clearInterval(timeIntervel);

    let score = 0;

    for(let i = 0; i < quiz.questions.length; i++) {
        if(userAsnwer[i] === quiz.questions[i].answer) {
            score++;
        }
    }

    let total= quiz.questions.length;
    let percentage = (score / total) * 100;
    let skipped = total - userAsnwer.filter(answer => answer !== undefined).length;
    let worng = total - score;

    reviewAnswers.innerHTML = "";

    for(let i = 0; i < quiz.questions.length; i++) {

        let reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        let selected = userAsnwer[i];
        let correct = quiz.questions[i].answer;

        reviewCard.innerHTML = `
            <h5>Question ${i + 1}</h5>
            <p class="review-question"></p>

            <p>Your Answer :- <span class="your-answer"></span></p>

            <p>Correct Answer :- <span class="correct-answer"></span></p>
        `;

        reviewCard.querySelector(".review-question").textContent =
            quiz.questions[i].question;

        reviewCard.querySelector(".your-answer").textContent =
            selected === undefined
            ? "Not Answer"
            : quiz.questions[i].options[selected];

        reviewCard.querySelector(".correct-answer").textContent =
            quiz.questions[i].options[correct];

        reviewAnswers.append(reviewCard);

    }


    $("finalScore").textContent = `${score}/${total}`;
    $("scorePercentage").textContent = `${percentage.toFixed(0)}%`;
    $("correctCount").textContent = score;
    $("wrongCount").textContent = worng;
    // $("skippedCount").textContent = skipped;

    // Reset Answer Review
    $("answerReviewContent").classList.add("d-none");

    $("toggleReviewBtn").innerHTML =
        `<i class="ri-eye-line me-2"></i> View Answer Review`;

    $("quiz-question").classList.add("d-none");
    $("quiz-result").classList.remove("d-none");

}


const startQuiz = () => {
    $("quiz-detail").classList.add("d-none");
    $("quiz-question").classList.remove("d-none");

    showquestion();
}

const autoNextQuestion = () => {

    if (currentIndex < quiz.questions.length - 1) {
        currentIndex++;
        showquestion();
    } else {
        submitQuiz();
    }

}

const nextQuestion = () => {

    if (userAsnwer[currentIndex] === undefined) {
        alert("Please select an answer first!");
        return;
    }

    if (currentIndex < quiz.questions.length - 1) {
        currentIndex++;
        showquestion();
    }
}

const backButton = () => {
    if(currentIndex > 0) {
        currentIndex--;
        showquestion();
    }
}

const updateButton = () => {
    if(currentIndex === quiz.questions.length-1) {
        $("nextBtn").classList.add("d-none");
        $("submitQuiz").classList.remove("d-none");
    } else {
        $("nextBtn").classList.remove("d-none");
        $("submitQuiz").classList.add("d-none");
    }
}

const restartQuiz = () => {
    currentIndex = 0;
    userAsnwer = [];

    $("quiz-result").classList.add("d-none");
    $("quiz-question").classList.remove("d-none");

    showquestion();
}

// Start Button
$("start-quiz").addEventListener("click", startQuiz);

// Next Button
$("nextBtn").addEventListener("click", nextQuestion);

// Back Button
$("backBtn").addEventListener("click", backButton);

// Submit Button
$("submitQuiz").addEventListener("click", submitQuiz);

// Skip Button
// $("skipBtn").addEventListener("click", nextQuestion);

// Start Again Button
$("restartQuiz").addEventListener("click", restartQuiz);

$("toggleReviewBtn").addEventListener("click", () => {

    $("answerReviewContent").classList.toggle("d-none");

    if ($("answerReviewContent").classList.contains("d-none")) {
        $("toggleReviewBtn").innerHTML =
            `<i class="ri-eye-line me-2"></i> View Answer Review`;
    } else {
        $("toggleReviewBtn").innerHTML =
            `<i class="ri-eye-off-line me-2"></i> Hide Answer Review`;
    }

});