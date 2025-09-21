// AI Office Trainer - Main Game Logic

class GameState {
    constructor() {
        this.currentScreen = 'phoneIntro';
        this.currentCustomer = 0;
        this.score = 0;
        this.attempt = 1;
        this.maxAttempts = 3;
        this.messagesShown = false;
        this.completedCustomers = [];
    }
}

let gameState = new GameState();

// Tutorial steps for flowing explanation
const tutorialSteps = [
    {
        text: "Hey there, intern! Let's learn about AI Temperature! 😸",
        subtitle: "Click anywhere to continue..."
    },
    {
        text: "AI Temperature controls how predictable or creative an AI's responses are. 🌡️",
        subtitle: "It's a number between 0 and 1 that changes how the AI picks its words."
    },
    {
        text: "Here's how it actually works: When AI generates text, it looks at all possible next words... 🤖",
        subtitle: "Each word has a probability of being chosen. Temperature changes these probabilities!"
    },
    {
        text: "LOW Temperature (0.1-0.3): AI always picks the MOST likely word ⬇️",
        subtitle: "Result: Very predictable, safe, sometimes robotic responses."
    },
    {
        text: "Example with LOW temp: 'Hello. I can help you with your request today.' 🤖",
        subtitle: "Professional, reliable, but maybe a bit boring!"
    },
    {
        text: "HIGH Temperature (0.8-1.0): AI might pick less likely, more creative words ⬆️",
        subtitle: "Result: More varied, creative, but sometimes weird responses."
    },
    {
        text: "Example with HIGH temp: 'Greetings, magnificent customer! Let's embark on this support adventure!' 🎨",
        subtitle: "Creative and fun, but maybe too much for some situations!"
    },
    {
        text: "But be careful! When temperature gets TOO high, AI can 'hallucinate' 👻",
        subtitle: "Hallucinations = when AI confidently states things that aren't true!"
    },
    {
        text: "Why do hallucinations happen? High temp makes AI take bigger risks with word choices... 🎲",
        subtitle: "Sometimes those risky choices lead to made-up facts or impossible claims!"
    },
    {
        text: "This is why CONTEXT matters so much! 🎯",
        subtitle: "A business email needs reliability (low temp). A creative story can handle higher temp."
    },
    {
        text: "Your job: Match the temperature to the situation! 💡",
        subtitle: "Stressed customer = low temp. Fun customer = higher temp. Emergency = very low temp!"
    },
    {
        text: "Ready to practice? You'll help real customers by choosing the perfect temperature! 🚀",
        subtitle: "Remember: Context is king, and reliability beats creativity for important stuff!"
    }
];

// Quiz questions for promotion
const quizQuestions = [
    {
        question: "What happens when AI temperature is set too HIGH (like 0.9-1.0)?",
        options: [
            "The AI becomes more helpful and accurate",
            "The AI might hallucinate or make up incorrect information", 
            "The AI works faster",
            "The AI becomes more professional"
        ],
        correct: 1,
        explanation: "High temperature makes AI more creative but also more likely to generate unreliable or made-up information (hallucinations)."
    },
    {
        question: "Why is CONTEXT important when choosing AI temperature?",
        options: [
            "It doesn't matter, any temperature works for everything",
            "Different situations need different levels of creativity vs reliability",
            "Context only affects how fast the AI responds", 
            "Higher context always means higher temperature"
        ],
        correct: 1,
        explanation: "Context is key! A business email needs reliability (low temp), while creative writing can use higher temperatures."
    },
    {
        question: "What's the BEST temperature range for helping stressed customers who need clear, professional help?",
        options: [
            "0.8-1.0 (Very creative and fun)",
            "0.1-0.3 (Direct and reliable)",
            "It doesn't matter",
            "Always use the highest temperature possible"
        ],
        correct: 1,
        explanation: "Stressed customers need clear, reliable help without confusing creativity - low temperature (0.1-0.3) works best."
    }
];

let currentTutorialStep = 0;
let currentQuizQuestion = 0;
let quizScore = 0;

// Messages for phone intro
const introMessages = [
    "Hey bud! Welcome to your first day at Cozy Corner Co! 😄",
    "We know how excited you must be to work in the EXTREMELY competitive furniture sales field",
    "I don't really know how you'll apply your PhD in Astro-Physics to this but I trust in you.",
    "Anyway, the executives bought this fancy AI to help with our efficiency",
    "I asked it 'What's your favorite type of music?'",
    "it said 'Heavy metal... desks'",
    "The AI thinks EVERYTHING is furniture related 🙄🙄🙄",
    "Customers are getting confused, so we need you to train it properly",
    "Good news though - nail this and you'll get promoted!",
    "Oh - make sure to meet the office cat!"
];

// Wait for GAME_DATA to be available
function waitForGameData() {
    if (typeof GAME_DATA === 'undefined') {
        console.log('Waiting for GAME_DATA to load...');
        setTimeout(waitForGameData, 100);
        return;
    }
    console.log('✅ GAME_DATA loaded successfully!');
    initializeGame();
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 AI Office Trainer Starting...');
    waitForGameData();
});

function initializeGame() {
    console.log('🎮 Initializing game...');
    setupEventListeners();
    showScreen('phoneIntro');
}

function setupEventListeners() {
    // Phone intro buttons
    const startMessagesBtn = document.getElementById('startMessagesBtn');
    const continueBtn = document.getElementById('continueToExplanationBtn');
    
    if (startMessagesBtn) {
        startMessagesBtn.addEventListener('click', startMessages);
    }
    
    if (continueBtn) {
        // Go to level selection first
        continueBtn.addEventListener('click', () => showScreen('levelSelection'));
    }
    
    // Start intern button
    const startInternBtn = document.getElementById('startInternBtn');
    if (startInternBtn) {
        startInternBtn.addEventListener('click', startInternLevel);
    }
    
    // Tutorial screen click handler
    const tutorialScreen = document.getElementById('temperatureTutorial');
    if (tutorialScreen) {
        tutorialScreen.addEventListener('click', advanceTutorial);
    }
    
    // Back button
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => showScreen('levelSelection'));
    }
    
    // Office cat hover and click
    const officeCat = document.getElementById('officeCat');
    if (officeCat) {
        officeCat.addEventListener('click', showHint);
    }
    
    // Temperature slider
    const tempSlider = document.getElementById('temperatureSlider');
    if (tempSlider) {
        tempSlider.addEventListener('input', updateTemperatureDisplay);
        tempSlider.addEventListener('input', showLivePreview);
    }
    
    // Submit button
    const submitBtn = document.getElementById('submitResponseBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', handleSubmit);
    }
    
    // Feedback modal button
    const nextCustomerBtn = document.getElementById('nextCustomerBtn');
    if (nextCustomerBtn) {
        nextCustomerBtn.addEventListener('click', nextCustomer);
    }
}

function showScreen(screenId) {
    console.log(`Switching to screen: ${screenId}`);
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        gameState.currentScreen = screenId;
        
        // Initialize screen-specific content
        if (screenId === 'gameLevel') {
            initializeGameLevel();
        } else if (screenId === 'temperatureTutorial') {
            initializeTutorial();
        }
    } else {
        console.error(`Screen not found: ${screenId}`);
    }
}

function initializeTutorial() {
    currentTutorialStep = 0;
    createProgressDots();
    updateTutorialStep();
}

function createProgressDots() {
    const progressContainer = document.querySelector('.progress-dots');
    if (!progressContainer) return;
    
    progressContainer.innerHTML = '';
    for (let i = 0; i < tutorialSteps.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i === 0) dot.classList.add('active');
        progressContainer.appendChild(dot);
    }
}

function updateTutorialStep() {
    const bubble = document.getElementById('tutorialBubble');
    const startBtn = document.getElementById('startInternBtn');
    
    if (!bubble || currentTutorialStep >= tutorialSteps.length) {
        // Tutorial complete, show start button
        if (startBtn) {
            startBtn.classList.remove('hidden');
            // Add celebration animation
            bubble.innerHTML = `
                <div class="tutorial-step">
                    <h2>Perfect! You're ready to train AI! 🎓</h2>
                    <p><em>Click the button below to start helping customers!</em></p>
                </div>
                <div class="tutorial-progress" id="tutorialProgress">
                    <div class="progress-dots">
                        ${Array.from({length: tutorialSteps.length}, (_, i) => 
                            `<div class="progress-dot active"></div>`
                        ).join('')}
                    </div>
                </div>
            `;
        }
        return;
    }
    
    const step = tutorialSteps[currentTutorialStep];
    
    // Update content with animation
    bubble.innerHTML = `
        <div class="tutorial-step" style="animation: fadeIn 0.5s ease-in;">
            <h2>${step.text}</h2>
            <p><em>${step.subtitle}</em></p>
        </div>
        <div class="tutorial-progress">
            <div class="progress-dots">
                ${Array.from({length: tutorialSteps.length}, (_, i) => 
                    `<div class="progress-dot ${i <= currentTutorialStep ? 'active' : ''}"></div>`
                ).join('')}
            </div>
        </div>
    `;
    
    // Add CSS for fade in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

function advanceTutorial(event) {
    // Don't advance if clicking the start button
    if (event.target.closest('#startInternBtn')) return;
    
    if (currentTutorialStep < tutorialSteps.length) {
        currentTutorialStep++;
        updateTutorialStep();
    }
}

function showLivePreview() {
    const tempSlider = document.getElementById('temperatureSlider');
    const aiResponse = document.getElementById('aiResponse');
    
    // Only run if we're in the game level and have valid data
    if (!tempSlider || !aiResponse || gameState.currentScreen !== 'gameLevel') return;
    if (!GAME_DATA || !GAME_DATA.customers || gameState.currentCustomer >= GAME_DATA.customers.length) return;
    
    const customer = GAME_DATA.customers[gameState.currentCustomer];
    if (!customer) return;
    
    const temperature = parseFloat(tempSlider.value);
    const response = getAIResponse(customer.id, temperature);
    
    aiResponse.textContent = response;
    
    // Add visual feedback about the temperature level
    const tempValue = document.getElementById('tempValue');
    if (tempValue) {
        let colorClass = '';
        if (temperature <= 0.3) colorClass = 'temp-cold';
        else if (temperature <= 0.7) colorClass = 'temp-perfect';
        else colorClass = 'temp-hot';
        
        tempValue.className = colorClass;
    }
}

// Add this debug version of the startMessages function
function startMessages() {
    console.log('🔥 startMessages() called!');
    console.log('gameState.messagesShown:', gameState.messagesShown);
    
    const chatMessages = document.getElementById('chatMessages');
    const startBtn = document.getElementById('startMessagesBtn');
    const continueBtn = document.getElementById('continueToExplanationBtn');
    
    console.log('Elements found:', {
        chatMessages: !!chatMessages,
        startBtn: !!startBtn, 
        continueBtn: !!continueBtn
    });
    
    if (gameState.messagesShown) {
        console.log('❌ Messages already shown, exiting');
        return;
    }
    
    console.log('✅ Starting message sequence...');
    gameState.messagesShown = true;
    startBtn.style.display = 'none';
    
    let messageIndex = 0;
    
    function showNextMessage() {
        console.log(`Showing message ${messageIndex + 1}/${introMessages.length}`);
        
        if (messageIndex < introMessages.length) {
            // Show typing indicator
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message typing received';
            typingDiv.innerHTML = `
                <div class="message-bubble">
                    <div class="typing-dots">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            `;
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            setTimeout(() => {
                // Remove typing indicator and add actual message
                typingDiv.remove();
                
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message received';
                messageDiv.innerHTML = `
                    <div class="message-bubble">
                        ${introMessages[messageIndex]}
                    </div>
                `;
                
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
                
                messageIndex++;
                
                if (messageIndex < introMessages.length) {
                    setTimeout(showNextMessage, 1500);
                } else {
                    // All messages shown, show continue button
                    console.log('✅ All messages shown, showing continue button');
                    setTimeout(() => {
                        continueBtn.classList.remove('hidden');
                    }, 1000);
                }
            }, 1500);
        }
    }
    
    showNextMessage();
}
function startLevel(levelNumber) {
    if (levelNumber === 1) {
        // Go to the AI concept explanation for this level (Temperature)
        showScreen('temperatureTutorial');
    }
}

function startInternLevel() {
    gameState.currentCustomer = 0;
    gameState.score = 0;
    gameState.attempt = 1;
    gameState.completedCustomers = [];
    showScreen('gameLevel');
}

function initializeGameLevel() {
    console.log('Initializing game level...');
    loadCurrentCustomer();
    updateScoreDisplay();
    resetCat();
    
    // Set initial temperature
    const tempSlider = document.getElementById('temperatureSlider');
    const tempValue = document.getElementById('tempValue');
    if (tempSlider && tempValue) {
        tempSlider.value = 0.7;
        tempValue.textContent = '0.7';
    }
}

function loadCurrentCustomer() {
    console.log('Loading customer...');
    
    // Check if GAME_DATA is available with retry mechanism
    if (!GAME_DATA || !GAME_DATA.customers) {
        console.error('GAME_DATA not loaded. Retrying in 500ms...');
        setTimeout(loadCurrentCustomer, 500);
        return;
    }
    
    const customer = GAME_DATA.customers[gameState.currentCustomer];
    if (!customer) {
        console.log('No more customers - completing level');
        completeLevel();
        return;
    }
    
    console.log(`Loading customer: ${customer.name}`);
    
    // Show initial hint
    setTimeout(() => {
        const hintBox = document.getElementById('catHintBox');
        const hintContent = document.getElementById('hintContent');
        if (hintBox && hintContent) {
            hintContent.textContent = "Psst! Click on me if you need a hint about this customer!";
            hintBox.classList.remove('hidden');
            
            // Hide after 3 seconds
            setTimeout(() => {
                hintBox.classList.add('hidden');
            }, 3000);
        }
    }, 1000);
    
    // Update customer info
    const customerName = document.getElementById('customerName');
    const customerType = document.getElementById('customerType');
    const customerAvatar = document.getElementById('customerAvatar');
    const customerMessageContent = document.getElementById('customerMessageContent');
    
    if (customerName) customerName.textContent = customer.name;
    if (customerType) customerType.textContent = customer.type;
    if (customerAvatar) customerAvatar.textContent = customer.avatar;
    if (customerMessageContent) customerMessageContent.textContent = customer.message;
    
    // Reset AI response
    const aiResponse = document.getElementById('aiResponse');
    if (aiResponse) {
        aiResponse.textContent = "Adjust the temperature and click 'Send Response' to see how I'll help this customer!";
    }
    
    // Reset attempt counter
    gameState.attempt = 1;
    
    // Update cat hint
    updateCatHint();
}

function updateTemperatureDisplay() {
    const tempSlider = document.getElementById('temperatureSlider');
    const tempValue = document.getElementById('tempValue');
    
    if (tempSlider && tempValue) {
        const temp = parseFloat(tempSlider.value);
        tempValue.textContent = temp.toFixed(1);
        
        // Update cat hint based on new temperature
        updateCatHint();
    }
}

function updateCatHint() {
    const tempSlider = document.getElementById('temperatureSlider');
    if (!tempSlider || gameState.currentScreen !== 'gameLevel') return;
    
    // Check if GAME_DATA exists and has customers
    if (!GAME_DATA || !GAME_DATA.customers) return;
    
    const customer = GAME_DATA.customers[gameState.currentCustomer];
    if (!customer) return;
    
    const temperature = parseFloat(tempSlider.value);
    const hint = getHint ? getHint(customer.id, temperature) : "Click me for a hint!";
    
    // Update the hint content (but don't show it unless cat is clicked)
    const hintContent = document.getElementById('hintContent');
    if (hintContent) {
        hintContent.textContent = hint;
    }
}



function showHint() {
    const catImage = document.getElementById('catImage');
    const hintBox = document.getElementById('catHintBox');
    
    if (catImage && hintBox) {
        // Change to awake cat
        catImage.src = 'assets/images/cats/office-cat-awake.png';
        catImage.style.filter = 'drop-shadow(0 0 15px rgba(255, 149, 0, 0.6))';
        
        // Show hint box
        hintBox.classList.remove('hidden');
        
        // Hide hint and reset cat after 4 seconds
        setTimeout(() => {
            hintBox.classList.add('hidden');
            catImage.src = 'assets/images/cats/office-cat-sleeping.png';
            catImage.style.filter = 'none';
        }, 4000);
    }
}

function resetCat() {
    const catImage = document.getElementById('catImage');
    const hintBox = document.getElementById('catHintBox');
    
    if (catImage) {
        catImage.src = 'assets/images/cats/office-cat-sleeping.png';
    }
    
    if (hintBox) {
        hintBox.classList.add('hidden');
    }
}

function handleSubmit() {
    const tempSlider = document.getElementById('temperatureSlider');
    if (!tempSlider) return;
    
    // Check if GAME_DATA is available
    if (!GAME_DATA || !GAME_DATA.customers) {
        console.error('GAME_DATA not loaded properly');
        return;
    }
    
    const customer = GAME_DATA.customers[gameState.currentCustomer];
    if (!customer) return;
    
    const temperature = parseFloat(tempSlider.value);
    
    // Get AI response
    const response = getAIResponse ? getAIResponse(customer.id, temperature) : "Response not available";
    const aiResponseElement = document.getElementById('aiResponse');
    if (aiResponseElement) {
        aiResponseElement.textContent = response;
    }
    
    // Calculate score
    const score = calculateScore ? calculateScore(customer.id, temperature, gameState.attempt) : 0;
    
    // Add to total score
    gameState.score += score;
    
    // Update score display
    updateScoreDisplay();
    
    // Show feedback modal
    showFeedbackModal(customer, temperature, score);
    
    // Increment attempt
    gameState.attempt++;
}

function updateScoreDisplay() {
    const scoreElement = document.getElementById('currentScore');
    const progressBar = document.getElementById('progressBar');
    
    if (scoreElement) {
        scoreElement.textContent = gameState.score;
    }
    
    if (progressBar) {
        const percentage = Math.min((gameState.score / 100) * 100, 100);
        progressBar.style.width = percentage + '%';
    }
}

function showFeedbackModal(customer, temperature, score) {
    const modal = document.getElementById('feedbackModal');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const pointsEarned = document.getElementById('pointsEarned');
    const feedbackExplanation = document.getElementById('feedbackExplanation');
    const catFeedback = document.getElementById('catFeedback');
    
    if (!modal) return;
    
    // Determine feedback based on score
    let title, catMessage;
    if (score >= 25) {
        title = "Perfect! 🌟";
        catMessage = "Meow! You nailed it! That's exactly what this customer needed!";
    } else if (score >= 15) {
        title = "Great Job! 👍";
        catMessage = "Nice work! You're getting the hang of AI temperature control!";
    } else if (score >= 8) {
        title = "Good Try! 😊";
        catMessage = "Not bad! Keep experimenting with different temperatures!";
    } else {
        title = "Keep Trying! 💪";
        catMessage = "Don't give up! Every customer needs a different approach!";
    }
    
    if (feedbackTitle) feedbackTitle.textContent = title;
    if (pointsEarned) pointsEarned.textContent = `+${score} points`;
    if (feedbackExplanation) {
        const explanation = getFeedbackExplanation ? 
            getFeedbackExplanation(customer.id, temperature, score) : 
            "Keep practicing to improve your AI training skills!";
        feedbackExplanation.textContent = explanation;
    }
    if (catFeedback) catFeedback.textContent = `"${catMessage}"`;
    
    // Show modal
    modal.classList.remove('hidden');
}

function nextCustomer() {
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.classList.add('hidden');
    }
    
    // Mark current customer as completed
    gameState.completedCustomers.push(gameState.currentCustomer);
    
    // Move to next customer
    gameState.currentCustomer++;
    
    // Check if we have GAME_DATA before accessing it
    const maxCustomers = GAME_DATA && GAME_DATA.customers ? GAME_DATA.customers.length : 0;
    
    // Check if all customers completed or score reached
    if (gameState.currentCustomer >= maxCustomers || gameState.score >= 100) {
        completeLevel();
    } else {
        loadCurrentCustomer();
        resetCat();
    }
}

function completeLevel() {
    if (gameState.score >= 60) {
        // Show promotion quiz
        showPromotionQuiz();
    } else {
        // Show regular completion modal
        showCompletionModal();
    }
}


function showPromotionQuiz() {
    currentQuizQuestion = 0;
    quizScore = 0;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'promotionQuiz';
    modal.innerHTML = `
        <div class="modal-content quiz-modal">
            <div class="quiz-header">
                <h3>Promotion Quiz</h3>
                <p>Answer these questions to unlock the next level:</p>
            </div>
            <div class="quiz-content" id="quizContent">
                <!-- Quiz question will go here -->
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    showQuizQuestion();
}

function showQuizQuestion() {
    const quizContent = document.getElementById('quizContent');
    if (!quizContent || currentQuizQuestion >= quizQuestions.length) {
        completeQuiz();
        return;
    }
    
    const question = quizQuestions[currentQuizQuestion];
    quizContent.innerHTML = `
        <div class="quiz-question">
            <div class="question-header">
                <span class="question-number">Question ${currentQuizQuestion + 1} of ${quizQuestions.length}</span>
            </div>
            <p class="question-text">${question.question}</p>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <button class="quiz-option" onclick="selectAnswer(${index})">
                        ${String.fromCharCode(65 + index)}. ${option}
                    </button>
                `).join('')}
            </div>
            <div class="quiz-feedback hidden" id="quizFeedback">
                <!-- Feedback will appear here -->
            </div>
        </div>
    `;
}

function completeQuiz() {
    const modal = document.getElementById('promotionQuiz');
    if (!modal) return;
    
    const passed = quizScore >= 2; // Need to get at least 2/3 correct
    
    modal.innerHTML = `
        <div class="modal-content quiz-results-modal">
            <div class="quiz-results-header">
                <h3>${passed ? 'Congratulations!' : 'Almost There!'}</h3>
            </div>
            <div class="quiz-results">
                <p class="score-display">You got <strong>${quizScore} out of ${quizQuestions.length}</strong> questions correct!</p>
                ${passed ? 
                    '<p class="success-message">You\'ve been promoted and unlocked the next level!</p>' :
                    '<p class="retry-message">You need at least 2 correct answers to unlock the next level. Want to try the quiz again?</p>'
                }
            </div>
            <div class="quiz-actions">
                ${passed ? 
                    '<button class="primary-btn" onclick="this.parentElement.parentElement.parentElement.remove(); showScreen(\'levelSelection\'); unlockLevel(2);">Continue to Levels</button>' :
                    `<div class="retry-buttons">
                        <button class="primary-btn" onclick="retryQuiz();">Try Quiz Again</button>
                        <button class="secondary-btn" onclick="this.parentElement.parentElement.parentElement.parentElement.remove(); showScreen('levelSelection');">Back to Levels</button>
                    </div>`
                }
            </div>
        </div>
    `;
}

// New function to retry just the quiz
window.retryQuiz = function() {
    const modal = document.getElementById('promotionQuiz');
    if (modal) {
        modal.remove();
    }
    // Reset quiz state and start over
    currentQuizQuestion = 0;
    quizScore = 0;
    showPromotionQuiz();
};

// Global functions for quiz (need to be global for onclick handlers)
window.selectAnswer = function(selectedIndex) {
    const question = quizQuestions[currentQuizQuestion];
    const feedback = document.getElementById('quizFeedback');
    const options = document.querySelectorAll('.quiz-option');
    
    // Disable all options
    options.forEach(option => option.disabled = true);
    
    if (selectedIndex === question.correct) {
        // Correct answer
        options[selectedIndex].style.backgroundColor = '#4CAF50';
        options[selectedIndex].style.color = 'white';
        quizScore++;
        
        feedback.innerHTML = `
            <div class="correct-feedback">
                <strong>✅ Correct!</strong>
                <p>${question.explanation}</p>
                <button onclick="nextQuizQuestion()" class="next-quiz-btn">Next Question</button>
            </div>
        `;
    } else {
        // Wrong answer
        options[selectedIndex].style.backgroundColor = '#f44336';
        options[selectedIndex].style.color = 'white';
        options[question.correct].style.backgroundColor = '#4CAF50';
        options[question.correct].style.color = 'white';
        
        feedback.innerHTML = `
            <div class="wrong-feedback">
                <strong>❌ Not quite right.</strong>
                <p>${question.explanation}</p>
                <button onclick="nextQuizQuestion()" class="next-quiz-btn">Next Question</button>
            </div>
        `;
    }
    
    feedback.classList.remove('hidden');
};

window.nextQuizQuestion = function() {
    currentQuizQuestion++;
    showQuizQuestion();
};

function showCompletionModal() {
    // Original completion modal for lower scores
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="feedback-header">
                <div class="tutorial-cat">😸</div>
                <h3>Level Complete!</h3>
            </div>
            <div class="points-earned">Final Score: ${gameState.score}/100</div>
            <div class="feedback-explanation">
                You've learned the basics of AI temperature control! 
                ${gameState.score >= 60 ? 'Try getting a higher score to unlock the promotion quiz!' : 'Keep practicing to improve your score!'}
            </div>
            <div class="cat-feedback">
                "Meow! You're on your way to becoming an AI training expert!"
            </div>
            <button class="next-btn" onclick="this.parentElement.parentElement.remove(); showScreen('levelSelection');">
                <span>Back to Levels</span>
                <span>🏠</span>
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function unlockLevel(levelNumber) {
    // This would unlock the next level
    // For now, just log it since we only have level 1
    console.log(`Level ${levelNumber} unlocked!`);
}

// Utility function to hide elements
function hide(element) {
    if (element) {
        element.classList.add('hidden');
    }
}

// Utility function to show elements
function show(element) {
    if (element) {
        element.classList.remove('hidden');
    }
}

// Initialize game when page loads
console.log('🎮 Game script loaded successfully!');