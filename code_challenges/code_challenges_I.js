//canIVote()
// Write your function here:
const canIVote = (age) => {
    if (age >= 18){
      return true;
    } else {
      return false;
    }
  };
  
  
  //Uncomment the line below when you're ready to try out your function
  console.log(canIVote(19)) // Should print true
  
  // We encourage you to add more function calls of your own to test your code!

  //agreeOrDisagree()
  // Write your function here:
const agreeOrDisagree = (string1, string2) => {
    if (string1 === string2){
      return 'You agree!';
    } else{
      return 'You disagree!';
    }
  };

  // Uncomment the line below when you're ready to try out your function
  console.log(agreeOrDisagree("yep", "yep")) 
  // Should print 'You agree!'
  
  // We encourage you to add more function call of your own to test your code!

  //lifePhase()
  // Write your function here:
const lifePhase = (age) => {
    if (age < 0){
      return 'This is not a valid age';
    } else if (age >= 0 && age <= 3){
      return 'baby';
    } else if (age >= 4 && age <= 12){
      return 'child';
    } else if (age >= 13 && age <= 19){
      return 'teen';
    } else if (age >= 20 && age <= 64){
      return 'adult';
    } else if (age >= 65 && age <= 140){
      return 'senior citizen';
    } else if (age >= 141){
      return 'This is not a valid age';
    }
  };
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(lifePhase(5)) //should print 'child'
  
  // We encourage you to add more function calls of your own to test your code!

  //finalGrade()
  // Write your function here:
const finalGrade = (score1, score2, score3) =>{
    //If score is below 0, above 100
    if ((score1 < 0 || score1 > 100) ||
       (score2 < 0 || score2 > 100) ||
      (score3 < 0 || score3 > 100)){
      return 'You have entered an invalid grade.';
    }
    
    //Find average
    let average = (score1 + score2 + score3) / 3;
     if (average >= 0 && average <= 59){
      return 'F';
    } else if(average >= 60 && average <= 69){
      return 'D';
    } else if (average >= 70 && average <= 79){
      return 'C';
    } else if (average >= 80 && average <= 89){
      return 'B';
    } else if (average >= 90 && average <= 100){
      return 'A';
    }
  };
  
  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(99, 92, 95)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!

  //reportingForDuty()
  // Write your function here:
const reportingForDuty = (rank, lastName) => {
    return `${rank} ${lastName} reporting for duty!`;
  };
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'
  
  // We encourage you to add more function calls of your own to test your code!

  //Fix The Broken Code
  const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
      let die1 = Math.floor(Math.random() * 6 + 1)
      let die2 = Math.floor(Math.random() * 6 + 1)
      return die1 + die2
  }
  console.log(rollTheDice());

  //calculateWeight()
  // Write your function here:
const calculateWeight = (earthWeight, planet) => {
    if (planet === 'Mercury'){
      return earthWeight * 0.378;
    } else if (planet === 'Venus'){
      return earthWeight * 0.907;
    } else if (planet === 'Mars'){
      return earthWeight * 0.377;
    } else if (planet === 'Jupiter'){
      return earthWeight * 2.36;
    } else if (planet === 'Saturn'){
      return earthWeight * 0.916;
    } else {
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
  };
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(calculateWeight(100, 'Jupiter')) // Should print 236
  
  // We encourage you to add more function calls of your own to test your code!

  //truthyOrFalsy()
  // Write your function here:
const truthyOrFalsy = value => value ? true : false;

// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(0)) // Should print false


// We encourage you to add more function calls of your own to test your code!

//numImaginaryFriends()
// Write your function here:
const numImaginaryFriends = friends => {
    return Math.round(friends * .33);
  };
  
  // Uncomment the line below when you're ready to try out your function
   console.log(numImaginaryFriends(18)) // Should print 6
  
  // We encourage you to add more function calls of your own to test your code!

  //sillySentence()
  // Write your function here:
const sillySentence = (adjective, verb, noun) => {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`
  };
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(sillySentence('excited', 'love', 'functions')) 
  
  // We encourage you to add more function calls of your own to test your code!

  //howOld()
  // Write your function here:
const howOld = (age, year) => {
    //Find today's date 
   const todaysDate = new Date();
    const thisYear = todaysDate.getFullYear();
    
    const yearDifference = year - thisYear
      const newAge = age + yearDifference
      if (newAge < 0) {
          return `The year ${year} was ${-newAge} years before you were born`
      } else if (newAge > age) {
          return `You will be ${newAge} in the year ${year}`
      } else {
          return `You were ${newAge} in the year ${year}`
      }
    
  };
  
  // Once your function is written, write function calls to test your code!
  
  console.log(howOld(20, 1993));

  //Fix the broken code (round 2)!
  const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA >= 35 && percentSharedDNA <= 99 ) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
        return 'You are likely 3rd cousins'
    } else {
    return 'You are likely not related.'

    }
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'

//tipCalculator()
// Write your function here:
const tipCalculator = (quality, total) => {
    if (quality === 'bad'){
      return total * 0.05;
    } else if (quality === 'ok'){
      return total * 0.15;
    } else if (quality === 'good'){
      return total * 0.20;
    } else if (quality === 'excellent'){
      return total * 0.30;
    } else {
      return total * 0.18;
    }
  };
  
  // Uncomment the line below when you're ready to try out your function
   console.log(tipCalculator('good', 100)) //should return 20
  
  // We encourage you to add more function calls of your own to test your code!

  //toEmoticon()
  // Write your function here:
const toEmoticon = (emotion) => {
    switch (emotion){
           case 'shrug' : return '|_{"}_|';
           break;
           case 'smiley face' : return ':)';
           break;
           case 'frowny face' : return ':(';
           break;
      case 'winky face' : return ';)';
        break;
           case 'heart' : return '<3';
           break;
           default : 
           return '|_(* ~ *)_|'
           break;
    }
  };
  
  
  // Uncomment the line below when you're ready to try out your function
   console.log(toEmoticon("winky face")) 
  // Should print  '|_(* ~ *)_|'
  
  // We encourage you to add more function calls of your own to test your code!