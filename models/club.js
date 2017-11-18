const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubSchema = new mongoose.Schema({
  name: String,
  club_players: [{
    playedBy: { type: Schema.Types.ObjectId, ref: 'Player', required: true ,
      data: {
        game_goals: Number,
        game_assists: Number
      }
    }
  }]
});

// clubSchema.methods.playedBy = function clubPlayedBy(player) {
//   if(typeof this.club_players.id === 'string') return this.club_player.id === player.id;
//   return player.id === this.club_players.toString();
// };


module.exports = mongoose.model('Club', clubSchema);

// name: String,
// home:{type: mongoose.Schema.ObjectId, ref: 'Club', required: true },
// away: {type: mongoose.Schema.ObjectId, ref: 'Club', required: true }
// });
