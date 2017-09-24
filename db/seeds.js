const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
mongoose.Promise = require('bluebird');

const Player = require('../models/player');
const Game = require('../models/game');
const Club = require('../models/club');

mongoose.connect(dbURI, { useMongoClient: true });

Player.collection.drop();
Game.collection.drop();
Club.collection.drop();

Player.create([{
  name: 'Alex',
  age: 23,
  club: 'Arsenal',
  avGoals: '3',
  avAssists: '4'
}, {
  name: 'John',
  age: 19,
  club: 'Arsenal',
  avGoals: '7',
  avAssists: '2'
},{
  name: 'Joe',
  age: 26,
  club: 'Man U',
  avGoals: '1',
  avAssists: '7'
},{
  name: 'Ronaldo',
  age: 22,
  club: 'Man U',
  avGoals: '3',
  avAssists: '16'
}])
.then((players) => {
  console.log(`${players.length} players created!`);
  console.log(players);
  return Club.create([{
    name: 'Arsenal',
    game_players: [{ playedBy: players[1],
      data: {
        game_goals: 2,
        game_assists: 1
      }
    }, { playedBy: players[3],
      data: {
        game_goals: 0,
        game_assists: 10
      }
    }]
  },
  {
    name: 'Man U',
    game_players: [{ playedBy: players[1],
      data: {
        game_goals: 2,
        game_assists: 1
      }
    }, { playedBy: players[3],
      data: {
        game_goals: 0,
        game_assists: 10
      }
    }]
  },
  {
    name: 'Real madrid',
    game_players: [{ playedBy: players[2],
      data: {
        game_goals: 42,
        game_assists: 62
      }
    }, { playedBy: players[1],
      data: {
        game_goals: 2,
        game_assists: 7
      }
    }]
  },
  {
    name: 'chelsea',
    game_players: [{ playedBy: players[3],
      data: {
        game_goals: 11,
        game_assists: 11
      }
    }, { playedBy: players[3],
      data: {
        game_goals: 22,
        game_assists: 77
      }
    }]
  }]);
})
.then((clubs) => {
  console.log(`${clubs.length} clubs created`);
  console.log(clubs);
  return Game.create([{
    name: 'Chelsea vs Arsenal',
    teams: {
      home: clubs[0],
      away: clubs[3]
    }
  }]); //Game.create
})
 .then((games) => {
   console.log(`${games.length} games created!`);
 })
 .catch((err) => {
   console.log(err);
 })
 .finally(() => {
   mongoose.connection.close();
 });



























// const mongoose = require('mongoose');
// const { dbURI } = require('../config/environment');
// mongoose.Promise = require('bluebird');
//
// const Player = require('../models/player');
//
// mongoose.connect(dbURI, { useMongoClient: true });
//
// Player.collection.drop();
//
// Player.create([{
//   name: 'Alex',
//   age: 23,
//   club: 'Arsenal',
//   avGoals: '3',
//   avAssists: '4'
// }, {
//   name: 'John',
//   age: 19,
//   club: 'Arsenal',
//   avGoals: '7',
//   avAssists: '2'
// },{
//   name: 'Joe',
//   age: 26,
//   club: 'Man U',
//   avGoals: '1',
//   avAssists: '7'
// },{
//   name: 'Ronaldo',
//   age: 22,
//   club: 'Man U',
//   avGoals: '3',
//   avAssists: '16'
// }, {
//   name: 'Sam',
//   age: 20,
//   club: 'Sams Team',
//   avGoals: Math.pow(1, 100),
//   avAssists: 0
// }], (err, players) => {
//   if(err)console.log(err);
//   if(players)console.log(`${players.length} players created!`);
//
//   mongoose.connection.close();
// });
