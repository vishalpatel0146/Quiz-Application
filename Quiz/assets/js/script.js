let quizList = document.getElementById("quiz-list");

quizData.forEach(function (quizData) {

    quizList.innerHTML += `
    
    <div class="col-12 col-md-6 col-lg-4">
        
            <div class="card w-100 h-100">

                <div class="col-12">
                    <img src="${quizData.image}" class="card-img-top quiz-image" alt="${quizData.title}">
                </div>

                <div class="card-body d-flex flex-column">

                    <h5 class="card-title" id="quiz-title">${quizData.title}</h5>
                    <p class="card-text" id="quiz-discription">${quizData.description}</p>

                    <div class="d-flex flex-wrap gap-3 mb-3">

                        <p class="card-text m-0" id="quiz-question">
                            <span class="bg-success px-2 py-1 rounded-3 text-white">${quizData.totalQuestions}
                        </span> &nbspQuestion</p>
                        <p class="card-text" id="quiz-duration">
                            <span class="bg-success px-2 py-1 rounded-3 text-white">${quizData.duration}
                        </span> &nbsp Duration</p>

                    </div>

                    <div class="mt-auto">
                        ${
                            quizData.isActive
                                ?`<button
                                    class="btn btn-primary" type="button" 
                                    onclick="window.location.href='./assets/pages/quiz.html?id=${quizData.id}'">Play
                                </button>`
                                :`<button
                                    class="btn btn-secondary" disabled
                                    >Comming soon
                                </button>`
                        }
                    </div>
                
                </div>

            </div>

    </div>

    `;

}) 