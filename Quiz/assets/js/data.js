const quizData = [
    {
        id: 1,
        title: "HTML Quiz",
        category: "HTML",
        description: "Test your knowledge of HTML tags, elements, forms, tables, and semantic structure. Learn how HTML builds the foundation of every website and improve your web development skills.",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        totalQuestions: 10,
        duration: 300,
        isActive: true,
        questions: [
            {
                id: 1,
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Main Language", "Home Tool Markup Language"],
                answer: 0,
                correctAnswer: "Hyper Text Markup Language",
                timeLimit: 30
            },
            {
                id: 2,
                question: "Which tag creates the largest heading?",
                options: ["<h6>", "<h1>", "<head>", "<header>"],
                answer: 1,
                correctAnswer: "<h1>",
                timeLimit: 30
            },
            {
                id: 3,
                question: "Which tag creates a hyperlink?",
                options: ["<link>", "<href>", "<a>", "<url>"],
                answer: 2,
                correctAnswer: "<a>",
                timeLimit: 30
            },
            {
                id: 4,
                question: "Which tag displays an image?",
                options: ["<image>", "<img>", "<src>", "<picture-src>"],
                answer: 1,
                correctAnswer: "<img>",
                timeLimit: 30
            },
            {
                id: 5,
                question: "Which tag creates a paragraph?",
                options: ["<p>", "<para>", "<text>", "<pg>"],
                answer: 0,
                correctAnswer: "<p>",
                timeLimit: 30
            },
            {
                id: 6,
                question: "Which attribute specifies an image path?",
                options: ["href", "alt", "src", "path"],
                answer: 2,
                correctAnswer: "src",
                timeLimit: 30
            },
            {
                id: 7,
                question: "Which tag creates an unordered list?",
                options: ["<ol>", "<li>", "<dl>", "<ul>"],
                answer: 3,
                correctAnswer: "<ul>",
                timeLimit: 30
            },
            {
                id: 8,
                question: "Which tag creates a table row?",
                options: ["<td>", "<tr>", "<th>", "<table-row>"],
                answer: 1,
                correctAnswer: "<tr>",
                timeLimit: 30
            },
            {
                id: 9,
                question: "Which attribute provides alternative text for an image?",
                options: ["title", "src", "alt", "name"],
                answer: 2,
                correctAnswer: "alt",
                timeLimit: 30
            },
            {
                id: 10,
                question: "Which tag represents the main content of a webpage?",
                options: ["<main>", "<meta>", "<style>", "<footer>"],
                answer: 0,
                correctAnswer: "<main>",
                timeLimit: 30
            }
        ]
    },

    {
        id: 2,
        title: "CSS Quiz",
        category: "CSS",
        description: "Challenge yourself with CSS selectors, properties, Flexbox, Grid, and responsive design. Test how well you can style web pages and create attractive user interfaces.",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
        totalQuestions: 10,
        duration: 300,
        isActive: true,
        questions: [
            {
                id: 1,
                question: "What does CSS stand for?",
                options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative System Styling", "Colorful Style Syntax"],
                answer: 1,
                correctAnswer: "Cascading Style Sheets",
                timeLimit: 30
            },
            {
                id: 2,
                question: "Which property changes text color?",
                options: ["font-color", "background", "color", "text-style"],
                answer: 2,
                correctAnswer: "color",
                timeLimit: 30
            },
            {
                id: 3,
                question: "Which selector targets an element with id='header'?",
                options: [".header", "#header", "header#", "*header"],
                answer: 1,
                correctAnswer: "#header",
                timeLimit: 30
            },
            {
                id: 4,
                question: "Which property changes the background color?",
                options: ["background-color", "text-color", "bg-color", "background-text"],
                answer: 0,
                correctAnswer: "background-color",
                timeLimit: 30
            },
            {
                id: 5,
                question: "Which property controls text size?",
                options: ["text-size", "font-style", "font-size", "size"],
                answer: 2,
                correctAnswer: "font-size",
                timeLimit: 30
            },
            {
                id: 6,
                question: "Which layout system is designed for one-dimensional layouts?",
                options: ["CSS Grid", "Flexbox", "Float", "Table"],
                answer: 1,
                correctAnswer: "Flexbox",
                timeLimit: 30
            },
            {
                id: 7,
                question: "Which property adds space inside an element's border?",
                options: ["margin", "outline", "padding", "width"],
                answer: 2,
                correctAnswer: "padding",
                timeLimit: 30
            },
            {
                id: 8,
                question: "Which property adds space outside an element's border?",
                options: ["padding", "margin", "border", "height"],
                answer: 1,
                correctAnswer: "margin",
                timeLimit: 30
            },
            {
                id: 9,
                question: "Which rule is used for responsive styles?",
                options: ["@media", "@screen", "@responsive", "@device"],
                answer: 0,
                correctAnswer: "@media",
                timeLimit: 30
            },
            {
                id: 10,
                question: "Which property rounds an element's corners?",
                options: ["corner-style", "border-radius", "border-round", "radius-style"],
                answer: 1,
                correctAnswer: "border-radius",
                timeLimit: 30
            }
        ]
    },

    {
        id: 3,
        title: "JavaScript Quiz",
        category: "JavaScript",
        description: "Explore JavaScript variables, data types, functions, loops, arrays, and DOM manipulation. Test your programming logic and strengthen your skills in making websites interactive.",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
        totalQuestions: 10,
        duration: 300,
        isActive: true,
        questions: [
            {
                id: 1,
                question: "Which keyword declares a block-scoped variable that can be reassigned?",
                options: ["const", "let", "fixed", "static"],
                answer: 1,
                correctAnswer: "let",
                timeLimit: 30
            },
            {
                id: 2,
                question: "Which operator checks strict equality?",
                options: ["=", "==", "===", "!="],
                answer: 2,
                correctAnswer: "===",
                timeLimit: 30
            },
            {
                id: 3,
                question: "Which method prints a message to the browser console?",
                options: ["console.log()", "print.console()", "document.log()", "echo()"],
                answer: 0,
                correctAnswer: "console.log()",
                timeLimit: 30
            },
            {
                id: 4,
                question: "Which data type represents true or false?",
                options: ["String", "Number", "Boolean", "Array"],
                answer: 2,
                correctAnswer: "Boolean",
                timeLimit: 30
            },
            {
                id: 5,
                question: "Which symbol starts a single-line JavaScript comment?",
                options: ["<!--", "//", "**", "##"],
                answer: 1,
                correctAnswer: "//",
                timeLimit: 30
            },
            {
                id: 6,
                question: "Which array method adds an element to the end?",
                options: ["pop()", "shift()", "push()", "slice()"],
                answer: 2,
                correctAnswer: "push()",
                timeLimit: 30
            },
            {
                id: 7,
                question: "Which keyword is used to declare a function?",
                options: ["method", "function", "func", "define"],
                answer: 1,
                correctAnswer: "function",
                timeLimit: 30
            },
            {
                id: 8,
                question: "Which loop repeats while its condition is true?",
                options: ["if", "switch", "while", "break"],
                answer: 2,
                correctAnswer: "while",
                timeLimit: 30
            },
            {
                id: 9,
                question: "Which method selects an HTML element by its ID?",
                options: ["document.getElementById()", "document.getClass()", "window.getId()", "document.selectId()"],
                answer: 0,
                correctAnswer: "document.getElementById()",
                timeLimit: 30
            },
            {
                id: 10,
                question: 'What does typeof "Hello" return?',
                options: ["number", "boolean", "object", "string"],
                answer: 3,
                correctAnswer: "string",
                timeLimit: 30
            }
        ]
    },

    {
        id: 4,
        title: "Bootstrap Quiz",
        category: "Bootstrap",
        description: "Test your knowledge of Bootstrap's grid system, responsive utilities, components, and styling classes. Discover how well you can build responsive and mobile-friendly websites faster.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        totalQuestions: 10,
        duration: 300,
        isActive: false,
        questions: [
            {
                id: 1,
                question: "What is Bootstrap primarily used for?",
                options: ["Database management", "Building responsive websites", "Writing SQL queries", "Creating operating systems"],
                answer: 1,
                correctAnswer: "Building responsive websites",
                timeLimit: 30
            },
            {
                id: 2,
                question: "Which class creates a responsive fixed-width container?",
                options: [".container", ".row", ".col", ".wrapper"],
                answer: 0,
                correctAnswer: ".container",
                timeLimit: 30
            },
            {
                id: 3,
                question: "Which class creates a full-width container?",
                options: [".container", ".container-fluid", ".container-full", ".row-fluid"],
                answer: 1,
                correctAnswer: ".container-fluid",
                timeLimit: 30
            },
            {
                id: 4,
                question: "Which class creates a Bootstrap row?",
                options: [".grid", ".column", ".row", ".flex"],
                answer: 2,
                correctAnswer: ".row",
                timeLimit: 30
            },
            {
                id: 5,
                question: "How many columns are in Bootstrap's standard grid?",
                options: ["8", "10", "12", "16"],
                answer: 2,
                correctAnswer: "12",
                timeLimit: 30
            },
            {
                id: 6,
                question: "Which class creates a primary button?",
                options: [".btn-main", ".btn-primary", ".button-blue", ".primary-button"],
                answer: 1,
                correctAnswer: ".btn-primary",
                timeLimit: 30
            },
            {
                id: 7,
                question: "Which class adds a green success color to text?",
                options: [".text-primary", ".text-danger", ".text-success", ".text-warning"],
                answer: 2,
                correctAnswer: ".text-success",
                timeLimit: 30
            },
            {
                id: 8,
                question: "Which class hides an element on all screen sizes?",
                options: [".hidden", ".d-none", ".invisible-only", ".hide-all"],
                answer: 1,
                correctAnswer: ".d-none",
                timeLimit: 30
            },
            {
                id: 9,
                question: "Which class makes a flex container?",
                options: [".d-flex", ".flex-container", ".display-flexbox", ".make-flex"],
                answer: 0,
                correctAnswer: ".d-flex",
                timeLimit: 30
            },
            {
                id: 10,
                question: "Which class adds padding on all sides?",
                options: [".m-3", ".p-3", ".g-3", ".gap-3"],
                answer: 1,
                correctAnswer: ".p-3",
                timeLimit: 30
            }
        ]
    },

    {
        id: 5,
        title: "SQL Quiz",
        category: "SQL",
        description: "Challenge your knowledge of SQL queries, database tables, filtering, sorting, and data manipulation. Learn how to retrieve, manage, and organize data using essential SQL commands.",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80",
        totalQuestions: 10,
        duration: 300,
        isActive: false,
        questions: [
            {
                id: 1,
                question: "What does SQL stand for?",
                options: ["Structured Query Language", "Simple Question Language", "System Query Logic", "Standard Quick Language"],
                answer: 0,
                correctAnswer: "Structured Query Language",
                timeLimit: 30
            },
            {
                id: 2,
                question: "Which command retrieves data from a table?",
                options: ["GET", "OPEN", "SELECT", "FETCH TABLE"],
                answer: 2,
                correctAnswer: "SELECT",
                timeLimit: 30
            },
            {
                id: 3,
                question: "Which command inserts new records into a table?",
                options: ["ADD", "INSERT INTO", "UPDATE", "CREATE ROW"],
                answer: 1,
                correctAnswer: "INSERT INTO",
                timeLimit: 30
            },
            {
                id: 4,
                question: "Which clause filters records based on a condition?",
                options: ["ORDER BY", "GROUP BY", "WHERE", "SELECT"],
                answer: 2,
                correctAnswer: "WHERE",
                timeLimit: 30
            },
            {
                id: 5,
                question: "Which command changes existing records?",
                options: ["ALTER", "UPDATE", "INSERT", "MODIFY TABLE"],
                answer: 1,
                correctAnswer: "UPDATE",
                timeLimit: 30
            },
            {
                id: 6,
                question: "Which command deletes selected records from a table?",
                options: ["REMOVE", "DROP", "DELETE", "CLEAR"],
                answer: 2,
                correctAnswer: "DELETE",
                timeLimit: 30
            },
            {
                id: 7,
                question: "Which key uniquely identifies a row in a table?",
                options: ["Foreign key", "Primary key", "Duplicate key", "Secondary column"],
                answer: 1,
                correctAnswer: "Primary key",
                timeLimit: 30
            },
            {
                id: 8,
                question: "Which clause sorts query results?",
                options: ["SORT", "GROUP BY", "ORDER BY", "ARRANGE"],
                answer: 2,
                correctAnswer: "ORDER BY",
                timeLimit: 30
            },
            {
                id: 9,
                question: "Which function counts rows in a query result?",
                options: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"],
                answer: 2,
                correctAnswer: "COUNT()",
                timeLimit: 30
            },
            {
                id: 10,
                question: "Which command creates a new table?",
                options: ["MAKE TABLE", "NEW TABLE", "INSERT TABLE", "CREATE TABLE"],
                answer: 3,
                correctAnswer: "CREATE TABLE",
                timeLimit: 30
            }
        ]
    }
];