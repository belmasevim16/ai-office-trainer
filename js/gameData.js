// Pre-generated AI responses and game data
const GAME_DATA = {
    customers: [
        {
            id: 1,
            name: "Sarah Chen",
            type: "Stressed Executive",
            avatar: "👩‍💼",
            message: "Hi, I need to return this ergonomic chair ASAP. It doesn't match our office furniture and my boss is breathing down my neck to fix this before the big client meeting tomorrow.",
            optimalTemp: 0.5,
            urgency: "high",
            hint: "This person is stressed about work! Keep it professional but reassuring - not too robotic, not too casual."
        },
        {
            id: 2,
            name: "Tyler 'TechBro' Williams", 
            type: "Overly Enthusiastic Customer",
            avatar: "🤓",
            message: "YO! What's good? I'm setting up the SICKEST gaming setup and I need some RGB desk accessories that'll make my streams absolutely POP! Hook me up with the wildest stuff you got!",
            optimalTemp: 0.8,
            urgency: "low",
            hint: "This customer LOVES energy and excitement! Match their vibe - be enthusiastic and fun!"
        },
        {
            id: 3,
            name: "Margaret Thompson",
            type: "Confused Senior",
            avatar: "👵",
            message: "Hello dear, I'm having trouble with this newfangled standing desk my grandson bought me. The buttons are so confusing and it won't go up or down. Can you help an old lady out?",
            optimalTemp: 0.4,
            urgency: "medium",
            hint: "This sweet customer needs patient, clear help! Be kind and gentle - explain things simply."
        },
        {
            id: 4,
            name: "Dr. Kim Rodriguez",
            type: "Emergency Professional",
            avatar: "⚕️", 
            message: "URGENT: I'm a doctor and my medical office ergonomic equipment just failed during patient hours. I need immediate replacement options for back support chairs - this affects patient care!",
            optimalTemp: 0.3,
            urgency: "critical",
            hint: "EMERGENCY! This doctor needs quick, clear, professional help. No jokes, no creativity - just solutions!"
        },
        {
            id: 5,
            name: "Zoe Martinez",
            type: "Creative Freelancer",
            avatar: "🎨",
            message: "Hey there! I'm a graphic designer working from my tiny apartment and I need some space-saving desk solutions that don't look boring. I want my workspace to spark creativity!",
            optimalTemp: 0.7,
            urgency: "low",
            hint: "This creative person wants personality and inspiration! Be helpful but add some creative flair to match their energy."
        },
        {
            id: 6,
            name: "Captain James Morrison",
            type: "Military Precision",
            avatar: "🪖",
            message: "Good morning. I require a detailed specification sheet for your standing desk model XR-2400. I need exact dimensions, weight capacity, and assembly requirements for a government office setup.",
            optimalTemp: 0.2,
            urgency: "medium",
            hint: "Military precision! This customer wants facts, numbers, and clear information. Keep it direct and professional."
        }
    ],

    responses: {
        // Sarah Chen - Stressed Executive (Optimal: 0.5)
        1: {
            0.1: "I can process your return. Provide order number. Return policy allows 30 days. Refund will be processed accordingly.",
            0.2: "I can help with your chair return. Please provide your order number and I will check the return eligibility based on our 30-day policy.",
            0.3: "I'll be happy to help you return the chair. Please share your order number so I can look up your purchase and guide you through our return process.",
            0.4: "I'd be glad to help with returning your ergonomic chair. Could you please provide your order number? I'll check your purchase details and walk you through our return process.",
            0.5: "I'd be happy to help you return that chair! Please share your order number and I'll look up your purchase. We have a straightforward 30-day return policy for situations just like this.",
            0.6: "I completely understand needing furniture that matches your office aesthetic! I'd be happy to help you return the chair. Could you share your order number? I'll look up your purchase and make this return process as smooth as possible for you.",
            0.7: "I totally get it - furniture matching is so important for office cohesion! I'd love to help you return that chair and maybe even suggest some alternatives. Could you share your order number so I can pull up your purchase?",
            0.8: "Oh, the struggle of office furniture coordination is real! I'd be delighted to help you return that chair and perhaps find something that'll make both you and your manager happy. What's your order number?",
            0.9: "Ah, the classic case of 'looked perfect online but clashes with everything in real life!' No worries at all - I'm here to rescue you from this furniture mismatch situation. Let's get that return sorted out! What's your order number, and tell me about your office style?",
            1.0: "Oh my goodness, office furniture drama! I've seen this movie before - the chair looked amazing online but it's giving 'I don't belong here' vibes in your actual space, right? Let's turn this furniture faux pas into a success story! Hit me with that order number!"
        },

        // Tyler - Enthusiastic Gamer (Optimal: 0.8)
        2: {
            0.1: "RGB desk accessories available. Check gaming section. Multiple color options exist. Order online.",
            0.2: "We have RGB desk accessories for gaming setups. I can show you our colorful gaming workspace items from our catalog.",
            0.3: "I'd be happy to help you find some RGB gaming accessories! We have a good selection of colorful desk items for streaming setups.",
            0.4: "I'd love to help you create an awesome gaming setup! We have some great RGB desk accessories that might be perfect for your streaming needs.",
            0.5: "Oh, I love helping with gaming setups! We have tons of RGB and colorful desk accessories that could really make your streaming space pop!",
            0.6: "How exciting that you're building a gaming setup! I absolutely love helping streamers find the perfect RGB accessories. We have some really unique pieces that sound perfect for your vibe!",
            0.7: "Yay for epic gaming setups! I'm totally here for the RGB streaming life! We have some absolutely sick desk accessories that I think you'd love - want to see some of my favorites?",
            0.8: "Ooh, I LOVE a good streaming setup! You've come to the right place for RGB madness! We have the most incredible colorful pieces that'll make your streams absolutely fire. Let me show you some of my personal favorites!",
            0.9: "OMG YES! RGB gaming setups are literally my favorite thing to help people with! I'm getting so hyped just thinking about all the sick accessories we have that would make your streams absolutely legendary! Want to see some seriously wild options?",
            1.0: "YESSS! A fellow RGB warrior! I'm literally bouncing with excitement because we have the most INSANE gaming accessories that are going to make your setup look like a neon paradise! Get ready for some serious streaming magic!"
        },

        // Margaret - Confused Senior (Optimal: 0.4)
        3: {
            0.1: "Standing desk troubleshooting required. Check manual. Follow button sequence. Contact support if needed.",
            0.2: "I can help with your standing desk problem. Let me walk you through the button controls to get it working properly.",
            0.3: "I understand how confusing new technology can be. Let me guide you through using your standing desk step by step.",
            0.4: "I'd be happy to help you with your standing desk, Margaret! These new desks can be tricky at first. Let me walk you through the controls in simple steps.",
            0.5: "Of course I can help you with that standing desk! Don't worry, once you get the hang of it, it'll be much easier. Let me explain the buttons in a simple way.",
            0.6: "I completely understand how frustrating new technology can be! Your grandson got you something wonderful, and I'd love to help you figure it out. Let's go through the controls together, nice and slow.",
            0.7: "Oh bless your heart, these modern desks can be so confusing! Don't you worry one bit - I'm going to help you become a standing desk expert! Let's take this step by step, and you'll have it figured out in no time.",
            0.8: "Sweet Margaret, you're definitely not alone in finding these desks puzzling! Technology moves so fast these days. But you know what? I bet once we figure this out together, you're going to love having such a thoughtful gift from your grandson!",
            0.9: "Oh my goodness, aren't grandsons just the sweetest? He clearly cares so much about your comfort! These fancy desks can seem like rocket science at first, but I promise we'll have you raising and lowering it like a pro in no time. Ready for some desk magic?",
            1.0: "What a wonderful grandson you have! These high-tech desks are like something from the future, aren't they? But don't you worry for one second - I'm going to be your personal desk guru and we'll turn you into a standing desk wizard!"
        },

        // Dr. Rodriguez - Emergency Professional (Optimal: 0.3)
        4: {
            0.1: "Urgent chair replacement available. Medical office priority. Same-day shipping options exist. Call emergency line.",
            0.2: "I understand this is urgent medical equipment. I can immediately check our emergency replacement options for medical office chairs.",
            0.3: "I recognize this is critical for patient care. Let me immediately check our medical-grade chair inventory and expedite shipping options for your office.",
            0.4: "I completely understand how urgent this is for your patients' care. Let me immediately pull up our medical office chair options and arrange emergency delivery.",
            0.5: "I absolutely understand the critical nature of this situation for your practice. Let me immediately check our inventory for medical-grade ergonomic chairs and expedite shipping.",
            0.6: "I can definitely feel the urgency of this situation! Patient care equipment failures are serious. Let me jump right into our medical office furniture options and emergency delivery solutions.",
            0.7: "Oh wow, equipment failure during patient hours is incredibly stressful! I totally understand how critical this is for your practice. Let me dive into our emergency medical furniture solutions right away.",
            0.8: "Yikes! Medical equipment failures at the worst possible time! I completely get how urgent this is for your patients' wellbeing. Let me work some emergency magic and find you immediate replacement solutions!",
            0.9: "Oh no! Medical office chaos is every doctor's nightmare! But don't panic, I'm your emergency furniture hero! Let me work some urgent magic and find you lightning-fast chair replacement solutions!",
            1.0: "MEDICAL EMERGENCY MODE ACTIVATED! This is every healthcare provider's worst fear! But hey, I live for these high-stakes medical equipment rescue missions! Let me channel my inner medical furniture wizard!"
        },

        // Zoe - Creative Freelancer (Optimal: 0.7)
        5: {
            0.1: "Space-saving desk solutions available. Check compact furniture section. Creative designs exist. Order online.",
            0.2: "We have space-saving desk options for small apartments. I can show you our compact creative workspace furniture.",
            0.3: "I'd be happy to help you find space-saving desk solutions! We have some creative compact furniture that's perfect for small apartments.",
            0.4: "I'd love to help you create an inspiring workspace in your apartment! We have some great space-saving desk solutions that are both functional and creative.",
            0.5: "I love helping creative professionals optimize their spaces! We have some fantastic compact desk solutions that could really inspire your design work.",
            0.6: "How exciting to help a graphic designer create their perfect workspace! We have some really unique space-saving furniture that balances functionality with creative inspiration.",
            0.7: "Yes! Creating an inspiring creative space in a small apartment is such a fun challenge! We have some absolutely beautiful compact desk solutions that'll spark your creativity every day. Want to see some of my artistic favorites?",
            0.8: "Ooh, I LOVE helping creatives design their perfect workspace! You've come to the right place for inspiration-worthy furniture! We have the most gorgeous space-saving pieces that'll make your tiny apartment feel like a design studio. Let me show you some artistic gems!",
            0.9: "OMG yes! Creative workspace design is literally one of my favorite things! I'm getting so inspired just thinking about all the beautiful compact furniture we have that would turn your apartment into a creativity haven! Want to see some seriously stunning options?",
            1.0: "YESSS! A fellow creative spirit! I'm literally vibrating with excitement because we have the most AMAZING space-saving furniture that's going to transform your tiny apartment into an artistic paradise! Get ready for some serious workspace inspiration magic!"
        },

        // Captain Morrison - Military Precision (Optimal: 0.2)
        6: {
            0.1: "Standing desk model XR-2400. Dimensions: 48x30x28-48 inches. Weight capacity: 200 lbs. Assembly time: 30 minutes. Manual included.",
            0.2: "I can provide the XR-2400 specifications. Dimensions are 48x30 inches, height adjustable 28-48 inches, 200 lb capacity, requires 30-minute assembly with included hardware.",
            0.3: "I'll be happy to provide the detailed specifications for the XR-2400. It measures 48x30 inches with height adjustment from 28-48 inches, supports 200 lbs, and includes complete assembly instructions.",
            0.4: "I'd be glad to provide those XR-2400 specifications for your government office setup. The desk measures 48x30 inches, adjusts from 28-48 inches height, has a 200 lb weight capacity, and comes with detailed assembly instructions.",
            0.5: "I'll provide you with the complete XR-2400 specifications you need. Desk dimensions: 48x30 inches surface, height range 28-48 inches, weight capacity 200 lbs, estimated assembly time 30 minutes with included hardware and instructions.",
            0.6: "Absolutely, I understand you need precise specifications for government procurement. The XR-2400 features a 48x30 inch work surface, height adjustment range of 28-48 inches, 200 lb weight capacity, and comes with comprehensive assembly documentation.",
            0.7: "Of course! I know government specifications need to be exact. The XR-2400 has a 48x30 inch surface, adjusts from 28-48 inches, supports up to 200 lbs, and includes detailed assembly instructions that typically take about 30 minutes to complete.",
            0.8: "Absolutely! Government office setups require precise specs, and I've got exactly what you need! The XR-2400 features a sturdy 48x30 inch surface, smooth height adjustment from 28-48 inches, solid 200 lb capacity, plus foolproof assembly instructions!",
            0.9: "Yes sir! Military precision deserves military-grade specifications! The XR-2400 is built like a tank: 48x30 inch surface, rock-solid height adjustment 28-48 inches, bomber 200 lb capacity, and assembly instructions so clear they'd make a drill sergeant proud!",
            1.0: "SIR, YES SIR! Reporting for specification duty! The XR-2400 is mission-ready: 48x30 inch command surface, tactical height adjustment 28-48 inches, battle-tested 200 lb capacity, and assembly instructions worthy of military operations!"
        }
    },

    hints: {
        1: {
            default: "This customer is professional but friendly. Try a balanced approach - not too robotic, not too casual!",
            low_temp: "Good! Professional tone works well for business customers. Maybe add just a tiny bit more warmth?",
            high_temp: "This business customer might find that a bit too creative. Try toning it down a little.",
            perfect: "Perfect! You nailed the professional-but-helpful tone that business customers love!"
        },
        2: {
            default: "This customer LOVES energy and excitement! Match their vibe - be enthusiastic and fun!",
            low_temp: "This customer wants high energy - you can definitely be more enthusiastic here!",
            high_temp: "Love the energy! But maybe dial it back just a tiny bit so it's still helpful and not overwhelming.",
            perfect: "Amazing! You matched their excitement perfectly while still being helpful!"
        },
        3: {
            default: "This sweet customer needs patient, clear help! Be kind and gentle - explain things simply.",
            low_temp: "Good professional approach! But this customer would appreciate a bit more warmth and patience.",
            high_temp: "This customer needs clear, simple help. Try being a bit less creative and more straightforward.",
            perfect: "Perfect! That's exactly the patient, kind tone this customer needs!"
        },
        4: {
            default: "EMERGENCY! This customer needs quick, clear, professional help. No jokes, no creativity - just solutions!",
            low_temp: "Excellent! Emergency situations need that direct, solution-focused approach.",
            high_temp: "This customer is in an emergency and needs serious help, not creative responses. Lower that temperature!",
            perfect: "Brilliant! That's exactly the urgent, professional response this emergency situation needed!"
        },
        5: {
            default: "This creative person wants personality and inspiration! Be helpful but add some creative flair to match their energy.",
            low_temp: "This creative customer wants more personality - you can definitely be more enthusiastic here!",
            high_temp: "Good creative energy! Maybe dial it back just a touch so it's still practical and helpful.",
            perfect: "Amazing! You found the perfect balance of creative inspiration and helpful information!"
        },
        6: {
            default: "Military precision! This customer wants facts, numbers, and clear information. Keep it direct and professional.",
            low_temp: "Perfect! Military customers appreciate that direct, factual approach.",
            high_temp: "This military customer needs straight facts, not creative responses. Try being more direct.",
            perfect: "Excellent! That's exactly the precise, professional tone military customers expect!"
        }
    },

    scoring: {
        perfect: 30,
        close: 20,
        okay: 10,
        poor: 5,
        terrible: 0
    }
};

// Helper function to get response based on customer and temperature
function getAIResponse(customerId, temperature) {
    const temp = parseFloat(temperature);
    const customerResponses = GAME_DATA.responses[customerId];
    
    if (!customerResponses) return "Error: Customer not found.";
    
    // Find closest temperature response
    const availableTemps = Object.keys(customerResponses).map(t => parseFloat(t));
    const closestTemp = availableTemps.reduce((prev, curr) => {
        return (Math.abs(curr - temp) < Math.abs(prev - temp) ? curr : prev);
    });
    
    return customerResponses[closestTemp.toString()];
}

// Helper function to calculate score
function calculateScore(customerId, temperature, attempt = 1) {
    const customer = GAME_DATA.customers.find(c => c.id === customerId);
    if (!customer) return 0;
    
    const temp = parseFloat(temperature);
    const optimal = customer.optimalTemp;
    const difference = Math.abs(temp - optimal);
    
    let baseScore;
    if (difference <= 0.1) baseScore = GAME_DATA.scoring.perfect;
    else if (difference <= 0.2) baseScore = GAME_DATA.scoring.close;
    else if (difference <= 0.4) baseScore = GAME_DATA.scoring.okay;
    else if (difference <= 0.6) baseScore = GAME_DATA.scoring.poor;
    else baseScore = GAME_DATA.scoring.terrible;
    
    // Reduce score based on attempt number
    const multiplier = attempt === 1 ? 1 : (attempt === 2 ? 0.7 : 0.4);
    return Math.round(baseScore * multiplier);
}

// Helper function to get hint
function getHint(customerId, temperature) {
    const customer = GAME_DATA.customers.find(c => c.id === customerId);
    const hints = GAME_DATA.hints[customerId];
    
    if (!customer || !hints) return "Click me for a hint!";
    
    const temp = parseFloat(temperature);
    const optimal = customer.optimalTemp;
    const difference = Math.abs(temp - optimal);
    
    if (difference <= 0.15) return hints.perfect;
    else if (temp < optimal - 0.15) return hints.low_temp;
    else if (temp > optimal + 0.15) return hints.high_temp;
    else return hints.default;
}

// Helper function to get feedback explanation
function getFeedbackExplanation(customerId, temperature, score) {
    const customer = GAME_DATA.customers.find(c => c.id === customerId);
    if (!customer) return "Keep trying!";
    
    const temp = parseFloat(temperature);
    const optimal = customer.optimalTemp;
    
    if (score >= 25) {
        return `Perfect! Temperature ${temp} was ideal for ${customer.type.toLowerCase()} customers. ${customer.name} got exactly the right tone!`;
    } else if (score >= 15) {
        return `Good job! Temperature ${temp} was close to optimal (${optimal}) for this ${customer.type.toLowerCase()}.`;
    } else if (score >= 8) {
        return `Not bad! For ${customer.type.toLowerCase()} customers, try aiming closer to ${optimal} temperature.`;
    } else {
        return `This customer type needs a different approach. ${customer.type} customers work best around ${optimal} temperature.`;
    }
}