const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
mongoose.Promise = require('bluebird');

const Player = require('../models/player');
const Game = require('../models/game');

mongoose.connect(dbURI, { useMongoClient: true });

Player.collection.drop();
Game.collection.drop();

Player.create([{
  name: 'Alex',
  age: 23,
  team: 'Arsenal',
  avGoals: '3',
  avAssists: '4'
}, {
  name: 'John',
  age: 19,
  team: 'Arsenal',
  avGoals: '7',
  avAssists: '2'
},{
  name: 'Joe',
  age: 26,
  team: 'Man U',
  avGoals: '1',
  avAssists: '7'
},{
  name: 'Ronaldo',
  age: 22,
  team: 'Man U',
  avGoals: '3',
  avAssists: '16'
}])
.then((players) => {
  console.log(`${players.length} players created!`);
  console.log(players);

  return Game.create([{
    game: {
      name: 'arsnl vs manu',
      home: {
        name: 'Arsenal',
        game_players: [{ playedBy: players[0],
          data: [{
            game_goals: 4,
            game_assists: 6
          }]
        }, { playedBy: players[1],
          data: [{
            game_goals: 2,
            game_assists: 7
          }]
        }]
      },
      away: {
        name: 'Man U',
        game_players: [{ playedBy: players[2],
          data: [{
            game_goals: 2,
            game_assists: 1
          }]
        }, { playedBy: players[3],
          data: [{
            game_goals: 0,
            game_assists: 10
          }]
        }]
      }
    }
  }]);
})
.then((games) => {
  console.log(`${games.length} games created`);
  console.log(games);
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
//   team: 'Arsenal',
//   avGoals: '3',
//   avAssists: '4'
// }, {
//   name: 'John',
//   age: 19,
//   team: 'Arsenal',
//   avGoals: '7',
//   avAssists: '2'
// },{
//   name: 'Joe',
//   age: 26,
//   team: 'Man U',
//   avGoals: '1',
//   avAssists: '7'
// },{
//   name: 'Ronaldo',
//   age: 22,
//   team: 'Man U',
//   avGoals: '3',
//   avAssists: '16'
// }, {
//   name: 'Sam',
//   age: 20,
//   team: 'Sams Team',
//   avGoals: Math.pow(1, 100),
//   avAssists: 0
// }], (err, players) => {
//   if(err)console.log(err);
//   if(players)console.log(`${players.length} players created!`);
//
//   mongoose.connection.close();
// });
