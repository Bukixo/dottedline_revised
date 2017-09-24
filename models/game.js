const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  name: String,
  teams: {
    home: {type: mongoose.Schema.ObjectId, ref: 'Club', required: true },
    away: {type: mongoose.Schema.ObjectId, ref: 'Club', required: true }
  }
});

gameSchema.methods.clubs = function gameClub(t) {
  if(typeof this.game_ts.id === 'string') return this.game_t.id === t.id;
  return t.id === this.game_ts.toString();
};


module.exports = mongoose.model('Game', gameSchema);





/////////////////////////////////////////////////////////////////////////////

// name: String,
// home: {
//   name: String,
//   game_players: [{
//     playedBy: {type: mongoose.Schema.ObjectId, ref: 'Player', required: true },
//     data: {
//       game_goals: Number,
//       game_assists: Number
//     }
//   }]
// },
// away: {
//   name: String,
//   game_players: [{
//     playedBy: {type: mongoose.Schema.ObjectId, ref: 'Player', required: true },
//     data: {
//       game_goals: Number,
//       game_assists: Number
//     }
//   }]
// }
