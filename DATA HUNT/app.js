// Quiz Application Logic
class QuizApp {
    constructor() {
        this.questions = [
            {"id": 1, "type": "data", "question": "Sales Data Analysis:\n\nProduct | Jan | Feb | Mar\n--------|-----|-----|----\nLaptops | 45  | 52  | 38\nPhones  | 67  | 43  | 58\nTablets | 23  | 34  | 41\nTV      | 18  | 29  | 25\n\nWhich product had the highest total sales?", "options": ["Laptops (135)", "Phones (168)", "Tablets (98)", "TV (72)"], "correct": 1},
            
            {"id": 2, "type": "data", "question": "Website Traffic (Emoji Bar Chart):\n\nMon: ████████ (400 visitors)\nTue: ████████████ (600 visitors)  \nWed: ██████ (300 visitors)\nThu: ████████████████ (800 visitors)\nFri: ██████████ (500 visitors)\n\nWhat was the median number of visitors?", "options": ["400", "500", "600", "450"], "correct": 1},
            
            {"id": 3, "type": "data", "question": "Budget Allocation (Text Pie Chart):\n\n🏠 Housing: 40% ████████████████████\n🍕 Food: 25% ████████████▌\n🚗 Transport: 20% ██████████\n💰 Other: 15% ███████▌\n\nWhat percentage is Housing + Transport?", "options": ["55%", "60%", "65%", "50%"], "correct": 1},
            
            {"id": 4, "type": "data", "question": "Employee Performance Scores:\n\nName    | Test1 | Test2 | Test3\n--------|-------|-------|-------\nAlice   |  88   |  92   |  85\nBob     |  76   |  82   |  79\nCarol   |  94   |  87   |  91\nDave    |  81   |  85   |  83\n\nWho has an average score above 87?", "options": ["Alice (88.3)", "Bob (79.0)", "Carol (90.7)", "Dave (83.0)"], "correct": 2},
            
            {"id": 5, "type": "data", "question": "Temperature Trend (ASCII Line Graph):\n\nTemp °C\n 25 |     *\n 20 |   *   *\n 15 | *       *\n 10 |           *\n  5 |             *\n    +---------------\n     M T W T F S S\n\nOn which day did temperature drop the most?", "options": ["Thursday to Friday", "Friday to Saturday", "Saturday to Sunday", "Wednesday to Thursday"], "correct": 2},
            
            {"id": 6, "type": "logic", "question": "Snail Puzzle: A snail climbs 3 feet up a 10-foot wall during the day, then slides 2 feet down at night. How many days to reach the top?", "options": ["8 days", "10 days", "5 days", "7 days"], "correct": 0},
            
            {"id": 7, "type": "logic", "question": "Age Puzzle: Sarah is 3 times as old as her daughter. In 15 years, Sarah will be twice as old as her daughter. How old is Sarah now?", "options": ["30 years", "45 years", "36 years", "42 years"], "correct": 1},
            
            {"id": 8, "type": "logic", "question": "Number Sequence: Find the next number: 2, 6, 12, 20, 30, ?", "options": ["40", "42", "44", "38"], "correct": 1},
            
            {"id": 9, "type": "logic", "question": "Logic Grid: Amy, Ben, Cal have pets (cat, dog, bird) and shirts (red, blue, green). Amy doesn't have cat or red shirt. Ben has blue shirt. Cal has bird. Who has the dog?", "options": ["Amy", "Ben", "Cal", "Cannot determine"], "correct": 1},
            
            {"id": 10, "type": "logic", "question": "River Crossing: Farmer must cross river with fox, chicken, grain. Boat holds farmer + 1 item. Fox eats chicken, chicken eats grain if alone. What's the solution?", "options": ["Take chicken first", "Take fox first", "Take grain first", "Impossible"], "correct": 0},
            
            {"id": 11, "type": "math", "question": "Pizza Math: You eat 3/8 of a pizza, your friend eats 2/8. What fraction is left?", "options": ["2/8", "3/8", "1/8", "4/8"], "correct": 1},
            
            {"id": 12, "type": "math", "question": "Percentage Puzzle: What is 25% of 80% of 160?", "options": ["30", "32", "35", "28"], "correct": 1},
            
            {"id": 13, "type": "math", "question": "Time Calculation: If it's 2:45 PM and you wait 3 hours 37 minutes, what time will it be?", "options": ["6:12 PM", "6:22 PM", "6:32 PM", "5:22 PM"], "correct": 1},
            
            {"id": 14, "type": "math", "question": "Quick Division: 144 chocolates shared equally among 12 people. How many chocolates per person?", "options": ["10", "11", "12", "13"], "correct": 2},
            
            {"id": 15, "type": "math", "question": "Mental Math: Calculate (15 × 4) - (18 ÷ 3) + 8 = ?", "options": ["60", "62", "58", "64"], "correct": 1},
            
            {"id": 16, "type": "aptitude", "question": "Clock Angle: What angle do the clock hands make at 3:15?", "options": ["0°", "7.5°", "15°", "22.5°"], "correct": 1},
            
            {"id": 17, "type": "aptitude", "question": "Pattern: Circle, Square, Triangle, Circle, Square, ?, Circle", "options": ["Triangle", "Square", "Circle", "Pentagon"], "correct": 0},
            
            {"id": 18, "type": "aptitude", "question": "Venn Diagram: 50 students total. 30 like math, 25 like science, 10 like both. How many like neither?", "options": ["3", "5", "7", "10"], "correct": 1},
            
            {"id": 19, "type": "aptitude", "question": "Seating: 5 people A,B,C,D,E sit in row. A sits next to B. C doesn't sit at ends. D sits between C and E. Where is B?", "options": ["Position 1", "Position 2", "Position 4", "Position 5"], "correct": 0},
            
            {"id": 20, "type": "aptitude", "question": "Number Series: Find missing number: 5, 11, 23, 47, ?, 191", "options": ["91", "93", "95", "97"], "correct": 2}
        ];
        
        this.targetBinaryCode = "10111011000110010101";
        this.currentQuestion = 0;
        this.timeLeft = 90;
        this.timerInterval = null;
        this.answersLocked = false;
        this.unlockedBits = "";
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }
    
    init() {
        console.log('Initializing DATA HUNT QuizApp...');
        this.initializeElements();
        this.bindEvents();
        this.showStartScreen();
        console.log('DATA HUNT QuizApp initialized successfully');
    }
    
    initializeElements() {
        // Screen elements
        this.startScreen = document.getElementById('startScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.victoryScreen = document.getElementById('victoryScreen');
        
        // Start screen elements
        this.beginQuizBtn = document.getElementById('beginQuizBtn');
        this.playAgainBtn = document.getElementById('playAgainBtn');
        
        // Quiz elements
        this.questionNumber = document.getElementById('questionNumber');
        this.timerElement = document.getElementById('timer');
        this.questionText = document.getElementById('questionText');
        this.answersContainer = document.getElementById('answersContainer');
        this.feedbackMessage = document.getElementById('feedbackMessage');
        
        // Binary elements
        this.binaryCodeElement = document.getElementById('binaryCode');
        this.binaryStatus = document.getElementById('binaryStatus');
        
        // Victory elements
        this.finalBinaryCode = document.getElementById('finalBinaryCode');
        this.completionTime = document.getElementById('completionTime');
        
        console.log('Elements initialized');
    }
    
    bindEvents() {
        if (this.beginQuizBtn) {
            this.beginQuizBtn.addEventListener('click', () => {
                console.log('Begin Quiz button clicked');
                this.startQuiz();
            });
        }
        
        if (this.playAgainBtn) {
            this.playAgainBtn.addEventListener('click', () => {
                console.log('Play Again button clicked');
                this.resetQuiz();
            });
        }
    }
    
    showStartScreen() {
        this.hideAllScreens();
        if (this.startScreen) {
            this.startScreen.classList.add('active');
        }
    }
    
    showQuizScreen() {
        this.hideAllScreens();
        if (this.quizScreen) {
            this.quizScreen.classList.add('active');
        }
    }
    
    showVictoryScreen() {
        this.hideAllScreens();
        if (this.victoryScreen) {
            this.victoryScreen.classList.add('active');
            this.displayVictoryInfo();
        }
    }
    
    hideAllScreens() {
        const screens = [this.startScreen, this.quizScreen, this.victoryScreen];
        screens.forEach(screen => {
            if (screen) screen.classList.remove('active');
        });
    }
    
    startQuiz() {
        console.log('Starting DATA HUNT quiz');
        this.currentQuestion = 0;
        this.unlockedBits = "";
        this.answersLocked = false;
        this.clearTimer();
        this.updateBinaryDisplay();
        this.showQuizScreen();
        
        setTimeout(() => {
            this.displayQuestion();
            this.startTimer();
        }, 100);
    }
    
    resetQuiz() {
        console.log('Resetting quiz');
        this.currentQuestion = 0;
        this.unlockedBits = "";
        this.answersLocked = false;
        this.clearTimer();
        this.updateBinaryDisplay();
        this.showStartScreen();
    }
    
    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        console.log(`Displaying question ${this.currentQuestion + 1}`);
        
        // Update question number and text
        if (this.questionNumber) this.questionNumber.textContent = this.currentQuestion + 1;
        if (this.questionText) this.questionText.textContent = question.question;
        
        // Update binary status
        if (this.binaryStatus) {
            if (this.currentQuestion === 0 && this.unlockedBits.length === 0) {
                this.binaryStatus.textContent = "LOCKED";
                this.binaryStatus.className = "";
            } else {
                this.binaryStatus.textContent = "UNLOCKING";
                this.binaryStatus.className = "unlocking";
            }
        }
        
        // Create answer buttons
        if (this.answersContainer) {
            this.answersContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'answer-btn';
                button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
                button.onclick = () => this.selectAnswer(index);
                this.answersContainer.appendChild(button);
            });
        }
        
        // Clear feedback
        if (this.feedbackMessage) {
            this.feedbackMessage.className = 'feedback-message';
            this.feedbackMessage.textContent = '';
        }
        
        this.answersLocked = false;
    }
    
    selectAnswer(selectedIndex) {
        if (this.answersLocked) {
            console.log('Answers locked, ignoring click');
            return;
        }
        
        console.log(`Selected answer ${selectedIndex} for question ${this.currentQuestion + 1}`);
        this.answersLocked = true;
        this.clearTimer();
        
        const question = this.questions[this.currentQuestion];
        const buttons = this.answersContainer.querySelectorAll('.answer-btn');
        
        // Disable all buttons
        buttons.forEach(btn => {
            btn.disabled = true;
            btn.style.pointerEvents = 'none';
        });
        
        const selectedButton = buttons[selectedIndex];
        const correctButton = buttons[question.correct];
        
        if (selectedIndex === question.correct) {
            // Correct answer
            console.log('Correct answer!');
            selectedButton.classList.add('correct');
            this.showFeedback('✓ Correct! Binary bit unlocked.', 'correct');
            
            // Add bit to binary code
            this.unlockedBits += this.targetBinaryCode[this.currentQuestion];
            this.updateBinaryDisplay();
            
            // Progress to next question or complete quiz
            setTimeout(() => {
                if (this.currentQuestion < this.questions.length - 1) {
                    this.currentQuestion++;
                    this.displayQuestion();
                    this.startTimer();
                } else {
                    this.completeQuiz();
                }
            }, 2000);
        } else {
            // Wrong answer
            console.log('Wrong answer - returning to start');
            selectedButton.classList.add('incorrect');
            correctButton.classList.add('correct');
            this.showFeedback('✗ WRONG ANSWER - SYSTEM COMPROMISED! Returning to start...', 'incorrect');
            
            setTimeout(() => {
                this.returnToStartAfterFailure();
            }, 3000);
        }
    }
    
    startTimer() {
        this.timeLeft = 90;
        this.updateTimerDisplay();
        this.clearTimer();
        
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.timeOut();
            }
        }, 1000);
    }
    
    clearTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
    
    updateTimerDisplay() {
        if (!this.timerElement) return;
        
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Update timer styling
        this.timerElement.className = 'timer';
        if (this.timeLeft <= 30) {
            this.timerElement.classList.add('danger');
        } else if (this.timeLeft <= 60) {
            this.timerElement.classList.add('warning');
        }
    }
    
    timeOut() {
        if (this.answersLocked) return;
        
        console.log('Time out!');
        this.answersLocked = true;
        this.clearTimer();
        
        // Show correct answer
        const question = this.questions[this.currentQuestion];
        const buttons = this.answersContainer.querySelectorAll('.answer-btn');
        
        buttons.forEach(btn => {
            btn.disabled = true;
            btn.style.pointerEvents = 'none';
        });
        
        if (buttons[question.correct]) {
            buttons[question.correct].classList.add('correct');
        }
        
        this.showFeedback('⏰ TIME OUT - ACCESS DENIED! Returning to start...', 'incorrect');
        
        setTimeout(() => {
            this.returnToStartAfterFailure();
        }, 3000);
    }
    
    returnToStartAfterFailure() {
        console.log('Returning to start after failure');
        this.unlockedBits = "";
        this.currentQuestion = 0;
        this.answersLocked = false;
        this.updateBinaryDisplay();
        this.showStartScreen();
    }
    
    showFeedback(message, type) {
        if (this.feedbackMessage) {
            this.feedbackMessage.textContent = message;
            this.feedbackMessage.className = `feedback-message ${type} show`;
        }
    }
    
    updateBinaryDisplay() {
        if (this.binaryCodeElement) {
            const display = this.unlockedBits.padEnd(20, '_');
            this.binaryCodeElement.textContent = display;
        }
        
        if (this.binaryStatus) {
            if (this.unlockedBits.length === 0) {
                this.binaryStatus.textContent = "LOCKED";
                this.binaryStatus.className = "";
            } else if (this.unlockedBits.length === 20) {
                this.binaryStatus.textContent = "UNLOCKED";
                this.binaryStatus.className = "unlocked";
            } else {
                this.binaryStatus.textContent = "UNLOCKING";
                this.binaryStatus.className = "unlocking";
            }
        }
    }
    
    completeQuiz() {
        console.log('Quiz completed!');
        this.clearTimer();
        
        if (this.binaryStatus) {
            this.binaryStatus.textContent = "UNLOCKED";
            this.binaryStatus.className = "unlocked";
        }
        
        this.showVictoryScreen();
    }
    
    displayVictoryInfo() {
        if (this.finalBinaryCode) {
            this.finalBinaryCode.textContent = this.targetBinaryCode;
        }
        
        if (this.completionTime) {
            const now = new Date();
            this.completionTime.textContent = now.toLocaleString();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM ready, initializing DATA HUNT...');
    const quizApp = new QuizApp();
    window.quizApp = quizApp; // For debugging
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && quizApp.startScreen?.classList.contains('active')) {
            e.preventDefault();
            quizApp.startQuiz();
        }
        
        if (e.code >= 'Digit1' && e.code <= 'Digit4' && quizApp.quizScreen?.classList.contains('active')) {
            const answerIndex = parseInt(e.code.slice(-1)) - 1;
            if (!quizApp.answersLocked) {
                quizApp.selectAnswer(answerIndex);
            }
        }
        
        if (e.code === 'Enter' && quizApp.victoryScreen?.classList.contains('active')) {
            quizApp.resetQuiz();
        }
    });
    
    console.log('%c[SYSTEM] DATA HUNT initialized successfully', 'color: #00ff00; font-family: monospace;');
});