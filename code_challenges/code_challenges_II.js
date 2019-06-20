//reverseArray()
// Write your code here:
const reverseArray = word =>{
    let reversed = [];
    for (let i = word.length - 1; i >= 0; i--){
      reversed.push(word[i]);
    }
    return reversed;
  };
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence));
  // Should print ['This', 'will', 'all', 'make', 'sense.'];

  //greetAliens()
  // Write your code here:
const greetAliens = alien =>{
    for (let i = 0; i < alien.length; i++){
     console.log(`Oh powerful ${alien[i]}, we humans offer our unconditional surrender!`)
    }
  };
  
  // When you're ready to test your code, uncomment the below and run:
  
  const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
  
  greetAliens(aliens);

  //convertToBaby()
  // Write your code here:
const convertToBaby = animal =>{
    let babyAnimal = [];
    for  (let i = 0; i < animal.length; i ++){
      babyAnimal.push('baby' + " " + animal[i]);
    }
    return babyAnimal;
  }
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals));
  
  //Fix The Broken Code!  
  const numbers = [5, 3, 9, 30];

  const smallestPowerOfTwo = arr => {
        let results = [];
        // The 'outer' for loop - loops through each element in the array
        for (let i = 0; i < arr.length; i++) {
              number = arr[i];
  
              // The 'inner' while loop - searches for smallest power of 2 greater than the given number
              j = 1;
              while (j < number) {
                    j = j * 2;
              }
              results.push(j);
        }
        return results
  }
  
  console.log(smallestPowerOfTwo(numbers)) 
  // Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

  //declineEverything() and acceptEverything()
  const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = nope =>{
  for (let i = 0; i < nope.length; i++){
    return nope.forEach(politelyDecline);
  }
};

declineEverything(veggies);

const acceptEverything = yes =>{
  for (let i = 0; i < yes.length; i++){
    console.log(`Ok, I guess I will eat some ${yes[i]}.`)
  }
};

acceptEverything(veggies);

//squareNums()
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = number =>{
  return number.map(toSquare)
};

console.log(squareNums(numbers));

//shoutGreetings()
// Write your code here:
const shoutGreetings = greetings => greetings.map(
    word =>{
      return word.toUpperCase() + '!'
    });
    
    // Feel free to uncomment out the code below to test your function!
    
    const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
    
    console.log(shoutGreetings(greetings))
    // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
    
//sortYears()
// Write your code here:
const sortYears = year =>{
    let sortedYears = (a,b) =>{
       return b-a;
      //This also works: return a < b;
    }
    return year.sort(sortedYears);
   };
   
   
   // Feel free to uncomment the below code to test your function:
   
   const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
   
   console.log(sortYears(years))
   // Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
   
//justCoolStuff()
// Write your code here:
const justCoolStuff = (arr1, arr2) =>
   arr1.filter(word =>
     arr2.includes(word))
 
  
// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

//isTheDinnerVegan()
// Write your code here:
const isTheDinnerVegan = arr =>
  arr.every(food => food.source === 'plant');


// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false

//sortSpeciesByTeeth()
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

// Write your code here:
function sortSpeciesByTeeth(arr){
  let compareTeeth = (obj1, obj2) =>
    obj1.numTeeth > obj2.numTeeth;

  return arr.sort(compareTeeth);
};


// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))

// Should print [ { speciesName: 'human', numTeeth: 32 },
  /*{ speciesName: 'dog', numTeeth: 42 },
  { speciesName: 'shark', numTeeth: 50 },
  { speciesName: 'alligator', numTeeth: 80 } ]
*/

//findMyKeys()
// Write your code here:
const findMyKeys = items =>
items.findIndex(stuff => stuff === 'keys')


// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4

//dogFactory()
// Write your code here:
const dogFactory = (name, breed, weight) =>{
    return {
      _name : name,
      _breed : breed,
      _weight : weight,
      //Name
      get name(){
        return this._name;
      },
      set name(newName){
        this._name = newName;
      },
      //Breed
      get breed(){
        return this._breed;
      },
      set breed(newBreed){
        this._breed = newBreed;
      },
      //Weight
      get weight(){
        return this._weight;
      },
      set weight(newWeight){
        this._weight = newWeight;
      },
      bark(){
        return 'ruff! ruff!'; 
      },
      eatTooManyTreats(){
        this._weight++
      }
    }
  }