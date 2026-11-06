# 🧠 QuizzCompi – Test Your Knowledge

QuizzCompi is an interactive technical quiz web application where users can explore different technical categories, attempt quizzes, test their knowledge, and view their performance.

The project is built using HTML, CSS, Bootstrap, and JavaScript. It focuses on dynamic content generation, DOM manipulation, event handling, timers, and quiz logic.

---

## 📌 Project Overview

QuizzCompi provides a simple and interactive platform for practicing technical knowledge through quizzes.

Users can explore available quiz categories, select an active quiz, answer questions within a time limit, and view their final results with an answer review.

The project is developed as a practical learning project to understand how HTML, CSS, Bootstrap, and JavaScript work together in a real-world web application.

---

## ✨ Features

- **Dynamic Quiz Categories:** Quiz cards are generated dynamically using JavaScript.
- **Active & Coming Soon Categories:** Only active quizzes can be started.
- **Quiz Details:** Displays category information, total questions, and quiz duration.
- **Dynamic Questions:** Questions and options are generated dynamically.
- **Question Timer:** Each question has its own time limit.
- **Automatic Navigation:** Automatically moves to the next question when the timer expires.
- **Next & Back Navigation:** Navigate between quiz questions.
- **Answer Selection:** Select and store answers for individual questions.
- **Progress Bar:** Displays the current question progress.
- **Instant Results:** Calculates the final score and percentage.
- **Answer Review:** Displays selected answers and correct answers.
- **Restart Quiz:** Allows users to attempt the same quiz again.
- **Responsive Layout:** Uses Bootstrap grid and responsive utility classes.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of web pages |
| CSS3 | Styling and custom layouts |
| Bootstrap 5.3.8 | Responsive design and UI components |
| JavaScript | Quiz functionality and application logic |
| Remix Icon 4.9.0 | Icons used throughout the interface |
| Google Fonts / External Assets | Visual resources where used |

---

## 📁 Project Folder Structure

```text
QuizzCompi/
│
├── assets/
│   │
│   ├── css/
│   │   ├── quiz.css
│   │   └── style.css
│   │
│   ├── image/
│   │   └── quiz category images
│   │
│   ├── js/
│   │   ├── data.js
│   │   ├── quiz.js
│   │   └── script.js
│   │
│   └── pages/
│       └── quiz.html
│
└── index.html
```

### Folder & File Explanation

**1. `assets/`**

Contains the resources used throughout the project.

**2. `assets/css/`**

- `style.css` – Custom styling for the homepage.
- `quiz.css` – Custom styling for the quiz page, questions, and results.

**3. `assets/image/`**

Contains images used for quiz categories and other visual elements.

**4. `assets/js/`**

Contains all JavaScript files.

- `data.js` – Stores quiz category information and question data.
- `script.js` – Handles dynamic quiz category cards on the homepage.
- `quiz.js` – Handles quiz details, questions, timer, answer selection, scoring, and results.

**5. `assets/pages/`**

- `quiz.html` – Contains the quiz details, question interface, and result interface.

**6. `index.html`**

The main homepage where users can explore available quiz categories.

---

## ⚙️ How the Project Works

### 1. Homepage

The homepage displays the QuizzCompi landing page and available quiz categories.

The quiz category data is accessed from `data.js` and displayed dynamically using `forEach()` in `script.js`.

Each category displays:
- Category image
- Quiz title
- Description
- Total questions
- Duration
- Play or Coming Soon button

### 2. Dynamic Quiz Cards

JavaScript uses `forEach()` to iterate through the quiz data and generate HTML cards using template literals.

The `isActive` property determines whether a quiz can be started or displays a disabled Coming Soon button.

When the user clicks Play, the quiz ID is passed through the URL.

Example:

```javascript
./assets/pages/quiz.html?id=1
```

### 3. Quiz Details

The quiz page reads the quiz ID using `URLSearchParams`.

```javascript
const params = new URLSearchParams(window.location.search);
const quizID = Number(params.get("id"));
```

The selected quiz is identified by comparing its ID with the available quiz data.

If the quiz does not exist or is inactive, the user is redirected to the homepage.

The `showDetails()` function displays the selected quiz information dynamically.

### 4. Quiz Questions

When the user clicks Start Quiz:

- The quiz details section is hidden.
- The question section becomes visible.
- The first question is displayed.
- Options are generated dynamically using `createElement()`.
- Event listeners handle answer selection.

The selected answer is stored in an array using the current question index.

### 5. Question Timer

The project uses `setInterval()` to manage the countdown timer.

Each question has its own time limit.

The timer:
- Displays the remaining time in MM:SS format.
- Decreases every second.
- Automatically moves to the next question when time runs out.
- Submits the quiz when the last question's time expires.

### 6. Navigation & Progress

The quiz provides Next and Back buttons for question navigation.

A progress bar updates according to the current question number.

The Next button requires an answer selection before moving forward, while the timer can automatically advance the question.

### 7. Result Calculation

After completing the quiz, the application compares the selected answers with the correct answers.

It calculates:

- Total correct answers
- Incorrect/unanswered count
- Final score
- Score percentage

The result section displays the user's overall performance.

### 8. Answer Review

The Answer Review feature allows users to see:

- Each quiz question
- Their selected answer
- The correct answer

The review section can be shown or hidden using a toggle button.

### 9. Restart Quiz

The Try Again button resets the question index and selected answers, allowing the user to attempt the quiz again.

---

## 📚 JavaScript Concepts Learned

This project helped me understand and practice the following JavaScript concepts:

| Concept | How It Was Used |
|---|---|
| Variables | Store quiz data, answers, and current question information |
| Arrays | Store quiz questions, options, and selected answers |
| Objects | Access quiz categories and question properties |
| `for` Loop | Iterate through quiz questions and options |
| `forEach()` | Generate quiz category cards dynamically |
| Functions | Divide application logic into reusable functions |
| Arrow Functions | Write concise functions |
| Conditional Statements | Handle active quizzes, navigation, and result conditions |
| Template Literals | Generate dynamic HTML content |
| DOM Manipulation | Update HTML elements dynamically |
| `getElementById()` | Select HTML elements |
| `createElement()` | Create question option buttons |
| `append()` & `prepend()` | Insert elements dynamically |
| `addEventListener()` | Handle button clicks and user interactions |
| `classList` | Show, hide, and update UI sections |
| `innerHTML` & `textContent` | Display dynamic content |
| `setInterval()` | Implement the countdown timer |
| `clearInterval()` | Stop the timer |
| `URLSearchParams` | Read quiz IDs from URL parameters |
| `Math.floor()` & `%` | Calculate timer minutes and seconds |
| `String()` & `padStart()` | Format timer values |
| `filter()` | Count answered questions |
| `toFixed()` | Format the result percentage |
| `querySelector()` & `querySelectorAll()` | Select and update dynamic elements |

---

## 🧠 What I Learned From This Project

While developing QuizzCompi, I gained practical experience in:

- Connecting multiple HTML pages using relative paths.
- Organizing a project into separate folders and files.
- Separating quiz data from application logic.
- Generating dynamic HTML using JavaScript.
- Working with arrays of objects.
- Accessing and updating DOM elements.
- Handling user interactions with event listeners.
- Managing question navigation and selected answers.
- Implementing a countdown timer.
- Calculating quiz scores and percentages.
- Showing and hiding different application sections.
- Understanding how URL parameters can pass information between pages.
- Building a complete frontend application by combining multiple technologies.

This project improved my understanding of JavaScript and helped me apply theoretical concepts in a practical application.

---

## 🚀 How to Run the Project

Follow these steps to run QuizzCompi locally:

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Open the project folder**

```bash
cd QuizzCompi
```

**3. Open the project**

Open `index.html` in your browser or use the Live Server extension in Visual Studio Code.

**4. Explore the quizzes**

Select an active quiz category and click the Play button to start.

---

## 🔮 Future Improvements

Some features that can be added in future versions:

- User registration and login system.
- Store quiz history and scores.
- Leaderboard system.
- Difficulty levels (Easy, Medium, Hard).
- More quiz categories and questions.
- Backend integration and database storage.
- Detailed performance analytics.

---

## 👨‍💻 Author

Developed as a practical frontend development learning project.

**Project Name:** QuizzCompi

**Focus:** HTML, CSS, Bootstrap & JavaScript

---

⭐ If you find this project interesting, feel free to explore it and share your feedback!

**Learn • Practice • Improve**
