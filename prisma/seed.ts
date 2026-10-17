import { PrismaClient, MissionCategory, DifficultyLevel } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data (for development)
  await prisma.quizAnswer.deleteMany();
  await prisma.quizAttempt.deleteMany();
  await prisma.quizQuestion.deleteMany();
  await prisma.userAchievement.deleteMany();
  await prisma.achievement.deleteMany();
  await prisma.userProgress.deleteMany();
  await prisma.missionSubmission.deleteMany();
  await prisma.ecoMission.deleteMany();
  await prisma.user.deleteMany();

  console.log('✅ Cleared existing data');

  // Seed Eco-Missions
  const missions = await prisma.ecoMission.createMany({
    data: [
      {
        title: 'Sort Household Recycling',
        description: 'Properly separate paper, plastic, glass, and metal into the correct bins for a full week.',
        instructions: `Complete this mission by:
1. Set up separate bins for paper, plastic, glass, and metal
2. Properly sort your household waste for 7 consecutive days
3. Take photos of your organized recycling bins
4. Document any interesting findings about your waste patterns

Tips:
- Rinse containers before recycling
- Remove caps from bottles
- Flatten cardboard boxes
- Check local recycling guidelines`,
        category: MissionCategory.WASTE_MANAGEMENT,
        difficulty: DifficultyLevel.EASY,
        points: 50,
        estimatedTime: 30,
        estimatedCO2: 2.4,
        requiresEvidence: true,
      },
      {
        title: 'Five-Minute Shower Challenge',
        description: 'Keep every shower under five minutes for seven consecutive days to conserve water.',
        instructions: `Complete this mission by:
1. Use a timer or waterproof clock in your bathroom
2. Limit each shower to 5 minutes or less
3. Track your progress for 7 consecutive days
4. Document your water-saving experience

Tips:
- Turn off water while soaping
- Use a shower timer app
- Play a 5-minute song as a timer
- Consider taking cooler, shorter showers`,
        category: MissionCategory.WATER_CONSERVATION,
        difficulty: DifficultyLevel.MEDIUM,
        points: 40,
        estimatedTime: 35,
        estimatedCO2: 1.8,
        estimatedWater: 140.0,
        requiresEvidence: true,
      },
      {
        title: 'Switch to LED Bulbs',
        description: 'Replace at least three incandescent bulbs at home with energy-efficient LED alternatives.',
        instructions: `Complete this mission by:
1. Identify 3 or more incandescent bulbs in your home
2. Purchase LED replacement bulbs (check wattage equivalents)
3. Install the new LED bulbs
4. Take before and after photos

Tips:
- LED bulbs use 75% less energy
- They last 25 times longer
- Choose warm white for living spaces
- Check for Energy Star certification`,
        category: MissionCategory.ENERGY_SAVING,
        difficulty: DifficultyLevel.EASY,
        points: 60,
        estimatedTime: 45,
        estimatedCO2: 3.2,
        requiresEvidence: true,
      },
      {
        title: 'Bike to School Week',
        description: 'Commute by bicycle or walk instead of using a car for five school days in a row.',
        instructions: `Complete this mission by:
1. Plan a safe bike/walk route to school
2. Use bike or walk for 5 consecutive school days
3. Track your distance and time
4. Document your journey with photos or a log

Tips:
- Check weather forecasts
- Wear appropriate safety gear
- Bring a lock for your bike
- Consider biking with friends`,
        category: MissionCategory.SUSTAINABLE_TRANSPORT,
        difficulty: DifficultyLevel.MEDIUM,
        points: 75,
        estimatedTime: 150,
        estimatedCO2: 5.6,
        requiresEvidence: true,
      },
      {
        title: 'Plastic-Free Grocery Run',
        description: 'Complete a full grocery shopping trip using only reusable bags and containers.',
        instructions: `Complete this mission by:
1. Prepare reusable bags, containers, and produce bags
2. Plan your grocery list
3. Complete your shopping without accepting any plastic bags
4. Take photos of your plastic-free shopping

Tips:
- Bring various sized containers
- Use cloth produce bags
- Choose items with minimal packaging
- Shop at bulk sections when possible`,
        category: MissionCategory.WASTE_MANAGEMENT,
        difficulty: DifficultyLevel.EASY,
        points: 35,
        estimatedTime: 60,
        estimatedCO2: 1.1,
        estimatedWaste: 0.5,
        requiresEvidence: true,
      },
      {
        title: 'Plant a Native Tree',
        description: 'Plant and care for a native tree species in your yard or an approved community area.',
        instructions: `Complete this mission by:
1. Research native tree species for your region
2. Obtain permission if planting in community space
3. Prepare the planting site properly
4. Plant the tree with proper technique
5. Create a care plan and initial watering schedule
6. Document the planting with photos

Tips:
- Choose species suited to your climate
- Plant in appropriate season
- Dig a hole 2-3 times wider than root ball
- Water thoroughly after planting`,
        category: MissionCategory.BIODIVERSITY,
        difficulty: DifficultyLevel.HARD,
        points: 100,
        estimatedTime: 180,
        estimatedCO2: 21.0,
        requiresEvidence: true,
      },
      {
        title: 'Meatless Monday Month',
        description: 'Skip meat every Monday for four weeks and document your plant-based meals.',
        instructions: `Complete this mission by:
1. Plan meatless meals for 4 consecutive Mondays
2. Try new plant-based recipes
3. Document your meals with photos
4. Track how you feel and any observations

Tips:
- Explore legumes, tofu, and tempeh
- Try international cuisines (Indian, Mediterranean)
- Ensure adequate protein intake
- Share recipes with friends`,
        category: MissionCategory.AWARENESS,
        difficulty: DifficultyLevel.MEDIUM,
        points: 80,
        estimatedTime: 240,
        estimatedCO2: 12.4,
        requiresEvidence: true,
      },
      {
        title: 'Carpool Coordination',
        description: 'Organize a carpool with at least two classmates for two weeks of school commutes.',
        instructions: `Complete this mission by:
1. Find 2+ classmates living in your area
2. Create a carpool schedule
3. Coordinate pickup times and locations
4. Maintain the carpool for 10 school days
5. Document the arrangement

Tips:
- Use a shared calendar
- Establish backup plans
- Share fuel costs fairly
- Rotate drivers if applicable`,
        category: MissionCategory.SUSTAINABLE_TRANSPORT,
        difficulty: DifficultyLevel.MEDIUM,
        points: 55,
        estimatedTime: 600,
        estimatedCO2: 7.3,
        requiresEvidence: true,
      },
      {
        title: 'Start a Kitchen Herb Garden',
        description: 'Grow three edible herbs at home to reduce store-bought packaging and food miles.',
        instructions: `Complete this mission by:
1. Choose 3 herbs (basil, parsley, mint, etc.)
2. Gather pots, soil, and seeds/seedlings
3. Plant your herbs in suitable containers
4. Establish a watering and care routine
5. Document growth with weekly photos

Tips:
- Most herbs need 6+ hours of sunlight
- Use well-draining soil
- Start with easy herbs like basil or mint
- Harvest regularly to encourage growth`,
        category: MissionCategory.WASTE_MANAGEMENT,
        difficulty: DifficultyLevel.EASY,
        points: 45,
        estimatedTime: 90,
        estimatedCO2: 0.9,
        requiresEvidence: true,
      },
      {
        title: 'Unplug Vampire Electronics',
        description: 'Unplug all unused chargers and devices nightly for two weeks to cut standby power.',
        instructions: `Complete this mission by:
1. Identify all devices that draw standby power
2. Establish a nightly unplugging routine
3. Consider using smart power strips
4. Track for 14 consecutive days
5. Document your experience

Tips:
- Devices like phone chargers draw power even when not charging
- Smart TVs and cable boxes are major culprits
- Power strips make unplugging easier
- Keep a checklist near your door`,
        category: MissionCategory.ENERGY_SAVING,
        difficulty: DifficultyLevel.EASY,
        points: 30,
        estimatedTime: 42,
        estimatedCO2: 1.5,
        requiresEvidence: true,
      },
    ],
  });

  console.log(`✅ Created ${missions.count} eco-missions`);

  // Seed Quiz Questions
  const quizQuestions = await prisma.quizQuestion.createMany({
    data: [
      {
        question: 'Which gas is the primary contributor to the greenhouse effect on Earth?',
        options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium'],
        correctIndex: 1,
        explanation: 'Carbon dioxide traps heat in the atmosphere, making it the leading greenhouse gas from human activity.',
        category: 'Climate Change',
      },
      {
        question: 'How long does it take for a single plastic bottle to decompose in a landfill?',
        options: ['10 years', '50 years', '200 years', '450 years'],
        correctIndex: 3,
        explanation: 'A plastic bottle can take up to 450 years to break down, which is why recycling matters.',
        category: 'Waste Management',
      },
      {
        question: 'Which everyday action saves the most water at home?',
        options: [
          'Turning off the tap while brushing teeth',
          'Taking baths instead of showers',
          'Watering plants at noon',
          'Running half-full laundry loads',
        ],
        correctIndex: 0,
        explanation: 'Simply turning off the tap while brushing can save up to 8 gallons of water per day.',
        category: 'Water Conservation',
      },
      {
        question: 'What percentage of household energy is typically used for heating and cooling?',
        options: ['About 10%', 'About 25%', 'About 48%', 'About 75%'],
        correctIndex: 2,
        explanation: 'Heating and cooling account for roughly 48% of the energy used in a typical home.',
        category: 'Energy',
      },
      {
        question: 'Which material is infinitely recyclable without losing quality?',
        options: ['Plastic', 'Aluminum', 'Paper', 'Cardboard'],
        correctIndex: 1,
        explanation: 'Aluminum can be recycled endlessly without degrading, unlike plastic which downgrades each cycle.',
        category: 'Recycling',
      },
      {
        question: 'What is a "carbon footprint"?',
        options: [
          'The size of a coal mine',
          'Total greenhouse gas emissions from an activity',
          'A measure of forest area',
          'The weight of carbon in a product',
        ],
        correctIndex: 1,
        explanation: 'A carbon footprint is the total amount of greenhouse gases produced directly and indirectly by an activity.',
        category: 'Climate Change',
      },
      {
        question: 'Which transport method produces the least carbon per passenger mile?',
        options: ['Solo driving', 'Flying', 'Cycling', 'Riding a motorcycle'],
        correctIndex: 2,
        explanation: 'Cycling produces zero tailpipe emissions, making it the cleanest option per passenger mile.',
        category: 'Transportation',
      },
      {
        question: 'How much water is saved by taking a 5-minute shower instead of a 15-minute one?',
        options: ['About 5 gallons', 'About 15 gallons', 'About 30 gallons', 'About 50 gallons'],
        correctIndex: 2,
        explanation: 'Cutting a 15-minute shower to 5 minutes saves roughly 30 gallons of water.',
        category: 'Water Conservation',
      },
      {
        question: 'Which food has the highest carbon footprint per kilogram?',
        options: ['Beef', 'Rice', 'Potatoes', 'Lentils'],
        correctIndex: 0,
        explanation: 'Beef produces far more emissions per kilogram than plant-based foods due to methane from cattle.',
        category: 'Food & Agriculture',
      },
      {
        question: 'What does the "3 Rs" of sustainability stand for?',
        options: ['Read, Remember, Recite', 'Reduce, Reuse, Recycle', 'Repair, Restore, Renew', 'Refuse, Return, Replace'],
        correctIndex: 1,
        explanation: 'Reduce, Reuse, Recycle is the classic waste hierarchy that prioritizes cutting waste first.',
        category: 'Waste Management',
      },
      {
        question: 'Which renewable energy source currently generates the most electricity worldwide?',
        options: ['Solar', 'Wind', 'Hydropower', 'Geothermal'],
        correctIndex: 2,
        explanation: 'Hydropower remains the largest source of renewable electricity globally.',
        category: 'Renewable Energy',
      },
      {
        question: 'Approximately how many trees does it take to offset one ton of CO₂ per year?',
        options: ['About 5 trees', 'About 45 trees', 'About 150 trees', 'About 500 trees'],
        correctIndex: 1,
        explanation: 'Roughly 45 mature trees are needed to absorb one ton of CO₂ over a year.',
        category: 'Climate Change',
      },
      {
        question: 'What is "vampire power"?',
        options: [
          'Energy from horror movies',
          'Electricity used by devices when turned off',
          'Power generated at night',
          'Energy lost through windows',
        ],
        correctIndex: 1,
        explanation: 'Vampire power is the energy electronics draw while plugged in but switched off or on standby.',
        category: 'Energy',
      },
      {
        question: 'Which of these is a benefit of composting food waste?',
        options: [
          'It increases landfill size',
          'It produces methane-rich soil',
          'It reduces methane emissions from landfills',
          'It speeds up global warming',
        ],
        correctIndex: 2,
        explanation: 'Composting keeps food out of landfills where it would otherwise produce methane, a potent greenhouse gas.',
        category: 'Waste Management',
      },
      {
        question: "How much of the Earth's surface is covered by oceans?",
        options: ['About 30%', 'About 50%', 'About 71%', 'About 90%'],
        correctIndex: 2,
        explanation: "Oceans cover about 71% of Earth's surface and absorb roughly a quarter of human CO₂ emissions.",
        category: 'Biodiversity',
      },
      {
        question: 'Which shopping habit most reduces packaging waste?',
        options: [
          'Buying individually wrapped snacks',
          'Bringing reusable bags and containers',
          'Choosing single-use plastics',
          'Buying smaller packages more often',
        ],
        correctIndex: 1,
        explanation: 'Bringing your own reusable bags and containers dramatically cuts single-use packaging waste.',
        category: 'Waste Management',
      },
      {
        question: 'What is "fast fashion" known for?',
        options: [
          'Durable, long-lasting clothing',
          'Cheap, rapidly produced clothing with high environmental cost',
          'Locally made garments',
          'Clothing made from recycled fabric',
        ],
        correctIndex: 1,
        explanation: 'Fast fashion produces cheap clothing quickly, leading to massive waste and pollution.',
        category: 'Sustainable Living',
      },
      {
        question: 'Which appliance typically uses the most energy in a home?',
        options: ['Refrigerator', 'Toaster', 'Hair dryer', 'LED nightlight'],
        correctIndex: 0,
        explanation: 'The refrigerator runs constantly, making it one of the biggest energy users in most homes.',
        category: 'Energy',
      },
      {
        question: 'What is the main environmental benefit of eating seasonal, local produce?',
        options: [
          'It tastes worse',
          'It reduces transport emissions and cold storage needs',
          'It increases food miles',
          'It requires more packaging',
        ],
        correctIndex: 1,
        explanation: 'Seasonal local produce travels shorter distances and needs less refrigeration, lowering emissions.',
        category: 'Food & Agriculture',
      },
      {
        question: 'Which of these actions best helps protect biodiversity?',
        options: ['Planting native species in gardens', 'Using more pesticides', 'Paving over green spaces', 'Introducing invasive species'],
        correctIndex: 0,
        explanation: 'Planting native species supports local pollinators and wildlife, preserving biodiversity.',
        category: 'Biodiversity',
      },
    ],
  });

  console.log(`✅ Created ${quizQuestions.count} quiz questions`);

  // Seed Achievements
  const achievements = await prisma.achievement.createMany({
    data: [
      {
        name: 'First Steps',
        description: 'Complete your first eco-mission',
        criteria: JSON.stringify({ type: 'missions_completed', value: 1 }),
        icon: '🌱',
      },
      {
        name: 'Green Starter',
        description: 'Complete 5 eco-missions',
        criteria: JSON.stringify({ type: 'missions_completed', value: 5 }),
        icon: '🌿',
      },
      {
        name: 'Eco Warrior',
        description: 'Complete all 10 eco-missions',
        criteria: JSON.stringify({ type: 'missions_completed', value: 10 }),
        icon: '🏆',
      },
      {
        name: 'Quiz Beginner',
        description: 'Complete your first environmental quiz',
        criteria: JSON.stringify({ type: 'quiz_attempts', value: 1 }),
        icon: '📚',
      },
      {
        name: 'Quiz Master',
        description: 'Score 90% or higher on the environmental quiz',
        criteria: JSON.stringify({ type: 'quiz_score', value: 90 }),
        icon: '🎓',
      },
      {
        name: 'Carbon Saver',
        description: 'Save at least 10 kg of CO₂ through verified missions',
        criteria: JSON.stringify({ type: 'co2_saved', value: 10 }),
        icon: '💚',
      },
      {
        name: 'Water Guardian',
        description: 'Save at least 100 liters of water through verified missions',
        criteria: JSON.stringify({ type: 'water_saved', value: 100 }),
        icon: '💧',
      },
      {
        name: 'Waste Reducer',
        description: 'Reduce at least 5 kg of waste through verified missions',
        criteria: JSON.stringify({ type: 'waste_reduced', value: 5 }),
        icon: '♻️',
      },
    ],
  });

  console.log(`✅ Created ${achievements.count} achievements`);

  console.log('🎉 Database seeded successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error seeding database:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
