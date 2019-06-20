const team = {
  _players : [
    {
    firstName : 'Matt',
    lastName : 'Carpenter',
    age: 33,
    },
    {
      firstName : 'Yadier',
      lastName: 'Molina',
      age: 36,
    },
    {
      firstName: 'Paul',
      lastName: 'Goldschmidt',
      age: 31
    }
    
  ],
  _games : [
    {
      opponent: 'Cubs',
      teamPoints : 6,
      opponentPoinst: 2
    },
    {
      opponent: 'Braves',
      teamPoints: 1,
      opponentPoinst: 0
    },
    {
      opponent: 'Phillies',
      teamPoints: 4,
      opponentPoinst: 3
    }
  ],
   get players () {
   return this._players;
  },
  get games () {
    return this._games;
  },
  
  addPlayer(firstName, lastName, age) {
    let player =  {
      firstName,
      lastName,
      age
    };
    this.players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints){
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('Dodgers', 6, 7);
team.addGame('Giants', 10, 3);
team.addGame('Padres', 5, 4);
console.log(team.games);