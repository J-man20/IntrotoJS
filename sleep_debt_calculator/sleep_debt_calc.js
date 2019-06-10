const getSleepHours = day => {
 if (day === 'monday'){
  return 8;
} else if (day === 'tuesday'){
  return 8;
} else if (day === 'wednesday'){
  return 6;
} else if (day === 'thursday'){
  return 7;
} else if (day === 'friday'){
  return 6;
}else if (day === 'saturday'){
  return 8;
} else if (day === 'sunday'){
  return 7;
} 
};

const getActualSleepHours = () => 
getSleepHours('monday') + 
getSleepHours('tuesday') +
getSleepHours('wednesday') +
getSleepHours('thursday') +
getSleepHours('friday') +
getSleepHours('saturday') +
getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
 const actualSleepHours = getActualSleepHours();
  
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours){
    console.log('You\'ve got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours){
    let overHours = actualSleepHours - idealSleepHours;
    console.log(`You've got ${overHours} more sleep than needed.`);
  } else if (actualSleepHours < idealSleepHours){
    let underHours = idealSleepHours - actualSleepHours;
    console.log(`You should take a ${underHours} long nap to make up for the loss sleep.`);
  }
};

calculateSleepDebt();