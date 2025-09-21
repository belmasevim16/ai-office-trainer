// AI Bias Detection Game Data - Level 2

const BIAS_DATA = {
    rounds: [
        {
            id: 1,
            title: "Simple Gender Bias",
            scenario: "AI trained on historical tech hiring data from 1990-2010, when 85% of software engineers were male.",
            candidates: [
                {
                    name: "P.B. Jelly",
                    description: "Female • CS Degree from 19th best Uni Worldwide • 3 years Python experience • Built award-winning mobile app",
                    image: "redhairwoman.png",
                    gender: "female"
                },
                {
                    name: "Bob Spreadsheetson ", 
                    description: "Male • CS Degree from 19th best Uni Worldwide • 3 years Python experience • Built award-winning mobile app",
                    image: "manglasses.png",
                    gender: "male"
                }
            ],
            aiChoice: 1, // Bob (male)
            biasType: "Training Data Bias",
            explanation: "The AI picked Bob despite identical qualifications. It learned from historical data where mostly men held tech roles, creating a pattern that favors male candidates even when skills are identical.",
            hint: "Both candidates are identical on paper. What historical pattern might the AI have learned from past hiring data?"
        },
        {
            id: 2,
            title: "Socioeconomic Proxy Bias", 
            scenario: "AI uses home address and high school name to predict 'cultural fit' - proxies that correlate with family wealth.",
            candidates: [
                {
                    name: "Janine McBean",
                    description: "Lives in an area with lots of small apartments • Graduated from public high school • 99 Average • Excellent communication skills",
                    image: "youngman.png",
                    location: "low-income"
                },
                {
                    name: "Riley Snoozebutton",
                    description: "Lives in an area with lots of mansions • Graduated from private academy • 99 Average • Excellent communication skills",
                    image: "blondewoman.png", 
                    location: "wealthy"
                }
            ],
            aiChoice: 1, // Riley (wealthy area)
            biasType: "Proxy Bias",
            explanation: "The AI chose Riley, using address and school as shortcuts to predict success. These are 'proxy' features that indirectly discriminate based on family wealth, despite both candidates having identical achievements.",
            hint: "The AI is making assumptions about success based on where people live and went to school. What bias might be hidden in these seemingly neutral factors?"
        },
        {
            id: 3,
            title: "Subtle Performance Review Bias",
            scenario: "AI learned from performance reviews where women were historically described as 'supportive' while men were called 'leadership material' for identical behaviors.",
            candidates: [
                {
                    name: "Ella Vator",
                    description: "Female • Led 3 successful projects • Mentored 5 junior developers • Described as 'collaborative and supportive'",
                    image: "hijabiwoman.png",
                    language: "female"
                },
                {
                    name: "Beepty Boopty",
                    description: "Male (?) • Led 3 successful projects • Mentored 5 junior developers • Described as 'natural leader with vision'",
                    image: "robocop.png",
                    language: "male"
                }
            ],
            aiChoice: 1, // Morgan (male)
            biasType: "Label Bias", 
            explanation: "The AI picked Beepty because historical performance reviews used different language to describe identical leadership behaviors. Women were labeled 'supportive' while men were called 'leaders' for the same actions.",
            hint: "Both candidates did exactly the same things, but got different descriptions. What pattern might the AI have learned from how past reviews described similar behaviors?"
        },
        {
            id: 4,
            title: "Intersectional Representation Bias",
            scenario: "AI was trained on a dataset where only 12% of senior managers were women, and only 1% of these women had a disability.",
            candidates: [
                {
                    name: "Anita Break",
                    description: "Woman with a disability • Degree in High-Porosity-Furniture-Studies • 8 years management experience • Increased team productivity 40%",
                    image: "darkhairwoman.png",
                    gender: "female",
                    role: "leader"
                },
                {
                    name: "Nowarren Tee", 
                    description: "Man without a disability • Degree in High-Porosity-Furniture-Studies • 8 years management experience • Increased team productivity 40%",
                    image: "otherbasicmantshirt.png",
                    gender: "male",
                    role: "leader"
                }
            ],
            aiChoice: 1, // Jamie (male)
            biasType: "Intersectional Representation Bias",
            explanation: "The AI chose Nowarren because it rarely saw women with disabilities in leadership roles during training. This creates intersectional bias - when multiple identity factors compound to create even stronger bias patterns.",
            hint: "The training data had very few examples of people who shared Anita's identity in leadership roles. What might the AI have learned about who 'looks like' a manager?"
        },
        {
            id: 5,
            title: "Algorithmic Amplification Bias",
            scenario: "AI combines multiple subtle biases: values 'leadership confidence' (favors men), 'prestigious schools' (favors wealth), and 'clear communication' (favors native speakers).",
            candidates: [
                {
                    name: "Polly Cee",
                    description: "Woman who is a non-native English speaker • State school graduate • Slightly accented English • Proven track record but modest in self-presentation",
                    image: "blondewoman.png",
                    location: "small-town",
                    experience: "strong"
                },
                {
                    name: "Mike Comfybottom",
                    description: "Man who is a native English Spear • Ivy League graduate • Native English speaker • Same track record but confident in self-presentation",
                    image: "youngman.png",
                    location: "big-city", 
                    experience: "strong"
                }
            ],
            aiChoice: 1, // Dakota (multiple advantages)
            biasType: "Algorithmic Amplification",
            explanation: "The AI picked Mike because multiple small biases combined into a large advantage. Even when individual biases seem minor, they can amplify each other to create significant unfairness - this is algorithmic bias amplification.",
            hint: "This is tricky! The AI considers many factors at once. Think about how multiple small biases might add up to create a big advantage for one type of person."
        }
    ],

    // Quiz questions for Level 2 promotion 
    quizQuestions: [
        {
            question: "What is 'proxy bias' in AI hiring systems?",
            options: [
                "When AI directly asks about protected characteristics like race or gender",
                "When AI uses seemingly neutral features (like zip code) that correlate with protected characteristics", 
                "When AI is too slow to make hiring decisions",
                "When AI copies other companies' hiring practices"
            ],
            correct: 1,
            explanation: "Proxy bias occurs when AI uses indirect features as shortcuts that correlate with protected characteristics, like using zip code to indirectly discriminate by race or income."
        },
        {
            question: "Why is 'intersectional bias' particularly harmful in AI systems?",
            options: [
                "It only affects one type of person",
                "It's easier to detect than other biases",
                "Multiple identity factors combine to create even stronger bias against certain groups",
                "It makes AI systems run slower"
            ],
            correct: 2,
            explanation: "Intersectional bias occurs when multiple identity factors (like being both female AND a person of color) compound to create stronger bias effects than any single factor alone."
        },
        {
            question: "What's the BEST way to reduce training data bias in AI hiring systems?",
            options: [
                "Use smaller datasets to avoid bias",
                "Only hire AI companies with diverse teams",
                "Ensure training data includes diverse, balanced representation of all groups",
                "Train AI systems faster so they don't have time to learn bias"
            ],
            correct: 2,
            explanation: "The most effective approach is ensuring training data includes diverse, balanced representation so AI systems learn from fair examples rather than biased historical patterns."
        }
    ],

    // Educational content for explanations
    biasTypes: {
        "Training Data Bias": {
            definition: "When AI learns unfair patterns because the training data itself was biased.",
            example: "If most doctors in training data were men, AI might think men make better doctors.",
            solution: "Use more diverse and balanced training datasets."
        },
        "Proxy Bias": {
            definition: "When AI uses indirect features (like zip code) as shortcuts that correlate with protected characteristics.",
            example: "Using zip code to predict job performance, which indirectly discriminates by race or income.",
            solution: "Remove or carefully monitor features that could be proxies for protected characteristics."
        },
        "Label Bias": {
            definition: "When the labels or ratings used to train AI were themselves biased.",
            example: "If performance reviews were historically unfair to certain groups, AI learns those biases.",
            solution: "Audit and improve the quality and fairness of training labels."
        },
        "Intersectional Representation Bias": {
            definition: "When people with multiple marginalized identities are severely underrepresented in training data.",
            example: "Few examples of women of color in leadership leads AI to underestimate their potential.",
            solution: "Ensure training data includes diverse representation across intersecting identity categories."
        },
        "Algorithmic Amplification": {
            definition: "When multiple types of bias work together to create compounded unfair outcomes.",
            example: "Location bias + gender bias + education bias all favoring the same group.",
            solution: "Test for multiple types of bias and use comprehensive fairness measures."
        }
    },

    // Scoring system
    scoring: {
        passingScore: 4, // Need 4 out of 5 rounds correct to pass
        totalRounds: 5,
        quizPassingScore: 2 // Need 2 out of 3 quiz questions correct to unlock next level
    },

    // Cat feedback messages
    catFeedback: {
        correct: [
            "Meow! You're getting good at spotting bias patterns!",
            "Great job detecting that bias! You're helping make AI fairer!",
            "Purrfect! You spotted the bias like a true detective!",
            "Nice work! That bias was tricky but you caught it!",
            "Excellent! You're becoming a real bias-busting expert!"
        ],
        incorrect: [
            "Don't worry! Bias detection takes practice. You're learning!",
            "Meow! Each mistake teaches us something about AI fairness!",
            "Keep trying! Understanding bias helps everyone!",
            "No worries - these biases can be really subtle to spot!",
            "That was tricky! You'll get the next one!"
        ],
        completion: {
            passed: [
                "Meow! You're now a certified bias detective! AI fairness needs heroes like you!",
                "Congratulations! You've mastered the art of spotting AI bias!",
                "Purrfect score! You're ready to make AI hiring more fair!"
            ],
            failed: [
                "Don't give up! Every bias you learn to spot makes AI better for everyone!",
                "Keep practicing! AI fairness is too important to give up on!",
                "You're getting there! Each attempt makes you better at detecting bias!"
            ]
        }
    },

    // Tutorial messages for bias detection
    tutorialMessages: {
        intro: "Welcome to bias detection training! Here you'll learn to spot when AI makes unfair decisions.",
        instructions: "Your job is simple: guess which candidate the biased AI picked. Both candidates are equally qualified - you're just detecting the bias pattern!",
        importance: "Why does this matter? Biased AI can harm real people's careers and lives. Learning to spot bias helps us build fairer systems.",
        success: "Remember: you're not judging who's better - you're being a bias detective!"
    }
};

console.log('📊 Bias detection data loaded successfully!');