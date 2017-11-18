const mongoose = require('mongoose')
, Schema = mongoose.Schema;

const gameSchema = new mongoose.Schema({
  name: String,
  teams: {
    home: {type: Schema.Types.ObjectId, ref: 'Club', required: true },
    away: {type: Schema.Types.ObjectId, ref: 'Club', required: true }
  }
});

 
module.exports = mongoose.model('Game', gameSchema, 'game');









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
