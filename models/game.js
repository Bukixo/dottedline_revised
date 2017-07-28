const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({

  name: String,
  home: {
    name: String,
    game_players: [
      {
        playedBy: {
          type: mongoose.Schema.ObjectId,
          ref: 'Player',
          required: true
        },
        data: {
          game_goals: Number,
          game_assists: Number
        }
      }
    ]
  },
  away: {
    name: String,
    game_players: [
      { playedBy: {type: mongoose.Schema.ObjectId, ref: 'Player', required: true },// turned type, ref & required into an object as I am unable to log 'player[0]' on its own when creating a seeds file. Has to be name: player[0
        data: {
          game_goals: Number,
          game_assists: Number
        }
      }
    ]
  }

});

gameSchema.methods.playedBy = function gamePlayedBy(player) {
  if(typeof this.game_players.id === 'string') return this.game_player.id === player.id;
  return player.id === this.game_players.toString();
};

// gameSchema.methods.gameHome = function gameHome() {
//   return `${this.home[0]}`;
// };

// function getplayer(){
//   const gameplayer = games.home.game_players[0].playedBy;
//
// }
module.exports = mongoose.model('Game', gameSchema);
