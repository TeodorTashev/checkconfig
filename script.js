import apiService from './api-service.js';

document.addEventListener('DOMContentLoaded', function() {
    // Quiz configuration
    const quizQuestions = [
        {
            id: 1,
            text: "How many days per week do you train?",
            type: "single-select",
            options: [
                { text: "5–7 days", value: "5-7" },
                { text: "3–4 days", value: "3-4" },
                { text: "1–2 days", value: "1-2" },
                { text: "0 (not currently training)", value: "0" }
            ],
            required: true,
            autoAdvance: true
        },
        {
            id: 2,
            text: "What type of training do you do?",
            type: "multi-select",
            options: [
                { text: "Cardio", value: "cardio" },
                { text: "Strength training", value: "strength" },
                { text: "Endurance", value: "endurance" },
                { text: "Flexibility", value: "flexibility" },
                { text: "Sports-specific", value: "sports" }
            ],
            required: true,
            autoAdvance: false
        },
        {
            id: 3,
            text: "What sport do you train for?",
            type: "text-input",
            conditional: {
                questionId: 2,
                value: "sports"
            },
            required: true,
            autoAdvance: false
        },
        {
            id: 4,
            text: "Any specific performance goals?",
            type: "text-input",
            required: false,
            skipOption: true,
            autoAdvance: false,
            checkboxAutoAdvance: true
        },
        {
            id: 5,
            text: "How many hours of sleep do you get on average per night?",
            type: "single-select",
            options: [
                { text: "< 5 hours", value: "<5" },
                { text: "5–6 hours", value: "5-6" },
                { text: "7–8 hours", value: "7-8" },
                { text: "8+ hours", value: "8+" }
            ],
            required: true,
            autoAdvance: true
        },
        {
            id: 6,
            text: "How would you describe your current stress level?",
            type: "single-select",
            options: [
                { text: "High", value: "high" },
                { text: "Moderate", value: "moderate" },
                { text: "Low", value: "low" }
            ],
            required: true,
            autoAdvance: true
        },
        {
            id: 7,
            text: "Do you often experience muscle soreness or physical fatigue?",
            type: "single-select",
            options: [
                { text: "Yes, frequently", value: "frequently" },
                { text: "Sometimes", value: "sometimes" },
                { text: "No, rarely", value: "rarely" }
            ],
            required: true,
            autoAdvance: true
        },
        {
            id: 8,
            text: "Are you interested in improving cognitive performance?",
            type: "single-select",
            options: [
                { text: "Yes", value: "yes" },
                { text: "Sometimes", value: "sometimes" },
                { text: "No", value: "no" }
            ],
            required: true,
            autoAdvance: true
        },
        {
            id: 9,
            text: "Do you experience cognitive issues, like bad short-term memory and lack of focus?",
            type: "single-select",
            options: [
                { text: "Yes, often", value: "often" },
                { text: "Sometimes", value: "sometimes" },
                { text: "No", value: "no" }
            ],
            required: true,
            autoAdvance: true
        },
        {
            id: 10,
            text: "Do you participate in sports where you might get hit in the head?",
            type: "single-select",
            options: [
                { text: "Yes", value: "yes" },
                { text: "Sometimes", value: "sometimes" },
                { text: "No", value: "no" }
            ],
            required: true,
            autoAdvance: true
        },
        {
            id: 11,
            text: "Current nootropics or cognitive supplements?",
            type: "text-input",
            required: false,
            skipOption: true,
            autoAdvance: false,
            checkboxAutoAdvance: true
        },
        {
            id: 12,
            text: "What is your primary health/fitness goal?",
            type: "single-select",
            options: [
                { text: "Build muscle", value: "muscle" },
                { text: "Gain strength", value: "strength" },
                { text: "Lose weight/fat", value: "weight-loss" },
                { text: "Improve endurance", value: "endurance" },
                { text: "Increase daily energy", value: "energy" },
                { text: "Improve general health", value: "health" },
                { text: "Other", value: "other" }
            ],
            required: true,
            autoAdvance: true
        },
        {
            id: 13,
            text: "Specific goals or target metrics?",
            type: "text-input",
            required: false,
            skipOption: true,
            autoAdvance: false,
            checkboxAutoAdvance: true
        },
        {
            id: 14,
            text: "Do you have any health concerns?",
            type: "text-input",
            required: true,
            skipOption: true,
            checkboxAutoAdvance: true,
            autoAdvance: false
        },
        {
            id: 15,
            text: "Do you have any digestive issues or sensitivities?",
            type: "text-input",
            required: true,
            skipOption: true,
            checkboxAutoAdvance: true,
            autoAdvance: false
        },
        {
            id: 16,
            text: "Are you following any specific diet?",
            type: "multi-select",
            options: [
                { text: "No specific diet (Balanced)", value: "balanced" },
                { text: "High protein", value: "high-protein" },
                { text: "Low carb/Keto", value: "low-carb" },
                { text: "Vegetarian", value: "vegetarian" },
                { text: "Vegan", value: "vegan" },
                { text: "Intermittent fasting", value: "if" },
                { text: "Other", value: "other" }
            ],
            required: true,
            autoAdvance: false
        },
        {
            id: 17,
            text: "What supplements are you currently taking?",
            type: "text-input",
            required: false,
            skipOption: true,
            autoAdvance: false,
            checkboxAutoAdvance: true
        },
        {
            id: 18,
            text: "Are there any supplements or ingredients you want to avoid?",
            type: "text-input",
            required: false,
            skipOption: true,
            autoAdvance: false,
            checkboxAutoAdvance: true
        },
        {
            id: 19,
            text: "What is your age?",
            type: "age-slider",
            required: true,
            autoAdvance: false
        },
        {
            id: 20,
            text: "Contact Information",
            type: "contact",
            required: true,
            autoAdvance: false
        }
    ];

    // DOM elements
    const quizContent = document.getElementById('quiz-content');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const progressBar = document.querySelector('.progress-bar');
    const gorillaLeft = document.querySelector('.gorilla-left');
    const gorillaRight = document.querySelector('.gorilla-right');
    const gorillaLeftUp = document.querySelector('.gorilla-left-up');
    const gorillaRightUp = document.querySelector('.gorilla-right-up');
    
    // State variables
    let currentQuestionIndex = 0;
    let userAnswers = {};
    let startTime = Date.now();
    let quizCompleted = false;
    let showingClarifyingQuestions = false;
    let showingResults = false;
    let clarifyingQuestions = [];
    let userClarifyingAnswers = {};
    let supplementRecommendations = [];
    
    // Initialize quiz
    async function initQuiz() {
        const config = await import('./config.js');
        const GOOGLE_SHEETS_WEBHOOK = config.default.GOOGLE_SHEETS_WEBHOOK;
        
        displayQuestion(currentQuestionIndex);
        updateProgressBar();
        
        // Set initial opacity for previous button on first question
        if (currentQuestionIndex === 0) {
            prevBtn.classList.add('low-opacity-btn');
        }
        
        // Event listeners
        prevBtn.addEventListener('click', goToPreviousQuestion);
        nextBtn.addEventListener('click', goToNextQuestion);
        submitBtn.addEventListener('click', handleSubmitClick);
    }
    
    // Display current question
    function displayQuestion(index) {
        const question = quizQuestions[index];
        quizContent.innerHTML = '';
        
        // Update navigation buttons visibility
        if (index === 0) {
            prevBtn.classList.add('hidden');
        } else {
            prevBtn.classList.remove('hidden');
        }

        if (index === quizQuestions.length - 1) {
            nextBtn.classList.add('hidden');
            submitBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            submitBtn.classList.add('hidden');
        }

        // Update progress bar
        const progress = ((index) / (quizQuestions.length - 1)) * 100;
        progressBar.style.width = `${progress}%`;
        
        // Skip questions based on conditional logic
        if (question.conditional) {
            const conditionQuestion = question.conditional.questionId;
            const conditionValue = question.conditional.value;
            
            if (!userAnswers[conditionQuestion] || 
                (Array.isArray(userAnswers[conditionQuestion]) && !userAnswers[conditionQuestion].includes(conditionValue)) ||
                (!Array.isArray(userAnswers[conditionQuestion]) && userAnswers[conditionQuestion] !== conditionValue)) {
                currentQuestionIndex++;
                
                if (currentQuestionIndex < quizQuestions.length) {
                    displayQuestion(currentQuestionIndex);
                } else if (!showingClarifyingQuestions) {
                    handleQuizCompletion();
                }
                return;
            }
        }
        
        let template;
        
        switch (question.type) {
            case 'single-select':
                template = document.getElementById('single-select-template').content.cloneNode(true);
                template.querySelector('.question-text').textContent = question.text;
                
                const optionsContainer = template.querySelector('.options-container');
                question.options.forEach(option => {
                    const optionElement = document.createElement('div');
                    optionElement.className = 'option';
                    optionElement.textContent = option.text;
                    optionElement.dataset.value = option.value;
                    
                    if (userAnswers[question.id] === option.value) {
                        optionElement.classList.add('selected');
                    }
                    
                    optionElement.addEventListener('click', function() {
                        optionsContainer.querySelectorAll('.option').forEach(opt => {
                            opt.classList.remove('selected');
                        });
                        
                        this.classList.add('selected');
                        userAnswers[question.id] = option.value;
                        
                        // Remove the next button opacity change for auto-advance questions
                        if (!question.autoAdvance) {
                            nextBtn.classList.remove('low-opacity-btn');
                        }
                        
                        if (question.autoAdvance) {
                            // Use a longer timeout to ensure the selection is visible
                            setTimeout(goToNextQuestion, 500);
                        }
                    });
                    
                    optionsContainer.appendChild(optionElement);
                });
                
                // Don't show next button for auto-advance questions
                if (question.autoAdvance) {
                    nextBtn.style.display = 'none';
                } else {
                    nextBtn.style.display = 'block';
                    nextBtn.classList.add('low-opacity-btn');
                }
                break;
                
            case 'multi-select':
                template = document.getElementById('multi-select-template').content.cloneNode(true);
                template.querySelector('.question-text').textContent = question.text;
                
                const multiOptionsContainer = template.querySelector('.options-container');
                question.options.forEach(option => {
                    const optionElement = document.createElement('div');
                    optionElement.className = 'option checkbox';
                    
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.value = option.value;
                    checkbox.id = `checkbox-${question.id}-${option.value}`;
                    
                    // Check if previously selected
                    if (userAnswers[question.id] && userAnswers[question.id].includes(option.value)) {
                        checkbox.checked = true;
                    }
                    
                    const updateSelection = () => {
                        // Initialize answer array if needed
                        if (!userAnswers[question.id]) {
                            userAnswers[question.id] = [];
                        }
                        
                        // Add or remove value from answers
                        if (checkbox.checked) {
                            if (!userAnswers[question.id].includes(option.value)) {
                                userAnswers[question.id].push(option.value);
                            }
                        } else {
                            userAnswers[question.id] = userAnswers[question.id].filter(val => val !== option.value);
                        }
                        
                        // Update next button opacity based on selection
                        if (userAnswers[question.id] && userAnswers[question.id].length > 0) {
                            nextBtn.classList.remove('low-opacity-btn');
                        } else {
                            nextBtn.classList.add('low-opacity-btn');
                        }
                    };
                    
                    checkbox.addEventListener('change', updateSelection);
                    
                    const label = document.createElement('label');
                    label.textContent = option.text;
                    label.htmlFor = `checkbox-${question.id}-${option.value}`;
                    
                    // Make entire option clickable
                    optionElement.addEventListener('click', function(e) {
                        // Prevent default if checkbox itself was clicked to avoid double-toggle
                        if (e.target !== checkbox) {
                            checkbox.checked = !checkbox.checked;
                            updateSelection();
                        }
                    });
                    
                    optionElement.appendChild(checkbox);
                    optionElement.appendChild(label);
                    multiOptionsContainer.appendChild(optionElement);
                });
                
                // Set next button to low opacity initially for multi-select
                nextBtn.classList.add('low-opacity-btn');
                
                // If answers were already selected, make next button fully visible
                if (userAnswers[question.id] && userAnswers[question.id].length > 0) {
                    nextBtn.classList.remove('low-opacity-btn');
                }
                break;
                
            case 'text-input':
                template = document.getElementById('text-input-template').content.cloneNode(true);
                template.querySelector('.question-text').textContent = question.text;
                
                const textInput = template.querySelector('.text-input');
                textInput.value = userAnswers[question.id] || '';
                
                nextBtn.classList.add('low-opacity-btn');
                if (textInput.value && textInput.value.length > 0) {
                    nextBtn.classList.remove('low-opacity-btn');
                }
                
                textInput.addEventListener('input', function() {
                    userAnswers[question.id] = this.value;
                    
                    if (this.value.length > 0) {
                        nextBtn.classList.remove('low-opacity-btn');
                    } else {
                        nextBtn.classList.add('low-opacity-btn');
                    }
                });
                
                textInput.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' && !nextBtn.classList.contains('low-opacity-btn')) {
                        e.preventDefault();
                        goToNextQuestion();
                    }
                });
                
                if (question.skipOption) {
                    const checkboxContainer = document.createElement('div');
                    checkboxContainer.className = 'checkbox-container no-issues-btn';
                    
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.id = `no-${question.id}-checkbox`;
                    checkbox.checked = userAnswers[question.id + '_checkbox'] || false;
                    
                    const checkboxLabel = document.createElement('label');
                    checkboxLabel.className = 'checkbox-label';
                    checkboxLabel.htmlFor = `no-${question.id}-checkbox`;
                    
                    let checkboxText = "No specific information";
                    if (question.id === 4) {
                        checkboxText = "No specific Performance Goals";
                    } else if (question.id === 11) {
                        checkboxText = "No current supplements";
                    } else if (question.id === 13) {
                        checkboxText = "No specific metrics";
                    } else if (question.id === 14) {
                        checkboxText = "No health concerns";
                    } else if (question.id === 15) {
                        checkboxText = "No digestive issues or sensitivities";
                    } else if (question.id === 17) {
                        checkboxText = "Not taking any supplements";
                    } else if (question.id === 18) {
                        checkboxText = "No supplements to avoid";
                    }
                    
                    checkboxLabel.textContent = checkboxText;
                    
                    const updateSelection = () => {
                        userAnswers[question.id + '_checkbox'] = checkbox.checked;
                        textInput.disabled = checkbox.checked;
                        
                        if (checkbox.checked) {
                            userAnswers[question.id] = '';
                            textInput.value = '';
                            nextBtn.classList.remove('low-opacity-btn');
                            
                            if (question.checkboxAutoAdvance) {
                                setTimeout(goToNextQuestion, 500);
                            }
                        } else {
                            if (!textInput.value || textInput.value.length === 0) {
                                nextBtn.classList.add('low-opacity-btn');
                            }
                        }
                    };
                    
                    checkbox.addEventListener('change', updateSelection);
                    
                    checkboxContainer.addEventListener('click', function(e) {
                        if (e.target !== checkbox) {
                            checkbox.checked = !checkbox.checked;
                            const event = new Event('change');
                            checkbox.dispatchEvent(event);
                        }
                    });
                    
                    if (checkbox.checked) {
                        textInput.disabled = true;
                        nextBtn.classList.remove('low-opacity-btn');
                    }
                    
                    checkboxContainer.appendChild(checkbox);
                    checkboxContainer.appendChild(checkboxLabel);
                    template.querySelector('.input-container').appendChild(checkboxContainer);
                }
                break;
                
            case 'age-slider':
                template = document.getElementById('age-slider-template').content.cloneNode(true);
                template.querySelector('.question-text').textContent = question.text;
                
                const ageRanges = ['18-25', '25-30', '30-35', '35-40', '40-45', '45-50', '50-55', '55-60', '60+'];
                const slider = template.querySelector('.age-slider');
                const selectedAge = template.querySelector('.selected-age');
                
                // Set initial value from user answers or default to first range
                const savedValue = userAnswers[question.id] ? ageRanges.indexOf(userAnswers[question.id]) : 0;
                slider.value = savedValue;
                selectedAge.textContent = ageRanges[savedValue];
                
                // Initialize the userAnswers with default value for age
                if (!userAnswers[question.id]) {
                    userAnswers[question.id] = ageRanges[0];
                }
                
                // Age slider should always have a value, so next button should be visible
                nextBtn.classList.remove('low-opacity-btn');
                
                slider.addEventListener('input', function() {
                    const rangeIndex = parseInt(this.value);
                    selectedAge.textContent = ageRanges[rangeIndex];
                    userAnswers[question.id] = ageRanges[rangeIndex];
                });
                break;
                
            case 'contact':
                template = document.getElementById('contact-template').content.cloneNode(true);
                
                const nameInput = template.querySelector('#name');
                const emailInput = template.querySelector('#email');
                const emailError = template.querySelector('#email-error');
                
                nameInput.value = userAnswers['name'] || '';
                emailInput.value = userAnswers['email'] || '';
                
                // Initially set submit button to low opacity 
                submitBtn.classList.add('low-opacity-btn');
                
                // Check initial values and update button opacity
                if (nameInput.value && emailInput.value && validateEmail(emailInput.value)) {
                    submitBtn.classList.remove('low-opacity-btn');
                }
                
                nameInput.addEventListener('input', function() {
                    userAnswers['name'] = this.value;
                    updateSubmitButton();
                });
                
                emailInput.addEventListener('input', function() {
                    userAnswers['email'] = this.value;
                    validateEmailField();
                    updateSubmitButton();
                });
                
                function validateEmailField() {
                    const email = emailInput.value;
                    const isValid = validateEmail(email);
                    
                    if (email && !isValid) {
                        emailError.textContent = 'Please enter a valid email address';
                        return false;
                    } else {
                        emailError.textContent = '';
                        return true;
                    }
                }
                
                function validateEmail(email) {
                    return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
                }
                
                function updateSubmitButton() {
                    if (nameInput.value && emailInput.value && validateEmail(emailInput.value)) {
                        submitBtn.classList.remove('low-opacity-btn');
                    } else {
                        submitBtn.classList.add('low-opacity-btn');
                    }
                }
                break;
                
            default:
                console.error('Unknown question type:', question.type);
                return;
        }
        
        quizContent.appendChild(template);
        
        // Update button visibility based on question type
        nextBtn.style.display = question.type === 'contact' ? 'none' : 'block';
        submitBtn.style.display = question.type === 'contact' ? 'block' : 'none';
        
        // Update previous button opacity based on question index
        if (currentQuestionIndex === 0) {
            prevBtn.classList.add('low-opacity-btn');
        } else {
            prevBtn.classList.remove('low-opacity-btn');
        }
        
        // Scale gorillas (desktop only)
        if (window.innerWidth > 768) {
            const scaleAmount = 1 + (index / quizQuestions.length) * 0.05;
            gorillaLeft.style.transform = `scale(${scaleAmount})`;
            gorillaRight.style.transform = `scale(${scaleAmount})`;
        }
    }
    
    // Update progress bar
    function updateProgressBar() {
        const progress = (currentQuestionIndex / quizQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }
    
    // Go to previous question
    function goToPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            
            // Check if the previous question is conditional and should be skipped
            const prevQuestion = quizQuestions[currentQuestionIndex];
            if (prevQuestion.conditional) {
                const conditionQuestion = prevQuestion.conditional.questionId;
                const conditionValue = prevQuestion.conditional.value;
                
                // If condition is not met, go back one more question
                if (!userAnswers[conditionQuestion] || 
                    (Array.isArray(userAnswers[conditionQuestion]) && !userAnswers[conditionQuestion].includes(conditionValue)) ||
                    (!Array.isArray(userAnswers[conditionQuestion]) && userAnswers[conditionQuestion] !== conditionValue)) {
                    currentQuestionIndex--;
                }
            }
            
            // Make sure we don't go below 0
            if (currentQuestionIndex < 0) {
                currentQuestionIndex = 0;
            }
            
            displayQuestion(currentQuestionIndex);
            updateProgressBar();
            
            // Update button visibility
            if (currentQuestionIndex === 0) {
                prevBtn.classList.add('low-opacity-btn');
            } else {
                prevBtn.classList.remove('low-opacity-btn');
            }

            // Update next button visibility based on current question
            const currentQuestion = quizQuestions[currentQuestionIndex];
            if (currentQuestion.autoAdvance) {
                nextBtn.style.display = 'none';
            } else {
                nextBtn.style.display = 'block';
                // Check if the question is already answered
                if (isQuestionAnswered(currentQuestion)) {
                    nextBtn.classList.remove('low-opacity-btn');
                } else {
                    nextBtn.classList.add('low-opacity-btn');
                }
            }
        }
    }
    
    // Go to next question
    function goToNextQuestion() {
        // Validate current question if required
        const currentQuestion = quizQuestions[currentQuestionIndex];
        
        if (currentQuestion.required && !isQuestionAnswered(currentQuestion)) {
            // Special handling for health concerns and digestive issues questions
            if ((currentQuestion.id === 14 || currentQuestion.id === 15) && 
                currentQuestion.checkboxLabel) {
                // Auto-check the "No health concerns" or "No digestive issues" box
                userAnswers[currentQuestion.id + '_checkbox'] = true;
                // And continue
            } else {
                // Show error message or highlight required field
                alert('Please answer this question before proceeding.');
                return;
            }
        }
        
        if (currentQuestionIndex < quizQuestions.length - 1) {
            currentQuestionIndex++;
            
            // Find the next non-conditional question or a conditional question that meets its condition
            let nextQuestion = quizQuestions[currentQuestionIndex];
            while (nextQuestion.conditional) {
                const conditionQuestion = nextQuestion.conditional.questionId;
                const conditionValue = nextQuestion.conditional.value;
                
                // Check if condition is met
                const conditionMet = userAnswers[conditionQuestion] && 
                    ((Array.isArray(userAnswers[conditionQuestion]) && userAnswers[conditionQuestion].includes(conditionValue)) ||
                     (!Array.isArray(userAnswers[conditionQuestion]) && userAnswers[conditionQuestion] === conditionValue));
                
                // If condition is not met, skip to next question
                if (!conditionMet) {
                    currentQuestionIndex++;
                    
                    // Check if we've reached the end of the quiz
                    if (currentQuestionIndex >= quizQuestions.length) {
                        if (!showingClarifyingQuestions) {
                            handleQuizCompletion();
                        }
                        return;
                    }
                    
                    nextQuestion = quizQuestions[currentQuestionIndex];
                } else {
                    break;
                }
            }
            
            displayQuestion(currentQuestionIndex);
            updateProgressBar();
            
            // Enable previous button
            prevBtn.disabled = false;
        } else if (!showingClarifyingQuestions) {
            // Generate clarifying questions
            handleQuizCompletion();
        }
    }
    
    // Check if question is answered
    function isQuestionAnswered(question) {
        // For questions with skipOption, check if checkbox is checked
        if (question.skipOption && userAnswers[question.id + '_checkbox']) {
            return true;
        }
        
        // For health/digestive concerns questions with checkbox
        if ((question.id === 14 || question.id === 15) && userAnswers[question.id + '_checkbox']) {
            return true;
        }
        
        // Otherwise check for answer based on question type
        switch (question.type) {
            case 'single-select':
                return userAnswers[question.id] && userAnswers[question.id] !== '';
                
            case 'multi-select':
                return userAnswers[question.id] && userAnswers[question.id].length > 0;
                
            case 'text-input':
                return userAnswers[question.id] && userAnswers[question.id].trim() !== '';
                
            case 'age-slider':
                return userAnswers[question.id] !== undefined;
                
            case 'contact':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return userAnswers['name'] && userAnswers['name'].trim() !== '' && 
                       userAnswers['email'] && emailRegex.test(userAnswers['email']);
                
            default:
                return false;
        }
    }
    
    // Handle skip button click
    function handleSkipClick() {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        
        // Store empty answer
        userAnswers[currentQuestion.id] = '';
        
        // If it's a health concerns or digestive issues question, also check the checkbox
        if (currentQuestion.id === 14 || currentQuestion.id === 15) {
            userAnswers[currentQuestion.id + '_checkbox'] = true;
        }
        
        goToNextQuestion();
    }
    
    // Handle submit button click (from clarifying questions to results)
    function handleSubmitClick() {
        // If showing clarifying questions, proceed to recommendations
        if (showingClarifyingQuestions) {
            // Collect answers from clarifying questions
            const clarifyingInputs = document.querySelectorAll('#clarifying-questions-container textarea');
            clarifyingInputs.forEach(input => {
                userClarifyingAnswers[input.dataset.questionId] = input.value;
            });
            
            // Submit final answers
            submitFinalAnswers();
            return;
        }
        
        // Otherwise, it's the contact form submission
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        
        // Validate name and email
        if (!nameInput.value.trim()) {
            alert('Please enter your name.');
            return;
        }
        
        const email = emailInput.value.trim();
        const isValidEmail = email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
        
        if (!email || !isValidEmail) {
            emailError.textContent = 'Please enter a valid email address';
            return;
        }
        
        // Save answers
        userAnswers['name'] = nameInput.value;
        userAnswers['email'] = email;
        
        // Complete quiz
        handleQuizCompletion();
    }
    
    // Handle quiz completion
    function handleQuizCompletion() {
        if (showingClarifyingQuestions) {
            // If already showing clarifying questions, submit final answers
            submitFinalAnswers();
        } else {
            // Generate clarifying questions
            showingClarifyingQuestions = true;
            generateClarifyingQuestions();
        }
    }
    
    // Generate clarifying questions using OpenAI API
    async function generateClarifyingQuestions() {
        try {
            const quizData = {};
            quizQuestions.forEach(question => {
                if (userAnswers[question.id] !== undefined) {
                    quizData[question.text] = userAnswers[question.id];
                }
            });

            // Show loading state
            quizContent.innerHTML = `
                <div class="question-screen">
                    <h2>Analyzing your answers...</h2>
                    <div style="text-align: center; margin-top: 30px;">
                        <p>We're reviewing your responses to prepare personalized clarifying questions.</p>
                        <div class="loading-spinner"></div>
                    </div>
                </div>
            `;

            nextBtn.style.display = 'none';
            prevBtn.style.display = 'none';
            submitBtn.style.display = 'none';

            // Use the API service to generate questions
            clarifyingQuestions = await apiService.generateClarifyingQuestions(quizData);
            displayClarifyingQuestions();
        } catch (error) {
            console.error('Error generating clarifying questions:', error);
            // Show error message to user
            quizContent.innerHTML = `
                <div class="question-screen">
                    <h2>Oops! Something went wrong</h2>
                    <p>We couldn't generate clarifying questions at this time. Please try again later.</p>
                    <button class="btn primary-btn" onclick="submitFinalAnswers()">Continue to Recommendations</button>
                </div>
            `;
        }
    }
    
    // Display clarifying questions
    function displayClarifyingQuestions() {
        const template = document.getElementById('clarifying-questions-template').content.cloneNode(true);
        const container = template.querySelector('#clarifying-questions-container');
        
        clarifyingQuestions.forEach(question => {
            const questionElement = document.createElement('div');
            questionElement.className = 'clarifying-question';
            
            const questionText = document.createElement('h3');
            questionText.textContent = question.text;
            
            const answerInput = document.createElement('textarea');
            answerInput.className = 'text-input';
            answerInput.placeholder = 'Your answer...';
            answerInput.dataset.questionId = question.id;
            
            // Save answer on input
            answerInput.addEventListener('input', function() {
                userClarifyingAnswers[question.id] = this.value;
                
                // Enable submit button if at least one question is answered
                const hasAnyAnswer = Object.values(userClarifyingAnswers).some(answer => answer && answer.trim() !== '');
                if (hasAnyAnswer) {
                    submitBtn.classList.remove('low-opacity-btn');
                } else {
                    submitBtn.classList.add('low-opacity-btn');
                }
            });
            
            questionElement.appendChild(questionText);
            questionElement.appendChild(answerInput);
            container.appendChild(questionElement);
        });
        
        quizContent.innerHTML = '';
        quizContent.appendChild(template);
        
        // Show submit button
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'none';
        submitBtn.style.display = 'block';
        submitBtn.textContent = 'Get Recommendations';
        
        // Initially disable submit button until at least one answer
        submitBtn.classList.add('low-opacity-btn');
    }
    
    // Submit final answers and generate recommendations
    async function submitFinalAnswers() {
        try {
            // Show loading state
            quizContent.innerHTML = `
                <div class="question-screen">
                    <h2>Generating your personalized recommendations...</h2>
                    <div style="text-align: center; margin-top: 30px;">
                        <p>We're analyzing your responses to create customized supplement recommendations just for you.</p>
                        <div class="loading-spinner"></div>
                    </div>
                </div>
            `;

            nextBtn.style.display = 'none';
            prevBtn.style.display = 'none';
            submitBtn.style.display = 'none';

            // Prepare complete quiz data
            const completeData = {
                mainAnswers: userAnswers,
                clarifyingAnswers: userClarifyingAnswers,
                timeTaken: Math.floor((Date.now() - startTime) / 1000)
            };

            // Use the API service to generate recommendations
            supplementRecommendations = await apiService.generateRecommendations(
                completeData.mainAnswers,
                completeData.clarifyingAnswers
            );

            // Send data to Google Sheets
            sendDataToGoogleSheets(completeData);

            // Show results
            displayResults();
        } catch (error) {
            console.error('Error generating recommendations:', error);
            // Show error message to user
            quizContent.innerHTML = `
                <div class="question-screen">
                    <h2>Oops! Something went wrong</h2>
                    <p>We couldn't generate recommendations at this time. Please try again later.</p>
                    <button class="btn primary-btn" onclick="window.location.reload()">Try Again</button>
                </div>
            `;
        }
    }
    
    // Send data to Google Sheets via Apps Script webhook
    function sendDataToGoogleSheets(data) {
        fetch(GOOGLE_SHEETS_WEBHOOK, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.mainAnswers.name,
                email: data.mainAnswers.email,
                timestamp: new Date().toISOString(),
                answers: JSON.stringify(data.mainAnswers),
                clarifyingAnswers: JSON.stringify(data.clarifyingAnswers),
                timeTaken: data.timeTaken
            })
        })
        .catch(error => {
            console.error('Error sending data to Google Sheets:', error);
        });
    }
    
    // Display final results
    function displayResults() {
        // Create a template for results screen
        let resultsHTML = `
            <div class="results-screen">
                <h2>Your Personalized Supplement Recommendations</h2>
                <div class="results-container">
        `;
        
        // Add each product recommendation
        // here :) 
        supplementRecommendations.forEach(product => {
            resultsHTML += `
                <div class="product-recommendation">
                    <img class="product-image" src="${product.image}" alt="${product.name}">
                    <div class="product-details">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-reason">${product.reason}</p>
                        <a class="product-link" href="${product.link}" target="_blank">View Product</a>
                    </div>
                </div>
            `;
        });
        
        // Add discount code and close the container
        resultsHTML += `
                </div>
                <div class="discount-code">
                    <p>Use code <strong>kur</strong> for a special discount!</p>
                </div>
            </div>
        `;
        
        // Set the HTML content
        quizContent.innerHTML = resultsHTML;
        
        // Hide navigation buttons
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'none';
        
        // Replace gorilla images with completion images
        if (window.innerWidth > 768) {
            // Hide regular images
            gorillaLeft.style.display = 'none';
            gorillaRight.style.display = 'none';
            
            // Show the up images
            gorillaLeftUp.style.display = 'block';
            gorillaRightUp.style.display = 'block';
        }
    }
    
    // Start the quiz
    initQuiz();
});

localStorage.clear();