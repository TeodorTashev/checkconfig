import config from './config.js';

const availableSupplements = [
    {
        name: "GORILLA MODE",
        image: "https://gorillamind.com/cdn/shop/files/Mode_60oz_OrangeRush_mockup_011024_4166d67b-d1a4-4fc1-84c4-8dd38832cfef.png?v=1737567062&width=1445",
        ingredients: "L-Citrulline (5000mg), Creatine (2500mg), Caffeine (200mg), L-Tyrosine (2500mg)",
        link: "https://gorillamind.com/products/gorilla-mode?variant=42200569446445",
        benefits: "Pre-workout for energy, focus, and pumps"
    },
    {
        name: "GORILLA MODE NITRIC",
        image: "https://gorillamind.com/cdn/shop/files/Gorilla-Mode-Nitric-WhiteGummyBear_fdc4ca2a-5110-4b7d-8aef-e2e4bc109c50.png?v=1743174672&width=1445",
        ingredients: "L-Citrulline (10,000mg), Creatine (5000mg), Glycerol (4000mg), Nitrates (1000mg)",
        link: "https://gorillamind.com/products/gorilla-mode-nitric?variant=43362700001325",
        benefits: "Non-stimulant pre-workout for pumps and endurance"
    },
    {
        name: "GORILLA MODE LIGHTNING",
        image: "https://gorillamind.com/cdn/shop/files/Mode_Lightning_Bombsicle.png?v=1743912218&width=1445",
        ingredients: "Caffeine (high dose), L-Citrulline, Glycerol",
        link: "https://gorillamind.com/products/gorilla-mode-lightning?variant=42993191026733",
        benefits: "High-stim pre-workout for intense workouts"
    },
    {
        name: "GORILLA MODE BASE",
        image: "https://gorillamind.com/cdn/shop/files/ModeBase-CherryBlackout-031824.png?v=1735235931&width=1445",
        ingredients: "L-Citrulline (5000mg), Caffeine (200mg), L-Tyrosine (1500mg)",
        link: "https://gorillamind.com/products/gorilla-mode-base?variant=42117287346221",
        benefits: "Basic pre-workout for energy and pumps"
    },
    {
        name: "SIGMA",
        image: "https://gorillamind.com/cdn/shop/files/V2-Sigma_1.png?v=1691683168&width=1445",
        ingredients: "Tongkat Ali, Ashwagandha (KSM-66)",
        link: "https://gorillamind.com/products/sigma?variant=42945904246829",
        benefits: "Testosterone support and stress management"
    },
    {
        name: "OMEGA-3 ELIXIR",
        image: "https://gorillamind.com/cdn/shop/files/gorilla-omega-elixir.png?v=1722566329&width=1445",
        ingredients: "Omega-3s (2210mg), EPA, DHA, Astaxanthin",
        link: "https://gorillamind.com/products/omega-3-elixir?variant=42946708144173",
        benefits: "Heart and brain health, inflammation support"
    },
    {
        name: "ELITE MULTIVITAMIN",
        image: "https://gorillamind.com/cdn/shop/files/Gorilla-Mind-Multi-Vitamin.png?v=1705311496&width=1445",
        ingredients: "B Vitamins, Magnesium, Trace Minerals",
        link: "https://gorillamind.com/products/elite-multivitamin?variant=42945804140589",
        benefits: "Comprehensive daily nutrition"
    },
    {
        name: "GORILLA MODE PROTEIN",
        image: "https://gorillamind.com/cdn/shop/files/GMProtein_ChocolatePeanutButterFront1028_2.png?v=1718641683&width=1445",
        ingredients: "Whey Isolate (25g protein), Lactase",
        link: "https://gorillamind.com/products/gorilla-mode-protein?variant=41648265920557",
        benefits: "High-quality protein for muscle growth"
    },
    {
        name: "CREATINE MONOHYDRATE",
        image: "https://gorillamind.com/cdn/shop/files/GorillaMode_CreatinePowder100SCOOPS032425.png?v=1742847498&width=1445",
        ingredients: "Creatine (5g)",
        link: "https://gorillamind.com/products/creatine?variant=42385804558381",
        benefits: "Strength and power enhancement"
    },
    {
        name: "BETA-ALANINE",
        image: "https://gorillamind.com/cdn/shop/files/GMBeta-Alanine032725.png?v=1743096123&width=1445",
        ingredients: "Beta-Alanine (3.2-6.4g)",
        link: "https://gorillamind.com/products/beta-alanine?variant=43064432132141",
        benefits: "Endurance and fatigue reduction"
    },
    {
        name: "GORILLA DREAM",
        image: "https://gorillamind.com/cdn/shop/files/Gorilla-Dream.png?v=1701812976&width=1445",
        ingredients: "Sleep and recovery blend",
        link: "https://gorillamind.com/products/gorilla-dream?variant=42945865187373",
        benefits: "Sleep quality and recovery"
    },
    {
        name: "GORILLA MIND SMOOTH",
        image: "https://gorillamind.com/cdn/shop/files/Gorilla-Mind-Smooth.png?v=1700471327&width=1445",
        ingredients: "Stim-free nootropic blend",
        link: "https://gorillamind.com/products/gorilla-mind-smooth?variant=42945873739821",
        benefits: "Focus and cognitive function without stimulants"
    },
    {
        name: "GORILLA HYDRATION",
        image: "https://gorillamind.com/cdn/shop/files/Newest-Bombsicle.png?v=1720106397&width=1445",
        ingredients: "Sodium (750mg), Potassium, Iodine",
        link: "https://gorillamind.com/products/hydration?variant=41702188613677",
        benefits: "Electrolyte replacement for hydration"
    },
    {
        name: "GORILLA BAR",
        image: "https://gorillamind.com/cdn/shop/files/GorillaBar_BirthdayCake.png?v=1739607463&width=1445",
        ingredients: "Whey Isolate (20g protein)",
        link: "https://gorillamind.com/products/gorilla-bar?variant=42796380651565",
        benefits: "Convenient protein snack"
    },
    {
        name: "MASS GAINER",
        image: "https://gorillamind.com/cdn/shop/files/Peanut-Butter_eb4ae27c-a543-4b85-9caf-6df28b36455e.png?v=1715364104&width=1445",
        ingredients: "Whey Protein (74g), Carbs (174g), Velositol",
        link: "https://gorillamind.com/products/mass-gainer?variant=42536835383341",
        benefits: "Calorie surplus for muscle gain"
    },
    {
        name: "GORILLA MODE LIQUID GLYCEROL",
        image: "https://gorillamind.com/cdn/shop/files/2-Liquid-Glycerol-Hero-Pump-_1_0fa7b102-fea1-4970-b60f-e2c1009c70e5.png?v=1717188806&width=1445",
        ingredients: "Glycerol (12.5g), Sea Salt",
        link: "https://gorillamind.com/products/gorilla-mode-liquid-glycerol?variant=42758615629869",
        benefits: "Pump enhancement and hydration"
    },
    {
        name: "COLLAGEN PEPTIDES",
        image: "https://gorillamind.com/cdn/shop/files/Collagen-Blue-Raspberry.png?v=1703109889&width=1445",
        ingredients: "Collagen (11g), Vitamin C (90mg)",
        link: "https://gorillamind.com/products/gorilla-mind-collagen?variant=41696355909677",
        benefits: "Joint and skin health"
    },
    {
        name: "LIPOSOMAL MELATONIN",
        image: "https://gorillamind.com/cdn/shop/files/LiposomalMelatoninFront.png?v=1699032589&width=1445",
        ingredients: "Melatonin (250mcg/pump)",
        link: "https://gorillamind.com/products/liposomal-melatonin?variant=43064422924333",
        benefits: "Sleep onset and quality"
    },
    {
        name: "TURK-PLEX®",
        image: "https://gorillamind.com/cdn/shop/files/Turkesterone.png?v=1695235394&width=1445",
        ingredients: "Ajuga Turkestanica (500mg)",
        link: "https://gorillamind.com/products/turk-plex?variant=40257385758765",
        benefits: "Muscle growth and recovery"
    },
    {
        name: "ECDY-PLEX®",
        image: "https://gorillamind.com/cdn/shop/files/Ecdy-Plex_876ceab8-8015-4dd4-9fca-23f72ed1ba45.png?v=1695189954&width=1445",
        ingredients: "Ecdysterone (500mg)",
        link: "https://gorillamind.com/products/complexed-ecdysterone?variant=41632804634669",
        benefits: "Muscle protein synthesis"
    },
    {
        name: "HMB",
        image: "https://gorillamind.com/cdn/shop/files/Gorilla-HMB.png?v=1722366675&width=1445",
        ingredients: "HMB (1-3g)",
        link: "https://gorillamind.com/products/hmb?variant=42940013903917",
        benefits: "Muscle preservation and recovery"
    },
    {
        name: "HYDROPRIME® GLYCEROL",
        image: "https://gorillamind.com/cdn/shop/files/hydroprime.png?v=1706301876&width=1445",
        ingredients: "Glycerol (5-10g)",
        link: "https://gorillamind.com/products/gorilla-mode-hydroprime-glycerol?variant=43064428920877",
        benefits: "Hydration and pump enhancement"
    },
    {
        name: "GORILLA MIND CALM",
        image: "https://gorillamind.com/cdn/shop/files/Gorilla-Mind-Calm.png?v=1703874083&width=1445",
        ingredients: "Cortisol modulator blend",
        link: "https://gorillamind.com/products/gorilla-mind-calm?variant=42940562014253",
        benefits: "Stress and anxiety management"
    },
    {
        name: "GORILLA MODE AR",
        image: "https://gorillamind.com/cdn/shop/files/Gorilla-Mode-AR.png?v=1701886993&width=1445",
        ingredients: "L-Carnitine L-Tartrate",
        link: "https://gorillamind.com/products/gorilla-mode-ar?variant=42945797488685",
        benefits: "Recovery and androgen receptor support"
    },
    {
        name: "ASTRAGALUS ROOT EXTRACT",
        image: "https://gorillamind.com/cdn/shop/files/Astragalus1_c40fde67-99b9-4572-8793-c019f0617af8.png?v=1704747063&width=1445",
        ingredients: "Astragalus Extract",
        link: "https://gorillamind.com/products/astragalus?variant=42784922533933",
        benefits: "Immune system support"
    },
    {
        name: "GORILLA MODE NITRIC SAMPLE",
        image: "https://gorillamind.com/cdn/shop/files/Tiger_sBlood.png?v=1726689771&width=1445",
        ingredients: "L-Citrulline (5000mg), Creatine (2500mg)",
        link: "https://gorillamind.com/products/gorilla-mode-nitric-to-go?variant=41931704139821",
        benefits: "Sample of non-stim pre-workout"
    },
    {
        name: "GORILLA MODE SAMPLE",
        image: "https://gorillamind.com/cdn/shop/files/Orange-Rush.png?v=1726080519&width=1445",
        ingredients: "L-Citrulline (5000mg), Caffeine (200mg)",
        link: "https://gorillamind.com/products/gorilla-mode-samples?variant=43027641630765",
        benefits: "Sample of regular pre-workout"
    },
    {
        name: "LOCK & LOAD",
        image: "https://gorillamind.com/cdn/shop/files/Lock-and-Load-Render.png?v=1729529312&width=1445",
        ingredients: "Sunflower Lecithin (3500mg), Pygeum (200mg)",
        link: "https://gorillamind.com/products/lock-and-load?variant=42940448374829",
        benefits: "Male reproductive health"
    },
    {
        name: "CYCLEAN™ PM",
        image: "https://gorillamind.com/cdn/shop/files/CycleanPM.png?v=1739208846&width=1445",
        ingredients: "MitoBurn, Paradoxine",
        link: "https://gorillamind.com/products/cyclean-pm?variant=42945835630637",
        benefits: "Nighttime fat burning"
    },
    {
        name: "GLUCOSE DISPOSAL AGENT",
        image: "https://gorillamind.com/cdn/shop/files/Glucose-Disposal-Agent.png?v=1687931576&width=1445",
        ingredients: "Berberine (250mg), Bitter Melon (250mg)",
        link: "https://gorillamind.com/products/glucose-disposal-agent?variant=42940573876269",
        benefits: "Blood sugar management"
    },
    {
        name: "GORILLA MODE EAAS",
        image: "https://gorillamind.com/cdn/shop/files/EAAs-JungleJuice_9a6f588f-3c27-422e-b072-fcd7866d519e.png?v=1737744898&width=1445",
        ingredients: "EAAs (12g)",
        link: "https://gorillamind.com/products/eaas?variant=40718027784237",
        benefits: "Intra-workout amino acids"
    },
    {
        name: "CURCUMIN",
        image: "https://gorillamind.com/cdn/shop/files/Curcumin.png?v=1704747090&width=1445",
        ingredients: "Curcumin C3 Complex",
        link: "https://gorillamind.com/products/curcumin?variant=42945631223853",
        benefits: "Inflammation and joint support"
    },
    {
        name: "CITRUS BERGAMOT",
        image: "https://gorillamind.com/cdn/shop/files/Citrus-Bergamot.png?v=1704747078&width=1445",
        ingredients: "Citrus Bergamot",
        link: "https://gorillamind.com/products/citrus-bergamot?variant=42940591046701",
        benefits: "Cholesterol and heart health"
    },
    {
        name: "APELYNE™",
        image: "https://gorillamind.com/cdn/shop/files/Apelyne-Front.png?v=1689613299&width=1445",
        ingredients: "Water-absorbing blend",
        link: "https://gorillamind.com/products/apelyne?variant=42920850358317",
        benefits: "Hydration and pump enhancement"
    },
    {
        name: "BEEF LIVER CAPSULES",
        image: "https://gorillamind.com/cdn/shop/files/beef-liver-render.png?v=1720564631&width=1445",
        ingredients: "Beef Liver",
        link: "https://gorillamind.com/products/beef-liver?variant=42945772486701",
        benefits: "Natural source of vitamins and minerals"
    },
    {
        name: "GORILLA MODE INTRA",
        image: "https://gorillamind.com/cdn/shop/files/GM_Intra_1028x1028_59d63950-d628-42e3-91d5-c2c3dff80b9c.png?v=1719260834&width=1445",
        ingredients: "Cluster Dextrin, Creatine, Taurine",
        link: "https://gorillamind.com/products/gorilla-mode-intra?variant=42129448239149",
        benefits: "Intra-workout energy and recovery"
    },
    {
        name: "GORILLA MIND RESPAWN",
        image: "https://gorillamind.com/cdn/shop/files/Respawn-Bombsicle-042224.png?v=1717537477&width=1445",
        ingredients: "L-Tyrosine (5000mg), Caffeine (300mg), Alpha-GPC (800mg)",
        link: "https://gorillamind.com/products/gorilla-mind-respawn?variant=41583487877165",
        benefits: "Energy and focus booster"
    },
    {
        name: "CORTISOL BLOCKER (WITH EMODIN)",
        image: "https://gorillamind.com/cdn/shop/files/Gorilla-Mind-Calm_c9252445-eacc-48fc-bc6a-cf723eed5bb8.png?v=1735327479&width=1445",
        ingredients: "Emodin",
        link: "https://gorillamind.com/products/cortisol-blocker?variant=42945663270957",
        benefits: "Stress and cortisol management"
    },
    {
        name: "GORILLA MIND",
        image: "https://gorillamind.com/cdn/shop/files/Gorilla-Mind.png?v=1700466711&width=1445",
        ingredients: "Stimulant nootropic blend",
        link: "https://gorillamind.com/products/gorilla-mind?variant=42945878491181",
        benefits: "Cognitive enhancement and focus"
    },
    {
        name: "SEA MOSS ELIXIR",
        image: "https://gorillamind.com/cdn/shop/files/Sea-Moss-Front-060524.png?v=1734459811&width=1445",
        ingredients: "Sea Moss, Bladderwrack, Burdock",
        link: "https://gorillamind.com/products/sea-moss-elixir?variant=43172322050093",
        benefits: "Thyroid and immune support"
    }
];

const apiService = {
    // Generate clarifying questions using OpenAI API
    async generateClarifyingQuestions(quizData) {
        try {
            const response = await fetch(config.OPENAI_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: `You are a supplement recommendation expert. Generate 2-3 personalized clarifying questions based on the user's quiz responses. Consider:

1. Training and Performance:
   - Specific training goals and metrics
   - Current performance challenges
   - Training schedule and intensity
   - Recovery needs

2. Lifestyle and Schedule:
   - Daily routine and supplement timing
   - Travel or work constraints
   - Meal timing and frequency
   - Sleep schedule and quality

3. Health and Wellness:
   - Current health status
   - Recent blood work or health markers
   - Stress management
   - Energy levels throughout the day

4. Supplement Experience:
   - Previous supplement experiences
   - Preferred supplement forms (powder, capsules, etc.)
   - Budget considerations
   - Supplement timing preferences

IMPORTANT RULES:
- Questions should be highly personalized based on the user's quiz responses
- Avoid generic questions about dietary restrictions unless specifically relevant
- Focus on the user's specific goals and challenges
- Consider their training type and frequency
- Account for their sleep and stress levels
- Consider their age and gender
- Ask about specific performance metrics they want to improve

Return the questions as a JSON array of objects with 'id' and 'text' fields. Example format:
[
  {"id": "q1", "text": "Your first personalized question here"},
  {"id": "q2", "text": "Your second personalized question here"}
]`
                        },
                        {
                            role: "user",
                            content: `Generate 2-3 personalized clarifying questions based on these quiz responses: ${JSON.stringify(quizData)}`
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 500
                })
            });

            if (!response.ok) {
                throw new Error('Failed to generate clarifying questions');
            }

            const data = await response.json();
            const content = data.choices[0].message.content;
            
            // Parse the JSON response
            let questions;
            try {
                // Try to parse the content directly
                questions = JSON.parse(content);
                
                // Ensure we have a valid array of questions
                if (!Array.isArray(questions)) {
                    throw new Error('Invalid response format');
                }
                
                // Validate each question has required fields
                return questions.map((q, index) => ({
                    id: q.id || `q${index + 1}`,
                    text: q.text || `Question ${index + 1}`
                }));
            } catch (e) {
                console.error('Error parsing clarifying questions:', e);
                // Return default questions if parsing fails
                return [
                    { id: 'q1', text: "What specific health goals are you trying to achieve with supplements?" },
                    { id: 'q2', text: "Do you have any dietary restrictions or allergies?" },
                    { id: 'q3', text: "What time of day do you typically take supplements?" }
                ];
            }
        } catch (error) {
            console.error('Error generating clarifying questions:', error);
            // Return default questions if API fails
            return [
                { id: 'q1', text: "What specific health goals are you trying to achieve with supplements?" },
                { id: 'q2', text: "Do you have any dietary restrictions or allergies?" },
                { id: 'q3', text: "What time of day do you typically take supplements?" }
            ];
        }
    },

    // Generate supplement recommendations
    async generateRecommendations(mainAnswers, clarifyingAnswers) {
        try {
            const response = await fetch(config.OPENAI_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-4-turbo-preview",
                    messages: [
                        {
                            role: "system",
                            content: `You are a supplement recommendation expert. Generate 3 personalized supplement recommendations based on the user's quiz responses and clarifying answers. You must ONLY recommend supplements from this list:

${JSON.stringify(availableSupplements, null, 2)}

CRITICAL RULES:
1. Dietary Restrictions:
   - NEVER recommend animal-based products to vegans/vegetarians
   - For vegans: use plant-based omega-3 (algae), plant protein, etc.
   - For vegetarians: avoid gelatin capsules, use plant-based alternatives

2. Health Considerations:
   - Avoid stimulants for people with high stress or sleep issues
   - Be cautious with joint supplements for young users
   - Consider digestive sensitivities
   - Account for any mentioned health conditions

3. Age Considerations:
   - Younger users (<25): focus on basics, avoid advanced supplements
   - Middle age (25-45): consider joint health, recovery
   - Older users (>45): focus on joint health, cognitive support

4. Training Considerations:
   - High-intensity training: recovery and joint support
   - Endurance: electrolyte balance, energy support
   - Strength training: protein, creatine (if appropriate)
   - Sports-specific: injury prevention, performance

5. Lifestyle Factors:
   - Poor sleep: avoid stimulants, consider sleep support
   - High stress: adaptogens, stress support
   - Busy lifestyle: convenience, easy-to-take formats

6. Current Stack:
   - Avoid duplicating existing supplements
   - Consider interactions with current stack
   - Fill gaps in current regimen

Return the recommendations as a JSON array of objects with:
- name: supplement name (must match exactly from the list above)
- reason: personalized explanation
- image: image URL (must match exactly from the list above)
- link: product link (must match exactly from the list above)
- considerations: any special notes or warnings

Example format:
[
  {
    "name": "GORILLA MODE",
    "reason": "Personalized explanation",
    "image": "https://gorillamind.com/cdn/shop/files/Mode_60oz_OrangeRush_mockup_011024_4166d67b-d1a4-4fc1-84c4-8dd38832cfef.png?v=1737567062&width=1445",
    "link": "https://gorillamind.com/products/gorilla-mode?variant=42200569446445",
    "considerations": "Special notes"
  }
]`
                        },
                        {
                            role: "user",
                            content: `Generate 3 personalized supplement recommendations based on these main answers: ${JSON.stringify(mainAnswers)} and clarifying answers: ${JSON.stringify(clarifyingAnswers)}`
                        }
                    ],
                    temperature: 0.8,
                    max_tokens: 1000
                })
            });

            if (!response.ok) {
                throw new Error('Failed to generate recommendations');
            }

            const data = await response.json();
            const content = data.choices[0].message.content;
            
            // Parse the JSON response
            try {
                // Try to parse the content directly
                const recommendations = JSON.parse(content);
                
                // Ensure we have a valid array of recommendations
                if (!Array.isArray(recommendations)) {
                    throw new Error('Invalid response format');
                }
                
                // Validate and map recommendations to ensure all required fields exist
                return recommendations.map(rec => {
                    // Find the matching supplement from availableSupplements
                    const matchingSupplement = availableSupplements.find(sup => 
                        sup.name.toLowerCase() === rec.name.toLowerCase()
                    );
                    
                    return {
                        name: rec.name || 'Unknown Supplement',
                        reason: rec.reason || 'Personalized recommendation based on your needs',
                        image: matchingSupplement ? matchingSupplement.image : availableSupplements[0].image,
                        link: matchingSupplement ? matchingSupplement.link : availableSupplements[0].link,
                        considerations: rec.considerations || ''
                    };
                });
            } catch (e) {
                console.error('Error parsing recommendations:', e);
                // Return default recommendations if parsing fails
                return [
                    {
                        name: "GORILLA MODE",
                        reason: "A comprehensive pre-workout for energy and performance.",
                        image: availableSupplements[0].image,
                        link: availableSupplements[0].link,
                        considerations: "Contains caffeine, not recommended for those sensitive to stimulants"
                    },
                    {
                        name: "CREATINE MONOHYDRATE",
                        reason: "Essential for strength and power enhancement.",
                        image: availableSupplements[8].image,
                        link: availableSupplements[8].link,
                        considerations: "Safe and effective for most individuals"
                    }
                ];
            }
        } catch (error) {
            console.error('Error generating recommendations:', error);
            // Return default recommendations if API fails
            return [
                {
                    name: "GORILLA MODE",
                    reason: "A comprehensive pre-workout for energy and performance.",
                    image: availableSupplements[0].image,
                    link: availableSupplements[0].link,
                    considerations: "Contains caffeine, not recommended for those sensitive to stimulants"
                },
                {
                    name: "CREATINE MONOHYDRATE",
                    reason: "Essential for strength and power enhancement.",
                    image: availableSupplements[8].image,
                    link: availableSupplements[8].link,
                    considerations: "Safe and effective for most individuals"
                }
            ];
        }
    }
};

export default apiService; 