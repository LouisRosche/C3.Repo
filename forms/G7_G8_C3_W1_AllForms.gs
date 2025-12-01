/**
 * ============================================================================
 * KAMS CYCLE 3 WEEK 1 - ALL FORMS GENERATOR
 * Grade 7 + Grade 8 | 10 Forms Total | 200 Points Total
 * ============================================================================
 *
 * DEPLOYMENT:
 * 1. Open script.google.com
 * 2. Create new project, paste this entire script
 * 3. Run: createAllForms() - creates all 10 forms
 *    OR run individual: createG7Forms() or createG8Forms()
 * 4. Check Drive for forms, get embed URLs from Logger
 *
 * CONSTRAINTS FOLLOWED:
 * - No emojis in feedback (Apps Script limitation)
 * - All feedback < 200 characters
 * - setPoints() only on auto-gradable items (MCQ, checkbox, scale)
 * - Never setPoints(0) - omitted entirely for ungraded
 * - Manual grading rubrics in section headers for text items
 */

// ============================================================================
// MASTER FUNCTION - Creates all 10 forms
// ============================================================================

function createAllForms() {
  Logger.log('=== CREATING ALL CYCLE 3 WEEK 1 FORMS ===\n');

  const g7Forms = createG7Forms();
  const g8Forms = createG8Forms();

  Logger.log('\n=== ALL FORMS CREATED SUCCESSFULLY ===');
  Logger.log('Total forms: ' + (g7Forms.length + g8Forms.length));

  return { g7: g7Forms, g8: g8Forms };
}

// ============================================================================
// GRADE 7 FORMS (5 forms, 100 points)
// ============================================================================

function createG7Forms() {
  Logger.log('--- GRADE 7 FORMS ---');
  const forms = [];

  forms.push(createG7Hook());
  forms.push(createG7Station1());
  forms.push(createG7Station2());
  forms.push(createG7Station3());
  forms.push(createG7ExitTicket());

  return forms;
}

// G7 Hook - 15 points
function createG7Hook() {
  const form = FormApp.create('G7.C3.W1: Hook - The Hot Car Mystery');
  setupQuizForm_(form,
    'The Hot Car Mystery\n\n' +
    'It\'s a sunny 75F day. You park your car for 30 minutes. The dashboard reaches 150F!\n' +
    'The car generates no heat. Where does the extra heat come from?\n\n' +
    'Time: ~10 min | Points: 15',
    'Hook complete! Continue to Station 1 to test your predictions with the PhET simulation.'
  );

  // Q1: Pre-assessment (3 pts manual)
  addManualHeader_(form, 'Question 1: Cycle 2 Review', 3,
    '3: Both correct with examples | 2: One correct | 1: Attempt | 0: No response');
  form.addParagraphTextItem()
    .setTitle('In a chemical reaction, when is energy RELEASED? When is energy ABSORBED?')
    .setHelpText('Think back to Cycle 2: endothermic vs exothermic reactions.')
    .setRequired(true);

  // Q2: Phenomenon (3 pts manual)
  addManualHeader_(form, 'Question 2: Observation', 3,
    '3: Describes temp difference + inside hotter | 2: Partial | 1: Vague | 0: None');
  form.addParagraphTextItem()
    .setTitle('Describe what happens to the temperature inside a car on a sunny day compared to outside.')
    .setRequired(true);

  // Q3: Hypothesis (3 pts manual)
  addManualHeader_(form, 'Question 3: Your Hypothesis', 3,
    '3: Scientific reasoning | 2: Reasonable guess | 1: No reasoning | 0: None');
  form.addParagraphTextItem()
    .setTitle('Why do you think the inside of the car gets hotter than the outside?')
    .setHelpText('This is a prediction - explain your thinking.')
    .setRequired(true);

  // Q4: Energy type MCQ (3 pts auto)
  const q4 = form.addMultipleChoiceItem()
    .setTitle('When the car interior absorbs sunlight, what type of energy change is happening?')
    .setRequired(true);
  q4.setChoices([
    q4.createChoice('a) Endothermic (absorbs energy)', true),
    q4.createChoice('b) Exothermic (releases energy)', false),
    q4.createChoice('c) Neither - no energy change', false),
    q4.createChoice('d) Both at the same time', false)
  ]);
  q4.setPoints(3);
  q4.setFeedbackForCorrect(createFeedback_('Correct! Absorbing sunlight is endothermic - energy goes INTO the materials.'));
  q4.setFeedbackForIncorrect(createFeedback_('Review: Endothermic = absorbs energy. Materials absorbing sunlight = endothermic.'));

  // Q5: Confidence (3 pts auto)
  const q5 = form.addScaleItem()
    .setTitle('How confident are you in your explanation?')
    .setBounds(1, 5)
    .setLabels('Guessing', 'Very confident')
    .setRequired(true);
  q5.setPoints(3);

  logFormUrls_(form, 'G7 Hook');
  return form;
}

// G7 Station 1 - 20 points
function createG7Station1() {
  const form = FormApp.create('G7.C3.W1: Station 1 - Molecular Vibration & IR');
  setupQuizForm_(form,
    'Discover WHY CO2 Traps Heat\n\n' +
    'Use PhET simulation to test molecules with infrared radiation.\n' +
    'Link: https://phet.colorado.edu/en/simulations/molecules-and-light\n\n' +
    'Time: ~18 min | Points: 20\n\n' +
    'CRITICAL: Do molecules BREAK or just VIBRATE when absorbing IR?',
    'Station 1 complete! Key insight: CO2 vibrates (does not break) when absorbing IR.'
  );

  // Q1: Observation MCQ (4 pts)
  const q1 = form.addMultipleChoiceItem()
    .setTitle('In the PhET simulation, when infrared radiation hits a CO2 molecule, what happens?')
    .setHelpText('Watch the CO2 molecule carefully when IR waves hit it.')
    .setRequired(true);
  q1.setChoices([
    q1.createChoice('a) It breaks apart into separate atoms', false),
    q1.createChoice('b) It vibrates faster (stretches and bends)', true),
    q1.createChoice('c) It slows down and stops moving', false),
    q1.createChoice('d) Nothing happens - the IR passes through', false)
  ]);
  q1.setPoints(4);
  q1.setFeedbackForCorrect(createFeedback_('Correct! CO2 vibrates when absorbing IR - it does NOT break apart.'));
  q1.setFeedbackForIncorrect(createFeedback_('Look again: The molecule stays together but moves more. That is vibration.'));

  // Q2: Energy type MCQ (4 pts)
  const q2 = form.addMultipleChoiceItem()
    .setTitle('CO2 absorbing IR energy is an example of what type of process?')
    .setRequired(true);
  q2.setChoices([
    q2.createChoice('a) Endothermic (absorbs energy)', true),
    q2.createChoice('b) Exothermic (releases energy)', false),
    q2.createChoice('c) Neither - no energy transfer', false)
  ]);
  q2.setPoints(4);
  q2.setFeedbackForCorrect(createFeedback_('Correct! Energy goes INTO the molecule, making it endothermic.'));
  q2.setFeedbackForIncorrect(createFeedback_('Absorbing = energy goes IN = endothermic. Review Cycle 2 notes.'));

  // Q3: Critical misconception (5 pts manual)
  addManualHeader_(form, 'Question 3: CRITICAL - Who Is Correct?', 5,
    '5: Correct + bond energy + Cycle 2 | 4: Correct + one explanation | 3: Correct + basic | 2: Correct only | 1: Wrong | 0: None');
  form.addParagraphTextItem()
    .setTitle('Student A says: "When CO2 absorbs energy, it breaks the bonds."\nStudent B says: "The bonds don\'t break, they just vibrate."\n\nWho is correct and WHY?')
    .setHelpText('Use simulation observations AND Cycle 2 bond energy concepts.')
    .setRequired(true);

  // Q4: Cycle 2 connection (3 pts manual)
  addManualHeader_(form, 'Question 4: Cycle 2 Connection', 3,
    '3: Breaking bonds requires energy + IR insufficient | 2: Mentions bond energy | 1: Vague | 0: None');
  form.addParagraphTextItem()
    .setTitle('In Cycle 2, we learned that breaking bonds REQUIRES energy. How does this explain why CO2 bonds DON\'T break when absorbing IR?')
    .setRequired(true);

  // Q5: N2 application (2 pts manual)
  addManualHeader_(form, 'Question 5: Application', 2,
    '2: Mentions molecular structure (2 atoms, symmetric) | 1: Reasonable attempt | 0: None');
  form.addParagraphTextItem()
    .setTitle('N2 (nitrogen) doesn\'t absorb much IR. Based on molecular structure, why might this be?')
    .setHelpText('Compare: N2 has 2 identical atoms. CO2 has 3 atoms. What is different?')
    .setRequired(true);

  // Q6: Self-assessment (2 pts)
  const q6 = form.addScaleItem()
    .setTitle('Rate your understanding: I can explain how molecules absorb energy without breaking bonds.')
    .setBounds(1, 5)
    .setLabels('Not confident', 'Very confident')
    .setRequired(true);
  q6.setPoints(2);

  logFormUrls_(form, 'G7 Station 1');
  return form;
}

// G7 Station 2 - 20 points
function createG7Station2() {
  const form = FormApp.create('G7.C3.W1: Station 2 - Carbon Cycle Conservation');
  setupQuizForm_(form,
    'Trace Carbon Atoms Through Earth\'s Systems\n\n' +
    'Prove that carbon atoms are NEVER created or destroyed - just rearranged.\n\n' +
    'Time: ~15 min | Points: 20\n\n' +
    'KEY: CO2 is 27% carbon by mass. You will need a calculator!',
    'Station 2 complete! Carbon cycles through Earth - never created or destroyed.'
  );

  // Q1: Mass calculation (4 pts manual)
  addManualHeader_(form, 'Question 1: Carbon Calculation', 4,
    '4: Correct (12.9-13.1 lbs) + work shown | 3: Correct, work unclear | 2: Setup right, calc error | 1: Wrong setup | 0: None\nANSWER: 48 x 0.27 = 12.96 lbs');
  form.addParagraphTextItem()
    .setTitle('A tree absorbs 48 lbs of CO2 per year. How many pounds of CARBON is that?\n(CO2 is 27% carbon by mass. Show your work!)')
    .setHelpText('Step 1: Convert 27% to 0.27. Step 2: Multiply 48 x 0.27')
    .setRequired(true);

  // Q2: Atom counting MCQ (4 pts)
  const q2 = form.addMultipleChoiceItem()
    .setTitle('In photosynthesis: 6CO2 + 6H2O -> C6H12O6 + 6O2\n\nAre there more, fewer, or the same atoms on each side?')
    .setHelpText('Left: 6C + 12H + 18O = 36 atoms total.')
    .setRequired(true);
  q2.setChoices([
    q2.createChoice('a) More atoms on the left side', false),
    q2.createChoice('b) More atoms on the right side', false),
    q2.createChoice('c) Same number on both sides', true),
    q2.createChoice('d) Cannot tell without more information', false)
  ]);
  q2.setPoints(4);
  q2.setFeedbackForCorrect(createFeedback_('Correct! 36 atoms on each side. Atoms are conserved, just rearranged.'));
  q2.setFeedbackForIncorrect(createFeedback_('Count again: Left=6C+12H+18O=36. Right=6C+12H+18O=36. Equal!'));

  // Q3: Carbon destination checkbox (4 pts)
  const q3 = form.addCheckboxItem()
    .setTitle('When you burn wood, where does the carbon GO? (Select ALL that apply)')
    .setRequired(true);
  q3.setChoices([
    q3.createChoice('a) Destroyed completely', false),
    q3.createChoice('b) Into the air as CO2', true),
    q3.createChoice('c) Into ash (some carbon remains)', true),
    q3.createChoice('d) Converted to pure energy', false)
  ]);
  q3.setPoints(4);
  q3.setFeedbackForCorrect(createFeedback_('Correct! Carbon goes into CO2 gas AND some remains in ash. Never destroyed!'));
  q3.setFeedbackForIncorrect(createFeedback_('Carbon cannot be destroyed or become pure energy. It goes to CO2 and ash.'));

  // Q4: Misconception check (4 pts manual)
  addManualHeader_(form, 'Question 4: Evaluate the Claim', 4,
    '4: Refutes + conservation + carbon origin | 3: Refutes + one concept | 2: Refutes weakly | 1: Wrong | 0: None');
  form.addParagraphTextItem()
    .setTitle('A student says: "When we burn fossil fuels, we\'re creating new carbon that goes into the atmosphere."\n\nIs this correct? Explain using conservation of mass.')
    .setRequired(true);

  // Q5: Carbon balance MCQ (4 pts)
  const q5 = form.addMultipleChoiceItem()
    .setTitle('If ALL carbon absorbed by trees in one year was released by burning those trees, would atmospheric carbon increase, decrease, or stay the same?')
    .setRequired(true);
  q5.setChoices([
    q5.createChoice('a) Increase - burning adds more than trees absorbed', false),
    q5.createChoice('b) Decrease - some carbon stays in ash', false),
    q5.createChoice('c) Stay the same - carbon in = carbon out', true),
    q5.createChoice('d) Cannot determine without exact measurements', false)
  ]);
  q5.setPoints(4);
  q5.setFeedbackForCorrect(createFeedback_('Correct! Conservation: carbon absorbed = carbon released. Perfect balance.'));
  q5.setFeedbackForIncorrect(createFeedback_('Conservation of mass: atoms in = atoms out. Same carbon, different location.'));

  logFormUrls_(form, 'G7 Station 2');
  return form;
}

// G7 Station 3 - 25 points
function createG7Station3() {
  const form = FormApp.create('G7.C3.W1: Station 3 - Design a Thermal Trap');
  setupQuizForm_(form,
    'Engineering Challenge: Design a Thermal Trap\n\n' +
    'Apply thermal energy concepts to design a structure that maximizes heat retention.\n\n' +
    'Time: ~20 min | Points: 25\n\n' +
    'MATERIALS: Black paper, Aluminum foil, Bubble wrap, Cardboard, Plastic wrap\n' +
    'CONSTRAINT: 20cm x 20cm x 20cm maximum size\n' +
    'REQUIREMENT: Justify EVERY choice with science!',
    'Station 3 complete! Your thermal trap uses the same physics as the greenhouse effect.'
  );

  // Q1: Material ranking (5 pts manual)
  addManualHeader_(form, 'Question 1: Material Ranking', 5,
    '5: Correct ranking + scientific reasoning each | 4: Ranking + most reasoned | 3: Reasonable + some reasoning | 2: No reasoning | 1: No logic | 0: None');
  form.addParagraphTextItem()
    .setTitle('Rank these 3 materials from BEST to WORST heat trapper: black paper, aluminum foil, bubble wrap.\n\nExplain your reasoning for EACH material.')
    .setHelpText('Use vocabulary: absorb, reflect, conduct, insulate')
    .setRequired(true);

  // Q2: Design description (5 pts manual)
  addManualHeader_(form, 'Question 2: Your Design', 5,
    '5: Clear placement + energy flow | 4: Clear + partial flow | 3: Missing specifics | 2: Vague | 1: Minimal | 0: None');
  form.addParagraphTextItem()
    .setTitle('Describe your thermal trap design.\n\nSpecify: What material goes on the BOTTOM? SIDES? TOP? How does energy flow through your design?')
    .setRequired(true);

  // Q3: Molecular connection (5 pts manual)
  addManualHeader_(form, 'Question 3: Connect to Molecules', 5,
    '5: Vibration + IR + greenhouse | 4: Molecular motion + heat | 3: Weak connection | 2: Vague energy | 1: None | 0: None');
  form.addParagraphTextItem()
    .setTitle('How does your design connect to what you learned about molecular vibration and IR absorption in Station 1?')
    .setHelpText('How is your thermal trap similar to the greenhouse effect?')
    .setRequired(true);

  // Q4: Trade-offs (5 pts manual)
  addManualHeader_(form, 'Question 4: Engineering Trade-offs', 5,
    '5: Multiple trade-offs + reasoning | 4: Trade-offs + some reasoning | 3: One trade-off | 2: Limitations only | 1: None | 0: None');
  form.addParagraphTextItem()
    .setTitle('What trade-offs did you make in your design?\n\nExample: "I chose X over Y because..., but this means I sacrificed..."')
    .setRequired(true);

  // Q5: Prediction (5 pts manual)
  addManualHeader_(form, 'Question 5: Temperature Prediction', 5,
    '5: Specific number + scientific justification | 4: Number + partial justification | 3: Reasonable + weak justification | 2: Number only | 1: Unrealistic | 0: None');
  form.addParagraphTextItem()
    .setTitle('Predict: How many degrees warmer will your thermal trap get compared to outside air after 10 minutes in sunlight?\n\nGive a specific number and explain WHY.')
    .setHelpText('Reference: A car can reach 40F hotter than outside.')
    .setRequired(true);

  logFormUrls_(form, 'G7 Station 3');
  return form;
}

// G7 Exit Ticket - 20 points
function createG7ExitTicket() {
  const form = FormApp.create('G7.C3.W1: Exit Ticket - Chemistry & Climate');
  setupQuizForm_(form,
    'Exit Ticket: Show What You Learned\n\n' +
    'Connect Cycle 2 chemistry to climate science.\n\n' +
    'Time: ~15 min | Points: 20\n\n' +
    '2 NEW questions (Cycle 3)\n2 SPIRAL questions (Cycle 2)\n1 INTEGRATION question (both)',
    'Week 1 Complete! You connected chemistry to climate science.'
  );

  // Q1: NEW - Greenhouse effect (4 pts manual)
  addManualHeader_(form, 'Question 1: NEW CONTENT', 4,
    '4: Uses absorb + vibrate + molecular explanation | 3: Key vocab + basic | 2: Partial | 1: Vague | 0: None');
  form.addParagraphTextItem()
    .setTitle('Explain the greenhouse effect in 2-3 sentences using the words "absorb" and "vibrate."')
    .setRequired(true);

  // Q2: SPIRAL - Bond energy MCQ (4 pts)
  form.addSectionHeaderItem().setTitle('Question 2: SPIRAL - Cycle 2');
  const q2 = form.addMultipleChoiceItem()
    .setTitle('In the reaction: CH4 + 2O2 -> CO2 + 2H2O + energy\n\nThis reaction RELEASES energy. This means:')
    .setRequired(true);
  q2.setChoices([
    q2.createChoice('a) More energy released forming bonds than absorbed breaking bonds (exothermic)', true),
    q2.createChoice('b) More energy absorbed breaking bonds than released forming bonds (endothermic)', false),
    q2.createChoice('c) Energy is created from nothing', false),
    q2.createChoice('d) Energy is destroyed', false)
  ]);
  q2.setPoints(4);
  q2.setFeedbackForCorrect(createFeedback_('Correct! Exothermic: forming bonds releases MORE than breaking absorbs.'));
  q2.setFeedbackForIncorrect(createFeedback_('Energy released = exothermic. Forming bonds releases; breaking absorbs.'));

  // Q3: NEW - Carbon path (4 pts manual)
  addManualHeader_(form, 'Question 3: NEW CONTENT', 4,
    '4: Complete path + molecular forms | 3: Complete + some details | 2: Partial path | 1: Vague | 0: None');
  form.addParagraphTextItem()
    .setTitle('Trace a carbon atom: gasoline -> engine -> atmosphere -> plant -> you\n\nDescribe what happens at EACH step.')
    .setHelpText('Include what form carbon takes at each location (CO2, glucose, etc.)')
    .setRequired(true);

  // Q4: SPIRAL - Conservation MCQ (4 pts)
  form.addSectionHeaderItem().setTitle('Question 4: SPIRAL - Cycle 2');
  const q4 = form.addMultipleChoiceItem()
    .setTitle('What happens to the total mass in a closed chemical reaction?')
    .setRequired(true);
  q4.setChoices([
    q4.createChoice('a) Increases - new atoms are created', false),
    q4.createChoice('b) Decreases - atoms are destroyed', false),
    q4.createChoice('c) Stays the same - atoms are conserved', true),
    q4.createChoice('d) Depends on the reaction type', false)
  ]);
  q4.setPoints(4);
  q4.setFeedbackForCorrect(createFeedback_('Correct! Conservation of mass: atoms rearrange, never created or destroyed.'));
  q4.setFeedbackForIncorrect(createFeedback_('Law of Conservation: atoms cannot be created or destroyed, only rearranged.'));

  // Q5: INTEGRATION (4 pts manual)
  addManualHeader_(form, 'Question 5: INTEGRATION', 4,
    '4: Refutes + conservation + alternatives | 3: Refutes + conservation | 2: Recognizes problem | 1: Accepts claim | 0: None');
  form.addParagraphTextItem()
    .setTitle('A company claims their product "destroys carbon pollution."\n\nUsing conservation of mass and the carbon cycle, evaluate this claim. Is it scientifically possible? What might the product ACTUALLY do?')
    .setRequired(true);

  logFormUrls_(form, 'G7 Exit Ticket');
  return form;
}

// ============================================================================
// GRADE 8 FORMS (5 forms, 100 points)
// ============================================================================

function createG8Forms() {
  Logger.log('\n--- GRADE 8 FORMS ---');
  const forms = [];

  forms.push(createG8Hook());
  forms.push(createG8Station1());
  forms.push(createG8Station2());
  forms.push(createG8Station3());
  forms.push(createG8ExitTicket());

  return forms;
}

// G8 Hook - 15 points
function createG8Hook() {
  const form = FormApp.create('G8.C3.W1: Hook - The Cheetah-Gazelle Mystery');
  setupQuizForm_(form,
    'The Cheetah-Gazelle Mystery\n\n' +
    'Cheetahs can run 70 mph. Gazelles top out at 60 mph.\n' +
    'Why haven\'t gazelles gone extinct?\n\n' +
    'Time: ~10 min | Points: 15\n\n' +
    'Use your Cycle 2 physics knowledge about forces!',
    'Hook complete! Continue to Station 1 to analyze forces in predator-prey interactions.'
  );

  // Q1: Newton's Third Law (3 pts manual)
  addManualHeader_(form, 'Question 1: Cycle 2 Review', 3,
    '3: Accurate N3L statement | 2: Partial understanding | 1: Attempt | 0: None');
  form.addParagraphTextItem()
    .setTitle('State Newton\'s Third Law in your own words.')
    .setHelpText('Think: What happens when two objects interact?')
    .setRequired(true);

  // Q2: Phenomenon (3 pts manual)
  addManualHeader_(form, 'Question 2: The Mystery', 3,
    '3: Multiple valid reasons | 2: One valid reason | 1: Vague | 0: None');
  form.addParagraphTextItem()
    .setTitle('Cheetahs can run 70 mph. Gazelles max at 60 mph. Why haven\'t gazelles gone extinct?')
    .setRequired(true);

  // Q3: Hypothesis (3 pts manual)
  addManualHeader_(form, 'Question 3: Gazelle Advantages', 3,
    '3: Multiple physics-based advantages | 2: One advantage | 1: Vague | 0: None');
  form.addParagraphTextItem()
    .setTitle('What advantages might gazelles have despite being slower?')
    .setHelpText('Think about mass, acceleration, endurance, agility...')
    .setRequired(true);

  // Q4: Forces MCQ (3 pts)
  const q4 = form.addMultipleChoiceItem()
    .setTitle('When a cheetah chases a gazelle and they collide, which statement about forces is TRUE?')
    .setRequired(true);
  q4.setChoices([
    q4.createChoice('a) The cheetah exerts more force because it is bigger', false),
    q4.createChoice('b) The gazelle exerts more force because it is running away', false),
    q4.createChoice('c) They exert equal forces on each other', true),
    q4.createChoice('d) Only the cheetah exerts a force', false)
  ]);
  q4.setPoints(3);
  q4.setFeedbackForCorrect(createFeedback_('Correct! Newton\'s Third Law: forces are always equal and opposite.'));
  q4.setFeedbackForIncorrect(createFeedback_('Review N3L: When two objects interact, forces are EQUAL and opposite.'));

  // Q5: Confidence (3 pts)
  const q5 = form.addScaleItem()
    .setTitle('How confident are you in explaining forces in predator-prey interactions?')
    .setBounds(1, 5)
    .setLabels('Guessing', 'Very confident')
    .setRequired(true);
  q5.setPoints(3);

  logFormUrls_(form, 'G8 Hook');
  return form;
}

// G8 Station 1 - 20 points
function createG8Station1() {
  const form = FormApp.create('G8.C3.W1: Station 1 - Predator-Prey Force Analysis');
  setupQuizForm_(form,
    'Analyze Forces in Predator-Prey Interactions\n\n' +
    'Apply Newton\'s Third Law and F=ma to understand survival advantages.\n\n' +
    'Time: ~18 min | Points: 20\n\n' +
    'SCENARIO: 50 kg cheetah collides with 25 kg gazelle\n' +
    'Measured: Gazelle accelerates at 20 m/s squared',
    'Station 1 complete! Lower mass = higher acceleration = survival advantage.'
  );

  // Q1: Action-reaction (4 pts manual)
  addManualHeader_(form, 'Question 1: Force Pairs', 4,
    '4: Correct pair + N3L explanation | 3: Correct pair | 2: Partial | 1: Wrong | 0: None');
  form.addParagraphTextItem()
    .setTitle('When a cheetah\'s paw pushes off the ground, identify the action-reaction force pair.')
    .setHelpText('Format: [Object A] exerts force on [Object B], [Object B] exerts force on [Object A]')
    .setRequired(true);

  // Q2: N3L MCQ (4 pts)
  const q2 = form.addMultipleChoiceItem()
    .setTitle('When a 50 kg cheetah contacts a 25 kg gazelle, compare the forces:')
    .setRequired(true);
  q2.setChoices([
    q2.createChoice('a) Cheetah exerts more force', false),
    q2.createChoice('b) Gazelle exerts more force', false),
    q2.createChoice('c) Forces are equal', true),
    q2.createChoice('d) Cannot determine', false)
  ]);
  q2.setPoints(4);
  q2.setFeedbackForCorrect(createFeedback_('Correct! Newton\'s Third Law: forces are ALWAYS equal and opposite.'));
  q2.setFeedbackForIncorrect(createFeedback_('N3L: Forces between interacting objects are always equal, regardless of mass.'));

  // Q3: Force calculation (3 pts manual)
  addManualHeader_(form, 'Question 3: Calculate Force on Gazelle', 3,
    '3: Correct (500N) + F=ma shown | 2: Correct answer | 1: Wrong calculation | 0: None\nANSWER: F = 25kg x 20m/s^2 = 500N');
  form.addTextItem()
    .setTitle('The gazelle (25 kg) accelerates at 20 m/s^2. What force does the cheetah exert on the gazelle?\n\n(Use F = ma. Include units in your answer.)')
    .setRequired(true);

  // Q4: Force on cheetah (3 pts manual)
  addManualHeader_(form, 'Question 4: Force on Cheetah', 3,
    '3: 500N + N3L reasoning | 2: 500N only | 1: Wrong answer | 0: None\nANSWER: 500N (Newton\'s Third Law - equal forces)');
  form.addTextItem()
    .setTitle('Using Newton\'s Third Law, what force does the gazelle exert ON the cheetah?')
    .setRequired(true);

  // Q5: Acceleration comparison (3 pts manual)
  addManualHeader_(form, 'Question 5: Calculate Accelerations', 3,
    '3: Both correct (cheetah 10, gazelle 20) + work | 2: One correct | 1: Attempt | 0: None');
  form.addParagraphTextItem()
    .setTitle('Both experience 500N force. Cheetah mass = 50kg, Gazelle mass = 25kg.\n\nCalculate each animal\'s acceleration. (a = F/m)')
    .setRequired(true);

  // Q6: Evolutionary insight (3 pts manual)
  addManualHeader_(form, 'Question 6: Survival Advantage', 3,
    '3: Lower mass -> higher accel -> escape advantage | 2: Mentions acceleration | 1: Vague | 0: None');
  form.addParagraphTextItem()
    .setTitle('Based on your calculations, why might being SMALLER give prey an advantage during predator contact?')
    .setHelpText('Connect F=ma to survival.')
    .setRequired(true);

  logFormUrls_(form, 'G8 Station 1');
  return form;
}

// G8 Station 2 - 20 points
function createG8Station2() {
  const form = FormApp.create('G8.C3.W1: Station 2 - Trait Variation Simulation');
  setupQuizForm_(form,
    'Natural Selection Simulation\n\n' +
    'Use bean simulation to model how trait variation affects survival.\n' +
    'Different colored beans = different speed variants in prey population.\n\n' +
    'Time: ~15 min | Points: 20\n\n' +
    'SIMULATION: Hunt beans by grabbing as many as you can in 10 seconds.\n' +
    'Record which colors survive each generation.',
    'Station 2 complete! Selection pressure changes population trait frequencies over time.'
  );

  // Q1: Data collection (4 pts manual)
  addManualHeader_(form, 'Question 1: Your Data', 4,
    '4: Complete data for 3+ rounds | 3: Data for 2 rounds | 2: Partial data | 1: Minimal | 0: None');
  form.addParagraphTextItem()
    .setTitle('Record your data: How many of each color bean survived each round?\n\nFormat: Round 1: Brown=__, Green=__, White=__ (etc.)')
    .setRequired(true);

  // Q2: Pattern analysis (4 pts manual)
  addManualHeader_(form, 'Question 2: Patterns', 4,
    '4: Both traits + explanation | 3: Both traits identified | 2: One trait | 1: Vague | 0: None');
  form.addParagraphTextItem()
    .setTitle('Which trait became MORE common over generations? Which became LESS common? Why?')
    .setRequired(true);

  // Q3: Selection pressure (4 pts manual)
  addManualHeader_(form, 'Question 3: Selection Pressure', 4,
    '4: Identifies pressure + mechanism | 3: Identifies pressure | 2: Partial | 1: Wrong | 0: None');
  form.addParagraphTextItem()
    .setTitle('What was the "selection pressure" in this simulation?')
    .setHelpText('What factor determined which beans survived?')
    .setRequired(true);

  // Q4: Force analogy (4 pts manual)
  addManualHeader_(form, 'Question 4: Physics Connection', 4,
    '4: Selection pressure changes trait frequency like force changes motion | 3: Reasonable analogy | 2: Weak connection | 1: No connection | 0: None');
  form.addParagraphTextItem()
    .setTitle('In physics, a force changes motion. In evolution, what does "selection pressure" change?')
    .setRequired(true);

  // Q5: Prediction (4 pts manual)
  addManualHeader_(form, 'Question 5: New Environment', 4,
    '4: Specific prediction + reasoning | 3: Prediction + partial reasoning | 2: Prediction only | 1: Vague | 0: None');
  form.addParagraphTextItem()
    .setTitle('If the environment changed (different colored background), predict how trait frequency would shift and explain why.')
    .setRequired(true);

  logFormUrls_(form, 'G8 Station 2');
  return form;
}

// G8 Station 3 - 25 points
function createG8Station3() {
  const form = FormApp.create('G8.C3.W1: Station 3 - Design a Survivor');
  setupQuizForm_(form,
    'Engineering Challenge: Design a Survivor\n\n' +
    'Design an organism optimized to survive a specific predation pressure.\n' +
    'Use physics principles (F=ma, momentum) to justify your choices.\n\n' +
    'Time: ~20 min | Points: 25\n\n' +
    'CONSTRAINTS: Mass budget, Energy budget, Must escape predators\n' +
    'REQUIREMENT: Show calculations for acceleration!',
    'Station 3 complete! Physics principles explain biological adaptations.'
  );

  // Q1: Habitat analysis (5 pts manual)
  addManualHeader_(form, 'Question 1: Environment Analysis', 5,
    '5: Multiple dangers + predator details | 4: Main dangers identified | 3: Basic analysis | 2: Vague | 1: Minimal | 0: None');
  form.addParagraphTextItem()
    .setTitle('Your organism lives in an open grassland with wolves as predators.\n\nList the main dangers and survival challenges.')
    .setRequired(true);

  // Q2: Mass design (5 pts manual)
  addManualHeader_(form, 'Question 2: Mass Selection', 5,
    '5: Specific mass + F=ma justification + trade-offs | 4: Mass + physics | 3: Mass + weak reasoning | 2: Mass only | 1: No reasoning | 0: None');
  form.addParagraphTextItem()
    .setTitle('Design your organism\'s mass. State a specific number (in kg) and justify using F=ma.\n\nExample: "My organism is __ kg because..."')
    .setRequired(true);

  // Q3: Escape calculation (5 pts manual)
  addManualHeader_(form, 'Question 3: Force Calculation', 5,
    '5: Correct calculation + clear work + units | 4: Correct answer + work | 3: Setup correct | 2: Attempt | 1: Wrong approach | 0: None');
  form.addParagraphTextItem()
    .setTitle('Your organism needs to accelerate at 15 m/s^2 to escape. Using your chosen mass, what force must its legs generate?\n\nShow your work: F = m x a')
    .setRequired(true);

  // Q4: Trade-offs (5 pts manual)
  addManualHeader_(form, 'Question 4: Design Trade-offs', 5,
    '5: Multiple trade-offs + physics reasoning | 4: Trade-offs + some physics | 3: One clear trade-off | 2: Vague trade-off | 1: None | 0: None');
  form.addParagraphTextItem()
    .setTitle('What did you sacrifice to optimize for survival?\n\n(Example: Larger body = more strength but less acceleration)')
    .setRequired(true);

  // Q5: Integration (5 pts manual)
  addManualHeader_(form, 'Question 5: Physics & Biology Connection', 5,
    '5: Clear physics-biology connection + multiple concepts | 4: Good connection | 3: Partial connection | 2: Weak | 1: None | 0: None');
  form.addParagraphTextItem()
    .setTitle('Write a paragraph explaining how physics principles (force, acceleration, mass) influenced your biological design choices.')
    .setRequired(true);

  logFormUrls_(form, 'G8 Station 3');
  return form;
}

// G8 Exit Ticket - 20 points
function createG8ExitTicket() {
  const form = FormApp.create('G8.C3.W1: Exit Ticket - Forces & Evolution');
  setupQuizForm_(form,
    'Exit Ticket: Connect Physics to Evolution\n\n' +
    'Show you can apply Cycle 2 physics to natural selection.\n\n' +
    'Time: ~15 min | Points: 20\n\n' +
    '2 NEW questions (natural selection)\n2 SPIRAL questions (forces)\n1 INTEGRATION question',
    'Week 1 Complete! You connected physics to evolutionary biology.'
  );

  // Q1: NEW - Natural selection (4 pts manual)
  addManualHeader_(form, 'Question 1: NEW CONTENT', 4,
    '4: Variation -> differential survival -> frequency change | 3: Key concepts present | 2: Partial | 1: Vague | 0: None');
  form.addParagraphTextItem()
    .setTitle('Explain how variation in a population leads to natural selection in 2-3 sentences.')
    .setRequired(true);

  // Q2: SPIRAL - N3L MCQ (4 pts)
  form.addSectionHeaderItem().setTitle('Question 2: SPIRAL - Cycle 2');
  const q2 = form.addMultipleChoiceItem()
    .setTitle('A 100 kg predator tackles a 50 kg prey. Compare the forces:')
    .setRequired(true);
  q2.setChoices([
    q2.createChoice('a) Predator exerts more force (bigger animal)', false),
    q2.createChoice('b) Prey exerts more force (trying to escape)', false),
    q2.createChoice('c) Forces are equal but accelerations differ', true),
    q2.createChoice('d) Cannot compare without velocity', false)
  ]);
  q2.setPoints(4);
  q2.setFeedbackForCorrect(createFeedback_('Correct! N3L: forces equal, but smaller mass = greater acceleration.'));
  q2.setFeedbackForIncorrect(createFeedback_('N3L: Forces are always equal. Mass determines acceleration (a=F/m).'));

  // Q3: NEW - Population calculation (4 pts manual)
  addManualHeader_(form, 'Question 3: NEW - Population Math', 4,
    '4: Correct (88%) + clear work | 3: Correct answer | 2: Setup right | 1: Attempt | 0: None\nANSWER: Fast survivors=720, Slow=100, Total=820, Fast%=720/820=87.8%');
  form.addParagraphTextItem()
    .setTitle('Population: 800 fast (80%), 200 slow (20%).\nPredators kill 50% of slow prey and 10% of fast prey each generation.\n\nAfter one generation, what percentage of SURVIVORS are fast? Show work.')
    .setRequired(true);

  // Q4: SPIRAL - F=ma calculation (4 pts manual)
  addManualHeader_(form, 'Question 4: SPIRAL - Cycle 2', 4,
    '4: Correct (5 m/s^2) + work + units | 3: Correct answer | 2: Setup right | 1: Attempt | 0: None');
  form.addTextItem()
    .setTitle('A 20N force is applied to a 4kg object. What is its acceleration? (Show work, include units)')
    .setRequired(true);

  // Q5: INTEGRATION (4 pts manual)
  addManualHeader_(form, 'Question 5: INTEGRATION', 4,
    '4: Natural selection + physics + prediction over time | 3: Selection + physics | 2: One concept | 1: Vague | 0: None');
  form.addParagraphTextItem()
    .setTitle('Brown and green insects live on trees. A visual predator arrives.\n\nPredict what happens over 100 generations. Explain using BOTH natural selection AND physics concepts.')
    .setHelpText('Consider: camouflage, escape acceleration, trait frequency change')
    .setRequired(true);

  logFormUrls_(form, 'G8 Exit Ticket');
  return form;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Configure form as a quiz with standard settings
 */
function setupQuizForm_(form, description, confirmationMessage) {
  form.setDescription(description);
  form.setIsQuiz(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(false);
  form.setPublishingSummary(false);
  form.setConfirmationMessage(confirmationMessage);
}

/**
 * Create feedback object (no emojis - Apps Script limitation)
 */
function createFeedback_(text) {
  return FormApp.createFeedback().setText(text).build();
}

/**
 * Add section header for manual grading rubric
 */
function addManualHeader_(form, title, points, rubric) {
  form.addSectionHeaderItem()
    .setTitle(title)
    .setHelpText('MANUAL GRADING (' + points + ' pts)\n' + rubric);
}

/**
 * Log form URLs for easy access
 */
function logFormUrls_(form, name) {
  const editUrl = form.getEditUrl();
  const pubUrl = form.getPublishedUrl();
  const embedUrl = pubUrl.replace('/viewform', '/viewform?embedded=true');

  Logger.log(name + ':');
  Logger.log('  Edit: ' + editUrl);
  Logger.log('  Embed: ' + embedUrl);
}
