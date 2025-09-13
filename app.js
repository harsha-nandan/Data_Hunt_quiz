// Quiz Application Data and Logic
class DataHuntQuiz {
    constructor() {
        this.questions = [
            {"id": 1, "type": "data", "question": "Sales Data Analysis:\n\nProduct | Jan | Feb | Mar\n--------|-----|-----|----\nLaptops | 45  | 52  | 38\nPhones  | 67  | 43  | 58\nTablets | 23  | 34  | 41\nTV      | 18  | 29  | 25\n\nWhich product had the highest total sales?", "options": ["Phones (168)", "Laptops (135)", "Tablets (98)", "TV (72)"], "correct": 0},
            {"id": 2, "type": "data", "question": "Website Traffic (Emoji Bar Chart):\n\nMon: ████████ (400 visitors)\nTue: ████████████ (600 visitors)  \nWed: ██████ (300 visitors)\nThu: ████████████████ (800 visitors)\nFri: ██████████ (500 visitors)\n\nWhat was the median number of visitors?", "options": ["400", "500", "600", "450"], "correct": 1},
            {"id": 3, "type": "data", "question": "Budget Allocation (Text Pie Chart):\n\n🏠 Housing: 40% ████████████████████\n🍕 Food: 25% ████████████▌\n🚗 Transport: 20% ██████████\n💰 Other: 15% ███████▌\n\nWhat percentage is Housing + Transport?", "options": ["55%", "65%", "60%", "50%"], "correct": 2},
            {"id": 4, "type": "data", "question": "Employee Performance Scores:\n\nName    | Test1 | Test2 | Test3\n--------|-------|-------\nAlice   |  88   |  92   |  85\nBob     |  76   |  82   |  79\nCarol   |  94   |  87   |  91\nDave    |  81   |  85   |  83\n\nWho has an average score above 87?", "options": ["Alice (88.3)", "Bob (79.0)", "Carol (90.7)", "Dave (83.0)"], "correct": 3},
            {"id": 5, "type": "data", "question": "Temperature Trend (ASCII Line Graph):\n\nTemp °C\n 25 |     *\n 20 |   *   *\n 15 | *       *\n 10 |           *\n  5 |             *\n    +---------------\n     M T W T F S S\n\nOn which day did temperature drop the most?", "options": ["Thursday to Friday", "Friday to Saturday", "Saturday to Sunday", "Wednesday to Thursday"], "correct": 1},
            {"id": 6, "type": "logic", "question": "Snail Puzzle: A snail climbs 3 feet up a 10-foot wall during the day, then slides 2 feet down at night. How many days to reach the top?", "options": ["8 days", "10 days", "5 days", "7 days"], "correct": 0},
            {"id": 7, "type": "logic", "question": "Age Puzzle: Sarah is 3 times as old as her daughter. In 15 years, Sarah will be twice as old as her daughter. How old is Sarah now?", "options": ["30 years", "45 years", "36 years", "42 years"], "correct": 1},
            {"id": 8, "type": "logic", "question": "Number Sequence: Find the next number: 2, 6, 12, 20, 30, ?", "options": ["40", "44", "42", "38"], "correct": 2},
            {"id": 9, "type": "logic", "question": "Logic Grid: Amy, Ben, Cal have pets (cat, dog, bird) and shirts (red, blue, green). Amy doesn't have cat or red shirt. Ben has blue shirt. Cal has bird. Who has the dog?", "options": ["Amy", "Cal", "Cannot determine", "Ben"], "correct": 3},
            {"id": 10, "type": "logic", "question": "River Crossing: Farmer must cross river with fox, chicken, grain. Boat holds farmer + 1 item. Fox eats chicken, chicken eats grain if alone. What's the solution?", "options": ["Take chicken first", "Take fox first", "Take grain first", "Impossible"], "correct": 0},
            {"id": 11, "type": "math", "question": "Pizza Math: You eat 3/8 of a pizza, your friend eats 2/8. What fraction is left?", "options": ["2/8", "3/8", "1/8", "4/8"], "correct": 1},
            {"id": 12, "type": "math", "question": "Percentage Puzzle: What is 25% of 80% of 160?", "options": ["30", "35", "32", "28"], "correct": 2},
            {"id": 13, "type": "math", "question": "Time Calculation: If it's 2:45 PM and you wait 3 hours 37 minutes, what time will it be?", "options": ["6:12 PM", "6:32 PM", "5:22 PM", "6:22 PM"], "correct": 3},
            {"id": 14, "type": "math", "question": "Quick Division: 144 chocolates shared equally among 12 people. How many chocolates per person?", "options": ["12", "11", "10", "13"], "correct": 0},
            {"id": 15, "type": "math", "question": "Mental Math: Calculate (15 × 4) - (18 ÷ 3) + 8 = ?", "options": ["60", "62", "58", "64"], "correct": 1},
            {"id": 16, "type": "aptitude", "question": "Clock Angle: What angle do the clock hands make at 3:15?", "options": ["0°", "15°", "7.5°", "22.5°"], "correct": 2},
            {"id": 17, "type": "aptitude", "question": "Pattern: Circle, Square, Triangle, Circle, Square, ?, Circle", "options": ["Triangle", "Square", "Circle", "Pentagon"], "correct": 0},
            {"id": 18, "type": "aptitude", "question": "Venn Diagram: 50 students total. 30 like math, 25 like science, 10 like both. How many like neither?", "options": ["3", "7", "5", "10"], "correct": 2},
            {"id": 19, "type": "aptitude", "question": "Seating: 5 people A,B,C,D,E sit in row. A sits next to B. C doesn't sit at ends. D sits between C and E. Where is B?", "options": ["Position 2", "Position 4", "Position 5", "Position 1"], "correct": 3},
            {"id": 20, "type": "aptitude", "question": "Number Series: Find missing number: 5, 11, 23, 47, ?, 191", "options": ["91", "93", "97", "95"], "correct": 3}
        ];
        
        this.binaryCode = "10111011000110010101";
        this.shuffledQuestions = [];
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.timer = null;
        this.timeLeft = 90;
        
        // Wait for DOM to be ready before initializing
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }
    
    init() {
        this.initializeElements();
        this.setupEventListeners();
    }
    
    initializeElements() {
        // Screen elements
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.victoryScreen = document.getElementById('victory-screen');
        
        // Quiz elements
        this.binaryDisplay = document.getElementById('binary-display');
        this.currentQuestionSpan = document.getElementById('current-question');
        this.timerDisplay = document.getElementById('timer');
        this.questionText = document.getElementById('question-text');
        this.answerButtons = document.querySelectorAll('.answer-btn');
        this.feedback = document.getElementById('feedback');
        
        // Victory elements
        this.finalCode = document.getElementById('final-code');
        this.completionTime = document.getElementById('completion-time');
        
        // Buttons
        this.beginBtn = document.getElementById('begin-btn');
        this.playAgainBtn = document.getElementById('play-again-btn');
        
        console.log('Elements initialized:', {
            beginBtn: this.beginBtn,
            startScreen: this.startScreen,
            quizScreen: this.quizScreen
        });
    }
    
    setupEventListeners() {
        if (this.beginBtn) {
            this.beginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Begin button clicked');
                this.startQuiz();
            });
        }
        
        if (this.playAgainBtn) {
            this.playAgainBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.returnToStart();
            });
        }
        
        this.answerButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const selectedAnswer = parseInt(e.target.dataset.answer);
                this.handleAnswer(selectedAnswer);
            });
        });
    }
    
    // Fisher-Yates shuffle algorithm
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    startQuiz() {
        console.log('Starting quiz...');
        
        // Randomize questions
        this.shuffledQuestions = this.shuffleArray(this.questions);
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        
        // Reset binary display
        this.binaryDisplay.textContent = '[____________________]';
        
        // Switch to quiz screen
        this.switchScreen('quiz');
        
        // Start first question
        this.loadQuestion();
    }
    
    loadQuestion() {
        if (this.currentQuestionIndex >= this.shuffledQuestions.length) {
            this.showVictory();
            return;
        }
        
        const question = this.shuffledQuestions[this.currentQuestionIndex];
        
        // Update UI
        this.currentQuestionSpan.textContent = this.currentQuestionIndex + 1;
        this.questionText.textContent = question.question;
        
        // Update answer buttons
        this.answerButtons.forEach((btn, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C, D
            btn.textContent = `${letter}) ${question.options[index]}`;
            btn.disabled = false;
        });
        
        // Start timer
        this.startTimer();
    }
    
    startTimer() {
        this.timeLeft = 90;
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.handleTimeout();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        const timeString = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        this.timerDisplay.textContent = timeString;
        
        // Update timer styling based on time left
        this.timerDisplay.classList.remove('warning', 'danger');
        if (this.timeLeft <= 30) {
            this.timerDisplay.classList.add('danger');
        } else if (this.timeLeft <= 60) {
            this.timerDisplay.classList.add('warning');
        }
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    handleAnswer(selectedAnswer) {
        this.stopTimer();
        
        // Disable all answer buttons
        this.answerButtons.forEach(btn => btn.disabled = true);
        
        const currentQuestion = this.shuffledQuestions[this.currentQuestionIndex];
        
        if (selectedAnswer === currentQuestion.correct) {
            // Correct answer
            this.correctAnswers++;
            this.showFeedback('CORRECT - ACCESS GRANTED', 'success');
            this.updateBinaryCode();
            
            setTimeout(() => {
                this.currentQuestionIndex++;
                this.hideFeedback();
                this.loadQuestion();
            }, 2000);
        } else {
            // Wrong answer - NO CORRECT ANSWER REVEALED
            this.showFeedback('WRONG ANSWER - SYSTEM COMPROMISED', 'error');
            this.failQuiz();
        }
    }
    
    handleTimeout() {
        this.stopTimer();
        this.answerButtons.forEach(btn => btn.disabled = true);
        
        this.showFeedback('TIME OUT - ACCESS DENIED', 'error');
        this.failQuiz();
    }
    
    failQuiz() {
        setTimeout(() => {
            this.hideFeedback();
            this.returnToStart();
        }, 3000);
    }
    
    updateBinaryCode() {
        const currentCode = this.binaryCode.substring(0, this.correctAnswers);
        const remaining = '_'.repeat(20 - this.correctAnswers);
        this.binaryDisplay.textContent = `[${currentCode}${remaining}]`;
    }
    
    showFeedback(message, type) {
        this.feedback.textContent = message;
        this.feedback.className = `feedback ${type}`;
    }
    
    hideFeedback() {
        this.feedback.classList.add('hidden');
    }
    
    showVictory() {
        // Set completion time
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        };
        this.completionTime.textContent = now.toLocaleDateString('en-US', options);
        
        // Show final code
        this.finalCode.textContent = this.binaryCode;
        
        // Switch to victory screen
        this.switchScreen('victory');
    }
    
    returnToStart() {
        // Reset all state
        this.stopTimer();
        this.currentQuestionIndex = 0;
        this.correctAnswers = 0;
        this.shuffledQuestions = [];
        
        // Reset binary display
        if (this.binaryDisplay) {
            this.binaryDisplay.textContent = '[____________________]';
        }
        
        // Hide feedback
        this.hideFeedback();
        
        // Switch to start screen
        this.switchScreen('start');
    }
    
    switchScreen(screenName) {
        console.log('Switching to screen:', screenName);
        
        // Hide all screens
        const screens = [this.startScreen, this.quizScreen, this.victoryScreen];
        screens.forEach(screen => {
            if (screen) {
                screen.classList.remove('active');
            }
        });
        
        // Show target screen
        let targetScreen;
        switch(screenName) {
            case 'start':
                targetScreen = this.startScreen;
                break;
            case 'quiz':
                targetScreen = this.quizScreen;
                break;
            case 'victory':
                targetScreen = this.victoryScreen;
                break;
        }
        
        if (targetScreen) {
            targetScreen.classList.add('active');
            console.log('Switched to screen:', screenName);
        } else {
            console.error('Target screen not found:', screenName);
        }
    }
}

// Initialize the quiz application
let quizApp;
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing quiz...');
    quizApp = new DataHuntQuiz();
});