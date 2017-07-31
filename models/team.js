// const mongoose = require('mongoose');
//
// const teamSchema = new mongoose.Schema({
//   name: String,
//   game_players: [{
//     playedBy: {type: mongoose.Schema.ObjectId, ref: 'Player', required: true },
//     data: {
//       game_goals: Number,
//       game_assists: Number
//     }
//   }]
//
// });
//
// module.exports = mongoose.model('Team', teamSchema);
//
// name: String,
// home: {type: mongoose.Schema.ObjectId, ref: 'Team', required: true },
// away: {type: mongoose.Schema.ObjectId, ref: 'Team', required: true }
// });
